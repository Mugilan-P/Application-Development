import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import L from "leaflet";
import "leaflet-routing-machine";

const Card = ({ location, onSelectLocation }) => {
  const { Location, description, position, img, name } = location;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/detail/${Location}`, { state: { location } });
  };

  return (
    <div
      className="card mb-3"
      onClick={() => onSelectLocation(position)}
      style={{ cursor: "pointer" }}
    >
      <img src={img} className="card-img-top" alt={Location} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h5 className="card-title">{Location}</h5>
        <p className="card-text">{description}</p>
        <button onClick={handleViewDetails} className="btn btn-primary">
          View Details
        </button>
      </div>
    </div>
  );
};

const Sidebar = ({ locations, onSelectLocation }) => {
  return (
    <div className="col-3 bg-light p-4 overflow-auto">
      {locations.map((location, index) => (
        <Card
          key={index}
          location={location}
          onSelectLocation={onSelectLocation}
        />
      ))}
    </div>
  );
};

const RoutingMachine = ({ position, selectedPosition }) => {
  const map = useMap();

  useEffect(() => {
    if (!position || !selectedPosition) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(position), L.latLng(selectedPosition)],
      lineOptions: {
        styles: [{ color: "blue", weight: 4 }],
      },
      createMarker: () => null, // Disable default markers
      addWaypoints: false,
      draggableWaypoints: false,
      routeWhileDragging: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      router: new L.Routing.osrmv1({
        language: "en",
        profile: "car",
      }),
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [position, selectedPosition, map]);

  return null;
};

// Haversine formula to calculate the distance between two coordinates
const haversineDistance = ([lat1, lon1], [lat2, lon2]) => {
  const toRad = (angle) => (angle * Math.PI) / 180;
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
};

const Map = ({ position, selectedPosition }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedPosition) {
      map.setView(selectedPosition, 13);
    }
  }, [selectedPosition, map]);

  const handleRecenter = () => {
    if (position && selectedPosition) {
      const bounds = L.latLngBounds([position, selectedPosition]);
      map.fitBounds(bounds);
    }
  };

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>You are here.</Popup>
      </Marker>
      {selectedPosition && (
        <Marker position={selectedPosition}>
          <Popup>Selected location.</Popup>
        </Marker>
      )}
      <button
        onClick={handleRecenter}
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          zIndex: 1000,
          color: "black",
          backgroundColor: "white",
          fontWeight: "bold",
        }}
        className="btn btn-secondary"
      >
        Recenter
      </button>
      <RoutingMachine position={position} selectedPosition={selectedPosition} />
    </>
  );
};

const MapPage = () => {
  const [position, setPosition] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [distance, setDistance] = useState(null);

  const locations = [
    {
      name: "Taj Mahal",
      img: "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra",
      position: [27.1751, 78.0421],
      Location: "India,Agra",
    },
    {
      name: "Mehrangarh Fort",
      img: "https://images.pexels.com/photos/16910734/pexels-photo-16910734/free-photo-of-mehrangarh-fort-in-jodhpur-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Famous indian tourist landmark and attraction of India - Mehrangarh Fort, Jodhpur, Rajasthan, India on sunset",
      position: [26.2971, 73.0182],
      Location: "India,Jaipur",
    },
    {
      name: "Munnar",
      img: "https://images.pexels.com/photos/13691355/pexels-photo-13691355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Green hills of tea plantations in Munnar",
      position: [10.0889, 77.0595],
      Location: "India,Munnar",
    },
    {
      name: "Palolem beach",
      img: "https://t3.ftcdn.net/jpg/00/77/00/26/240_F_77002615_Gl1Hk6qZpi2xCAlX8EUTRLBqC4ei6QfC.jpg",
      description: "India, Goa, Palolem beach",
      position: [15.0105, 74.0231],
      Location: "India,Goa",
    },
    {
      name: "The City Palace",
      img: "https://t4.ftcdn.net/jpg/03/19/46/47/240_F_319464774_i5NSxsN5fdHgF8OOZxD4VuNKequMkqbI.jpg",
      description: "Woman posing at City Palace , Jaipur, Rajasthan, India",
      position: [26.9124, 75.7873],
      Location: "India,Jaipur",
    },
    {
      name: "Backwaters du Kerala",
      img: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "backwaters du kerala",
      position: [9.5937, 76.52],
      Location: "India,Kerala",
    },
    {
      name: "Gingee Fort",
      img: "https://t3.ftcdn.net/jpg/06/53/30/88/360_F_653308826_36lyEUWVTJ4f1X2huOxVQxfn3HqJ1bSB.jpg",
      description:
        "A wide view of Gingee Fort which is perched on a mountain top.The sweet named mutamitai is famous in gingee",
      position: [12.2281, 79.4317],
      Location: "India,Gingee",
    },
    {
      name: "Sri Ranganathaswamy temple",
      img: "https://t4.ftcdn.net/jpg/00/41/41/89/240_F_41418971_I2OMfd4Gm203Q8Voe0YNoeCIPwqrxya5.jpg",
      description: "Hindu temple in Tiruchirappalli, Tamil Nadu, India",
      position: [10.8599, 78.6934],
      Location: "India,Tiruchirappalli",
    },
    {
      name: "Kotagiri hills",
      img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTSeWECCPqdO9LWlKxJ9ca-tWwuI29q1cI3riI0LFtFknE-I8lzA3mNgM2qbVcpdL0TFDlX0Oep8oUTUImpcfnYTbSJCJC2HascsC8C2w",
      description:
        "Nature background green environment -Tea Garden at Kotagiri hill India.",
      position: [11.4217, 76.8681],
      Location: "India,Kotagiri",
    },
    {
      name: "Tower bridge",
      img: "https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Tower bridge at sunrise in autumn",
      position: [51.5074, -0.1278],
      Location: "London",
    },
    {
      name: "Big Ben house",
      img: "https://images.pexels.com/photos/11010565/pexels-photo-11010565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Big Ben and Houses of Parliament",
      position: [51.5007, -0.1246],
      Location: "London",
    },
    {
      name: "City center",
      img: "https://images.pexels.com/photos/9208721/pexels-photo-9208721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Historical buildings in London city center, England, UK",
      position: [51.4993, -0.1273],
      Location: "London",
    },
    {
      name: "Tewkesbury Abbey",
      img: "https://images.pexels.com/photos/24499695/pexels-photo-24499695/free-photo-of-view-of-the-abbey-of-sauvelade-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Drone shot over Tewkesbury Abbey in Tewkesbury, England on garden",
      position: [51.9875, -2.165],
      Location: "London",
    },
    {
      name: "Olympic Stadium",
      img: "https://c4.wallpaperflare.com/wallpaper/171/357/264/london-2012-olympic-stadium-wallpaper-preview.jpg",
      description: "UK, London, Aerial view The Olympic Stadium at sunset",
      position: [51.5381, -0.0168],
      Location: "London",
    },
    {
      name: "The London Skyline",
      img: "https://c4.wallpaperflare.com/wallpaper/882/291/768/cityscape-city-london-united-kingdom-wallpaper-preview.jpg",
      description: "The London Skyline Panoramic.",
      position: [51.5045, -0.0865],
      Location: "London",
    },
    {
      name: "Muswell hill",
      img: "https://media.istockphoto.com/id/1426623275/photo/english-terraced-houses-in-muswell-hill-during-sunset-in-london-england.jpg?s=612x612&w=0&k=20&c=bVRZgJFFJPCjZ1aVFcqUj6BWYO6cw85W-nGeD75SdTI=",
      description:
        "London, England - Typical brick houses and flats and panoramic view of london on a nice summer morning with blue sky and clouds taken from Muswell Hill",
      position: [51.5884, -0.1435],
      Location: "London,England",
    },
    {
      name: "Catello di Moszna",
      img: "https://w0.peakpx.com/wallpaper/918/587/HD-wallpaper-castles-castello-del-boccale.jpg",
      description: "Castello di Moszna",
      position: [50.3919, 18.247],
      Location: "London",
    },
    {
      name: "Georgian residential",
      img: "https://media.istockphoto.com/id/498709822/photo/white-luxury-houses-facades-in-london.jpg?s=612x612&w=0&k=20&c=Sice0KyvqXgZRFgczwlTKwRN8qv1lsQRLVpKfhkWEWQ=",
      description:
        "Facade of Georgian residential town houses made in yellow and red brick in a luxury residential area of West London.",
      position: [51.5122, -0.2054],
      Location: "London,West London",
    },
    {
      name: "Barrika beach",
      img: "https://img.goodfon.com/wallpaper/big/6/c0/playa-de-barrika-pays-basque.webp",
      description: "Barrika beach in a cloudy night, Basque country, Spain.",
      position: [43.4177, -2.7431],
      Location: "Spain,Basque country",
    },
    {
      name: "Bahia de la concha",
      img: "https://media.istockphoto.com/id/1173974982/photo/beach-of-la-concha.jpg?s=612x612&w=0&k=20&c=a21ZQJrtwRDnwjGwgTkSnjFt018XiDo8qv2jpY-SV1c=",
      description:
        "Aerial view of Bahía de la concha, Antiguo, Donostia-San Sebastián, Gipuzkoa, Spain.",
      position: [43.3213, -1.981],
      Location: "Spain,Gipuzkoa",
    },
    {
      name: "Lighthouse Pollenca",
      img: "https://thumbs.dreamstime.com/b/formentor-lighthouse-mallorca-picturesque-sea-landscape-pollenca-63249718.jpg",
      description:
        "Lighthouse on the bay of Pollenca, Mallorca, Balearic islands, Spain, Mediterranean, Europe",
      position: [39.8731, 3.116],
      Location: "Spain,Balearic Islands",
    },
    {
      name: "The Banco de España",
      img: "https://c4.wallpaperflare.com/wallpaper/730/416/960/santander-grupo-santander-spain-financial-services-wallpaper-preview.jpg",
      description:
        "The Banco de España is a public law entity which performs the functions of a national central bank in Spain. It is also responsible for the supervision of the Spanish banking system and of other financial intermediaries operating in Spain.",
      position: [40.4192, -3.6922],
      Location: "Spain",
    },
    {
      name: "Mediterranean Sea",
      img: "https://images.pexels.com/photos/584174/pexels-photo-584174.jpeg?cs=srgb&dl=pexels-nilina-183033-584174.jpg&fm=jpg",
      description:
        "Spain, Mallorca, Santanyi, Helicopter view of coastal village surrounded by blue waters of Mediterranean Sea in summer",
      position: [39.3576, 3.2074],
      Location: "Spain,Mallorca",
    },
    {
      name: "Black Sand Beach",
      img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSE6PTRNWnAovCQO8E9nA5RDn0svXjyK3Ej438yrvDzShC-3muYgbuoQ4BT_JuaAo1xXsqYGWRexlnwPMrJfDQOXUBEGlUnQkJhshHeuA",
      description:
        "The black part of the sand on the Varkala Beach contains Thorium-oxide which is a radioactive substance. Thorium and Thorium-oxide and its isotopes are found all over Kerala and can be identified by its black colour.",
      position: [8.7379, 76.7081],
      Location: "Kerala,India",
    },
    {
      name: "Belmonte Castle",
      img: "https://images.pexels.com/photos/18851129/pexels-photo-18851129.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
      description:
        "15Th Century Belmonte Castle; Belmonte, Cuenca, Castilla La Mancha, Spain",
      position: [39.4585, -2.7613],
      Location: "Spain,Castilla La Mancha",
    },
    {
      name: "varkala",
      img: "https://media.istockphoto.com/id/1141255604/photo/varkala-beach-kerala-india.jpg?s=612x612&w=0&k=20&c=0PLnBEHmKdVk8WREsB7dMMriVXJCKKuBAPP9wXJb7SA=",
      description:
        "The hill-top mausoleum of Sree Narayana Guru is one of the most famous monuments in Kerala state. Varkala Beach or Papanasam beach is a haven for sun-bathing and swimming. It is one of the most popular tourism destination in Kerala. The evening views of the sunset are worth lingering over.",
      position: [8.7333, 76.7032],
      Location: "Kerala",
    },
    {
      name: "Lavender field Spain",
      img: "https://as1.ftcdn.net/v2/jpg/04/50/74/26/1000_F_450742640_cwSnJ0T4fEOc0aUY6bxdJ6sA5k4Umtu0.jpg",
      description: "Lavender field at sunrise with golden and violet colors.",
      position: [43.9281, 5.2913],
      Location: "Spain",
    },
    {
      name: "Great Wall",
      img: "https://t4.ftcdn.net/jpg/00/90/15/29/240_F_90152948_fAFZ0kHq7Sgnvd5tltgLiIVpODr1XNc3.jpg",
      description: "Great Wall China.",
      position: [40.4319, 116.5704],
      Location: "China",
    },
    {
      name: "Fenghuang",
      img: "https://as1.ftcdn.net/v2/jpg/02/98/42/22/1000_F_298422217_YH5SvdeBGJqqbdBZs5B3bx0lJE0nSgRq.jpg",
      description:
        "Street decorated with traditional Chinese umbrellas, Fenghuang.",
      position: [27.0528, 109.5074],
      Location: "China,Fenghuang",
    },
    {
      name: "Zhangjiajie Wulingyuan",
      img: "https://as1.ftcdn.net/v2/jpg/02/48/78/18/1000_F_248781821_kr84rWxuPg71P58GFon89NPjJixiIyhs.jpg",
      description: "Zhangjiajie Wulingyuan China.",
      position: [29.2737, 110.5035],
      Location: "China",
    },
    {
      name: "Chongsheng Monastery",
      img: "https://as2.ftcdn.net/v2/jpg/00/91/73/41/1000_F_91734119_mKewqBvDvfItQBh27ypo1f6D1zAqFKVr.jpg",
      description: "Chongsheng Monastery.",
      position: [25.6978, 100.1511],
      Location: "China",
    },
    {
      name: "Hunan province",
      img: "https://as1.ftcdn.net/v2/jpg/01/69/00/44/1000_F_169004466_pQdXdpLkkq54nsY4K59KSvPITT2Bi2tN.jpg",
      description:
        "The road up the hill with a beautiful view,Hunan province,China.",
      position: [28.1128, 113.0828],
      Location: "China,Hunan province",
    },
    {
      name: "Paro Taktsang Bhutan",
      img: "https://as2.ftcdn.net/v2/jpg/03/00/09/91/1000_F_300099161_Pb4fuBabwjVuxcCkkv2yxfCScQsVNmCd.jpg",
      description: "Paro Taktsang in Bhutan.",
      position: [27.4913, 89.6717],
      Location: "China,Bhutan",
    },
    {
      name: "Temple of Heaven Beijing",
      img: "https://as2.ftcdn.net/v2/jpg/00/66/86/83/1000_F_66868352_BSIMQiSVhRObMwBcZWf3oMuPWgur9DWB.jpg",
      description: "Temple of Heaven in Beijing, China.",
      position: [39.8822, 116.4074],
      Location: "China,Beijing",
    },
    {
      name: "Lijiang China",
      img: "https://as2.ftcdn.net/v2/jpg/01/20/07/59/1000_F_120075921_ahUnQC9Whq84y9NY9Z6yYXA4UJ0THOli.jpg",
      description: "China - Lijiang.",
      position: [26.8701, 100.2328],
      Location: "China,Lijiang",
    },
    {
      name: "Nachi Falls",
      img: "https://as2.ftcdn.net/v2/jpg/03/67/34/09/1000_F_367340940_RPtfarIzHqKUtNx15kAI2EJY75Qtt1iA.jpg",
      description: "Temple and Nachi Falls.",
      position: [33.6731, 135.7667],
      Location: "China",
    },
    {
      name: "Andaman and Nicobar",
      img: "https://t3.ftcdn.net/jpg/03/37/20/46/240_F_337204667_ymMIWNRQ0ieBbe9IHNKdOqUkfK9yIF67.jpg",
      description: "Andaman and Nicobar Islands, India",
      position: [11.623, 92.75],
      Location: "Andaman and Nicobar",
    },
    {
      name: "Havelock Island",
      img: "https://as2.ftcdn.net/v2/jpg/01/58/25/99/1000_F_158259934_QFgAdTdg53uTATTQfWZWIlwaxQbSdGrt.jpg",
      description:
        "Mangrove tree at Havelock island, Andaman and Nicobar, India",
      position: [12.029, 92.9464],
      Location: "Andaman and Nicobar",
    },
    {
      name: "Swaraj Dweep",
      img: "https://as2.ftcdn.net/v2/jpg/07/04/82/25/1000_F_704822582_KOY45V0uFOIiiE8vgcIwnMiaAlwJRotD.jpg",
      description:
        "Solitary mangrove tree on the beach at low tide at the coast of a tropical island on a sunny day on Swaraj Dweep or Havelock island in Andaman and Nicobar island archipelago in India.",
      position: [12.014, 92.9515],
      Location: "Andaman and Nicobar",
    },
    {
      name: "Elephant Beach",
      img: "https://as1.ftcdn.net/v2/jpg/04/81/10/62/1000_F_481106246_twXh8V0sjSlvcuCqxDZHHSRr7hpiMsh3.jpg",
      description: "Elephant Beach, Havelock Island, Andaman, India",
      position: [12.0241, 92.9553],
      Location: "Andaman and Nicobar",
    },
    {
      name: "Neil Island",
      img: "https://as2.ftcdn.net/v2/jpg/02/13/90/13/1000_F_213901344_g0yLbwSfphxvp7uNY744GfrAbu19cYu8.jpg",
      description:
        "a portion of sea arch Neil island, Andaman and Nicobar, India",
      position: [11.9417, 92.9326],
      Location: "Andaman and Nicobar",
    },
    {
      name: "Port Blair Jail Wings",
      img: "https://as2.ftcdn.net/v2/jpg/00/26/37/31/1000_F_26373144_aDHRY5KrCkRpV1WvHH7dmxP0TjY0EL6f.jpg",
      description: "Port Blair Jail Wings.",
      position: [11.6234, 92.75],
      Location: "Andaman and Nicobar",
    },
    {
      name: "Jolly Bouy Island",
      img: "https://as2.ftcdn.net/v2/jpg/03/23/24/67/1000_F_323246729_sNsediXrdq6OZULP94dVS2qvBCvx16pk.jpg",
      description:
        "The most beautiful Jolly bouy island in andaman and nicobar islands.",
      position: [11.623, 92.75],
      Location: "Andaman and Nicobar",
    },
    {
      name: "Radhanagar Beach",
      img: "https://as1.ftcdn.net/v2/jpg/04/81/10/68/1000_F_481106889_mgxI1OuGA6SMoMM3TOkLBQfs2mjGw2lw.jpg",
      description: "Sunset on the sea, Radhanagar Beach, Havelock Island.",
      position: [12.0065, 92.9694],
      Location: "Andaman and Nicobar",
    },
    {
      name: "Faroe Isalnd",
      img: "https://as2.ftcdn.net/v2/jpg/02/43/02/81/1000_F_243028108_HFDSxWqp8UqVpQSNH454HZXg7h9T3UYA.jpg",
      description:
        "Flowers with a view of Drangarnir in the background standing in the ocean in Faroe Islands, Denmark. Dark moody day at this iconic location.",
      position: [62.0328, -7.4258],
      Location: "Denmark",
    },
    {
      name: "TAerial view Capetown",
      img: "https://as2.ftcdn.net/v2/jpg/01/52/58/91/1000_F_152589155_fl9I45bnrcX0AZ4zPZTRgu6BO2bUxHcS.jpg",
      description: "TAerial view of Capetown, South Africa.",
      position: [-33.9249, 18.4241],
      Location: "South Africa,Capetown",
    },
    {
      name: "Savannah Forest",
      img: "https://as1.ftcdn.net/v2/jpg/02/94/84/68/1000_F_294846823_EDmzSopDAYZ9x5cX3y0ZcNmo0LXDYXDc.jpg",
      description: "Cheetah walks down twisted tree in savannah.",
      position: [-1.2921, 36.8219],
      Location: "Africa",
    },
    {
      name: "Africa Safari view",
      img: "https://as2.ftcdn.net/v2/jpg/07/31/31/79/1000_F_731317976_fZ22CdGmZHaIgWshImfYpToVIbZ5s1mH.jpg",
      description:
        "Tourist couple on an African safari to view wildlife in an open grassy field as the sun comes up.",
      position: [-2.3333, 34.8333],
      Location: "Africa",
    },
    {
      name: "Aerial view Capetown",
      img: "https://as1.ftcdn.net/v2/jpg/02/92/78/36/1000_F_292783691_qYXzNyikvZmW95yP9WTtuCzaZy8mEK8v.jpg",
      description: "Cape Town aerial view.",
      position: [-33.9249, 18.4241],
      Location: "South Africa,Capetown",
    },
    {
      name: "Graskop",
      img: "https://as2.ftcdn.net/v2/jpg/06/24/94/73/1000_F_624947317_pCFHwvpwuPMIAyhGi3O2d8iT53qofolE.jpg",
      description:
        "Panorama shot of the Blyde River Canyon, dam and the mountains with lush foliage, Panorama Route, Graskop, Mpumalanga, South Africa.",
      position: [-24.4634, 30.7112],
      Location: "South Africa,Mpumalanga",
    },
    {
      name: "Baobob trees Baobabs",
      img: "https://as2.ftcdn.net/v2/jpg/01/63/23/53/1000_F_163235373_Xzz4MLDDFGhBbM7tqsMYSNB0aueQYxFv.jpg",
      description:
        "Beautiful Baobab trees at sunset at the avenue of the baobabs in Madagascar",
      position: [-20.2894, 44.0422],
      Location: "South Africa, Madagascar",
    },
    {
      name: "Gambia Mangroves",
      img: "https://as2.ftcdn.net/v2/jpg/03/05/71/21/1000_F_305712104_yZkiQ5QKwKgDzp4f1pbVq75oEYjq3ZSr.jpg",
      description:
        "Gambia Mangroves. Aerial view of mangrove forest in Gambia. Photo made by drone from above. Africa Natural Landscape..",
      position: [13.429, -16.593],
      Location: "South Africa,Gambia",
    },
    {
      name: "Pyramids of Giza",
      img: "https://as2.ftcdn.net/v2/jpg/02/58/51/97/1000_F_258519703_3922elpnwnYxW4N3egJpTEbgJsLesi0m.jpg",
      description: "The Pyramids of Giza and the Great Sphinx, Egypt.",
      position: [29.9792, 31.1342],
      Location: "North Africa,Egypt",
    },
    {
      name: "Port Said Egypt",
      img: "https://as2.ftcdn.net/v2/jpg/02/45/93/55/1000_F_245935551_xNOVJXIoM3hHooZ2T7GLotDGCPFQzSpm.jpg",
      description: "Port Said, Egypt.",
      position: [31.2653, 32.3026],
      Location: "North Africa,Egypt",
    },
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  const handleSelectLocation = (selectedPosition) => {
    setSelectedPosition(selectedPosition);
    if (position && selectedPosition) {
      const calculatedDistance = haversineDistance(position, selectedPosition);
      setDistance(calculatedDistance);
    }
  };

  return (
    <div className="d-flex vh-100">
      <Sidebar locations={locations} onSelectLocation={handleSelectLocation} />
      <div className="flex-grow-1 position-relative">
        {position ? (
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-100 w-100"
          >
            <Map position={position} selectedPosition={selectedPosition} />
          </MapContainer>
        ) : (
          <p>Loading...</p>
        )}
        {distance && (
          <div
            style={{
              position: "absolute",
              top: "80px",
              left: "10px",
              zIndex: 1000,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <p>Total Distance: {distance.toFixed(2)} km</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapPage;
