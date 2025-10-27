export const categories = {
  PROBLEM_SOLVING: "Problem Solving & Deep Work",
  PRODUCTIVITY: "Productivity & Execution",
  LEARNING: "Learning & Adaptability",
  MINDSET: "Emotional Mastery & Mindset",
  STRATEGY: "Strategy & Social Dynamics",
};

export const categoryColors = {
  [categories.PROBLEM_SOLVING]: "#d4a574", // muted brown
  [categories.PRODUCTIVITY]: "#e2725b", // orange
  [categories.LEARNING]: "#8fa57d", // muted green
  [categories.MINDSET]: "#c17c74", // brownish red
  [categories.STRATEGY]: "#b8865e", // golden brown
};

export const initialPrinciples = [
  // Problem Solving & Deep Work
  {
    id: 1,
    name: "First-Principles Thinking",
    definition:
      "Break down complex problems to their most basic, undeniable truths.",
    category: categories.PROBLEM_SOLVING,
  },
  {
    id: 2,
    name: "Kidlin's Law",
    definition:
      "If you can't simply explain your problem, you don't fully understand it yet.",
    category: categories.PROBLEM_SOLVING,
  },
  {
    id: 3,
    name: "The Pareto Principle (80/20 Rule)",
    definition: "80% of your results come from 20% of your efforts.",
    category: categories.PROBLEM_SOLVING,
  },
  {
    id: 4,
    name: "The Feynman Technique",
    definition:
      "The best way to learn something is to explain it in simple terms.",
    category: categories.PROBLEM_SOLVING,
  },
  {
    id: 5,
    name: "The Pomodoro Technique",
    definition:
      "Using a timer to break work into short, focused bursts with breaks.",
    category: categories.PROBLEM_SOLVING,
  },
  {
    id: 6,
    name: "The Principle of Incubation",
    definition:
      "Your subconscious mind solves problems best when you step away.",
    category: categories.PROBLEM_SOLVING,
  },
  {
    id: 7,
    name: "Systems Thinking",
    definition:
      "Understand how all the parts of a system connect and affect each other before acting.",
    category: categories.PROBLEM_SOLVING,
  },
  {
    id: 8,
    name: "Divergent Thinking",
    definition:
      "Brainstorm as many ideas or options as possible before picking one.",
    category: categories.PROBLEM_SOLVING,
  },
  {
    id: 9,
    name: "The Einstein Rule",
    definition:
      "You can't solve a problem with the same level of thinking that created it.",
    category: categories.PROBLEM_SOLVING,
  },

  // Productivity & Execution
  {
    id: 10,
    name: "The Two-Minute Rule",
    definition: "If a task takes less than two minutes, do it immediately.",
    category: categories.PRODUCTIVITY,
  },
  {
    id: 11,
    name: "Parkinson's Law",
    definition: "Work will expand to fill the time you give it.",
    category: categories.PRODUCTIVITY,
  },
  {
    id: 12,
    name: "Bias for Action",
    definition:
      "It's better to take action and learn from mistakes than to do nothing.",
    category: categories.PRODUCTIVITY,
  },
  {
    id: 13,
    name: "The Eisenhower Matrix",
    definition: "Sort tasks by what's Urgent and what's Important.",
    category: categories.PRODUCTIVITY,
  },
  {
    id: 14,
    name: "The Law of Comparative Advantage",
    definition: "Do what you're best at and pay others to do the rest.",
    category: categories.PRODUCTIVITY,
  },
  {
    id: 15,
    name: "Leverage / Efficiency Mindset",
    definition:
      "Avoid low-level repetition; build a system or automate it instead.",
    category: categories.PRODUCTIVITY,
  },
  {
    id: 16,
    name: "Forcing Function",
    definition:
      "A self-imposed deadline or rule that forces you to take action.",
    category: categories.PRODUCTIVITY,
  },
  {
    id: 17,
    name: "Atomic Habits",
    definition: "Getting 1% better every day through small, repeated actions.",
    category: categories.PRODUCTIVITY,
  },
  {
    id: 18,
    name: "Deliberate Practice",
    definition:
      "Knowledge is not power; the application of knowledge is power.",
    category: categories.PRODUCTIVITY,
  },

  // Learning & Adaptability
  {
    id: 19,
    name: "Meta-Learning (The Master Skill)",
    definition:
      "The skill of being aware of and controlling your own learning process.",
    category: categories.LEARNING,
  },
  {
    id: 20,
    name: "Gestalt Principles",
    definition:
      "The overall picture and pattern is more important than the individual parts.",
    category: categories.LEARNING,
  },
  {
    id: 21,
    name: "Context-Dependent Memory",
    definition:
      "Your brain recalls information better in the same environment you learned it.",
    category: categories.LEARNING,
  },
  {
    id: 22,
    name: "The Expert Principle",
    definition:
      "A five-minute chat with someone who's done it is worth hours of advice from those who haven't.",
    category: categories.LEARNING,
  },
  {
    id: 23,
    name: "Proximity Principle",
    definition:
      "You can't become what you can't see; put yourself in the environment of your goals.",
    category: categories.LEARNING,
  },
  {
    id: 24,
    name: "Cunningham's Law",
    definition:
      "The best way to get the right answer is to post the wrong one and be corrected.",
    category: categories.LEARNING,
  },
  {
    id: 25,
    name: "Schumpeterian Principle (Creative Destruction)",
    definition:
      "You must break down old ways of thinking to make way for better ones.",
    category: categories.LEARNING,
  },

  // Emotional Mastery & Mindset
  {
    id: 26,
    name: "Stoicism & Memento Mori",
    definition:
      "Remembering life is short helps you focus on what truly matters.",
    category: categories.MINDSET,
  },
  {
    id: 27,
    name: "Emotional Intelligence (EQ)",
    definition:
      "The skill of being smart about your own and other people's feelings.",
    category: categories.MINDSET,
  },
  {
    id: 28,
    name: "Emotional Regulation",
    definition:
      "The ability to manage your emotions instead of letting them manage you.",
    category: categories.MINDSET,
  },
  {
    id: 29,
    name: "Emotional Signaling",
    definition:
      "Your feelings are not commands; they are data about your needs.",
    category: categories.MINDSET,
  },
  {
    id: 30,
    name: "Mindfulness & Anchoring",
    definition:
      "Use your breath to pull your mind from the past back to the present.",
    category: categories.MINDSET,
  },
  {
    id: 31,
    name: "Cognitive Reframing",
    definition: "Talk to yourself like you would talk to a good friend.",
    category: categories.MINDSET,
  },
  {
    id: 32,
    name: "Growth Mindset & Grit",
    definition:
      "Your abilities aren't fixed; you achieve goals through determination.",
    category: categories.MINDSET,
  },
  {
    id: 33,
    name: "Psychological Projection",
    definition: "What people say about you is often a story about themselves.",
    category: categories.MINDSET,
  },

  // Strategy & Social Dynamics
  {
    id: 34,
    name: "Game Theory",
    definition:
      "Life is about finding the 'win-win' moves that make cooperation beneficial.",
    category: categories.STRATEGY,
  },
  {
    id: 35,
    name: "The Law of Reciprocity",
    definition:
      "All relationships are built on a mutual give-and-take of value.",
    category: categories.STRATEGY,
  },
  {
    id: 36,
    name: "The Oxygen Mask Principle",
    definition:
      "You have to secure your own well-being before you can help others.",
    category: categories.STRATEGY,
  },
  {
    id: 37,
    name: "The Law of Averages",
    definition:
      "You are the average of the five people you spend the most time with.",
    category: categories.STRATEGY,
  },
  {
    id: 38,
    name: "Calculated Risk-Taking",
    definition: "Don't gamble, but be willing to make a smart bet on yourself.",
    category: categories.STRATEGY,
  },
  {
    id: 39,
    name: "Strategic Door Slam",
    definition:
      "Your peace is non-negotiable; sometimes you must walk away for good.",
    category: categories.STRATEGY,
  },
  {
    id: 40,
    name: "Shu-Ha-Ri (The 'Shu' Stage)",
    definition:
      "In learning, first obey the rules perfectly before you innovate.",
    category: categories.STRATEGY,
  },
];
