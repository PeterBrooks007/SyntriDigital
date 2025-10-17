import React, { useState, useEffect } from "react";
import { Box, Typography, Slide } from "@mui/material";
import reviewer1 from "../assets/testimonial/reviewer1.jpeg";
import reviewer2 from "../assets/testimonial/reviewer2.jpg";
import reviewer3 from "../assets/testimonial/reviewer3.jpeg";
import reviewer4 from "../assets/testimonial/reviewer4.jpg";
import reviewer5 from "../assets/testimonial/reviewer5.jpg";
import reviewer6 from "../assets/testimonial/reviewer6.jpg";

const testimonials = [
  {
    name: "Jamie Stoner",
    country: "USA",
    image: reviewer1,
    feedback:
      "I had a great experience working with SyntriDigital. They were very friendly and easy to work with, I would definitely recommend them to anyone looking for [service provided].",
  },
  {
    name: "Mùchén Yŭxuān",
    country: "China",
    image: reviewer2,
    feedback:
      "我最近有幸与 SyntriDigital 合作，并对结果非常满意。他们非常专业，确保一切都让我满意。我将来肯定会再次与他们合作。",
  },
  {
    name: "Charlotte George",
    country: "Australia",
    image: reviewer4,
    feedback:
      "I was very impressed with the quality of service that I received from SyntriDigital. They were very knowledgeable and helped me navigate a complex process with ease. ",
  },
  {
    name: "Williams Arthur Junior",
    country: "United Kingdom",
    image: reviewer3,
    feedback:
      "They were very responsive and always available to answer my questions. They made the entire process easy and stress-free, and I really appreciated their hard work.",
  },
  {
    name: "Thandiwe Lerato",
    country: "South Africa",
    image: reviewer6,
    feedback:
      "Greetings from South Africa. Guys, I must say this is the best platform I have ever traded with. They are just the best.",
  },
  {
    name: "Frederick Anselm",
    country: "Germany",
    image: "../assets/testimonial/reviewer5.jpg",
    feedback:
      "Ich möchte Ihnen, Syntri Digital, dafür danken, dass Sie mir Krypto-Bildung vermitteln, da ich jetzt bequem 9,5 BTC monatlich verdiene.",
  },
  {
    name: "Günter Karl",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=300&h=300&crop=faces&fit=crop",
    feedback:
      "Wir konnten die Höhen und Tiefen des Marktes immer ignorieren und voll investiert bleiben. Vielen Dank an Syntri Digital, die mir geholfen haben, durch die Durchführung von Trades auf dieser Plattform über 12 BTC zu verdienen.",
  },
  {
    name: "Alexander Leonard",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&crop=faces&fit=crop",
    feedback:
      "Habe auch während der Bären-Saison stetige Gewinne gemacht, einfach durch den Handel mit Synti Digital-Strategien – sehr zu empfehlen!",
  },
  {
    name: "Emma Mila",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&crop=faces&fit=crop",
    feedback:
      "Ik kom uit Nederland. Nog steeds glimlachend! Het is echt heel nuttig geweest om iets nieuws te proberen.",
  },
  {
    name: "Anouk Grace",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&crop=faces&fit=crop",
    feedback:
      "Het voelt als een geweldige beslissing om dit nieuwe pad in te slaan met Syntri Digital, en mijn portfolio heeft er echt baat bij gehad.",
  },
  {
    name: "Fenna Anna",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&crop=faces&fit=crop",
    feedback:
      "Cryptohandel met Syntri Digital is een gamechanger geweest voor mijn financiën, ik ben er zo dankbaar voor 😊.",
  },
  {
    name: "Lieselotte Margaret",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300&h=300&crop=faces&fit=crop",
    feedback:
      "Syntri Digital heeft me de tools en strategieën gegeven om succesvol te navigeren in de cryptomarkt.",
  },
  {
    name: "Hans Stefan",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&crop=faces&fit=crop",
    feedback:
      "Ich bin auf einer Erfolgssträhne, seit ich Syntri Digital verfolge.",
  },
  {
    name: "Christoph Armin",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&crop=faces&fit=crop",
    feedback:
      "Ich komme aus Deutschland und habe in weniger als 18 Tagen 4,7 BTC mit 1,8 BTC Daytrading gemacht.",
  },
  {
    name: "Bernard Anselm",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=300&h=300&crop=faces&fit=crop",
    feedback:
      "Ich lebe hier in Deutschland, bin ein Anfänger und habe bei meinem ersten Handelsversuch 3,04 BTC verdient.",
  },
  {
    name: "Adalbert Frederick",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1614289371518-0e87d7d3e3a2?w=300&h=300&crop=faces&fit=crop",
    feedback:
      "Syntri Digital hat meine Einstellung zum Trading verändert und ich liebe es.",
  },
  {
    name: "Achim Maximilian",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=300&h=300&crop=faces&fit=crop",
    feedback:
      "Die Investition in den Kryptowährungshandel mit Syntri Digital ist eine der glücklichsten Entscheidungen, die ich je getroffen habe.",
  },
  {
    name: "Lukas Carl",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&crop=faces&fit=crop",
    feedback:
      "Die digitale Beratung und Betreuung durch Syntri ist tatsächlich die beste Investmentplattform.",
  },
  {
    name: "Leo Henry",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1614270532523-e1978d1f9b10?crop=faces&fit=crop&w=300&h=300",
    feedback:
      "Syntri Digital ist eine großartige Gelegenheit für neue Investoren, in den Markt einzusteigen.",
  },
  {
    name: "Carl Conrad",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?crop=faces&fit=crop&w=300&h=300",
    feedback:
      "Ich bin froh, dass ich die Chance, mit Syntri Digital ein Gewinner zu werden, nicht verpasst habe.",
  },
  {
    name: "Heinrich Max",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1614289371518-722f2615943d?crop=faces&fit=crop&w=300&h=300",
    feedback:
      "Syntri Digital als Neuling zu entdecken und die Art, wie sie mit ihren Kunden kommuniziert, ist genau das, was jeder braucht.",
  },
];

const TestimonialItem = ({ testimonial }) => (
  <Box
    sx={{
      backgroundColor: "#1288c9",
      padding: { xs: "100px 40px 30px 40px", md: "30px 32px 30px 90px" },
      margin: { xs: "90px 15px 0", md: "50px 20px 50px 120px" },
      borderRadius: { xs: "40px", md: "0 100px 100px 0" },
      color: "#fff",
      position: "relative",
      border: "5px solid #e2e3e8",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
    }}
  >
    <Box
      sx={{
        width: 210,
        height: 210,
        borderRadius: "50%",
        border: "14px solid #e2e3e8",
        position: "absolute",
        top: { xs: "-85px", md: "-15px" },
        left: { xs: "50%", md: "-120px" },
        transform: { xs: "translateX(-50%)", md: "none" },
        overflow: "hidden",
      }}
    >
      <img
        src={testimonial.image}
        alt={testimonial.name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
    <Box
      sx={{
        width: { xs: "100%", md: "35%" },
        padding: "28px 25px",
        borderRight: { xs: "none", md: "1px solid #e2e3e8" },
        textAlign: { xs: "center", md: "left" },
        mb: { xs: 2, md: 0 },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          fontWeight: 700,
        }}
      >
        {testimonial.name}
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "12px", marginTop: "5px" }}>
        {testimonial.country}
      </Typography>
    </Box>
    <Box
      sx={{
        width: { xs: "100%", md: "65%" },
        fontSize: "15px",
        letterSpacing: "0.5px",
        padding: { xs: "0 20px", md: "28px 0 28px 28px" },
        position: "relative",
      }}
    >
      <Typography
        variant="body1"
        sx={{ paddingLeft: { xs: "30px", md: "30px" }, fontStyle: "italic" }}
      >
        {testimonial.feedback}
      </Typography>
    </Box>
  </Box>
);

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ textAlign: "center", py: 5, px: 1 }}>
      <Typography variant="h3" gutterBottom>
        Our Review
      </Typography>
      <Typography variant="h5" gutterBottom>
        More Than 20,000+ Happy Customers Trust Our Service
      </Typography>
      <Box sx={{ position: "relative", height: { xs: "600px", md: "400px" } }}>
        {testimonials.map((testimonial, index) => (
          <Slide
            direction="left"
            in={activeIndex === index}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 500, exit: 500 }}
            key={index}
          >
            <Box sx={{ position: "absolute", width: "100%" }}>
              <TestimonialItem testimonial={testimonial} />
            </Box>
          </Slide>
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialSection;
