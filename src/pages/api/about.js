export default function handler(req, res){
    res.status(200).json({about: {
    title: "About me",
    intro: "Hi, I'm Kayden a web deisgner and developer from Saskatchewan",
    toolsIntro: "My primary tools of choice includes:",
    tools: [
      "Figma",
      "HTML",
      "CSS",
      "Javascript",
      "PHP"
    ],
    passion: "Beyond website development, I like video games, movies, reading, and being active outside, usually bring my beagle, Odin with me. My biggest fixation is NANANANANA BATMAN! I think he is really cool and collect all sorts of merchandise of him.",
    approach: "I try to get things done my way, but if that doesn't work I reach out to other methods. In the end I want a end product I and my client are proud of."
  }});
}