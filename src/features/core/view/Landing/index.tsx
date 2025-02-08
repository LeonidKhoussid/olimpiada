import * as React from "react";
import styled from "@emotion/styled";
import Hero from "../../component/Hero";
import ParallaxContainer from "src/common/components/ParallaxContainer";
import TouristAttractionSection from "../../component/TouristAttractionSection";

const Landing = React.memo(() => {
  return (
    <Container>
      <Hero />
      <TouristAttractionSection
        slides={[
          {
            title: "FC Krasnodar Stadium/Park Galitsky",
            titleBackgroundColor: "#678ee0",
            subtitle: `This stadium is not just about football—it’s an architectural marvel designed with sleek, modern aesthetics. Built to FIFA standards, it offers guided tours that showcase the cutting-edge technology used in its construction, from its massive video screens to its eco-friendly design. Right next door is Galitsky Park, a sprawling green space with interactive playgrounds, art installations, and a musical fountain that lights up in the evenings. Whether you're a football fan or a casual visitor, this destination offers something for everyone.
            Location: Ulitsa Razvedchika Leonova, 1`,
            backgroundImageUrl: "./assets/images/fc.jpg",
            bubbleImages: [
              "./assets/images/bubbleImageG1.jpg",
              "./assets/images/bubbleImageG2.jpeg",
            ],
          },
          {
            title: "Monument to St.Catherine the Great II",
            titleBackgroundColor: "#678ee0",
            subtitle: `This grand monument, built in 1907 and restored after the Soviet era, celebrates the empress who gifted the Kuban region to the Cossacks. Catherine the Great is depicted holding a charter of land ownership, flanked by statues of loyal Cossack leaders. The surrounding square is a peaceful spot for relaxing or taking stunning photos with the statue and its intricate details.
Location: Catherine Square, Krasnodar`,
            backgroundImageUrl: "./assets/images/Catherinekrasnodar.jpg",
            bubbleImages: [
              "./assets/images/Catherinekb1.jpg",
              "./assets/images/Catherinekb2.jpg",
            ],
          },
          {
            title: "City Botanical Garden",
            titleBackgroundColor: "#678ee0",
            subtitle: `This oasis in the middle of the bustling city is home to hundreds of plant species from all over the world. Visitors can enjoy themed areas such as a rose garden, a Japanese garden, and an exotic plants greenhouse. The central lake is popular for paddle boating and birdwatching. Educational tours and seasonal flower festivals are held regularly, making it a vibrant destination year-round.
Address: Ulitsa Postovaya, 34`,
            backgroundImageUrl: "./assets/images/Citybotanicalgarden.jpeg",
            bubbleImages: [
              "./assets/images/bubblebg1.jpg",
              "./assets/images/bubblebg2.jpg",
            ],
          },
          {
            title: "Oceanarium",
            titleBackgroundColor: "#678ee0",
            subtitle: `This multi-level facility offers a magical underwater experience with walk-through tunnels where sharks, stingrays, and colourful fish swim overhead. The exotarium section features rare reptiles, birds, and mammals from diverse ecosystems, making it a hit for both adults and kids. Interactive feeding sessions and educational programs are also available.
Address: Ulitsa Tramvaynaya, 2`,
            backgroundImageUrl: "./assets/images/oceanarium2.jpg",
            bubbleImages: [
              "./assets/images/oceanarium.jpg",
              "./assets/images/oceanarium1.jpg",
            ],
          },
        ]}
      />
      <TouristAttractionSection
        slides={[
          {
            backgroundImageUrl: "./assets/images/stanresturantbackgr.jpg",
            titleBackgroundColor: "#678ee0",
            title: "Stan restaurant",
            subtitle:
              `The restaurant's ambiance is enriched by its interior, which showcases Cossack history through paintings, costumes, and artifacts, creating a museum-like experience for diners. The venue also boasts a spacious outdoor area with gazebos along the riverbank, offering a picturesque setting, especially during sunset.
              renowned for its authentic Russian and Kuban cuisine. The establishment offers a diverse menu featuring traditional dishes such as borscht with garlic donuts, pike cutlets, and dumplings with cheese, providing guests with a genuine taste of the region's culinary heritage.
              Location: Kubanskaya Naberezhnaya St., 15`,
            bubbleImages: [
              "./assets/images/stanfb1.jpg",
              "./assets/images/stanfb2.jpg",
            ],
          },
          {
            title: "Studio64 Bar&Restaurant",
            subtitle: `Renowned for its bold and eclectic interior design, the restaurant combines elements of modern aesthetics with touches of historical elegance, featuring antique furnishings alongside contemporary accents.
            The culinary offerings at Studio64 encompass a diverse range of cuisines, including Italian, European, and Asian dishes. The menu is thoughtfully curated to cater to a variety of palates, ensuring a memorable dining experience for all guests. 
            Location: Krasnaya Street, 64`,
            backgroundImageUrl: "./assets/images/studio64.jpg",
            titleBackgroundColor: "#678ee0",
            bubbleImages: [
              "./assets/images/studio64b1.jpg",
              "./assets/images/studio64b2.jpg",
            ],
          },
        ]}
      />
      <TouristAttractionSection
        slides={[
          {
            title: "Rimar",
            subtitle:
              "Rimar Hotel Krasnodar is a 5-star establishment situated near the administrative and business center of the city, overlooking the Kuban River. The hotel offers elegant and spacious rooms decorated in a classical Italian style, each equipped with LED TVs featuring interactive television systems. Guests are provided with complimentary bathrobes and slippers, and free Wi-Fi is available throughout the property. The hotel features multiple on-site restaurants serving Mediterranean and European cuisine, a wellness and spa center, an indoor swimming pool, and a fitness center. The Rimar Hotel is conveniently located near cultural attractions such as the Alexander Nevskiy Cathedral and the Krasnodar Philharmonic Concert Hall. Location: Naberezhnaya Street, 44/46",
            backgroundImageUrl: "./assets/images/Rimar.jpg",
            titleBackgroundColor: "#678ee0",
            bubbleImages: [
              "./assets/images/Rimarb1.jpg",
              "./assets/images/Rimarb2.jpg",
            ],
          },
          {
            title: "Troy",
            subtitle:
              "Troy Hotel offers a blend of comfort and luxury. The hotel provides a variety of rooms and suites, each designed with modern furnishings and equipped with amenities such as air conditioning, flat-screen TVs, and minibars. Guests can enjoy dining at the on-site restaurant, which serves a selection of European and Russian dishes. Additional facilities include a spa center, fitness center, and an indoor swimming pool. The hotel is located within a short distance from the city center, making it convenient for guests to explore local attractions. Location: 1 Maya, 131,",
            backgroundImageUrl: "./assets/images/Troy.jpg",
            titleBackgroundColor: "#678ee0",
            bubbleImages: [
              "./assets/images/Troyb1.jpg",
              "./assets/images/Troyb2.jpg",
            ],
          },
          {
            title: "The ROMANOFF by stellar hotels",
            subtitle:
              "The Romanoff by Stellar Hotels is a boutique hotel located in the heart of Krasnodar. The hotel offers well-appointed rooms featuring modern décor, comfortable bedding, and essential amenities to ensure a pleasant stay. Guests can dine at the hotel's restaurant, which offers a variety of international and local cuisines. The hotel's central location provides easy access to major attractions, shopping centers, and entertainment venues in Krasnodar. Location: Krasnaya, 16/1 ",
            backgroundImageUrl: "./assets/images/Romanoff.jpg",
            titleBackgroundColor: "#678ee0",
            bubbleImages: [
              "./assets/images/romanoffb1.jpg",
              "./assets/images/romanoffb2.jpg",
            ],
          },
        ]}
      />
      <TouristAttractionSection
        slides={[
          {
            title: "Practical Tips",
            subtitle:
              "Language: Russian is the primary language; English is not widely spoken, so a phrasebook or translation app is helpful.Currency: Russian Ruble (RUB). debit cards are widely accepted,but since they're transitioning into the use of mir processing networks carry cash just in case. Transportation: Krasnodar has a well-connected public transport system of trams, buses, and taxis. Yandex.Taxi is a reliable ride-hailing service. Best Time to Visit: Spring and autumn offer pleasant weather for exploring the city.",
            backgroundImageUrl: "./assets/images/PT.jpg",
            titleBackgroundColor: "#4D5E75",
            bubbleImages: [
              "./assets/images/PTb1.jpg",
              "./assets/images/PTb2.jpg",
            ],
          },
        ]}
      />
    </Container>
  );
});

export default Landing;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
