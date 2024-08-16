import * as React from "react";
import { useState, useMemo } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import Footer from "./Footer";
import { useWishlist } from "./WishlistContext";
import { toast } from "sonner";
import { Autocomplete } from "@mui/material";
import { isAuthenticated } from "./utils";

// Copyright component
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Travel Horizon
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const cards = [
  {
    id: 1,
    name: "Taj Mahal",
    img: "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra",
    Location: "India,Agra",
  },
  {
    id: "2",
    name: "Mehrangarh Fort",
    img: "https://images.pexels.com/photos/16910734/pexels-photo-16910734/free-photo-of-mehrangarh-fort-in-jodhpur-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Famous indian tourist landmark and attraction of India - Mehrangarh Fort, Jodhpur, Rajasthan, India on sunset",
    Location: "India,Jaipur",
  },
  {
    id: "3",
    name: "Munnar",
    img: "https://images.pexels.com/photos/13691355/pexels-photo-13691355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Green hills of tea plantations in Munnar",
    Location: "India,Munnar",
  },
  {
    id: "4",
    name: "Pololem beach",
    img: "https://t3.ftcdn.net/jpg/00/77/00/26/240_F_77002615_Gl1Hk6qZpi2xCAlX8EUTRLBqC4ei6QfC.jpg",
    description: "India, Goa, Palolem beach",
    Location: "India,Goa",
  },
  {
    id: "5",
    name: "The City Palace",
    img: "https://t4.ftcdn.net/jpg/03/19/46/47/240_F_319464774_i5NSxsN5fdHgF8OOZxD4VuNKequMkqbI.jpg",
    description: "Woman posing at City Palace , Jaipur, Rajasthan, India",
    Location: "India,Jaipur",
  },
  {
    id: "6",
    name: "Backwaters du Kerala",
    img: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "backwaters du kerala",
    Location: "India,Kerala",
  },
  {
    id: "7",
    name: "Gingee Fort",
    img: "https://t3.ftcdn.net/jpg/06/53/30/88/360_F_653308826_36lyEUWVTJ4f1X2huOxVQxfn3HqJ1bSB.jpg",
    description:
      "A wide view of Gingee Fort which is perched on a mountain top.The sweet named mutamitai is famous in gingee",
    Location: "India,Ginjee",
  },
  {
    id: "8",
    name: "Sri Ranganathaswamy temple",
    img: "https://t4.ftcdn.net/jpg/00/41/41/89/240_F_41418971_I2OMfd4Gm203Q8Voe0YNoeCIPwqrxya5.jpg",
    description: "Hindu temple in Tiruchirappalli, Tamil Nadu, India",
    Location: "India,Tiruchirappalli",
  },
  {
    id: "9",
    name: "Kotagiri hill",
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTSeWECCPqdO9LWlKxJ9ca-tWwuI29q1cI3riI0LFtFknE-I8lzA3mNgM2qbVcpdL0TFDlX0Oep8oUTUImpcfnYTbSJCJC2HascsC8C2w",
    description:
      "Nature background green environment -Tea Garden at Kotagiri hill India.",
    Location: "India,Kotagiri",
  },
  {
    id: "10",
    name: "Tower bridge",
    img: "https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Tower bridge at sunrise in autumn",
    Location: "London",
  },
  {
    id: "11",
    name: "Big Ben house",
    img: "https://images.pexels.com/photos/11010565/pexels-photo-11010565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Big Ben and Houses of Parliament",
    Location: "London",
  },
  {
    id: "12",
    name: "City center",
    img: "https://images.pexels.com/photos/9208721/pexels-photo-9208721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Historical buildings in London city center, England, UK",
    Location: "London",
  },
  {
    id: "13",
    name: "Tewkesbury Abbey",
    img: "https://images.pexels.com/photos/24499695/pexels-photo-24499695/free-photo-of-view-of-the-abbey-of-sauvelade-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Drone shot over Tewkesbury Abbey in Tewkesbury, England on garden",
    Location: "London",
  },
  {
    id: "14",
    name: "Olympic Stadium",
    img: "https://c4.wallpaperflare.com/wallpaper/171/357/264/london-2012-olympic-stadium-wallpaper-preview.jpg",
    description: "UK, London, Aerial view The Olympic Stadium at sunset",
    Location: "London",
  },
  {
    id: "15",
    name: "The London Skyline",
    img: "https://c4.wallpaperflare.com/wallpaper/882/291/768/cityscape-city-london-united-kingdom-wallpaper-preview.jpg",
    description: "The London Skyline Panoramic.",
    Location: "London",
  },
  {
    id: "16",
    name: "Muswell hill",
    img: "https://as2.ftcdn.net/v2/jpg/01/65/06/03/1000_F_165060346_KUAXnjtVlNygfzP3gAuQPiNQdh6wemno.jpg",
    description:
      "London, England - Typical brick houses and flats and panoramic view of london on a nice summer morning with blue sky and clouds taken from Muswell Hill",
    Location: "London,England",
  },
  {
    id: "17",
    name: "Castello di Moszna",
    img: "https://w0.peakpx.com/wallpaper/918/587/HD-wallpaper-castles-castello-del-boccale.jpg",
    description: "Castello di Moszna",
    Location: "London",
  },
  {
    id: "18",
    name: "Georgian residential",
    img: "https://media.istockphoto.com/id/498709822/photo/white-luxury-houses-facades-in-london.jpg?s=612x612&w=0&k=20&c=Sice0KyvqXgZRFgczwlTKwRN8qv1lsQRLVpKfhkWEWQ=",
    description:
      "Facade of Georgian residential town houses made in yellow and red brick in a luxury residential area of West London.",
    Location: "London,West London",
  },
  {
    id: "19",
    name: "Barrika beach",
    img: "https://img.goodfon.com/wallpaper/big/6/c0/playa-de-barrika-pays-basque.webp",
    description: "Barrika beach in a cloudy night, Basque country, Spain.",
    Location: "Spain,Basque country",
  },
  {
    id: "20",
    name: "Bahia de la concha",
    img: "https://media.istockphoto.com/id/1173974982/photo/beach-of-la-concha.jpg?s=612x612&w=0&k=20&c=a21ZQJrtwRDnwjGwgTkSnjFt018XiDo8qv2jpY-SV1c=",
    description:
      "Aerial view of Bahía de la concha, Antiguo, Donostia-San Sebastián, Gipuzkoa, Spain.",
    Location: "Spain,Gipuzkoa",
  },
  {
    id: "21",
    name: "Lighthouse Pollenca",
    img: "https://thumbs.dreamstime.com/b/formentor-lighthouse-mallorca-picturesque-sea-landscape-pollenca-63249718.jpg",
    description:
      "Lighthouse on the bay of Pollenca, Mallorca, Balearic islands, Spain, Mediterranean, Europe",
    Location: "Spain,Balearic Islands",
  },
  {
    id: "22",
    name: "The Banco de España",
    img: "https://c4.wallpaperflare.com/wallpaper/730/416/960/santander-grupo-santander-spain-financial-services-wallpaper-preview.jpg",
    description:
      "The Banco de España is a public law entity which performs the functions of a national central bank in Spain. It is also responsible for the supervision of the Spanish banking system and of other financial intermediaries operating in Spain.",
    Location: "Spain",
  },
  {
    id: "23",
    name: "Mediterranean Sea",
    img: "https://images.pexels.com/photos/584174/pexels-photo-584174.jpeg?cs=srgb&dl=pexels-nilina-183033-584174.jpg&fm=jpg",
    description:
      "Spain, Mallorca, Santanyi, Helicopter view of coastal village surrounded by blue waters of Mediterranean Sea in summer",
    Location: "Spain,Mallorca",
  },
  {
    id: "24",
    name: "Black Sand Beach",
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSE6PTRNWnAovCQO8E9nA5RDn0svXjyK3Ej438yrvDzShC-3muYgbuoQ4BT_JuaAo1xXsqYGWRexlnwPMrJfDQOXUBEGlUnQkJhshHeuA",
    description:
      "The black part of the sand on the Varkala Beach contains Thorium-oxide which is a radioactive substance. Thorium and Thorium-oxide and its isotopes are found all over Kerala and can be identified by its black colour.",
    Location: "Kerala,India",
  },
  {
    id: "25",
    name: "Belmonte Castle",
    img: "https://images.pexels.com/photos/18851129/pexels-photo-18851129.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
    description:
      "15Th Century Belmonte Castle; Belmonte, Cuenca, Castilla La Mancha, Spain",
    Location: "Spain,Castilla La Mancha",
  },
  {
    id: "26",
    name: "varkala",
    img: "https://media.istockphoto.com/id/1141255604/photo/varkala-beach-kerala-india.jpg?s=612x612&w=0&k=20&c=0PLnBEHmKdVk8WREsB7dMMriVXJCKKuBAPP9wXJb7SA=",
    description:
      "The hill-top mausoleum of Sree Narayana Guru is one of the most famous monuments in Kerala state. Varkala Beach or Papanasam beach is a haven for sun-bathing and swimming. It is one of the most popular tourism destination in Kerala. The evening views of the sunset are worth lingering over.",
    Location: "Kerala",
  },
  {
    id: "27",
    name: "Lavender field Spain",
    img: "https://as1.ftcdn.net/v2/jpg/04/50/74/26/1000_F_450742640_cwSnJ0T4fEOc0aUY6bxdJ6sA5k4Umtu0.jpg",
    description: "Lavender field at sunrise with golden and violet colors.",
    Location: "Spain",
  },
  {
    id: "28",
    name: "Great wall China",
    img: "https://t4.ftcdn.net/jpg/00/90/15/29/240_F_90152948_fAFZ0kHq7Sgnvd5tltgLiIVpODr1XNc3.jpg",
    description: "Great Wall China.",
    Location: "China",
  },
  {
    id: "29",
    name: "Fenghuang",
    img: "https://as1.ftcdn.net/v2/jpg/02/98/42/22/1000_F_298422217_YH5SvdeBGJqqbdBZs5B3bx0lJE0nSgRq.jpg",
    description:
      "Street decorated with traditional Chinese umbrellas, Fenghuang.",
    Location: "China,Fenghuang",
  },
  {
    id: "30",
    name: "Zhangjiajie Wulingyuan",
    img: "https://as1.ftcdn.net/v2/jpg/02/48/78/18/1000_F_248781821_kr84rWxuPg71P58GFon89NPjJixiIyhs.jpg",
    description: "Zhangjiajie Wulingyuan China.",
    Location: "China",
  },
  {
    id: "31",
    name: "Chongsheng Monastery",
    img: "https://as2.ftcdn.net/v2/jpg/00/91/73/41/1000_F_91734119_mKewqBvDvfItQBh27ypo1f6D1zAqFKVr.jpg",
    description: "Chongsheng Monastery.",
    Location: "China",
  },
  {
    id: "32",
    name: "Hunan province",
    img: "https://as1.ftcdn.net/v2/jpg/01/69/00/44/1000_F_169004466_pQdXdpLkkq54nsY4K59KSvPITT2Bi2tN.jpg",
    description:
      "The road up the hill with a beautiful view,Hunan province,China.",
    Location: "China,Hunan province",
  },
  {
    id: "33",
    name: "Paro Taktsang Bhutan",
    img: "https://as2.ftcdn.net/v2/jpg/03/00/09/91/1000_F_300099161_Pb4fuBabwjVuxcCkkv2yxfCScQsVNmCd.jpg",
    description: "Paro Taktsang in Bhutan.",
    Location: "China,Bhutan",
  },
  {
    id: "34",
    name: "Temple of Heaven Beijing",
    img: "https://as2.ftcdn.net/v2/jpg/00/66/86/83/1000_F_66868352_BSIMQiSVhRObMwBcZWf3oMuPWgur9DWB.jpg",
    description: "Temple of Heaven in Beijing, China.",
    Location: "China,Beijing",
  },
  {
    id: "35",
    name: "Lijiang China",
    img: "https://as2.ftcdn.net/v2/jpg/01/20/07/59/1000_F_120075921_ahUnQC9Whq84y9NY9Z6yYXA4UJ0THOli.jpg",
    description: "China - Lijiang.",
    Location: "China,Lijiang",
  },
  {
    id: "36",
    name: "Nachi Falls",
    img: "https://as2.ftcdn.net/v2/jpg/03/67/34/09/1000_F_367340940_RPtfarIzHqKUtNx15kAI2EJY75Qtt1iA.jpg",
    description: "Temple and Nachi Falls.",
    Location: "China",
  },
  {
    id: "37",
    name: "Andaman and Nicobar",
    img: "https://t3.ftcdn.net/jpg/03/37/20/46/240_F_337204667_ymMIWNRQ0ieBbe9IHNKdOqUkfK9yIF67.jpg",
    description: "Andaman and Nicobar Islands, India",
    Location: "Andaman and Nicobar",
  },
  {
    id: "38",
    name: "Havelock island",
    img: "https://as2.ftcdn.net/v2/jpg/01/58/25/99/1000_F_158259934_QFgAdTdg53uTATTQfWZWIlwaxQbSdGrt.jpg",
    description: "Mangrove tree at Havelock island, Andaman and Nicobar, India",
    Location: "Andaman and Nicobar",
  },
  {
    id: "39",
    name: "Swaraj Dweep",
    img: "https://as2.ftcdn.net/v2/jpg/07/04/82/25/1000_F_704822582_KOY45V0uFOIiiE8vgcIwnMiaAlwJRotD.jpg",
    description:
      "Solitary mangrove tree on the beach at low tide at the coast of a tropical island on a sunny day on Swaraj Dweep or Havelock island in Andaman and Nicobar island archipelago in India.",
    Location: "Andaman and Nicobar",
  },
  {
    id: "40",
    name: "Elephant Beach",
    img: "https://as1.ftcdn.net/v2/jpg/04/81/10/62/1000_F_481106246_twXh8V0sjSlvcuCqxDZHHSRr7hpiMsh3.jpg",
    description: "Elephant Beach, Havelock Island, Andaman, India",
    Location: "Andaman and Nicobar",
  },
  {
    id: "41",
    name: "Neil island",
    img: "https://as2.ftcdn.net/v2/jpg/02/13/90/13/1000_F_213901344_g0yLbwSfphxvp7uNY744GfrAbu19cYu8.jpg",
    description:
      "a portion of sea arch Neil island, Andaman and Nicobar, India",
    Location: "Andaman and Nicobar",
  },
  {
    id: "42",
    name: "Port Blair Jail Wings",
    img: "https://as2.ftcdn.net/v2/jpg/00/26/37/31/1000_F_26373144_aDHRY5KrCkRpV1WvHH7dmxP0TjY0EL6f.jpg",
    description: "Port Blair Jail Wings.",
    Location: "Andaman and Nicobar",
  },
  {
    id: "43",
    name: "Jolly bouy island",
    img: "https://as2.ftcdn.net/v2/jpg/03/23/24/67/1000_F_323246729_sNsediXrdq6OZULP94dVS2qvBCvx16pk.jpg",
    description:
      "The most beautiful Jolly bouy island in andaman and nicobar islands.",
    Location: "Andaman and Nicobar",
  },
  {
    id: "44",
    name: "Radhanagar Beach",
    img: "https://as1.ftcdn.net/v2/jpg/04/81/10/68/1000_F_481106889_mgxI1OuGA6SMoMM3TOkLBQfs2mjGw2lw.jpg",
    description: "Sunset on the sea, Radhanagar Beach, Havelock Island.",
    Location: "Andaman and Nicobar",
  },
  {
    id: "45",
    name: "Faroe Islands",
    img: "https://as2.ftcdn.net/v2/jpg/02/43/02/81/1000_F_243028108_HFDSxWqp8UqVpQSNH454HZXg7h9T3UYA.jpg",
    description:
      "Flowers with a view of Drangarnir in the background standing in the ocean in Faroe Islands, Denmark. Dark moody day at this iconic location.",
    Location: "Andaman and Nicobar",
  },
  {
    id: "46",
    name: "TAerial view Capetown",
    img: "https://as2.ftcdn.net/v2/jpg/01/52/58/91/1000_F_152589155_fl9I45bnrcX0AZ4zPZTRgu6BO2bUxHcS.jpg",
    description: "TAerial view of Capetown, South Africa.",
    Location: "South Africa,Capetown",
  },
  {
    id: "47",
    name: "Savannah Forest",
    img: "https://as1.ftcdn.net/v2/jpg/02/94/84/68/1000_F_294846823_EDmzSopDAYZ9x5cX3y0ZcNmo0LXDYXDc.jpg",
    description: "Cheetah walks down twisted tree in savannah.",
    Location: "Africa",
  },
  {
    id: "48",
    name: "African safari view",
    img: "https://as2.ftcdn.net/v2/jpg/07/31/31/79/1000_F_731317976_fZ22CdGmZHaIgWshImfYpToVIbZ5s1mH.jpg",
    description:
      "Tourist couple on an African safari to view wildlife in an open grassy field as the sun comes up.",
    Location: "Africa",
  },
  {
    id: "49",
    name: "Aerial view Cape Town",
    img: "https://as1.ftcdn.net/v2/jpg/02/92/78/36/1000_F_292783691_qYXzNyikvZmW95yP9WTtuCzaZy8mEK8v.jpg",
    description: "Cape Town aerial view.",
    Location: "South Africa,Capetown",
  },
  {
    id: "50",
    name: "Graskop",
    img: "https://as2.ftcdn.net/v2/jpg/06/24/94/73/1000_F_624947317_pCFHwvpwuPMIAyhGi3O2d8iT53qofolE.jpg",
    description:
      "Panorama shot of the Blyde River Canyon, dam and the mountains with lush foliage, Panorama Route, Graskop, Mpumalanga, South Africa.",
    Location: "South Africa,Mpumalanga",
  },
  {
    id: "51",
    name: "Baobab trees Baobabs",
    img: "https://as2.ftcdn.net/v2/jpg/01/63/23/53/1000_F_163235373_Xzz4MLDDFGhBbM7tqsMYSNB0aueQYxFv.jpg",
    description:
      "Beautiful Baobab trees at sunset at the avenue of the baobabs in Madagascar",
    Location: "South Africa, Madagascar",
  },
  {
    id: "52",
    name: "Gambia Mangroves",
    img: "https://as2.ftcdn.net/v2/jpg/03/05/71/21/1000_F_305712104_yZkiQ5QKwKgDzp4f1pbVq75oEYjq3ZSr.jpg",
    description:
      "Gambia Mangroves. Aerial view of mangrove forest in Gambia. Photo made by drone from above. Africa Natural Landscape..",
    Location: "South Africa,Gambia",
  },
  {
    id: "53",
    name: "Pyramids of Giza",
    img: "https://as2.ftcdn.net/v2/jpg/02/58/51/97/1000_F_258519703_3922elpnwnYxW4N3egJpTEbgJsLesi0m.jpg",
    description: "The Pyramids of Giza and the Great Sphinx, Egypt.",
    Location: "North Africa,Egypt",
  },
  {
    id: "54",
    name: "Port Said Egypt",
    img: "https://as2.ftcdn.net/v2/jpg/02/45/93/55/1000_F_245935551_xNOVJXIoM3hHooZ2T7GLotDGCPFQzSpm.jpg",
    description: "Port Said, Egypt.",
    Location: "North Africa,Egypt",
  },
];

// Default theme
const defaultTheme = createTheme();

export default function Packages() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = 12;
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState(null);

  const searchQuery = searchParams.get("query") || "";

  // Memoize the filtered options to avoid recalculating on every render
  const filteredOptions = useMemo(() => {
    return searchQuery
      ? cards
          .map((card) => card.name)
          .filter((name) =>
            name.toLowerCase().includes(searchQuery.toLowerCase())
          )
      : [];
  }, [searchQuery]);

  const handleSelection = (event, newValue) => {
    const selectedCard = cards.find((card) => card.name === newValue);
    setSelectedCard(selectedCard || null);
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const filteredCards = useMemo(() => {
    return cards.filter((card) =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = useMemo(() => {
    return filteredCards.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredCards, indexOfFirstItem, indexOfLastItem]);

  const { wishlist, addToWishlist } = useWishlist();
  const handleAddToWishlist = (card) => {
    if (!isAuthenticated()) {
      return toast.info("Please login");
    }

    addToWishlist(card);
    navigate("/favorite");
    // toast.success(`${card.name} has been added to your favourite!`);
  };

  return (
    <div>
      <Box
        style={{
          backgroundImage:
            'url("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700444437.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <main>
            <Box
              sx={{
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Travel Horizon
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Travel Horizon is the World's largest online travel booking
                  service trusted by over 35 million happy customers globally.
                  TravelHorizon offers booking in affordable prize through its
                  website, iOS and Android mobile apps for any country.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 4,
                  }}
                >
                  <Autocomplete
                    freeSolo
                    options={filteredOptions}
                    inputValue={searchQuery}
                    onInputChange={(event, newInputValue) => {
                      setSearchParams({ query: newInputValue });
                    }}
                    onChange={handleSelection}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search"
                        variant="outlined"
                        sx={{ width: "300px" }}
                      />
                    )}
                  />
                </Box>
              </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="lg">
              {selectedCard ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 600,
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "56.25%", // 16:9 aspect ratio
                      }}
                      image={selectedCard.img}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography>
                        <b>{selectedCard.name}</b>
                      </Typography>
                      <Typography>{selectedCard.description}</Typography>
                      <Typography>{selectedCard.Location}</Typography>
                    </CardContent>
                    <CardActions>
                      <Link
                        to={`/details/${selectedCard.id - 1}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button>View Details</Button>
                      </Link>
                    </CardActions>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => handleAddToWishlist(selectedCard)}
                      >
                        Add to Favourite
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              ) : (
                <>
                  <Grid container spacing={10}>
                    {currentItems.map((card, i) => (
                      <Grid item key={card.img} xs={12} sm={6} md={4} lg={3}>
                        <Card
                          sx={{
                            width: "120%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                              transform: "scale(1.05)",
                              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                            },
                          }}
                        >
                          <CardMedia
                            component="div"
                            sx={{
                              pt: "100.25%",
                            }}
                            image={card.img}
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography>
                              <b>{card.name}</b>
                            </Typography>
                            <Typography>{card.description}</Typography>
                            <Typography>{card.Location}</Typography>
                          </CardContent>
                          <CardActions>
                            <Link
                              to={`/details/${card.id - 1}`}
                              style={{ textDecoration: "none" }}
                            >
                              <Button>View Details</Button>
                            </Link>
                          </CardActions>
                          <CardActions>
                            <Button
                              size="small"
                              color="primary"
                              onClick={() => handleAddToWishlist(card)}
                            >
                              Add to Favourite
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                  <Box
                    sx={{ mt: 4, display: "flex", justifyContent: "center" }}
                  >
                    <Pagination
                      count={Math.ceil(filteredCards.length / itemsPerPage)}
                      page={currentPage}
                      onChange={handlePageChange}
                      color="primary"
                    />
                  </Box>
                </>
              )}
            </Container>
          </main>
          <Footer />
        </ThemeProvider>
      </Box>
    </div>
  );
}
