import Message from "./Message";

const Conversation = () => {
  const messages = [
    { name: "George", text: "Hey Ben, how’s it going?" },
    {
      name: "Ben",
      text: "Hey George! I’m good, just finished up a project at work. What about you?",
    },
    {
      name: "George",
      text: "Not bad, just trying to get through the week. What project were you working on?",
    },
    {
      name: "Ben",
      text: "We were developing a new feature for our app. It was pretty challenging, but we finally got it done. I’m just glad it’s over!",
    },
    { name: "George", text: "That sounds intense. What’s the new feature?" },
    {
      name: "Ben",
      text: "It’s a chat feature that allows users to communicate in real-time. We had to deal with a lot of technical issues, but it’s working smoothly now.",
    },
    {
      name: "George",
      text: "That’s awesome! I’m sure the users will love it.",
    },
    {
      name: "Ben",
      text: "I hope so. What about you? Any interesting plans for the weekend?",
    },
    {
      name: "George",
      text: "I’m thinking of going on a hike. The weather’s supposed to be nice, so I might take advantage of it.",
    },
    {
      name: "Ben",
      text: "That sounds like a great idea. Where are you planning to go?",
    },
    {
      name: "George",
      text: "There’s this trail near the mountains I’ve been wanting to try out. It’s supposed to have some amazing views.",
    },
    {
      name: "Ben",
      text: "That sounds amazing. Maybe I’ll join you if you don’t mind some company.",
    },
    {
      name: "George",
      text: "Of course, the more the merrier! I’ll send you the details later.",
    },
    {
      name: "Ben",
      text: "Perfect, looking forward to it. By the way, did you catch the game last night?",
    },
    {
      name: "George",
      text: "I did! What a match, right? I couldn’t believe that last-minute goal.",
    },
    {
      name: "Ben",
      text: "I know, it was insane! I was on the edge of my seat the whole time.",
    },
    {
      name: "George",
      text: "Same here. It’s going to be a hot topic at work today, I’m sure.",
    },
    {
      name: "Ben",
      text: "For sure. Well, I better get going. Talk to you later?",
    },
    { name: "George", text: "Sounds good. Catch you later, Ben!" },
    { name: "Ben", text: "Bye, George!" },
  ];

  return (
    <div>
      {messages.map((message, index) => (
        <Message key={index} name={message.name} text={message.text} />
      ))}
    </div>
  );
};

export default Conversation;
