// import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"

import { Avatar, Box } from "@mui/material";
import Footer from "./Footer";

export default function Aboutus() {
  return (
    <div className="flex flex-col">
      <Box
        style={{
          backgroundImage:
            'url("https://miniwallist.com/wp-content/uploads/2015/11/light-ends-mobile-wallpaper-minimalist-2160x3840.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // minHeight: "100vh",
        }}
      >
        <section className="relative h-[80vh] w-full overflow-hidden">
          <img
            src="https://images.hdqwalls.com/download/tree-of-life-4k-y5-1920x1080.jpg"
            alt="Scenic landscape"
            className="h-full w-full object-cover"
            width={1900}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.2)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-4 text-center text-white">
            <MountainIcon className="h-12 w-12" style={{ color: "black" }} />
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{ color: "black" }}
            >
              Travel Horizon
            </h1>
            <p className="max-w-md text-lg" style={{ color: "black" }}>
              Discover the world with us. Explore new horizons and create
              unforgettable memories.
            </p>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  About Travel Horizon
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Travel Horizon is a leading travel company dedicated to
                  providing exceptional experiences for adventurous explorers.
                  Founded in 2010, we have a rich history of curating unique and
                  immersive journeys that connect travelers with the world's
                  most breathtaking destinations.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Our mission is to inspire and empower people to step outside
                  their comfort zones, embrace new cultures, and create lifelong
                  memories. We believe that travel has the power to transform
                  lives, broaden perspectives, and foster a deeper understanding
                  of the world around us.
                </p>
              </div>
              <img
                src="https://e0.pxfuel.com/wallpapers/125/362/desktop-wallpaper-vestrahorn-mountain-iceland-iceland-vestrahorn-snow-mountain.jpg"
                alt="Travel Horizon team"
                className="h-full w-full rounded-lg object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="max-w-md text-muted-foreground">
                Our passionate team of travel experts is dedicated to crafting
                unforgettable experiences for our clients.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Mugilan</h3>
                  <p className="text-muted-foreground">Co-Founder</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Nihal Ahmed</h3>
                  <p className="text-muted-foreground">Travel Planner</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Priyanshu</h3>
                  <p className="text-muted-foreground">Marketing Manager</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Nagarjun</h3>
                  <p className="text-muted-foreground">Adventure Guide</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Unique Offerings
              </h2>
              <p className="max-w-md text-muted-foreground">
                Discover the world with our curated travel experiences, designed
                to inspire and delight.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="https://cdn.pixabay.com/photo/2018/11/29/20/01/nature-3846403_1280.jpg"
                  alt="Unique Experiences"
                  className="h-48 w-full rounded-lg object-cover"
                  width={400}
                  height={300}
                />
                <h3 className="text-xl font-semibold">Unique Experiences</h3>
                <p className="text-muted-foreground">
                  Immerse yourself in authentic cultural experiences and
                  discover the hidden gems of each destination.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/863/332/850/life-resort-sea-travel-wallpaper-preview.jpg"
                  alt="Luxury Accommodations"
                  className="h-48 w-full rounded-lg object-cover"
                  width={400}
                  height={300}
                />
                <h3 className="text-xl font-semibold">Luxury Accommodations</h3>
                <p className="text-muted-foreground" style={{ color: "white" }}>
                  Indulge in the finest hotels, resorts, and boutique properties
                  for the ultimate in comfort and relaxation.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="https://kayradecor.com/cdn/shop/products/Untitled-A.jpg?v=1680171688&width=1445"
                  alt="Personalized Itineraries"
                  className="h-48 w-full rounded-lg object-cover"
                  width={400}
                  height={300}
                />
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "white" }}
                >
                  Personalized Itineraries
                </h3>
                <p className="text-muted-foreground" style={{ color: "white" }}>
                  Let our travel experts craft a customized itinerary that
                  perfectly fits your interests and preferences.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Box>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
