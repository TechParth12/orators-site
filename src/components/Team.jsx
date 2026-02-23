import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const teamMembers = [
  {
    name: "Yashika Rajdev",
    role: "President",
    image: "/images/team/member1.jpg",
    intro: "Grateful on the outside and a powerhouse within, Yashika Leads with quiet confidence, geniune kindness, and unmistakebale boss energy."
  },
  {
    name: "Samarth Shrivastava",
    role: "Vice President",
    image: "/images/team/member2.jpg",
    intro: "An NCC man through and through, Samarth brings discipline, structure, and accountability to every responsibility he takes on."
  },
  {
    name: "Parth Krishna Tripathi",
    role: "Event Management Lead",
    image: "/images/team/member3.jpg",
    intro: "From meticulous planning to flawless execution, he's one of the key minds behind every well-managed event."
  },
  {
    name: "Karan Jaisinghani",
    role: "Event Management Lead",
    image: "/images/team/member4.jpg",
    intro: "He's serious when it comes to work and flawless in execution, Karan ensures every event is planned, coordinated and delivered to perfection."
  },
  {
    name: "Isha Baraskar",
    role: "Anchor's Lead",
    image: "/images/team/member5.jpg",
    intro: "Mindful, confident, and deeply inspiring, Ms. Isha leads the stage with grace and clarity. Her active presence and calm energy set the perfect tone for every event."
  },
  {
    name: "Shashank Francis",
    role: "Anchor's Lead",
    image: "/images/team/member6.jpg",
    intro: "Energetic, amazing, and effortlessly blendable, Mr. Shashank connects with everyone around him with ease. A true people-person who adds warm and vibrance everywhere he goes."
  },
  {
    name: "Ragni Patel",
    role: "Backend Lead",
    image: "/images/team/member7.jpg",
    intro: "Charismatic, multi-talented, and dependable, Ragini is the tru backbone of our management. From handling responisibilities behind the scenes to shining through her talent, she truly does it all."
  },
  {
    name: "Vatan Chavke",
    role: "Backend Lead",
    image: "/images/team/member8.jpg",
    intro: "Vatan is calm, composed, and deeply reliable. Working silently behind the scenes, he ensures everything runs smoothly without seeking spotlight."
  },
  {
    name: "Shivam Pandre",
    role: "Backend Lead",
    image: "/images/team/member9.jpg",
    intro: "As Backend Lead, he ensures everything flows seamlessly behind the scenes. Shivam balances responsibility with masti like no one else."
  },
  {
    name: "Aaditya Bhatt",
    role: "Graphics Lead",
    image: "/images/team/member10.jpg",
    intro: "The best editor in town, Aaditya is a poet, editor, artist, gym enthusiast, and creator all in one. He frames ideas just as perfectly as his edits.."
  },
  {
    name: "Adarsh Yadav",
    role: "Graphics Lead",
    image: "/images/team/member11.jpg",
    intro: "Inspired by travel, long rides, and sports, his designs carry motion, depth, and emotion. Minimal. Premium. Powerful. That's the Adarsh Signature."
  },
  {
    name: "Shantanu Lokhande",
    role: "Graphics Lead",
    image: "/images/team/member12.jpg",
    intro: "A true free spirit at heart, Shantanu is the creative force behind our graphics, PPTs, and videos. He brings ideas to life with ease."
  },
  {
    name: "Aditi Rajpurohit",
    role: "Content Lead",
    image: "/images/team/member13.jpg",
    intro: "The mind and heart behind it all, Aditi is the writer, poet, and artist who pens every word that shapes the club from notes to narratives."
  },
  {
    name: "Suryansh Sharma",
    role: "Content Lead",
    image: "/images/team/member14.jpg",
    intro: "A creative writer with unstoppable momentum, who keeps every moment engaging and alive. Give him the mic, and watch the event come alive."
  },
  {
    name: "Shaily Yadav",
    role: "Social Media Lead",
    image: "/images/team/member15.jpg",
    intro: "Filled with boundless enthusiasm and creativity, Shaily bring ideas to life with her top-notch aesthetic sense. She ensures our digital presence feels as alive as our communicty"
  },
  {
    name: "Sarthak Bhargava",
    role: "Social Media Lead",
    image: "/images/team/member16.jpg",
    intro: "The most lazy yet effortlessly charming soul. His calm approach and creative eye help shape engaging content with ease."
  }
]

export default function Team() {
  return (
    <section
      id="team"
      style={{
        minHeight: "100vh",
        padding: "120px 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        zIndex: 2
      }}
    >
      {/* Section Title */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "48px",
          fontFamily: "serif",
          color: "#ffffff",
          letterSpacing: "6px",
          marginBottom: "20px"
        }}
      >
        OUR TEAM
      </motion.h2>

      {/* Divider */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          width: "60px",
          height: "3px",
          background: "linear-gradient(90deg, #7C5CFF, #D6B36A)",
          borderRadius: "10px",
          marginBottom: "60px"
        }}
      />

      {/* Team Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "30px",
          maxWidth: "1200px",
          width: "100%"
        }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.08 }}
            whileHover={{
              y: -10,
              boxShadow: "0 0 30px rgba(124,92,255,0.3)"
            }}
            style={{
              padding: "28px 20px",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(124,92,255,0.2)",
              borderRadius: "24px",
              textAlign: "center",
              cursor: "pointer",
              transition: "box-shadow 0.3s ease"
            }}
          >
            {/* Photo */}
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                margin: "0 auto 16px",
                overflow: "hidden",
                border: "2px solid rgba(124,92,255,0.3)"
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* Name */}
            <h3
              style={{
                fontSize: "17px",
                fontFamily: "serif",
                color: "#ffffff",
                marginBottom: "4px",
                letterSpacing: "1px"
              }}
            >
              {member.name}
            </h3>

            {/* Role */}
            <p
              style={{
                fontSize: "11px",
                color: "#7C5CFF",
                fontFamily: "sans-serif",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "10px"
              }}
            >
              {member.role}
            </p>

            {/* Intro */}
            <p
              style={{
                fontSize: "13px",
                color: "#A8B0C0",
                lineHeight: "1.6",
                fontFamily: "sans-serif"
              }}
            >
              {member.intro}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}