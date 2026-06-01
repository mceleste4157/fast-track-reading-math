// stories.js — Florida FAST ELA Grade 4 B.E.S.T. aligned stories
// Each story targets specific benchmarks listed in the comment above it.

const STORIES = [

  // ── 1 ── INFORMATIONAL | ELA.4.R.2.2 (central idea + details) | ELA.4.V.1.3
  {
    id: 'florida-everglades',
    title: 'The Heart of Florida: The Everglades',
    topic: 'florida-nature',
    coverEmoji: '🌿',
    coverColor: '#059669',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 390,
    readTimeMin: 2,
    text: `If you flew over southern Florida in an airplane, you might look down and see miles of pale green grass stretching to the horizon, interrupted by dark pools of water and clusters of twisted trees. That sea of grass is the Everglades — a vast, slow-moving river unlike any other place on Earth.

The Everglades is not a swamp or a lake. It is actually a wide, shallow river, roughly 60 miles across and only inches deep, that flows very slowly southward from Lake Okeechobee to Florida Bay. Because it moves so gently, visitors can wade right through it. Scientists call the Everglades a **wetland** — land where water covers the soil for most of the year. This permanent water creates a rich system of life found nowhere else on the planet.

The **biodiversity** of the Everglades is extraordinary. More than 360 bird species live or feed there. The roseate spoonbill, pink as a flamingo, scoops through the shallow water with its flat, spoon-shaped bill. The great blue heron stands nearly four feet tall and moves through the marsh without making a ripple. The American alligator is one of the Everglades' most important animals — not just because it is powerful, but because of what it builds. In dry season, alligators dig deep holes called "gator holes" that hold water long after the rest of the marsh dries out. Fish, turtles, birds, and snails crowd into these holes to survive, making the alligator a **keystone species** — one whose actions are essential for the whole **ecosystem** to function.

For decades, however, the Everglades shrank. Developers drained and filled parts of it to build farms and cities. Canals were dug to redirect the natural water flow. By the late 1900s, the Everglades had lost nearly half of its original size, and many plant and animal **populations** had collapsed.

Today, the largest wetland restoration project in U.S. history — the Comprehensive Everglades Restoration Plan — is working to reverse that damage. Researchers reintroduce native plants, remove **invasive** species, and restore the original patterns of water flow. Progress is slow, but the Everglades is responding. Water birds are returning. Alligator populations are growing.

The Everglades teaches us that protecting one extraordinary place means protecting thousands of species that depend on it.`,
    vocabulary: [
      { word: 'wetland', definition: 'An area of land where water covers the soil for most of the year, supporting unique plants and animals.', example: 'The wetland was full of tall grasses, fish, and nesting birds.' },
      { word: 'biodiversity', definition: 'The variety of different living things — plants, animals, and other organisms — found in an area.', example: 'The park\'s biodiversity was remarkable, with hundreds of species of insects alone.' },
      { word: 'keystone species', definition: 'A plant or animal whose actions are so important that the entire ecosystem depends on it.', example: 'The sea otter is a keystone species because it keeps sea urchin populations in check, protecting kelp forests.' },
      { word: 'ecosystem', definition: 'A community of living things interacting with each other and their physical environment.', example: 'The coral reef ecosystem supports thousands of species of fish and invertebrates.' },
      { word: 'invasive', definition: 'Describing a species that has moved into an area where it does not naturally belong and causes harm.', example: 'The invasive pythons in the Everglades have reduced native animal populations.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'Alligators are dangerous animals that people should avoid.',
          'The Everglades is a unique and threatened ecosystem that is now being restored.',
          'Florida has more wetlands than any other state in the country.',
          'Building farms and cities is more important than protecting natural areas.'
        ],
        correctIndex: 1,
        explanation: 'The passage introduces the Everglades as extraordinary, explains its rich biodiversity, describes how it was damaged, and ends with restoration efforts — the central idea is that it is a unique and threatened place now being saved.'
      },
      {
        question: 'According to the passage, why is the alligator called a "keystone species"?',
        options: [
          'Because it is the largest and most powerful predator in the Everglades.',
          'Because tourists come from all over the world to see alligators.',
          'Because it digs gator holes that allow other animals to survive the dry season.',
          'Because scientists have studied alligators longer than any other Everglades animal.'
        ],
        correctIndex: 2,
        explanation: 'The passage explains that gator holes hold water after the rest of the marsh dries out, allowing fish, turtles, birds, and snails to survive — making the alligator\'s actions essential for the whole ecosystem.'
      },
      {
        question: 'What does the word "invasive" MOST LIKELY mean based on how it is used in the passage?',
        options: [
          'A species that has lived in an area for thousands of years.',
          'A species that has moved into a new area and causes harm.',
          'A species that is endangered and needs protection.',
          'A species that scientists have recently discovered.'
        ],
        correctIndex: 1,
        explanation: 'The passage mentions "invasive species" in the context of restoration — removing them is part of healing the Everglades. Invasive species are ones that don\'t belong there naturally and cause damage.'
      },
      {
        question: 'How does the author ORGANIZE the information in this passage?',
        options: [
          'By comparing the Everglades to other wetlands around the world.',
          'By describing the problem, the damage it caused, and the solution underway.',
          'By listing all the animals of the Everglades in order of importance.',
          'By following a single animal through its daily life in the Everglades.'
        ],
        correctIndex: 1,
        explanation: 'The passage describes what the Everglades is and its value, then explains how it was damaged, and finally describes the restoration efforts — this is a problem/solution structure.'
      },
      {
        question: 'Which detail BEST supports the idea that the Everglades provides habitat for a wide variety of wildlife?',
        options: [
          'The Everglades flows slowly southward from Lake Okeechobee to Florida Bay.',
          'Developers drained and filled parts of it to build farms and cities.',
          'More than 360 bird species live or feed there, including the roseate spoonbill and great blue heron.',
          'The Comprehensive Everglades Restoration Plan is working to reverse damage.'
        ],
        correctIndex: 2,
        explanation: 'Mentioning more than 360 bird species and naming specific examples directly supports the idea that the Everglades supports an extraordinary variety of wildlife.'
      }
    ]
  },

  // ── 2 ── LITERARY | ELA.4.R.1.1 (character/conflict) | ELA.4.R.1.2 (theme)
  {
    id: 'elenas-idea',
    title: "Elena's Brilliant Idea",
    topic: 'character',
    coverEmoji: '🔬',
    coverColor: '#7c3aed',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 410,
    readTimeMin: 2,
    text: `Elena had been staring at the same blank page for twenty minutes when her little brother Marco walked in with a bag of crackers.

"Whatcha working on?" he asked, flopping onto her bed.

"I'm NOT working on my science fair project," Elena said. "I have zero ideas. My brain is completely empty."

Marco crunched loudly. "Bugs are cool. You could do something with bugs."

"Nobody does bugs," she snapped. She immediately felt sorry. Marco was only trying to help. "Sorry," she said. "I just feel like everyone else already has an amazing idea and I have nothing."

For the next hour, she searched websites, flipped through library books, and crumpled up three sheets of brainstorming paper. Every idea felt either boring or too hard. She could feel her **confidence** shrinking with each crumpled page.

Then, during dinner, her father poured water from one pitcher to another. Elena watched the water splash and swirl. She thought about how she had noticed that the fountain at school turned the water different colors. And suddenly — slowly, the way a light bulb warms up before it's fully bright — an idea began to grow.

What if she tested whether the color of a container affects how quickly water heats up in the sun?

The idea seemed almost too simple. But she pushed past that feeling. She spent two weeks carefully setting up experiments, using identical containers painted different colors — white, black, red, and silver. She recorded temperatures at regular intervals, made neat **data** tables and graphs, and researched why darker colors absorb more heat. She practiced explaining her results until she could say them clearly without looking at her notes.

On the day of the science fair, Elena stood at her display and answered every judge's question without **hesitating**. She didn't win first place, but she won second — and her teacher called her project "the most carefully tested in the room."

Walking home afterward, Marco asked her what she had learned.

Elena thought for a moment. "That great ideas don't arrive all at once," she said. "They start as small sparks. You just have to refuse to give up until they catch fire."

Marco nodded seriously. "Like bugs," he said.

Elena laughed. "Exactly like bugs."`,
    vocabulary: [
      { word: 'confidence', definition: 'A feeling of trust in your own abilities; believing you can succeed.', example: 'After winning the spelling bee, Mia\'s confidence in her reading skills grew.' },
      { word: 'data', definition: 'Facts and numbers collected through observation or experiments.', example: 'The scientist recorded her data carefully in a notebook after each test.' },
      { word: 'hesitating', definition: 'Pausing before doing something because of doubt or nervousness.', example: 'Without hesitating, the firefighter ran into the burning building to help.' },
      { word: 'intervals', definition: 'Spaces of time between events; regular gaps.', example: 'She checked the temperature at ten-minute intervals throughout the experiment.' },
      { word: 'absorb', definition: 'To take in or soak up something, such as heat, light, or liquid.', example: 'Dark-colored surfaces absorb more heat from the sun than light-colored ones.' }
    ],
    questions: [
      {
        question: 'What is the CONFLICT Elena faces at the beginning of the story?',
        options: [
          'Her brother breaks her completed science fair project.',
          'She cannot think of an idea for her science fair project and feels discouraged.',
          'Her teacher tells her she is not allowed to enter the science fair.',
          'She runs out of materials to complete her experiment.'
        ],
        correctIndex: 1,
        explanation: 'Elena says her brain is "completely empty" and she has "zero ideas." Her internal conflict is the pressure of needing an idea while feeling stuck and discouraged.'
      },
      {
        question: 'What is the THEME of this story?',
        options: [
          'Science fairs are more important than sports or other activities.',
          'Younger siblings always have the best ideas.',
          'Persistence and refusing to give up turn small sparks into great ideas.',
          'Only students who study hardest win science fair competitions.'
        ],
        correctIndex: 2,
        explanation: 'Elena herself states the theme at the end: "great ideas don\'t arrive all at once. They start as small sparks. You just have to refuse to give up until they catch fire."'
      },
      {
        question: 'How does Elena\'s CHARACTER CHANGE from the beginning to the end of the story?',
        options: [
          'She goes from being confident to feeling unsure of herself.',
          'She starts disappointed and ready to quit, but becomes determined and proud of her careful work.',
          'She learns to ask for help instead of working alone.',
          'She gives up on science and discovers she prefers art instead.'
        ],
        correctIndex: 1,
        explanation: 'At the beginning, Elena is snapping at her brother and her confidence is "shrinking." By the end, she stands at her display answering questions "without hesitating" and wins second place — showing clear growth from discouragement to determination.'
      },
      {
        question: 'How does Elena find her idea for the project?',
        options: [
          'She reads about color and heat in a library book.',
          'Her teacher gives her a suggestion after class.',
          'Watching water pour at dinner connects to a memory about the school fountain, sparking her idea.',
          'Marco tells her about a project he saw online.'
        ],
        correctIndex: 2,
        explanation: 'The passage says watching water pour made her think of the school\'s colored fountain, and "slowly...an idea began to grow." Her idea came from making an unexpected connection.'
      },
      {
        question: 'Read this sentence: "She could feel her confidence shrinking with each crumpled page." What does this suggest about Elena?',
        options: [
          'She was running out of paper to write on.',
          'She was frustrated that her ideas were not good enough, which made her feel less sure of herself.',
          'She was angry at her teacher for giving such a difficult assignment.',
          'She was happy to be working on a difficult challenge.'
        ],
        correctIndex: 1,
        explanation: 'Each crumpled page represents an idea she rejected. "Confidence shrinking" is figurative language — it shows that every failed attempt made Elena feel less capable and more discouraged.'
      }
    ]
  },

  // ── 3 ── INFORMATIONAL | ELA.4.R.2.1 (text structure) | ELA.4.R.2.4 (claim + evidence)
  {
    id: 'monarch-migration',
    title: 'The Mystery of Monarch Migration',
    topic: 'science',
    coverEmoji: '🦋',
    coverColor: '#d97706',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 400,
    readTimeMin: 2,
    text: `Every fall, something remarkable happens across North America. Millions of monarch butterflies — delicate insects with orange-and-black wings no larger than a child's palm — begin flying south. Their destination is a cluster of mountain forests in central Mexico, more than 2,000 miles away. What makes this **migration** one of nature's greatest mysteries is not just the distance, but the fact that no single butterfly ever makes the round trip twice.

Monarchs live only four to six weeks during the summer. Because of this short lifespan, it takes three or four **generations** to travel from Mexico northward to the United States and Canada in spring and summer. Each generation flies part of the route, lays eggs on milkweed plants, and dies. The next generation hatches, continues north, and the cycle repeats. Yet every fall, the generation that hatches is mysteriously different. Called the "super generation," these monarchs live six to eight months — long enough to make the full journey back to Mexico, spend the winter, and return north in spring.

Scientists are still studying exactly how monarchs find their way. Research shows they use the sun as a compass — structures in their antennae detect the sun's angle and help them maintain a southwestern heading in fall. On cloudy days, they rely on a second system: a built-in sensitivity to Earth's magnetic field that acts like a backup **navigation** tool.

The monarch population is declining, and three causes are responsible. First, milkweed — the only plant monarch caterpillars can eat — has been reduced by widespread pesticide use and land development. Second, logging in the Mexican mountain forests has destroyed the trees where monarchs cluster for winter. Third, climate change is shifting seasonal patterns, disrupting the signals that tell monarchs when to migrate. In the early 1990s, up to one billion monarchs made the journey. Recent counts show fewer than 250 million.

**Conservation** efforts are responding on all fronts. Volunteers are planting milkweed gardens. Mexico has created protected **reserves** around the winter forests. Scientists are tagging and tracking thousands of monarchs to better understand their routes. Every milkweed plant — even one in a backyard — is a small step toward keeping this extraordinary migration alive.`,
    vocabulary: [
      { word: 'migration', definition: 'The seasonal movement of animals from one place to another, usually to find food or better conditions.', example: 'The geese\'s migration took them from Canada to the warmer Gulf Coast each winter.' },
      { word: 'generations', definition: 'All the individuals born and living at about the same time; one complete cycle of birth-to-birth.', example: 'Several generations of the same family had lived in that farmhouse.' },
      { word: 'navigation', definition: 'The skill or process of finding the correct route to get from one place to another.', example: 'Without a map or phone signal, the hikers relied on the stars for navigation.' },
      { word: 'conservation', definition: 'The careful protection of natural resources, animals, or environments from harm or destruction.', example: 'The conservation program helped the wolf population recover in the national park.' },
      { word: 'reserves', definition: 'Protected areas of land set aside by governments where wildlife and natural resources are safeguarded.', example: 'The nature reserve was off-limits to development, protecting thousands of animal species.' }
    ],
    questions: [
      {
        question: 'What is the MAIN IDEA of this passage?',
        options: [
          'Monarch butterflies are the most colorful insects in North America.',
          'The monarch migration is a remarkable but threatened natural event that people are working to protect.',
          'Milkweed is a plant that scientists want to grow in every garden.',
          'Mexico is an important location for winter tourism because of its warm weather.'
        ],
        correctIndex: 1,
        explanation: 'The passage describes the migration as "remarkable," explains how it works, identifies three threats, and describes conservation responses — all supporting the idea that it is both extraordinary and in danger.'
      },
      {
        question: 'According to the passage, what makes the "super generation" of monarchs different from summer generations?',
        options: [
          'They are twice the size of regular monarch butterflies.',
          'They travel a different, shorter route than previous generations.',
          'They live six to eight months — long enough to complete the full migration to Mexico and back.',
          'They are born with knowledge from previous generations passed down genetically.'
        ],
        correctIndex: 2,
        explanation: 'The text defines the super generation as monarchs that "live six to eight months — long enough to make the full journey back to Mexico, spend the winter, and return north in spring."'
      },
      {
        question: 'The author states that the monarch population is declining. What evidence does the author provide to SUPPORT this claim?',
        options: [
          'Monarchs are being caught and sold illegally in some countries.',
          'The population dropped from up to one billion in the early 1990s to fewer than 250 million recently.',
          'Scientists have stopped tagging and tracking monarchs because there are too few left.',
          'Monarchs can no longer find enough flowers to drink nectar from along their route.'
        ],
        correctIndex: 1,
        explanation: 'The author directly compares the past population (up to one billion in the early 1990s) to the current count (fewer than 250 million) — specific numbers that provide strong evidence for the claim of decline.'
      },
      {
        question: 'How does the author organize the information about causes of decline and conservation efforts?',
        options: [
          'By comparing monarch butterflies to other migrating animals.',
          'By listing causes of a problem and then describing solutions being used to address them.',
          'By telling the story of one monarch butterfly\'s entire migration journey.',
          'By explaining events in the order they happened throughout history.'
        ],
        correctIndex: 1,
        explanation: 'After introducing the migration, the author lists three specific causes of decline (problem) and then describes conservation responses such as planting milkweed and creating reserves (solutions) — a clear problem/solution structure.'
      },
      {
        question: 'What does the word "navigation" MOST LIKELY mean based on how it is used in the passage?',
        options: [
          'The ability to sense changes in temperature.',
          'A type of antenna found on butterflies and moths.',
          'The process of finding the correct route from one place to another.',
          'A scientific tool used by researchers to track animals.'
        ],
        correctIndex: 2,
        explanation: 'In context, the author describes monarchs using the sun and Earth\'s magnetic field to find their way south — both are methods of navigation, meaning finding the correct path to a destination.'
      }
    ]
  },

  // ── 4 ── LITERARY | ELA.4.R.1.3 (narrator perspective) | ELA.4.R.1.1 (conflict)
  {
    id: 'two-sides',
    title: 'The View from Both Sides',
    topic: 'perspective',
    coverEmoji: '👥',
    coverColor: '#2563eb',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 420,
    readTimeMin: 2,
    text: `**Jaylen's side of the story**

The worst day of fourth grade started at lunch.

Jaylen had been working on a mural design for three weeks — a detailed pencil drawing of a city skyline he planned to paint on the art room wall. He had left it on the lunch table for exactly two minutes while he stood in line for food. When he returned, Maya was leaning over his paper with a pencil in her hand.

"What are you DOING?" he snapped, snatching the paper and checking it for damage.

Maya opened her mouth, turned red, and walked away without saying a word.

Jaylen was certain she had been about to draw on his work. He could barely concentrate for the rest of the afternoon.

---

**Maya's side of the story**

Maya had spotted Jaylen's city skyline the moment she sat down. She had noticed it once before on his sketchbook and thought the detail was incredible — the tiny windows, the shading on the clouds, the way the whole skyline curved.

When Jaylen got up and left it unattended, she leaned in to look more closely at the details. She was NOT touching it.

When he grabbed it and yelled at her, her face went hot. She wanted to explain, but his expression was so angry that the words dissolved before she could say them. She spent the rest of the afternoon feeling like she had been convicted of something she never did.

---

**What really happened**

For three days, Jaylen and Maya avoided each other in class. Then their teacher paired them for a research project.

On the first day working together, Jaylen noticed Maya's sketchbook was open to a page full of detailed buildings and bridges.

"You draw architecture?" he asked, surprised.

"I love it," she said quietly. "That's actually why I was looking at your mural. I wasn't going to touch it." Her voice was **steady**, but her eyes were watching him carefully.

There was a long pause.

"I'm sorry I assumed," Jaylen said finally. He meant it. "I should have asked instead of yelled."

Maya nodded slowly. "Yeah. You should have."

They went back to work. Over the next week, their project became something neither of them had expected — something better than either could have created alone.`,
    vocabulary: [
      { word: 'perspective', definition: 'A particular way of thinking about or seeing something, based on your own experiences and position.', example: 'From the bird\'s perspective high above, the whole city looked like a tiny model.' },
      { word: 'convicted', definition: 'Found guilty of doing something wrong; judged to have committed an offense.', example: 'He felt convicted of breaking the rule even though he hadn\'t meant to.' },
      { word: 'assumed', definition: 'Believed something was true without checking whether it actually was.', example: 'She assumed the test would be easy, but it turned out to be much harder than expected.' },
      { word: 'dissolved', definition: 'Disappeared or faded away, as if melting.', example: 'His anger dissolved when he realized his friend had been trying to help, not cause trouble.' },
      { word: 'steady', definition: 'Calm, controlled, and not easily upset; not shaking or uncertain.', example: 'Though she was nervous, she kept her voice steady while presenting to the class.' }
    ],
    questions: [
      {
        question: 'Why does the author tell the same event from TWO different perspectives?',
        options: [
          'To show that Jaylen is always right and Maya is always wrong.',
          'To help the reader understand that both characters had different but reasonable interpretations of what happened.',
          'To prove that looking at someone\'s artwork is always against the rules.',
          'To show that Maya was actually planning to copy Jaylen\'s design.'
        ],
        correctIndex: 1,
        explanation: 'By showing both sides, the reader sees that Jaylen had a reason to think Maya was touching his work, and Maya had a real reason to feel wrongly accused — neither character had the full picture. This is the power of showing multiple perspectives.'
      },
      {
        question: 'From Maya\'s perspective, why did she lean over Jaylen\'s paper?',
        options: [
          'She wanted to trace his design for her own mural project.',
          'She was trying to move it out of the way to make room at the table.',
          'She was admiring the details because she loves architecture.',
          'She was writing him a note to compliment his work.'
        ],
        correctIndex: 2,
        explanation: 'Maya\'s section clearly states she "was NOT touching it" and was leaning in "to look more closely at the details" because she thought the art was incredible. Her love of architecture explains her interest.'
      },
      {
        question: 'What does the word "assumed" suggest about how the conflict between Jaylen and Maya began?',
        options: [
          'Jaylen was a dishonest person who made up stories.',
          'The conflict started because Jaylen believed something was true without first checking or asking.',
          'Jaylen had caught Maya drawing on his work before and was right to be suspicious.',
          'Maya should have explained herself before Jaylen had a chance to react.'
        ],
        correctIndex: 1,
        explanation: 'Jaylen says "I\'m sorry I assumed" — he admits that he decided Maya was guilty without asking or checking first. The conflict came from an incorrect assumption made without evidence.'
      },
      {
        question: 'How is the conflict RESOLVED at the end of the story?',
        options: [
          'Their teacher forces them to apologize to each other.',
          'Maya proves she didn\'t draw on Jaylen\'s paper by showing her own sketchbook and having an honest conversation.',
          'Jaylen decides the mural doesn\'t matter anymore and throws it away.',
          'They both apologize and agree never to sit at the same lunch table again.'
        ],
        correctIndex: 1,
        explanation: 'Seeing Maya\'s sketchbook full of architecture gives Jaylen evidence that her interest in his work was genuine. Their honest conversation — and Jaylen\'s apology for assuming — resolves the misunderstanding.'
      },
      {
        question: 'The narrator describes Maya\'s voice as "steady." What does this detail reveal about Maya\'s character?',
        options: [
          'She is not upset about what happened and has already forgotten the argument.',
          'She is calm on the outside but is carefully watching to see how Jaylen reacts.',
          'She is afraid to say anything and doesn\'t want to cause more trouble.',
          'She is still angry at Jaylen and wants him to know it.'
        ],
        correctIndex: 1,
        explanation: 'The author notes her voice was "steady" but her eyes were "watching him carefully" — this combination suggests Maya is choosing her words calmly while still paying close attention to Jaylen\'s reaction. She is controlled but alert.'
      }
    ]
  },

  // ── 5 ── INFORMATIONAL | ELA.4.R.2.3 (author's perspective) | ELA.4.R.2.4 (claim + evidence)
  {
    id: 'space-coast',
    title: "Race to the Stars: Florida's Space Coast",
    topic: 'space',
    coverEmoji: '🚀',
    coverColor: '#1e3a8a',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 400,
    readTimeMin: 2,
    text: `On a clear Florida morning, a rocket rises from the coast. Within seconds it clears the launch tower, tilts east over the Atlantic Ocean, and climbs faster than a speeding jet — faster than a speeding bullet. Hundreds of miles away, people on beaches stop and point. It is one of the most thrilling sights a human being can witness.

Florida is home to Kennedy Space Center, the launch site for nearly every major American space mission. Located on Merritt Island, along the Atlantic coast, Kennedy Space Center was selected in 1962 for very specific reasons. Florida's position close to the **equator** gives rockets a natural speed boost from Earth's rotation, making launches more **efficient**. Its flat, open coastal land provides clear space with no mountains blocking the flight path. And launching eastward over the ocean means that if a rocket fails, it falls safely into the sea rather than over a city.

Kennedy Space Center has witnessed some of the most important moments in human history. In 1969, the Apollo 11 mission launched from Kennedy, carrying astronauts Neil Armstrong and Buzz Aldrin to the Moon — the first humans to ever set foot on another world. The Space Shuttle program, which flew 135 missions from 1981 to 2011, was also based at Kennedy, helping build the International Space Station and launching dozens of **satellites** into **orbit**.

Today, a new chapter is beginning. Private companies — including SpaceX, Boeing, and Blue Origin — now launch rockets from Cape Canaveral, just south of Kennedy. SpaceX has developed reusable rockets that fly into space and then land themselves back on Earth, dramatically reducing the cost of each launch. Engineers are also working toward returning humans to the Moon and, eventually, sending astronauts to Mars.

The impact of space exploration reaches far beyond the rockets themselves. Technologies developed for NASA missions have led to everyday inventions: memory foam mattresses, invisible braces used by orthodontists, scratch-resistant eyeglass lenses, and water purification systems used in hospitals around the world. Florida's Space Coast is not only where history was made — it is where the future is being built, one launch at a time.`,
    vocabulary: [
      { word: 'equator', definition: 'The imaginary line that circles Earth at its widest point, halfway between the North and South Poles.', example: 'Countries near the equator receive direct sunlight year-round and tend to have warm climates.' },
      { word: 'efficient', definition: 'Achieving a result with as little wasted time, energy, or resources as possible.', example: 'The new electric car was more efficient than older models, using far less energy per mile.' },
      { word: 'satellites', definition: 'Objects placed in orbit around Earth or another planet, used for communication, weather tracking, or research.', example: 'GPS systems on phones work because signals bounce off satellites orbiting Earth.' },
      { word: 'orbit', definition: 'The curved path an object travels as it moves around a planet or star.', example: 'The International Space Station completes one orbit around Earth every 90 minutes.' },
      { word: 'purification', definition: 'The process of removing harmful or unwanted substances to make something clean and safe.', example: 'Water purification systems remove bacteria and chemicals before the water reaches your tap.' }
    ],
    questions: [
      {
        question: 'What is the AUTHOR\'S PURPOSE in this passage?',
        options: [
          'To warn readers about the dangers of living near a rocket launch site.',
          'To persuade readers to become astronauts when they grow up.',
          'To inform readers about Florida\'s significant role in American and international space exploration.',
          'To argue that private companies do a better job than NASA.'
        ],
        correctIndex: 2,
        explanation: 'The passage presents facts about Kennedy Space Center\'s location, history, achievements, and future — all organized to inform the reader. The author does not try to persuade or warn; the purpose is to share information.'
      },
      {
        question: 'According to the passage, why was Florida chosen as the location for Kennedy Space Center?',
        options: [
          'It was already home to the largest airport in the United States.',
          'Its location near the equator, flat coastal land, and eastward ocean launch path make it ideal.',
          'The Florida climate keeps rockets from getting too cold before launch.',
          'It was chosen because many astronauts already lived in Florida.'
        ],
        correctIndex: 1,
        explanation: 'The author gives three specific reasons: the equator speed boost, the flat open coastal land, and the safe eastward launch over the ocean — not weather or personal convenience.'
      },
      {
        question: 'What is the AUTHOR\'S PERSPECTIVE toward space exploration?',
        options: [
          'The author believes space exploration is too expensive and risky.',
          'The author is neutral and presents only facts without any opinion.',
          'The author views space exploration as exciting, historically important, and beneficial to everyday life.',
          'The author thinks private companies should stop launching rockets near Kennedy Space Center.'
        ],
        correctIndex: 2,
        explanation: 'The author uses words like "most thrilling sights a human being can witness" and "one of the most important moments in human history," and highlights everyday benefits of space technology — showing a clearly positive perspective toward space exploration.'
      },
      {
        question: 'How does the author support the claim that space exploration benefits everyday life?',
        options: [
          'By describing how exciting it is to watch a rocket launch from a Florida beach.',
          'By naming specific inventions — memory foam, invisible braces, scratch-resistant lenses, and water purification systems — that came from NASA research.',
          'By explaining that SpaceX can reuse rockets, making launches cheaper.',
          'By noting that 135 Space Shuttle missions helped build the International Space Station.'
        ],
        correctIndex: 1,
        explanation: 'The author directly names four specific inventions that came from NASA technology. These concrete examples are evidence supporting the claim that space exploration has real benefits for people on Earth.'
      },
      {
        question: 'What does the word "efficient" suggest about why Florida\'s location is good for launching rockets?',
        options: [
          'Rockets launched from Florida are cheaper to build than those launched from other states.',
          'Florida\'s nearness to the equator means rockets need less fuel and energy to reach orbit.',
          'The flat land in Florida makes it easier for engineers to build launch pads.',
          'Florida\'s warm weather prevents ice from forming on rocket fuel tanks.'
        ],
        correctIndex: 1,
        explanation: 'The text says Earth\'s rotation near the equator gives rockets a "natural speed boost," making launches "more efficient." Efficient means achieving the goal (reaching orbit) with less energy — in this case, less fuel.'
      }
    ]
  },

  // ── 6 ── LITERARY | ELA.4.R.1.2 (theme) | ELA.4.R.3.1 (figurative language)
  {
    id: 'limpkin-cry',
    title: "How the Limpkin Got Its Cry",
    topic: 'folktale',
    coverEmoji: '🐦',
    coverColor: '#0891b2',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 380,
    readTimeMin: 2,
    text: `Long ago, in the time when the Everglades were young and every creature still remembers, there lived a bird of careful steps and quiet ways — the Limpkin. It moved through the shallows on long, brown legs, searching always for apple snails, the only food it craved.

In those days, the Limpkin had no call of its own. It watched the herons trumpet their greetings to the sunrise. It heard the frogs swell into a chorus at dusk. But the Limpkin was silent — a creature without a voice in a world full of song.

Then one summer, a great **drought** came to the Everglades. The water shrank back from the marsh. The apple snails buried themselves in the cracking mud. Day after day, the Limpkin walked farther than it had ever walked, growing thin and **weary**, searching for food that had disappeared.

One evening, the Limpkin found a hidden pool where the snails still lived in the cool mud. It could eat — and eat well. But standing at the edge of the pool were a young otter, a great blue heron, and an old soft-shell turtle. All of them were hollow with hunger, watching the pool with **desperate** eyes.

The Limpkin could have lowered its head and eaten in silence. No one would have blamed it.

Instead, it opened its mouth and let out a long, wailing cry — a strange sound it had never made before — that rang across the marsh. The cry said: *Come. There is food here. Come.*

The other animals heard, and they came, and they all ate until they were full. The rains returned. The marsh filled again.

But the Limpkin's cry never left it. It stayed in the bird's throat — not the clear, musical call it had always wished for, but something truer. A voice that could cross great distances. A voice that was heard when silence would have been easier.

The old ones say the Limpkin still makes that same cry today. Not because it is **mournful**, but because it remembers: the call worth giving is the one that brings others in from the cold.`,
    vocabulary: [
      { word: 'drought', definition: 'A long period without enough rain, causing water and food to become scarce.', example: 'The drought lasted three months and dried up the river that the village depended on.' },
      { word: 'weary', definition: 'Very tired, especially from long effort or hardship.', example: 'After hiking for six hours without stopping, the campers were weary and ready to rest.' },
      { word: 'desperate', definition: 'Feeling or showing extreme worry, need, or urgency because of a very difficult situation.', example: 'Stranded on the island, the sailors sent desperate signals hoping someone would see.' },
      { word: 'mournful', definition: 'Feeling or expressing sadness and grief.', example: 'The violin\'s mournful melody made the audience think of rainy days and goodbyes.' },
      { word: 'chorus', definition: 'A large group of voices or sounds all happening together at the same time.', example: 'A chorus of crickets filled the warm summer night with sound.' }
    ],
    questions: [
      {
        question: 'What is the THEME of this story?',
        options: [
          'Animals should always protect their food from competitors.',
          'The Everglades is the most important place in Florida.',
          'Sharing and calling others to help, even when it costs you something, is the most meaningful action.',
          'Having a beautiful singing voice is a gift that should not be wasted.'
        ],
        correctIndex: 2,
        explanation: 'The story ends with the lesson: "the call worth giving is the one that brings others in from the cold." The Limpkin gave up a private food source to help others — and that act of generosity is what the story celebrates as its theme.'
      },
      {
        question: 'Which detail BEST shows that the Limpkin made a difficult choice?',
        options: [
          'The Limpkin had walked farther than it had ever walked before.',
          'The Limpkin could have eaten in silence and no one would have blamed it, but it chose to cry out instead.',
          'The other animals were watching the pool with desperate eyes.',
          'The drought caused the apple snails to bury themselves in the mud.'
        ],
        correctIndex: 1,
        explanation: 'The phrase "No one would have blamed it" shows that staying silent was a reasonable, understandable choice. The Limpkin actively chose the harder, more generous option — which makes the choice meaningful.'
      },
      {
        question: 'Read this sentence from the story: "the frogs swell into a chorus at dusk." What does the word "swell" suggest about the frogs\' song?',
        options: [
          'The frogs are sick and their throats are swollen.',
          'The frogs\' sound grows louder and fuller, like something expanding.',
          'The frogs sing only one note, repeated over and over.',
          'The frogs are much larger than the Limpkin.'
        ],
        correctIndex: 1,
        explanation: '"Swell" is figurative language — it describes the frogs\' sound building and growing louder and richer, the way water swells when rising. It paints a picture of a growing, full sound filling the evening air.'
      },
      {
        question: 'This story is a folktale. Which feature of folktales does it include?',
        options: [
          'A scientist explaining how birds develop their calls over evolution.',
          'A map showing the locations described in the story.',
          'An explanation of why a real animal has a distinctive feature — the Limpkin\'s call.',
          'A first-person narrator who personally witnessed the events.'
        ],
        correctIndex: 2,
        explanation: 'Many folktales are "origin stories" that explain why something in nature is the way it is. This story explains how the Limpkin got its distinctive wailing call — a classic folktale feature.'
      },
      {
        question: 'At the end, the author says the Limpkin\'s cry is "not mournful" — it only sounds that way. What does the author MEAN?',
        options: [
          'Scientists have proven the Limpkin\'s call is not actually sad at all.',
          'The Limpkin\'s cry is a sound of generosity and welcome, not sadness, even though it sounds like wailing.',
          'The Limpkin learned to change its cry to sound happier after the drought ended.',
          'The other animals taught the Limpkin a more cheerful version of its call.'
        ],
        correctIndex: 1,
        explanation: 'The story redefines what the cry means — not sadness but a summons, an invitation. The author is saying that the sound may seem sorrowful to listeners, but its true meaning, rooted in the Limpkin\'s story, is one of compassion and generosity.'
      }
    ]
  },

  // ── 7 ── INFORMATIONAL | ELA.4.R.2.1 (text structure: problem/solution) | ELA.4.R.2.2
  {
    id: 'plastic-problem',
    title: 'The Plastic Problem',
    topic: 'environment',
    coverEmoji: '🌊',
    coverColor: '#0e7490',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 395,
    readTimeMin: 2,
    text: `Walk along almost any beach in the world today, and you will likely find plastic. Water bottles, straws, food wrappers, fishing line — millions of tons of plastic enter the world's oceans every single year. This **pollution** has created one of the most serious environmental crises of our time, threatening ocean life from the smallest plankton to the largest whales.

Plastic is uniquely dangerous because it is built to last. Unlike paper or food, most plastic does not **decompose** — it does not break down naturally in the environment. Instead, sunlight and waves slowly break plastic into smaller and smaller pieces called **microplastics**. These fragments, some too small to see, now exist everywhere: in ocean water, in seafloor sediment, even in the stomachs of deep-sea fish and the bodies of Arctic seabirds. When animals eat microplastics, the fragments can block their digestive systems, deliver toxic chemicals, or make them feel full when they haven't eaten real food — causing them to starve.

The scale of the problem is enormous. Scientists estimate that by 2050, the total weight of plastic in the ocean could **exceed** the total weight of all the fish combined. The Great Pacific Garbage Patch — a zone where ocean currents trap floating plastic — covers an area roughly twice the size of Texas.

Despite the scale, meaningful solutions exist. The most powerful is prevention: using less plastic in the first place. When consumers replace single-use plastic bags, bottles, and straws with reusable **alternatives**, they stop plastic from entering the environment entirely. Many countries have already banned single-use plastics with strong results. In Kenya, for example, plastic bag use dropped by 80% within two years of a ban.

At the same time, technology is helping clean up existing pollution. The Ocean Cleanup project uses floating barriers to collect plastic drifting in the Pacific. Researchers have discovered species of bacteria and fungi that can digest certain types of plastic, potentially turning a problem into a resource.

The ocean cannot clean itself. But the combination of prevention, policy, and new technology gives scientists and researchers genuine reason for hope — if enough people act.`,
    vocabulary: [
      { word: 'pollution', definition: 'Harmful substances introduced into the environment, causing damage to living things.', example: 'Air pollution from factory smoke made it difficult for people in the city to breathe.' },
      { word: 'decompose', definition: 'To break down naturally into simpler substances, usually through the action of bacteria or other organisms.', example: 'A fallen leaf will decompose into soil within a year, but a plastic bottle takes hundreds of years.' },
      { word: 'microplastics', definition: 'Tiny pieces of plastic, often invisible to the naked eye, that result from the breakdown of larger plastic items.', example: 'Scientists found microplastics in drinking water samples from cities around the world.' },
      { word: 'exceed', definition: 'To go beyond a limit or be greater than something else.', example: 'The crowd\'s size exceeded all expectations — more than 50,000 people attended.' },
      { word: 'alternatives', definition: 'Other choices or options that can be used instead of the usual one.', example: 'Instead of taking the highway, she found two alternatives that avoided the traffic jam.' }
    ],
    questions: [
      {
        question: 'What is the TEXT STRUCTURE of this passage?',
        options: [
          'Sequence — events are described in the order they happened.',
          'Compare and contrast — ocean plastic is compared to land pollution.',
          'Problem and solution — a serious issue is described along with responses being used to address it.',
          'Description — the author describes the ocean without making any argument.'
        ],
        correctIndex: 2,
        explanation: 'The passage introduces the plastic pollution problem, explains why it is dangerous, describes its scale, and then presents both prevention strategies and technological solutions — a clear problem/solution structure.'
      },
      {
        question: 'According to the passage, why are microplastics especially harmful to ocean animals?',
        options: [
          'They sink to the ocean floor and block light from reaching coral reefs.',
          'They dissolve into the water and change its saltiness.',
          'Animals mistake them for food, which can block digestion, deliver toxins, or cause starvation.',
          'They are so small that animals cannot see them and accidentally breathe them in.'
        ],
        correctIndex: 2,
        explanation: 'The passage lists specific harms: blocking digestive systems, delivering toxic chemicals, and causing starvation by making animals feel full without providing nutrition. All are caused by animals eating microplastics.'
      },
      {
        question: 'How does the author use the Great Pacific Garbage Patch to support the central idea?',
        options: [
          'To compare plastic pollution in the Pacific Ocean to pollution in the Atlantic.',
          'To explain where most of the world\'s plastic originally comes from.',
          'To show that the problem is enormous by providing a concrete, measurable example of its scale.',
          'To describe where the Ocean Cleanup project is currently working.'
        ],
        correctIndex: 2,
        explanation: 'After stating the problem is "enormous," the author immediately describes the Garbage Patch, comparing it to twice the size of Texas — a concrete comparison that helps readers understand the scale of the problem.'
      },
      {
        question: 'According to the author, what is the MOST POWERFUL solution to ocean plastic pollution?',
        options: [
          'Training bacteria and fungi to eat plastic as fast as it is produced.',
          'Building more Ocean Cleanup floating barriers in every ocean.',
          'Having governments fund more scientific research on plastic alternatives.',
          'Preventing plastic from entering the environment in the first place by using less of it.'
        ],
        correctIndex: 3,
        explanation: 'The passage states that "the most powerful is prevention: using less plastic in the first place." Preventing the problem is presented as more powerful than cleaning up after it.'
      },
      {
        question: 'What does the word "exceed" suggest about the plastic pollution crisis?',
        options: [
          'That plastic pollution has already been solved in some oceans.',
          'That the amount of plastic in the ocean could grow to be greater than the weight of all ocean fish.',
          'That scientists are exceeding their goals in cleaning up plastic.',
          'That plastic breaks down faster than scientists originally estimated.'
        ],
        correctIndex: 1,
        explanation: 'The author says the weight of ocean plastic could "exceed" the weight of all the fish — meaning surpass or go beyond. This comparison emphasizes how extreme the plastic problem could become without action.'
      }
    ]
  },

  // ── 8 ── INFORMATIONAL | ELA.4.R.2.2 (central idea + details) | ELA.4.R.2.4 (claim + evidence)
  {
    id: 'thomas-edison',
    title: "Never Give Up: The Story of Thomas Edison",
    topic: 'biography',
    coverEmoji: '💡',
    coverColor: '#b45309',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 410,
    readTimeMin: 2,
    text: `When Thomas Edison was a boy, his teachers told his mother he was "too addled" — too confused and unfocused — to learn anything. He was pulled from school after only three months. Yet by the time he died in 1931, Edison held 1,093 **patents** — the most of any person in American history. His life is one of the most powerful examples of what **persistence** can accomplish.

Edison was born in 1847 in Milan, Ohio. After his school experience, his mother Nancy taught him at home, encouraging his curiosity and love of experimenting. By age 10, he had built a chemistry laboratory in the family basement, spending his free time mixing, testing, and discovering. His first paying job — selling newspapers on trains — ended when a chemistry experiment he was running in a train car accidentally started a fire. He was fired. But Edison kept going.

His most famous achievement was creating a practical electric **filament** light bulb — a bulb with a glowing thread inside that would burn steadily without burning out quickly. This sounds simple, but it required more than 1,200 experiments. Edison and his team tested thousands of materials as possible filaments: carbonized sewing thread, fishing line, bamboo from Japan, and more than 6,000 types of plant fiber. When a reporter asked Edison how it felt to fail so many times, he reportedly replied: "I have not failed. I've just found 10,000 ways that won't work." This attitude — treating every failure as useful information — is exactly what made Edison extraordinary.

Edison also invented the **phonograph**, the first machine to record and play back the human voice. He created an early version of the motion picture camera. He developed an **alkaline** storage battery. In his Menlo Park laboratory — the world's first industrial research lab — he assembled teams of engineers and scientists to solve problems together, inventing the modern idea of a research team.

Edison believed that genius was "one percent inspiration and ninety-nine percent perspiration" — meaning that hard work mattered far more than natural talent. His story is not about a person who was born gifted. It is about a person who was told he could not succeed, and refused to believe it.`,
    vocabulary: [
      { word: 'patents', definition: 'Official legal documents that give an inventor the exclusive right to make and sell their invention.', example: 'She received a patent for her new type of solar panel design, protecting her idea from being copied.' },
      { word: 'persistence', definition: 'The quality of continuing to try to do something despite difficulty or failure.', example: 'His persistence paid off — after three years of practice, he finally made the varsity team.' },
      { word: 'filament', definition: 'A very thin wire or thread; in a light bulb, the part that glows when electricity passes through it.', example: 'The filament inside the old light bulb finally burned out after thousands of hours of use.' },
      { word: 'phonograph', definition: 'An early machine invented by Edison that could record sounds and play them back.', example: 'The phonograph amazed audiences in the 1870s because no one had ever heard a machine reproduce a human voice before.' },
      { word: 'alkaline', definition: 'A type of chemical property; alkaline batteries have a specific chemistry that makes them long-lasting.', example: 'The device required alkaline batteries, which lasted much longer than regular ones.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'Thomas Edison invented more things than anyone else in American history.',
          'Home schooling is more effective than public school for talented children.',
          'Thomas Edison\'s extraordinary success came from his persistence and willingness to learn from failure.',
          'The electric light bulb was the most important invention of the nineteenth century.'
        ],
        correctIndex: 2,
        explanation: 'Every paragraph supports the idea that Edison succeeded not through natural talent, but through refusing to stop — from his early home experiments to 1,200 failed light bulb tests to his belief in "ninety-nine percent perspiration."'
      },
      {
        question: 'How does the detail about Edison\'s teachers SUPPORT the central idea?',
        options: [
          'It shows that school systems in the 1800s were poorly organized.',
          'It proves that children should be taught at home rather than in public schools.',
          'It creates a powerful contrast: the people who gave up on Edison were completely wrong about his potential.',
          'It explains why Edison was so interested in education reform later in his life.'
        ],
        correctIndex: 2,
        explanation: 'Being called "too addled to learn" makes Edison\'s 1,093 patents even more striking — people who gave up on him were entirely wrong. This contrast directly supports the idea that persistence matters more than early judgments.'
      },
      {
        question: 'What evidence does the author use to show that creating the light bulb required extraordinary persistence?',
        options: [
          'Edison worked on the light bulb for more than thirty years.',
          'He ran more than 1,200 experiments and tested over 6,000 types of materials for the filament.',
          'He hired more than 100 engineers to help him figure out the problem.',
          'He patented the light bulb before he had fully finished testing it.'
        ],
        correctIndex: 1,
        explanation: 'Specific numbers — "more than 1,200 experiments" and "more than 6,000 types of plant fiber" — are concrete evidence the author provides to show how many times Edison tried before succeeding.'
      },
      {
        question: 'Read this quote: "I have not failed. I\'ve just found 10,000 ways that won\'t work." What does this reveal about Edison\'s attitude toward failure?',
        options: [
          'He was frustrated by how long the light bulb was taking to invent.',
          'He was bragging to the reporter about how many experiments he had tried.',
          'He viewed each failed attempt as useful information that brought him closer to success, not as evidence of defeat.',
          'He was not being honest about how discouraged he actually felt.'
        ],
        correctIndex: 2,
        explanation: 'Instead of calling his attempts "failures," Edison reframes them as findings — "ways that won\'t work." This shows he saw every setback as useful knowledge, not defeat — an attitude that allowed him to keep trying.'
      },
      {
        question: 'What does "ninety-nine percent perspiration" MOST LIKELY mean based on the context of the passage?',
        options: [
          'Edison believed inventors needed to exercise to stay healthy.',
          'Edison meant that success comes mostly from hard, sustained effort rather than natural talent.',
          'Edison thought sweat was a sign that a person was working in the wrong field.',
          'Edison believed inspiration was more important than work, since it came first.'
        ],
        correctIndex: 1,
        explanation: 'Edison used "perspiration" (sweat) as a metaphor for hard work. By saying success is ninety-nine percent perspiration, he meant that sustained effort — not natural genius — is what produces great results.'
      }
    ]
  },

  // ── 9 ── INFORMATIONAL | ELA.4.R.2.2 (central idea) | compare/contrast text structure
  {
    id: 'florida-panther',
    title: 'Saving the Florida Panther',
    topic: 'florida-nature',
    coverEmoji: '🐆',
    coverColor: '#7c2d12',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 400,
    readTimeMin: 2,
    text: `Fifty years ago, the Florida panther was nearly gone. Fewer than 30 of these large, tawny cats remained in the wild, scattered across the remote swamps and forests of southern Florida. Decades of habitat loss and hunting had pushed the species to the edge of **extinction**. Scientists feared that within a generation, the Florida panther — the official state animal of Florida — might vanish from the Earth.

Today, between 120 and 230 Florida panthers live in the wild. That is still a small population for a large predator, and the species remains **endangered**. But the change from 30 individuals to more than 120 represents one of the most remarkable wildlife recoveries in United States history.

What made the difference? Decades of focused, science-based action.

First, the U.S. Fish and Wildlife Service listed the Florida panther as an endangered species in 1967, making it illegal to hunt. Second, large areas of habitat were set aside and protected — including the Florida Panther National Wildlife Refuge and Big Cypress National Preserve — giving panthers safe spaces to live, hunt, and raise young.

The most critical **intervention** came in 1995. Scientists noticed that Florida panthers were developing serious health problems — kinked tails, heart defects, and poor survival rates in young kittens. These problems were caused by **inbreeding**: when a population becomes too small, related animals breed with each other, reducing the **genetic diversity** that keeps a species healthy. To solve this, biologists brought eight female Texas pumas — close relatives of the Florida panther — to Florida. The two subspecies had been separated for thousands of years. When they bred together, the kittens were healthier, stronger, and far more likely to survive. The genetic rescue worked.

However, panthers still face serious threats. Florida's human population continues to grow, and development keeps shrinking panther habitat. Each year, dozens of panthers are killed by cars on the highways that cross their range. Wildlife **corridors** — strips of undeveloped land connecting habitat areas — help panthers move safely, but building and protecting enough of them remains a challenge.

The Florida panther's story shows that extinction is not inevitable. With the right knowledge, resources, and commitment, it is possible to bring a species back from the edge.`,
    vocabulary: [
      { word: 'extinction', definition: 'The complete and permanent disappearance of a species from Earth.', example: 'The passenger pigeon went from billions of birds to complete extinction in less than a century.' },
      { word: 'endangered', definition: 'At serious risk of becoming extinct if conditions do not improve.', example: 'The sea turtle is listed as endangered because pollution and fishing nets threaten its survival.' },
      { word: 'intervention', definition: 'A deliberate action taken to change a situation that would otherwise continue or get worse.', example: 'Without the doctor\'s intervention, the patient\'s illness would have become much more serious.' },
      { word: 'inbreeding', definition: 'Reproduction between closely related individuals, which can cause health problems over generations.', example: 'The rare breed of dog suffered from inbreeding, leading to inherited diseases in most of the puppies.' },
      { word: 'corridors', definition: 'Strips of land connecting two separate habitat areas, allowing animals to travel safely between them.', example: 'Wildlife corridors allow deer to move between forests without crossing dangerous highways.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'Florida panthers are the most dangerous predators in North America.',
          'Development and highway construction are the biggest threats to all endangered animals.',
          'Through science-based conservation efforts, the Florida panther has made a remarkable recovery, though challenges remain.',
          'The Texas puma and Florida panther are identical animals with different names.'
        ],
        correctIndex: 2,
        explanation: 'The passage traces the panther from near-extinction to significant recovery, credits specific conservation actions, and ends by noting that challenges remain — all supporting the idea of a remarkable but ongoing recovery.'
      },
      {
        question: 'How does the author use CONTRAST to show that conservation has made a difference?',
        options: [
          'By comparing Florida panthers to Texas pumas to show the subspecies are different.',
          'By contrasting the panther population fifty years ago (fewer than 30) with the population today (120–230).',
          'By comparing the Florida panther to other endangered species that were not saved.',
          'By contrasting the Big Cypress Preserve with the Florida Panther National Wildlife Refuge.'
        ],
        correctIndex: 1,
        explanation: 'The author opens by stating "fewer than 30" panthers remained, then immediately follows with "between 120 and 230 Florida panthers live in the wild today" — this before/after contrast is the clearest evidence of the recovery.'
      },
      {
        question: 'According to the passage, why did biologists bring Texas pumas to Florida in 1995?',
        options: [
          'To replace Florida panthers with a larger, stronger subspecies.',
          'To teach Florida panthers better hunting strategies.',
          'To introduce genetic diversity and reverse the health problems caused by inbreeding.',
          'To increase the panther population quickly by adding more individual animals.'
        ],
        correctIndex: 2,
        explanation: 'The passage explains that inbreeding caused serious health problems. Bringing in Texas pumas introduced new genetic diversity, resulting in healthier kittens with "far more likely to survive" rates — the goal was genetic rescue, not just adding numbers.'
      },
      {
        question: 'What does the word "intervention" suggest about how scientists approached the panther\'s recovery?',
        options: [
          'Scientists chose to observe the panthers without interfering with nature.',
          'Scientists accidentally discovered a solution while studying other Florida animals.',
          'Scientists took deliberate, planned action to change the panther\'s situation before it was too late.',
          'Scientists were uncertain whether their actions would have any effect on the panther population.'
        ],
        correctIndex: 2,
        explanation: '"Intervention" implies a purposeful, deliberate action. The 1995 breeding program was carefully designed and executed — it was not accidental, passive, or uncertain. Scientists made a decision and acted on it.'
      },
      {
        question: 'According to the passage, what are TWO ongoing threats to the Florida panther?',
        options: [
          'Poachers and disease from contact with domestic cats.',
          'Loss of habitat to development and deaths from cars on highways crossing panther territory.',
          'Competition with Texas pumas and loss of prey animals.',
          'Inbreeding and a lack of protected land.'
        ],
        correctIndex: 1,
        explanation: 'The final paragraph specifically mentions two current threats: Florida\'s growing human population shrinking panther habitat, and dozens of panthers killed annually by vehicles on highways that cross their range.'
      }
    ]
  },

  // ── 10 ── LITERARY | ELA.4.R.1.1 (setting, conflict, character) | ELA.4.R.1.2 (theme)
  {
    id: 'night-of-storm',
    title: 'The Night of the Storm',
    topic: 'adventure',
    coverEmoji: '🌀',
    coverColor: '#374151',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 415,
    readTimeMin: 2,
    text: `The weather app said Category 1 hurricane. Their dad had said "probably nothing." But when rain began hammering the windows at midnight and the palm trees outside turned sideways, Marisol knew her dad had been wrong.

She sat up in bed. The power had gone out. In the dark hallway, her younger brother Diego was calling for her in a small, frightened voice.

"I'm coming," she said, even though her own heart was beating hard.

She found him in the middle of his bed, knees pulled to his chest, flashlight in his hands but not turned on.

"Where's Dad?" he whispered.

Their father worked back-to-back shifts at the hospital all week. He was sleeping so deeply the storm hadn't reached him.

"We don't need to wake him," Marisol said. She tried to sound more certain than she felt. "We know what to do."

She had sat through hurricane **preparedness** lessons at school. Stay away from windows. Move to an interior room. Keep the emergency kit nearby.

The emergency kit was in the kitchen closet. To reach it, they would have to cross the living room, where the large sliding glass doors groaned and shuddered with every **gust**. Marisol stared at the dark hallway for a moment. She thought about turning back. Then she thought about Diego.

"Hold my hand," she told him. "Don't let go."

They crossed the living room together. Diego squeezed her hand so hard her knuckles hurt. Marisol moved steadily, not letting herself look at the shaking glass. She grabbed the kit — flashlights, water bottles, a battery-powered radio — and they **retreated** to the interior hallway bathroom, the room with no outside walls, and sat down on the cool tile floor.

Diego clicked on the flashlight. They listened to the wind **howl** and the rain drum against the roof. Marisol turned on the radio and found a weather station reporting that the storm would pass in three to four hours. She didn't tell Diego — she just kept the radio on low and let the calm voice fill the room.

At some point, Diego fell asleep against her shoulder.

At dawn, the storm had moved on. A few fallen branches. One overturned garbage can. The house was fine.

Their father appeared in the doorway, blinking at the emergency kit open on the floor and his two children sitting calmly on the tile.

"You two handled this," he said quietly.

Marisol looked at Diego, still half asleep against her arm.

"Yeah," she said. "We did."`,
    vocabulary: [
      { word: 'preparedness', definition: 'The state of being ready for something in advance, especially an emergency.', example: 'The family\'s preparedness — with extra food, water, and flashlights — helped them stay calm during the blackout.' },
      { word: 'gust', definition: 'A sudden, strong rush of wind.', example: 'A powerful gust knocked the umbrella from her hands and sent it tumbling across the street.' },
      { word: 'retreated', definition: 'Moved back to a safer or more protected position.', example: 'When the storm grew stronger, the hikers retreated to the shelter at the base of the mountain.' },
      { word: 'howl', definition: 'To make a long, loud, wailing sound; used to describe wind making a mournful noise.', example: 'The wind began to howl as the temperature dropped and the blizzard approached.' },
      { word: 'interior', definition: 'Located inside or toward the center of something, away from outer walls or edges.', example: 'During the tornado warning, the family moved to the interior bathroom, the safest room in the house.' }
    ],
    questions: [
      {
        question: 'What is the CONFLICT in this story?',
        options: [
          'Marisol and Diego disagree about whether to wake their father.',
          'The storm destroys their house and the family must find a new place to live.',
          'Marisol and Diego must keep themselves safe during a hurricane while their father sleeps.',
          'Diego is scared of storms and Marisol must convince him they are not dangerous.'
        ],
        correctIndex: 2,
        explanation: 'The central conflict is that two children face a dangerous hurricane alone (their father is deeply asleep) and must make decisions to stay safe without adult help — this is the problem they must resolve.'
      },
      {
        question: 'How does the SETTING — the hurricane at night with the power out — affect the conflict?',
        options: [
          'It makes the story funny by putting the characters in an absurd situation.',
          'The darkness and storm make the conflict more urgent and frightening, forcing Marisol to act despite her fear.',
          'The setting explains why their father did not wake up during the storm.',
          'The night setting allows Marisol to pretend the storm is not serious.'
        ],
        correctIndex: 1,
        explanation: 'The darkness, the groaning glass doors, and the violence of the storm all make the situation feel dangerous and frightening. This setting raises the stakes of the conflict and makes Marisol\'s decision to act — despite her fear — more meaningful.'
      },
      {
        question: 'How does Marisol\'s CHARACTER DEVELOP over the course of the story?',
        options: [
          'She begins confident and ends unsure of herself.',
          'She starts frightened and uncertain but acts on her training to protect her brother, showing quiet courage.',
          'She relies entirely on Diego\'s ideas to get them through the night.',
          'She panics and makes a series of mistakes that put them both in danger.'
        ],
        correctIndex: 1,
        explanation: 'Marisol\'s heart "was beating hard" and she "tried to sound more certain than she felt" — she IS scared. But she acts anyway: she remembers her training, crosses the living room, and keeps Diego calm. Her courage is not the absence of fear, but action despite it.'
      },
      {
        question: 'What role does Marisol\'s school hurricane preparedness lesson play in resolving the conflict?',
        options: [
          'It tells her to call emergency services when the storm begins.',
          'It gives her a plan — stay from windows, go to an interior room, use the emergency kit — that she follows successfully.',
          'It warns her that Category 1 hurricanes are always more dangerous than they seem.',
          'It explains exactly how long the storm will last so she knows when it will be over.'
        ],
        correctIndex: 1,
        explanation: 'Marisol explicitly recalls her school lesson — "Stay away from windows. Move to an interior room. Keep the emergency kit nearby." — and follows it step by step to resolve the conflict. Her education is what saves them.'
      },
      {
        question: 'At the end, Marisol says "Yeah. We did." What does this suggest about her CHARACTER?',
        options: [
          'She is angry that her father slept through the emergency.',
          'She is not sure they actually handled anything — she is just agreeing to make her father feel better.',
          'She has grown through the experience and now recognizes her own ability to handle something difficult.',
          'She is embarrassed that her father saw the emergency kit on the floor.'
        ],
        correctIndex: 2,
        explanation: 'By the end, Marisol is not dismissing what she did — she affirms it: "Yeah. We did." This confident, simple statement shows she has grown to recognize her own capability, a clear change from the girl who was "trying to sound more certain than she felt" at the beginning.'
      }
    ]
  },

  // ════════════════════════════════════════════════════════════════════════════
  // EMERGING-LEVEL STORIES  (2nd–3rd grade reading level)
  // Shorter, simpler sentences — designed to build fluency and confidence
  // ════════════════════════════════════════════════════════════════════════════

  // ── E1 ── INFORMATIONAL | Florida Nature | ELA.2.R.2.1 (central idea)
  {
    id: 'sea-turtles',
    title: 'Sea Turtles Come Home',
    topic: 'florida-nature',
    coverEmoji: '🐢',
    coverColor: '#10b981',
    gradeLevel: '2-3',
    level: 'emerging',
    grades: [1, 2, 3, 4],
    wordCount: 235,
    readTimeMin: 1,
    text: `Sea turtles are amazing animals. They have lived on Earth for more than 100 million years — even longer than dinosaurs.

Every year, female sea turtles swim back to the same beach where they were born. They travel hundreds of miles through the ocean to get there. This long trip is called a **migration**. Scientists are amazed that turtles can find the exact same beach years later.

When a turtle reaches the beach, she waits for dark. Then she crawls onto the sand and digs a hole with her back **flippers**. She lays about 100 round, white eggs. Then she covers the hole with sand and returns to the ocean. She never sees her babies.

The eggs stay warm under the sand for about two months. Then the baby turtles **hatch**. The tiny babies — called hatchlings — use the moonlight on the water to find their way to the sea. It is a dangerous trip. Birds and crabs try to catch them.

Florida has some of the most important sea turtle beaches in the world. Loggerhead turtles, green turtles, and leatherback turtles all **nest** on Florida's shores. Florida law says people must protect the nests and keep beaches dark at night. Bright lights confuse the baby turtles and lead them the wrong way.

Every summer, workers walk the beaches and count nests. Their goal is to make sure future **generations** of sea turtles can still find their way home.`,
    vocabulary: [
      { word: 'migration', definition: 'A long journey an animal makes to reach a special place, like a nesting beach or a warmer climate.', example: 'The birds began their migration south before the cold weather arrived.' },
      { word: 'flipper', definition: 'A wide, flat limb that helps sea animals swim through the water.', example: 'The sea turtle moved gracefully through the water with its front flippers.' },
      { word: 'hatch', definition: 'To break out of an egg and be born.', example: 'The baby chicks began to hatch early in the morning.' },
      { word: 'nest', definition: 'A safe place where an animal lays its eggs.', example: 'We found a bird\'s nest with three blue eggs in the tree.' },
      { word: 'generation', definition: 'A group of animals or people born around the same time.', example: 'Each generation of sea turtles returns to the same beach.' }
    ],
    questions: [
      {
        question: 'What is the MAIN IDEA of this passage?',
        options: [
          'Dinosaurs lived on Earth before sea turtles did.',
          'Sea turtles are important Florida animals that travel far to nest and need protection.',
          'Baby sea turtles use the sun to find the ocean after they hatch.',
          'Florida law makes it illegal to go to the beach at night.'
        ],
        correctIndex: 1,
        explanation: 'The passage describes the sea turtle\'s amazing life — migration, nesting, hatching — and explains why Florida\'s beaches and protection laws are so important for their survival.'
      },
      {
        question: 'Why do female sea turtles return to the same beach every year?',
        options: [
          'To find food and eat as much as they can before winter.',
          'Because it is the only beach in Florida.',
          'To lay their eggs in the place where they were born.',
          'To teach their babies how to swim in the ocean.'
        ],
        correctIndex: 2,
        explanation: 'The passage says female sea turtles "swim back to the same beach where they were born" specifically to lay their eggs — that\'s the reason for their migration.'
      },
      {
        question: 'What does the word "migration" MOST LIKELY mean in this passage?',
        options: [
          'A long journey an animal makes to reach a special place.',
          'The act of digging a hole in the sand.',
          'The way a turtle uses the moonlight to find the ocean.',
          'A type of sea turtle found only in Florida.'
        ],
        correctIndex: 0,
        explanation: 'Right after the word "migration," the passage explains that turtles "travel hundreds of miles through the ocean" to reach a certain beach — so migration means a long, purposeful journey.'
      },
      {
        question: 'Why must people keep beaches DARK at night during nesting season?',
        options: [
          'So that sea turtles can sleep without being disturbed.',
          'Because bright lights confuse hatchlings and lead them away from the ocean.',
          'To help the eggs stay warm under the sand.',
          'So workers can count the nests without being seen.'
        ],
        correctIndex: 1,
        explanation: 'The passage states that "bright lights confuse the baby turtles and lead them the wrong way" — instead of following moonlight toward the ocean, hatchlings might follow artificial lights away from it.'
      },
      {
        question: 'Which detail BEST shows that being a hatchling is dangerous?',
        options: [
          'The eggs stay warm under the sand for about two months.',
          'Female turtles travel hundreds of miles to reach the beach.',
          'Birds and crabs try to catch hatchlings before they reach the water.',
          'Sea turtles have lived on Earth for more than 100 million years.'
        ],
        correctIndex: 2,
        explanation: 'The detail about birds and crabs trying to catch hatchlings directly shows the danger they face on their short journey from the nest to the ocean.'
      }
    ]
  },

  // ── E2 ── LITERARY | Character / Perseverance | ELA.2.R.1.2 (theme)
  {
    id: 'marcus-spelling',
    title: 'Marcus and the Spelling List',
    topic: 'character',
    coverEmoji: '✏️',
    coverColor: '#7c3aed',
    gradeLevel: '2-3',
    level: 'emerging',
    grades: [1, 2, 3, 4],
    wordCount: 230,
    readTimeMin: 1,
    text: `Marcus sat at his desk and stared at the blank test paper. He had studied for three nights. He still felt **nervous**.

Spelling had always been hard for him. Other kids seemed to just know how words were spelled. But Marcus mixed up letters. He wrote "becuase" instead of "because." He wrote "frend" instead of "friend."

His teacher, Ms. Rivera, noticed him frowning. "Marcus," she said quietly, "everyone has something that is hard for them. The important thing is to **persist** — to keep going even when it feels impossible."

That night, Marcus made flashcards for every word on the next list. He practiced saying them out loud. He asked his mom to quiz him. He made **mistakes** at first. Lots of them. But each time he got a word wrong, he wrote it five times until it felt right.

The next Friday, Ms. Rivera handed back the tests. Marcus had scored 18 out of 20. Not perfect — but his best score all year.

"You **improved** by eight points," Ms. Rivera said. "Your hard work is paying off."

Marcus looked down at his paper. He felt something warm in his chest. He was **proud** — not because he had been the best, but because he had worked harder than he ever had before.

He thought: maybe the score wasn't the most important part. Maybe showing up and trying again was.`,
    vocabulary: [
      { word: 'nervous', definition: 'Feeling worried or uneasy about something that might happen.', example: 'She felt nervous before her first swimming race.' },
      { word: 'persist', definition: 'To keep trying even when something is hard or frustrating.', example: 'He learned to persist and kept practicing the piano every day.' },
      { word: 'mistake', definition: 'Something done incorrectly; an error you can learn from.', example: 'She made a mistake on the math problem but fixed it right away.' },
      { word: 'improve', definition: 'To get better at something over time through practice.', example: 'With daily reading, his fluency began to improve.' },
      { word: 'proud', definition: 'Feeling happy and satisfied because you did your best or achieved something.', example: 'He was proud when he finally finished the long race.' }
    ],
    questions: [
      {
        question: 'What is the THEME of this story?',
        options: [
          'Being the best student in class is the most important goal.',
          'Hard work and persistence can help you improve, even when something is difficult.',
          'Spelling tests are not important for learning.',
          'Teachers should not give students difficult assignments.'
        ],
        correctIndex: 1,
        explanation: 'Marcus struggles with spelling but keeps practicing. His improved score and the feeling of pride at the end show that hard work and not giving up lead to real growth — that is the theme.'
      },
      {
        question: 'What does the word "persist" MOST LIKELY mean as it is used in the story?',
        options: [
          'To take a break and rest when things get hard.',
          'To ask someone else to do the hard parts for you.',
          'To keep going and trying even when something feels impossible.',
          'To study only the easy words on a spelling list.'
        ],
        correctIndex: 2,
        explanation: 'Ms. Rivera says to "keep going even when it feels impossible" right after using the word "persist" — so persist means to keep trying without giving up.'
      },
      {
        question: 'How did Marcus TRY to get better at spelling?',
        options: [
          'He asked Ms. Rivera to give him an easier test.',
          'He made flashcards, practiced out loud, and had his mom quiz him.',
          'He copied the words from another student\'s paper.',
          'He stayed after school to study with Ms. Rivera every evening.'
        ],
        correctIndex: 1,
        explanation: 'The passage describes Marcus making flashcards, practicing out loud, and asking his mom to quiz him — all things he did to get better on his own.'
      },
      {
        question: 'Why does Ms. Rivera say Marcus\'s score is something to be proud of?',
        options: [
          'Because 18 out of 20 is a perfect score on any spelling test.',
          'Because he improved by eight points, showing his hard work paid off.',
          'Because he helped other students study for the test.',
          'Because he spelled every word on the list correctly.'
        ],
        correctIndex: 1,
        explanation: 'Ms. Rivera says "You improved by eight points — your hard work is paying off." The improvement shows that effort leads to real change, which is worth being proud of.'
      },
      {
        question: 'How does Marcus CHANGE from the beginning of the story to the end?',
        options: [
          'He starts confident and ends feeling worried.',
          'He starts avoiding spelling tests and ends refusing to study.',
          'He starts feeling nervous and struggles, but ends feeling proud after working hard.',
          'He starts getting perfect scores and ends making many mistakes.'
        ],
        correctIndex: 2,
        explanation: 'At the start, Marcus feels nervous and finds spelling very hard. By the end, after persisting and practicing, he earns a better score and feels proud — that is clear character growth.'
      }
    ]
  },

  // ── E3 ── INFORMATIONAL | Science | ELA.2.R.2.2 (text structure, cause/effect)
  {
    id: 'sky-blue',
    title: 'Why Is the Sky Blue?',
    topic: 'science',
    coverEmoji: '☀️',
    coverColor: '#2563eb',
    gradeLevel: '2-3',
    level: 'emerging',
    grades: [1, 2, 3, 4],
    wordCount: 240,
    readTimeMin: 1,
    text: `Have you ever looked up and wondered why the sky is blue? The answer has to do with light and air.

Sunlight looks white or yellow, but it is actually made of many colors mixed together. You can see these colors when sunlight passes through a raindrop and forms a **rainbow**. The colors are red, orange, yellow, green, blue, and violet.

When sunlight travels through the air, it bumps into tiny pieces of air called gas **molecules**. These tiny pieces **scatter** the light — that means they send it flying in all directions. Blue light scatters much more than red light. That is because blue light has a shorter **wavelength** — it travels in smaller, tighter waves that bounce around more easily.

When you look up at the sky, you see the blue light that has scattered all across it. The other colors are there, too, but your eyes pick up the blue most. That is why the sky looks blue!

So why is the sky red and orange at **sunset**? When the sun is low in the sky, sunlight travels through much more air to reach your eyes. By then, most of the blue light has already scattered away. Only the red and orange colors remain — and they paint the sky in warm, glowing colors.

This is science at work. Understanding why the sky is blue helps us learn how light, air, and color all connect to create the world we see.`,
    vocabulary: [
      { word: 'rainbow', definition: 'A curved band of colors that appears in the sky when sunlight passes through water droplets.', example: 'After the rain, a bright rainbow arched across the sky.' },
      { word: 'molecule', definition: 'A tiny particle that makes up all matter, including air and water.', example: 'Air is made of billions of invisible molecules.' },
      { word: 'scatter', definition: 'To spread out in many different directions.', example: 'The wind scattered the leaves across the yard.' },
      { word: 'wavelength', definition: 'The size of a wave of light; different colors of light have different wavelengths.', example: 'Blue light has a shorter wavelength than red light.' },
      { word: 'sunset', definition: 'The time each evening when the sun goes below the horizon and the sky turns orange and red.', example: 'We watched the beautiful sunset from the beach.' }
    ],
    questions: [
      {
        question: 'What is the MAIN IDEA of this passage?',
        options: [
          'Rainbows form when sunlight passes through raindrops in the air.',
          'The sky looks blue because blue light scatters more than other colors when sunlight hits air molecules.',
          'Sunlight is made of only one color — white — that our eyes see as blue.',
          'Scientists do not yet know why the sky is blue or red at sunset.'
        ],
        correctIndex: 1,
        explanation: 'The passage explains that when sunlight hits air molecules, blue light scatters more than other colors, which is why we see the sky as blue. That is the main idea the passage builds toward.'
      },
      {
        question: 'What does the word "scatter" MOST LIKELY mean in this passage?',
        options: [
          'To collect colors together in one place.',
          'To travel in a straight line without bending.',
          'To send something flying in many different directions.',
          'To block light from passing through the air.'
        ],
        correctIndex: 2,
        explanation: 'The passage defines scatter right after using it: "they send it flying in all directions." So scatter means spreading out in many directions.'
      },
      {
        question: 'Why does the sky look RED and ORANGE at sunset?',
        options: [
          'Because the sun gets hotter and changes color in the evening.',
          'Because sunlight travels through more air, and most blue light has scattered away by then.',
          'Because red and orange light have shorter wavelengths than blue light.',
          'Because the moon reflects red light back toward Earth at night.'
        ],
        correctIndex: 1,
        explanation: 'The passage explains that at sunset the sun is low, so sunlight travels through much more air. By the time it reaches our eyes, most blue light is gone — leaving only the red and orange colors.'
      },
      {
        question: 'According to the passage, sunlight is made of:',
        options: [
          'Only one color — pure white light.',
          'Two colors — blue and yellow — mixed together.',
          'Many colors mixed together, which we can see in a rainbow.',
          'Colors that only appear after rain, not during normal daylight.'
        ],
        correctIndex: 2,
        explanation: 'The passage states: "Sunlight looks white or yellow, but it is actually made of many colors mixed together. You can see these colors when sunlight passes through a raindrop and forms a rainbow."'
      },
      {
        question: 'This passage is MAINLY organized by:',
        options: [
          'Telling a story about a scientist who studied light.',
          'Listing reasons why sunsets are better than blue skies.',
          'Asking a question and then explaining the answer step by step.',
          'Comparing the sky on rainy days to the sky on sunny days.'
        ],
        correctIndex: 2,
        explanation: 'The passage opens with a question ("Why is the sky blue?") and then builds the explanation step by step — light, molecules, scattering, wavelength — before also answering why sunsets are red. This is a question-and-answer structure.'
      }
    ]
  },

  // ── E4 ── LITERARY | Theme / Growth Mindset | ELA.2.R.1.2 (theme)
  {
    id: 'kodas-lesson',
    title: "Koda Finds a Way",
    topic: 'character',
    coverEmoji: '🐻',
    coverColor: '#f59e0b',
    gradeLevel: '2-3',
    level: 'emerging',
    grades: [1, 2, 3, 4],
    wordCount: 230,
    readTimeMin: 1,
    text: `Koda was a young bear cub who lived near a wide, rushing river. Every day, he watched older bears catch salmon by standing in the water and swiping at the fish with their paws. He made up his mind to try.

One morning, Koda waded in. The cold water swirled around his feet. He waited. A salmon darted past. He swiped — and missed. He tried again. He missed again.

Koda felt **frustrated**. He sat on the bank and crossed his paws. "I'll never learn," he grumbled.

An old bear named Sable rested nearby. "How many times have you tried?" she asked.

"Twice," Koda said.

Sable gave a slow nod. "I caught my first salmon on my four-hundred-and-twelfth **attempt**," she said quietly. "Skills are not given to us. They are built, one try at a time."

Koda thought about that. He got back in the water. He watched how the fish moved. He learned to wait, then **pounce** at exactly the right moment.

On his nineteenth try, his paw hit something solid. A salmon. He had done it.

Koda carried it to the bank, his heart full of **pride**. He hadn't become **patient** overnight. But he had learned something more important than how to catch fish: the only way to get better is to keep going.`,
    vocabulary: [
      { word: 'frustrated', definition: 'Feeling annoyed or upset because something is hard or not working the way you want.', example: 'She felt frustrated when the puzzle pieces would not fit together.' },
      { word: 'attempt', definition: 'A try at doing something, especially something difficult.', example: 'He made five attempts before he finally tied his shoes on his own.' },
      { word: 'pounce', definition: 'To jump forward suddenly and quickly to grab something.', example: 'The cat pounced on the toy mouse that slid across the floor.' },
      { word: 'pride', definition: 'A good feeling you get when you have worked hard and done something well.', example: 'She felt pride when she finished the long race.' },
      { word: 'patient', definition: 'Able to wait calmly and keep trying without getting upset.', example: 'Being patient helped him learn how to ride his bike.' }
    ],
    questions: [
      {
        question: 'What is the LESSON or THEME of this story?',
        options: [
          'Bears should not try to catch fish because it is too dangerous.',
          'Young animals learn best by watching older animals do everything for them.',
          'Getting better at something takes many tries, and that is okay.',
          'If you fail twice, you should find a different skill to learn.'
        ],
        correctIndex: 2,
        explanation: 'Sable\'s message — that she caught her first salmon on her four-hundred-and-twelfth attempt — shows that mastery takes many, many tries. Koda succeeds on his nineteenth try because he kept going. The theme is that persistence leads to growth.'
      },
      {
        question: 'What does the word "attempt" mean in this story?',
        options: [
          'A fish that swims quickly through the river.',
          'A try at doing something difficult.',
          'The feeling of being frustrated and giving up.',
          'A lesson given by an older, wiser animal.'
        ],
        correctIndex: 1,
        explanation: 'Sable says she caught her first salmon on her "four-hundred-and-twelfth attempt" — meaning her four-hundred-and-twelfth try. An attempt is one try at something.'
      },
      {
        question: 'Why does Koda sit on the bank and say "I\'ll never learn"?',
        options: [
          'Because the water is too cold and dangerous for a young bear cub.',
          'Because he has tried twice and missed both times, so he feels frustrated.',
          'Because Sable told him he was not ready to catch fish yet.',
          'Because he already caught a salmon and does not need to practice anymore.'
        ],
        correctIndex: 1,
        explanation: 'After missing twice, Koda feels frustrated and gives up temporarily. His "I\'ll never learn" shows that he\'s discouraged after only two attempts — which is why Sable\'s advice matters.'
      },
      {
        question: 'How does Sable HELP Koda?',
        options: [
          'She shows him exactly where to stand in the river to catch fish.',
          'She catches a salmon for him so he can see how it is done.',
          'She tells him that even she needed hundreds of attempts to learn, so he should keep trying.',
          'She tells him to go home and try again next year when he is bigger.'
        ],
        correctIndex: 2,
        explanation: 'Sable shares that it took her 412 attempts to catch her first salmon. This helps Koda see that struggling is normal and that the right response is to keep trying, not to quit.'
      },
      {
        question: 'How does Koda CHANGE from the beginning of the story to the end?',
        options: [
          'He starts excited and ends angry that catching fish is so difficult.',
          'He starts watching others and ends refusing to try anything on his own.',
          'He starts frustrated and ready to quit, but ends proud after succeeding through persistence.',
          'He starts patient and calm and ends frustrated after failing many times.'
        ],
        correctIndex: 2,
        explanation: 'Koda starts by giving up after two tries, feeling frustrated. After Sable\'s advice, he keeps going — and on his nineteenth try he succeeds. He ends feeling pride. This is a clear growth arc from frustration to success through persistence.'
      }
    ]
  },

  // ── 11 ── INFORMATIONAL | ELA.4.R.2.2 (central idea + details) | ELA.4.R.2.4 (claim + evidence)
  {
    id: 'mae-jemison',
    title: 'She Reached for the Stars: Mae Jemison',
    topic: 'biography',
    coverEmoji: '🌟',
    coverColor: '#1e3a8a',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 408,
    readTimeMin: 2,
    text: `When Mae Jemison was a young girl growing up in Chicago, she dreamed of traveling to space. This was an unusual **ambition** in the 1960s — most astronauts were white men, and many people assumed that was simply how things were. Mae did not agree.

Mae was a dedicated student. She graduated from high school at 16 and earned two degrees: a bachelor's in chemical engineering from Stanford University and a medical degree from Cornell University. She then served as a doctor in West Africa through the Peace Corps, providing medical care in countries where doctors were scarce. When she returned to the United States, she applied to NASA's astronaut training program. The selection process was long and competitive, but in 1987, NASA chose her as one of fifteen **candidates** from more than two thousand applicants.

On September 12, 1992, Mae Jemison made history. She launched into space aboard the Space Shuttle Endeavour as a mission specialist — and became the first African American woman to travel to space. During the eight-day mission, she **conducted** scientific experiments studying how humans respond to **weightlessness**. She also brought a small West African art object into orbit — a quiet statement that space exploration belongs to all of humanity, honoring her **heritage**.

Mae's connection to space was lifelong and personal. As a child, she had been inspired by Lieutenant Uhura on the television show Star Trek — a Black woman serving as communications officer aboard a starship. Decades later, after leaving NASA, Mae appeared as a guest on that same show — the first real astronaut to do so.

After NASA, Mae founded a technology company focused on improving health care in developing nations and launched a science camp for teenagers. She was recognized by NASA, the United Nations, and the White House.

Mae Jemison's story is not just about becoming the first. It is about what happens when curiosity, education, and the refusal to accept limits are combined. She once said: "Don't let anyone rob you of your imagination, your creativity, or your curiosity." Those words capture what carried her from a Chicago classroom all the way into orbit.`,
    vocabulary: [
      { word: 'ambition', definition: 'A strong desire to achieve something great or important.', example: 'Her ambition to become a doctor drove her to study medicine for eight years.' },
      { word: 'candidate', definition: 'A person chosen or put forward for a position or role.', example: 'Only three candidates were selected from hundreds who applied for the scholarship.' },
      { word: 'conducted', definition: 'Carried out or performed, especially an experiment or study.', example: 'The scientist conducted tests for six months before publishing her findings.' },
      { word: 'weightlessness', definition: 'The condition of feeling no gravitational pull, causing objects to float freely.', example: 'In weightlessness, astronauts float through the space station instead of walking.' },
      { word: 'heritage', definition: 'The traditions, culture, and history passed down within a family or community.', example: 'She celebrated her family\'s heritage by cooking traditional recipes from her grandmother.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'Mae Jemison\'s curiosity, education, and refusal to accept limits led her to make history.',
          'NASA always selects only the most experienced scientists for its astronaut program.',
          'The Space Shuttle Endeavour was NASA\'s most successful mission of the 1990s.',
          'Space exploration can only be accomplished by people with medical degrees.'
        ],
        correctIndex: 0,
        explanation: 'Every paragraph supports the idea that Mae succeeded because of her personal qualities — her education, her Peace Corps service, and her persistence — not luck. These qualities drove her to her historic mission.'
      },
      {
        question: 'How does the detail about Mae serving as a doctor in West Africa SUPPORT the central idea?',
        options: [
          'It shows she preferred working in other countries over living in the United States.',
          'It explains that NASA required all astronaut applicants to have international medical experience.',
          'It demonstrates that she applied her skills to help others while still pursuing her goal — showing purpose alongside persistence.',
          'It proves that Peace Corps service provides better astronaut training than universities.'
        ],
        correctIndex: 2,
        explanation: 'The West Africa detail shows Mae was not only academically prepared — she used her skills to help people in need while continuing to work toward her goal. This example of applied dedication supports the central idea.'
      },
      {
        question: 'What does the word "conducted" suggest about Mae\'s work during the mission?',
        options: [
          'She performed her experiments casually, without any formal plan.',
          'She directed and carried out scientific experiments in an organized, purposeful way.',
          'She observed other scientists\' work instead of running experiments herself.',
          'She conducted interviews with the crew about their experience in space.'
        ],
        correctIndex: 1,
        explanation: '"Conducted" implies that Mae actively led and carried out the experiments herself — it suggests organized, deliberate scientific work rather than passive observation.'
      },
      {
        question: 'Why did Mae bring a West African art object into orbit?',
        options: [
          'NASA required every astronaut to bring an object representing their background.',
          'She was studying the effects of zero gravity on art materials during the mission.',
          'She hoped the object would bring good luck to the crew during launch.',
          'She wanted to honor her cultural heritage and signal that space belongs to all of humanity.'
        ],
        correctIndex: 3,
        explanation: 'The passage says the object was "a quiet statement that space exploration belongs to all of humanity" — connecting her heritage to a message of inclusion, not for NASA requirements or scientific study.'
      },
      {
        question: 'What is the AUTHOR\'S PERSPECTIVE toward Mae Jemison?',
        options: [
          'The author is neutral and only lists facts without any viewpoint.',
          'The author is critical of how long it took NASA to select a Black woman astronaut.',
          'The author admires Mae and presents her as an inspiring figure who overcame barriers.',
          'The author thinks Mae should have remained a doctor rather than becoming an astronaut.'
        ],
        correctIndex: 2,
        explanation: 'Phrases like "Mae did not agree" (about societal limits), the final inspiring quote about imagination, and framing her story as "not just about becoming the first" all show that the author views Mae with admiration and presents her as a model of determined achievement.'
      }
    ]
  },

  // ── 12 ── INFORMATIONAL | ELA.4.R.2.1 (text structure: process) | ELA.4.R.2.2 (central idea)
  {
    id: 'how-hurricanes-form',
    title: 'Inside the Storm: How Hurricanes Form',
    topic: 'science',
    coverEmoji: '🌀',
    coverColor: '#374151',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 405,
    readTimeMin: 2,
    text: `Every summer, Floridians watch the Atlantic Ocean carefully. From June through November — called **hurricane** season — warm tropical water can give birth to one of the most powerful storms on Earth.

A hurricane does not appear all at once. It begins as a cluster of thunderstorms over warm ocean water. For a hurricane to form, the ocean surface must be at least 79 degrees Fahrenheit. This warm water heats the air above it, causing the warm, moist air to rise rapidly. As it rises, cooler air rushes in from all directions to fill the gap — and Earth's rotation causes these air currents to begin spinning. This spinning effect is known as the **Coriolis effect**.

As warm, moist air continues feeding into the system, the spinning strengthens. A calm area called the **eye** forms at the center — a zone of low pressure, free of clouds, that can be 20 to 40 miles wide. Surrounding the eye is the "eye wall," a ring of the storm's most violent winds and heaviest rainfall. Wind speeds must reach at least 74 miles per hour before a storm is officially classified as a hurricane. The strongest storms — Category 4 and Category 5 — can have winds exceeding 130 miles per hour.

Once a hurricane moves over land, it loses its fuel: the warm ocean water. This is called making **landfall**, and it marks the beginning of the storm's weakening. However, the destruction a hurricane leaves behind can be enormous. Powerful winds uproot trees and collapse structures. Perhaps the most dangerous effect is the **storm surge** — a rise in sea level caused by the hurricane's winds pushing ocean water inland. Storm surges can flood entire neighborhoods under several feet of water.

Florida's unique geography makes it especially vulnerable. Surrounded by both the Gulf of Mexico and the Atlantic Ocean, Florida is more exposed to hurricane paths than almost any other state. A storm approaching from the Gulf threatens the west coast; one tracking across the Atlantic threatens the east and south.

Understanding how hurricanes form does not make them less powerful. But it gives scientists the knowledge to predict where storms are heading — giving communities days to prepare. That preparation saves lives.`,
    vocabulary: [
      { word: 'hurricane', definition: 'A powerful tropical storm with sustained winds of at least 74 miles per hour, formed over warm ocean water.', example: 'The hurricane caused widespread flooding and knocked out power for thousands of homes.' },
      { word: 'Coriolis effect', definition: 'The way Earth\'s rotation causes moving air currents to curve and spin, contributing to the rotation of hurricanes.', example: 'The Coriolis effect causes hurricanes in the Northern Hemisphere to spin counterclockwise.' },
      { word: 'eye', definition: 'The calm, nearly cloud-free center of a hurricane, surrounded by the storm\'s strongest winds.', example: 'When the eye of the hurricane passed over the town, the wind suddenly stopped — but only for a short time.' },
      { word: 'landfall', definition: 'The moment when a hurricane reaches and moves over land after traveling across the ocean.', example: 'The storm made landfall near the coast just before midnight, bringing heavy rain and strong winds.' },
      { word: 'storm surge', definition: 'A dangerous rise in sea level caused by a hurricane\'s winds pushing ocean water toward and onto shore.', example: 'The storm surge flooded the beach town with four feet of seawater within hours of the hurricane\'s arrival.' }
    ],
    questions: [
      {
        question: 'What is the MAIN IDEA of this passage?',
        options: [
          'Category 5 hurricanes are the only type of storm that causes serious damage.',
          'Florida should require all residents to evacuate during every hurricane season.',
          'Hurricanes form through a specific process over warm ocean water and can cause devastating damage, especially in Florida.',
          'The Coriolis effect is the most important force in all of Earth\'s weather patterns.'
        ],
        correctIndex: 2,
        explanation: 'The passage describes how hurricanes form step by step, explains what makes them dangerous (including storm surge), and notes Florida\'s particular vulnerability — all supporting the idea that hurricanes are powerful, predictable, and especially threatening to Florida.'
      },
      {
        question: 'According to the passage, what CAUSES the spinning motion of a hurricane?',
        options: [
          'Temperature differences between deep cold water and warm surface water.',
          'Heavy rain clouds pressing downward on the warm ocean surface.',
          'Earth\'s rotation affecting the air currents that rush in to replace rising warm air.',
          'The eye wall pushing wind outward in a circular pattern around the storm.'
        ],
        correctIndex: 2,
        explanation: 'The passage explains that as warm air rises and cooler air rushes in from all sides, Earth\'s rotation (the Coriolis effect) causes those air currents to begin spinning — creating the hurricane\'s rotation.'
      },
      {
        question: 'What does the word "landfall" mean as used in the passage?',
        options: [
          'The point where the eye wall produces the most intense rainfall.',
          'The flooding that occurs when ocean water rises onto shore.',
          'The process by which a storm gradually loses its eye.',
          'The moment when a hurricane crosses from open ocean onto land.'
        ],
        correctIndex: 3,
        explanation: 'The passage says "making landfall" marks "the beginning of the storm\'s weakening" because it loses its energy source (warm ocean water) — so landfall is when the storm reaches land.'
      },
      {
        question: 'How does the author ORGANIZE the information in this passage?',
        options: [
          'By comparing Florida hurricanes to storms in other parts of the world.',
          'By listing all categories of hurricanes from weakest to most powerful.',
          'By explaining the step-by-step process of hurricane formation and then describing its effects.',
          'By following a single hurricane from formation all the way through landfall.'
        ],
        correctIndex: 2,
        explanation: 'The passage first explains how hurricanes form (warm water → rising air → spinning → eye formation), then describes the damage they cause on land (wind, storm surge), then explains Florida\'s vulnerability — a process-then-effects structure.'
      },
      {
        question: 'Which detail BEST supports the claim that storm surge is especially dangerous?',
        options: [
          'The eye of a hurricane is calm and nearly free of clouds.',
          'Wind speeds must reach 74 miles per hour for an official hurricane classification.',
          'Storm surges can flood entire neighborhoods under several feet of ocean water.',
          'Florida is surrounded by both the Gulf of Mexico and the Atlantic Ocean.'
        ],
        correctIndex: 2,
        explanation: 'The author calls storm surge "perhaps the most dangerous effect" and supports that with a specific consequence: it can flood entire neighborhoods under several feet of water. That concrete detail is what makes the claim compelling.'
      }
    ]
  },

  // ── 13 ── INFORMATIONAL | ELA.4.R.2.2 (central idea) | ELA.4.R.2.4 (claim + evidence)
  {
    id: 'coral-reef-crisis',
    title: 'Cities Under the Sea: The Coral Reef Crisis',
    topic: 'environment',
    coverEmoji: '🪸',
    coverColor: '#0891b2',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 412,
    readTimeMin: 2,
    text: `Beneath the surface of warm, shallow seas lies one of the most spectacular places on Earth: the coral reef. Although coral reefs cover less than one percent of the ocean floor, they support more than twenty-five percent of all marine species. Scientists often call them "the rainforests of the sea" — a comparison that highlights both their extraordinary richness and their fragility.

Coral reefs are built by tiny living animals called coral **polyps**. Each polyp is smaller than your fingernail. Over hundreds and thousands of years, polyps produce shells of calcium carbonate — a rock-like mineral — and pile them into massive structures. The Great Barrier Reef in Australia stretches more than 1,400 miles and can be seen from space.

Despite their grandeur, coral reefs are in serious trouble. The greatest threat is ocean warming caused by climate change. When water temperatures rise too high, coral polyps expel the colorful algae living inside them. This algae provides coral with its vivid colors and most of its nutrients. Without the algae, coral turns ghostly white — a process called **bleaching**. A bleached reef can recover if temperatures drop quickly enough, but if warm water persists, the coral starves and dies. Scientists estimate that more than half of the world's reefs have experienced significant bleaching in recent decades.

A second threat, ocean **acidification**, compounds the problem. As the ocean absorbs excess carbon dioxide from the atmosphere, the water becomes more acidic. More acidic water dissolves calcium carbonate — the very material coral uses to build its structure. Reefs that might otherwise repair themselves struggle to grow in acidifying conditions.

Overfishing, pollution from fertilizers, and runoff from certain chemicals add further stress to already weakened reefs.

Conservation scientists are responding urgently. Researchers are growing fragments of heat-resistant coral in underwater **nurseries** and transplanting them onto damaged reefs — a method sometimes called coral gardening. Marine protected areas restrict harmful activities near reefs. Nations are also setting targets to reduce carbon emissions, which drive both warming and acidification.

Coral reefs took thousands of years to build. The window to protect them is narrow — and it is closing.`,
    vocabulary: [
      { word: 'polyp', definition: 'A tiny, tube-shaped animal that builds coral reefs by producing a hard outer shell of calcium carbonate.', example: 'Each coral polyp is incredibly small, but millions of them together create reef structures that stretch for miles.' },
      { word: 'bleaching', definition: 'The whitening of coral that occurs when stressed polyps expel their algae, losing both color and nutrition.', example: 'Scientists were alarmed when aerial photos showed large sections of the reef had turned white from bleaching.' },
      { word: 'acidification', definition: 'The process by which the ocean becomes more acidic as it absorbs carbon dioxide from the atmosphere.', example: 'Ocean acidification is making it harder for shellfish to build strong shells.' },
      { word: 'nurseries', definition: 'Protected places where young or fragile organisms are grown before being moved to their natural habitat.', example: 'Scientists grew the seedlings in nurseries for three months before transplanting them into the wild.' },
      { word: 'biodiversity', definition: 'The variety of different species of plants, animals, and other living things found in a particular area.', example: 'The national park had extraordinary biodiversity, with thousands of plant and animal species.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'The Great Barrier Reef in Australia is the only coral reef that scientists are working to protect.',
          'Ocean acidification is a more serious threat to coral reefs than ocean warming.',
          'Coral reefs are remarkable but highly threatened ecosystems that urgently need protection.',
          'Coral reefs cover less than one percent of the ocean floor and are too small to protect effectively.'
        ],
        correctIndex: 2,
        explanation: 'The passage describes coral reefs as extraordinary ("rainforests of the sea"), identifies multiple serious threats (warming, acidification, pollution), and describes conservation efforts — all supporting the idea that they are remarkable and urgently need protecting.'
      },
      {
        question: 'How does the author explain WHY bleaching kills coral?',
        options: [
          'Bleaching causes calcium carbonate to dissolve faster in warmer water.',
          'When polyps expel their algae, they lose both their color and most of their nutrition, and eventually starve.',
          'The white color of bleached coral reflects sunlight and prevents photosynthesis.',
          'Bleaching makes coral too brittle to withstand the pressure of deeper water.'
        ],
        correctIndex: 1,
        explanation: 'The passage directly states that the expelled algae provides "its vivid colors and most of its nutrients" — without it, the coral "starves and dies." The mechanism is loss of food, not a physical or chemical change in the structure.'
      },
      {
        question: 'Why does the author compare coral reefs to "rainforests of the sea"?',
        options: [
          'To prove that coral reefs and rainforests face exactly the same threats.',
          'To show that scientists should stop studying rainforests and focus only on reefs.',
          'To help readers understand how rich and fragile coral reefs are by connecting them to something familiar.',
          'To argue that rainforests and coral reefs should be managed by the same government agencies.'
        ],
        correctIndex: 2,
        explanation: 'The author says this comparison "highlights both their extraordinary richness and their fragility" — using something readers may already know (rainforest diversity and fragility) to help them understand coral reefs in the same terms.'
      },
      {
        question: 'What does the word "acidification" mean based on how it is used in the passage?',
        options: [
          'The process of making the ocean colder and denser over time.',
          'A disease that spreads between coral polyps in warming water.',
          'The way ocean water becomes cloudier as it absorbs more sunlight.',
          'The process by which the ocean becomes more acidic as it absorbs carbon dioxide.'
        ],
        correctIndex: 3,
        explanation: 'The passage explains acidification immediately after introducing it: "As the ocean absorbs excess carbon dioxide from the atmosphere, the water becomes more acidic." That definition is built directly into the text.'
      },
      {
        question: 'Which TWO threats does the author describe in the most detail?',
        options: [
          'Overfishing and chemical pollution from sunscreen.',
          'Ocean warming (causing bleaching) and ocean acidification.',
          'Tourist boat damage and underwater construction.',
          'Hurricanes and rising sea levels.'
        ],
        correctIndex: 1,
        explanation: 'The author devotes a full paragraph to ocean warming and bleaching, and another full paragraph to ocean acidification — giving both far more detail than the brief mention of overfishing and chemical pollution.'
      }
    ]
  },

  // ── 14 ── LITERARY | ELA.4.R.1.1 (character/conflict) | ELA.4.R.1.2 (theme) | ELA.4.R.3.1 (figurative language)
  {
    id: 'the-audition',
    title: 'The Audition',
    topic: 'character',
    coverEmoji: '🎭',
    coverColor: '#7c3aed',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 415,
    readTimeMin: 2,
    text: `The morning of the school play audition, Priya woke up with what she could only describe as a stomach full of bees.

She had practiced her **monologue** forty-seven times. She could recite it while brushing her teeth, while riding the bus, while folding laundry. But knowing words in her bedroom was completely different from standing alone at a microphone in front of her entire grade.

"What if I freeze?" she asked her older sister at breakfast.

"You might," Taryn said simply, without looking up from her cereal. "But freezing isn't a reason not to try."

Priya spent the morning wishing she had chosen stage crew — the invisible people who moved furniture and operated lights from the safety of the wings. But her drama teacher had once told her she had a real voice, and some part of her had believed it.

When her name was called, she walked to the center of the stage. The **auditorium** lights were hot and bright. She could see the **silhouettes** of her classmates filling the rows. She opened her mouth.

Nothing came out.

A terrible second stretched wide and empty. Her mind was completely blank. Then she remembered what Ms. Okafor had told her: breathe first, always. Priya took one slow breath through her nose. She lifted her gaze to a fixed point just above the audience's heads.

And then the words came. Not perfectly — she **stumbled** once in the middle, and her hands were trembling — but she kept going. Her voice stayed steady enough. She finished.

Ms. Okafor wrote something on her clipboard without showing any expression.

One week later, the cast list appeared on the bulletin board. Priya's name was not next to the lead role. It was next to the loyal friend — one of the three most interesting supporting parts in the show.

She stood there for a moment, reading it twice.

Then she thought about that empty second on the stage. About the breath. About how she had kept going even when her mind went blank.

She realized she had passed a different kind of audition — not the one Ms. Okafor was running, but the one she had been running herself.

She had shown up. She had started. And when it fell apart for a moment, she had kept going.

That, she decided, was the real test.`,
    vocabulary: [
      { word: 'monologue', definition: 'A long speech performed by a single person, especially during an audition or play.', example: 'She rehearsed her monologue so many times she could recite it in her sleep.' },
      { word: 'auditorium', definition: 'A large indoor space with seating, used for performances, presentations, or gatherings.', example: 'The entire school packed into the auditorium for the end-of-year assembly.' },
      { word: 'silhouette', definition: 'A dark shape or outline visible against a lighter background.', example: 'In the dim theater, she could only see the silhouettes of the audience.' },
      { word: 'stumbled', definition: 'Made an error or faltered briefly, especially while speaking or moving.', example: 'He stumbled over a difficult word in his speech but quickly recovered and kept going.' },
      { word: 'trembling', definition: 'Shaking slightly, usually from nervousness, cold, or strong emotion.', example: 'Her hands were trembling as she opened the envelope with her test results.' }
    ],
    questions: [
      {
        question: 'What is Priya\'s MAIN CONFLICT in this story?',
        options: [
          'She disagrees with her drama teacher about which role to audition for.',
          'She must audition in front of her grade despite being terrified of performing in public.',
          'She forgets all her lines and has to leave the stage before finishing.',
          'Her sister\'s blunt advice makes Priya feel even more anxious.'
        ],
        correctIndex: 1,
        explanation: 'Priya\'s central struggle is that she must stand up and perform despite being deeply afraid. She has prepared thoroughly, but her fear of freezing in public is the conflict she must face and work through.'
      },
      {
        question: 'What is the THEME of this story?',
        options: [
          'Real courage means showing up and continuing even when things go wrong.',
          'Preparing harder always guarantees a better performance on stage.',
          'Only students with natural talent should audition for school plays.',
          'Supporting roles in a play are always more rewarding than leading roles.'
        ],
        correctIndex: 0,
        explanation: 'The story ends with Priya recognizing that the real test was showing up, starting, and continuing after her mind went blank. The theme is about courage through action — not perfect performance, but persistence despite imperfection.'
      },
      {
        question: 'Why does the author include the detail that Priya practiced her monologue "forty-seven times"?',
        options: [
          'To show that Priya naturally takes too long to memorize lines.',
          'To prove that her drama teacher required at least forty practices before any audition.',
          'To emphasize how hard she prepared, which makes her frozen moment on stage more meaningful and surprising.',
          'To suggest she was the most prepared student and deserved the lead role.'
        ],
        correctIndex: 2,
        explanation: 'The "forty-seven times" detail makes Priya\'s blank moment more striking — she had done every possible preparation, yet still froze. This contrast makes her recovery and the story\'s message about persistence more powerful.'
      },
      {
        question: 'The author writes that Priya woke up with "a stomach full of bees." What does this MEAN?',
        options: [
          'Priya was physically sick and probably should not have auditioned that day.',
          'Priya had eaten something strange at dinner and felt uncomfortable on stage.',
          'The author is describing a real event that happened to Priya before the story begins.',
          'This is figurative language describing the feeling of intense nervousness and anxious energy.'
        ],
        correctIndex: 3,
        explanation: '"A stomach full of bees" is figurative language — Priya does not literally have bees in her stomach. The buzzing, fluttering sensation of bees is used as a vivid image for the feeling of extreme nervousness and anxious energy before the audition.'
      },
      {
        question: 'When Priya says she "passed a different kind of audition," what does she MEAN?',
        options: [
          'She realizes the drama teacher actually gave her the lead role but listed it under a different name.',
          'She plans to ask Ms. Okafor for another audition now that she knows what to expect.',
          'She proved herself not by performing perfectly, but by showing up and persisting when it fell apart.',
          'She understands that supporting roles are always more important than lead roles in any production.'
        ],
        correctIndex: 2,
        explanation: 'Priya\'s insight is that the real test she was running — not Ms. Okafor\'s — was whether she would show up, start, and keep going through a hard moment. She decides she passed that test, even though her performance wasn\'t perfect.'
      }
    ]
  },

  // ── 15 ── LITERARY | ELA.4.R.1.1 (setting, conflict) | ELA.4.R.1.2 (theme) | ELA.4.R.3.1 (figurative language)
  {
    id: 'compass-point',
    title: 'Compass Point',
    topic: 'adventure',
    coverEmoji: '🧭',
    coverColor: '#059669',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 413,
    readTimeMin: 2,
    text: `The hiking trail had looked simple on the map. Kira had studied it at the trailhead — a loop through scrub forest, three miles, no branches. She had a water bottle, a granola bar, and two hours before her family expected her back at the picnic shelter.

An hour in, the trail forked. That was not supposed to happen.

Kira stopped. She looked left, then right. Both paths disappeared into the same dense scrub pines. Her phone had no signal — she had expected that — but she had not expected a fork. She pulled out the folded paper map she had grabbed from the information **kiosk** at the entrance.

For a long moment, the map made no sense. Then she remembered what her uncle had shown her: find a **landmark** first, then **orient** yourself. She looked up and found the afternoon sun — positioned to her right and slightly behind her. West. She had been hiking south when the trail split. That meant the fork was...she traced her finger along the map. There. A spot where the trail curved around a small pond. Left would circle back toward the picnic area. Right would push deeper into the **interior** of the park.

She went left.

Thirty minutes later, she saw the glint of water through the trees — the pond, exactly where the map said it would be. She felt something loosen in her chest.

Twenty feet from the pond's edge, she noticed a turtle sunning on a half-submerged log. She stopped. It was a Florida softshell — she recognized the flat, leathery shell from a field guide she had read last summer. The turtle **regarded** her without moving, then slid silently into the water.

Kira smiled and kept walking.

She reached the picnic shelter twelve minutes before her family began to wonder. Her father asked how the hike was.

She thought about the fork in the trail. The map. The sun. The turtle.

"Interesting," she said.

She didn't explain further. Some experiences, she had decided, were better kept whole — not because they were secret, but because putting them into a sentence would shrink them. What had actually happened was more than a story about getting turned around and finding the way back.

It was something about staying calm when the plan broke, and trusting what she knew.`,
    vocabulary: [
      { word: 'kiosk', definition: 'A small booth or stand, often at a park entrance, where maps and information are available.', example: 'She picked up a free trail map from the kiosk near the park gate.' },
      { word: 'landmark', definition: 'A recognizable feature — a tree, mountain, or building — used to determine your location.', example: 'Using the water tower as a landmark, the hikers found their way back to camp.' },
      { word: 'orient', definition: 'To figure out where you are and which direction you are facing, often using a map or the sun.', example: 'Before setting out, she stopped to orient herself using the position of the sun.' },
      { word: 'interior', definition: 'The inside or central part of something, away from the outer edges or boundary.', example: 'The deepest trails led into the park\'s interior, far from any roads or buildings.' },
      { word: 'regarded', definition: 'Looked at thoughtfully or with careful attention.', example: 'The deer regarded the hiker quietly for a moment before turning and walking away.' }
    ],
    questions: [
      {
        question: 'What is the CONFLICT in this story?',
        options: [
          'Kira is running late and her family is searching the park for her.',
          'Kira encounters an unexpected fork in the trail and must figure out which path leads back.',
          'Kira\'s phone has no signal and she cannot call anyone for help.',
          'Kira is completely lost after hiking in the wrong direction for over an hour.'
        ],
        correctIndex: 1,
        explanation: 'The conflict begins when Kira finds an unexpected trail fork — something the map did not show. She must use her knowledge to determine which path is correct. Her phone\'s lack of signal is a detail, but the actual conflict is the decision she must make at the fork.'
      },
      {
        question: 'How does Kira RESOLVE the conflict?',
        options: [
          'She waits at the trail fork until a park ranger arrives to point the way.',
          'She turns around completely and hikes back the way she came.',
          'She uses the position of the sun and a paper map to determine which path leads back.',
          'She follows the turtle, which leads her to the path near the pond.'
        ],
        correctIndex: 2,
        explanation: 'Kira uses two tools — the sun\'s position (to determine direction) and the paper map (to identify where the fork must be) — to reason out that "left" leads back toward the picnic area. The turtle appears after she has already made the correct decision.'
      },
      {
        question: 'What does the author\'s description of the turtle CONTRIBUTE to the story?',
        options: [
          'It provides a clue that helps Kira identify the correct path back to the picnic area.',
          'It shows that the Florida scrub habitat contains animals that are dangerous to approach.',
          'It shows that once Kira solves the conflict, she is calm enough to appreciate the world around her.',
          'It proves that Kira is an expert in Florida wildlife who has trained for this kind of situation.'
        ],
        correctIndex: 2,
        explanation: 'By the time Kira notices the turtle, she has already solved her problem — the pond confirms she is on the right path. Her ability to pause, recognize the turtle\'s species, and smile shows that her anxiety is gone and she is fully present again.'
      },
      {
        question: 'What is the THEME of this story?',
        options: [
          'Technology cannot be trusted in nature, so everyone should carry paper maps.',
          'Staying calm under pressure and trusting what you know can carry you through unexpected challenges.',
          'Young people should never hike alone, even on short, familiar trails.',
          'The natural world is full of dangers that even experienced hikers cannot predict.'
        ],
        correctIndex: 1,
        explanation: 'Kira\'s final reflection — "something about staying calm when the plan broke, and trusting what she knew" — is the story\'s stated theme. She didn\'t panic; she used her knowledge. That combination is what resolved the conflict.'
      },
      {
        question: 'Why does Kira say "Interesting" instead of explaining the whole story to her father?',
        options: [
          'She is embarrassed that she got turned around and does not want her family to know.',
          'She wants to protect the location of the turtle pond so others don\'t disturb it.',
          'She feels the full experience was too meaningful and complete to reduce to a simple summary.',
          'She plans to write about the hike later and does not want to reveal the ending yet.'
        ],
        correctIndex: 2,
        explanation: 'The narrator explains that Kira keeps it to herself "not because they were secret, but because putting them into a sentence would shrink them." She wants to preserve the fullness of the experience, not hide anything.'
      }
    ]
  },

  // ── E5 ── INFORMATIONAL | Florida Nature | ELA.2.R.2.1 (central idea + key details)
  {
    id: 'manatees',
    title: "Florida's Gentle Giants: Manatees",
    topic: 'florida-nature',
    coverEmoji: '🐠',
    coverColor: '#0891b2',
    gradeLevel: '2-3',
    level: 'emerging',
    grades: [1, 2, 3, 4],
    wordCount: 245,
    readTimeMin: 1,
    text: `If you paddle a kayak through one of Florida's warm, quiet rivers, you might notice a large, dark shape moving slowly under the water. You have just spotted a **manatee**.

Manatees are large **mammals** that live in the sea and in rivers. They can grow up to 13 feet long and weigh over 1,000 pounds. Even though they are huge, manatees are gentle and calm. They move slowly, feeding on sea grass and water plants. A manatee can eat up to 150 pounds of plants in a single day!

Because they eat plants and move slowly, manatees are sometimes called "sea cows." But manatees are actually more closely related to elephants.

One big problem for manatees is boats. Manatees swim near the surface of the water and move slowly, so they are often hit by boat **propellers**. Many manatees carry scars on their backs from these strikes. Florida has set up special slow-speed zones in areas where manatees live, to help keep them safe.

Manatees also need warm water to **survive**. They cannot live in cold water. In winter, many manatees travel to Florida's warm springs, where the water stays at about 72 degrees all year.

Today, manatees are listed as a **threatened** species, which means they are at risk. Scientists and volunteers work together to protect them so that these gentle giants can keep swimming in Florida's waters for years to come.`,
    vocabulary: [
      { word: 'manatee', definition: 'A large, gentle mammal that lives in warm, shallow water and eats sea grass and plants.', example: 'The manatee floated calmly near the surface of the river.' },
      { word: 'mammal', definition: 'A warm-blooded animal that breathes air and feeds its young milk.', example: 'Dolphins, dogs, and humans are all mammals.' },
      { word: 'propeller', definition: 'A spinning blade on a boat that pushes it through the water.', example: 'The boat\'s propeller spun quickly as it moved across the lake.' },
      { word: 'survive', definition: 'To stay alive, especially in a difficult situation.', example: 'Manatees cannot survive in very cold water.' },
      { word: 'threatened', definition: 'Describes a species that is at risk of becoming endangered if not protected.', example: 'The threatened sea turtle is protected by Florida law.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'Manatees are fast swimmers that chase fish through Florida rivers.',
          'Florida\'s manatees are gentle, plant-eating animals that face dangers and need protection.',
          'Manatees are the largest animals in the entire state of Florida.',
          'Kayaking in Florida rivers is dangerous because manatees can tip over boats.'
        ],
        correctIndex: 1,
        explanation: 'The passage describes what manatees are, what they eat, the dangers they face (boats, cold water), and the efforts to protect them. The central idea is that they are gentle animals that need our help to survive.'
      },
      {
        question: 'According to the passage, why are manatees sometimes called "sea cows"?',
        options: [
          'Because they are as fast as cows running across a field.',
          'Because they live in the ocean and have black-and-white spots like dairy cows.',
          'Because they eat plants slowly, the way cows graze in a field.',
          'Because they are related to cows and live on farms near the water.'
        ],
        correctIndex: 2,
        explanation: 'The passage says manatees are called "sea cows" because of the way they feed — they slowly eat sea grass and water plants, which is similar to how cows graze on grass in a field.'
      },
      {
        question: 'What does the word "threatened" mean in this passage?',
        options: [
          'An animal that attacks boats and swimmers in the water.',
          'A species that is at risk and could become endangered without protection.',
          'An animal that has already gone extinct.',
          'A species that lives only in one small part of Florida.'
        ],
        correctIndex: 1,
        explanation: 'The passage says a threatened species is one "at risk" and that scientists work to protect them. Threatened means they are in danger but not yet gone.'
      },
      {
        question: 'What is ONE reason manatees are often injured by boats?',
        options: [
          'Manatees attack boats because they are territorial animals.',
          'Boats move too slowly for manatees to hear them coming.',
          'Manatees swim near the surface and move slowly, making them hard for boats to avoid.',
          'Manatees are attracted to the bright lights and sounds of motorboats.'
        ],
        correctIndex: 2,
        explanation: 'The passage explains that manatees swim near the surface and move slowly — this combination makes it difficult for boats to avoid hitting them. Florida has set up slow zones because of this danger.'
      },
      {
        question: 'Which detail BEST supports the idea that manatees are gentle animals?',
        options: [
          'Manatees can grow up to 13 feet long and weigh over 1,000 pounds.',
          'Even though they are huge, manatees are gentle and calm, moving slowly and feeding on plants.',
          'Manatees travel to warm springs in Florida during the winter months.',
          'Scientists and volunteers work together to protect manatees.'
        ],
        correctIndex: 1,
        explanation: 'The passage directly states that despite their large size, manatees are "gentle and calm" and only eat plants — this detail most directly supports the idea that they are peaceful animals.'
      }
    ]
  },

  // ── E6 ── INFORMATIONAL | Florida Nature | ELA.2.R.2.1 (central idea + key details)
  {
    id: 'florida-dolphins',
    title: 'Dolphins of the Gulf',
    topic: 'florida-nature',
    coverEmoji: '🐬',
    coverColor: '#0891b2',
    gradeLevel: '2-3',
    level: 'emerging',
    grades: [1, 2, 3, 4],
    wordCount: 240,
    readTimeMin: 1,
    text: `If you stand on a Florida beach early in the morning, you might spot a smooth gray fin cutting through the waves. Look closer and you will see the whole animal leap — a bottlenose dolphin, one of the most recognizable animals in the ocean.

Bottlenose dolphins live in groups called **pods**. A pod usually has between five and fifteen dolphins, though they sometimes gather in much larger groups. Dolphins work together to hunt fish. They **herd** schools of fish toward shallow water, then take turns darting in to eat. This teamwork makes them very effective hunters.

Dolphins are also known for their intelligence. They communicate using clicks, whistles, and squeaks. Each dolphin has its own unique sound called a "**signature whistle**" — a call that works like a name. When dolphins get separated from their pod, they use these whistles to find each other again.

Bottlenose dolphins are also playful. They often swim alongside boats, riding the waves that boats create in front of them. Scientists think this play helps young dolphins practice swimming skills.

Unfortunately, dolphins face dangers in Florida's waters. Boat strikes injure many dolphins each year. Pollution and loss of fish also threaten them. Sometimes dolphins become **entangled** in fishing nets, which can be deadly.

Scientists say the best way to protect dolphins is to keep Florida's water clean and to give dolphins their space. If you see one in the wild, watch quietly from a distance — do not touch or feed them. That is the safest way to enjoy these remarkable animals.`,
    vocabulary: [
      { word: 'pod', definition: 'A group of dolphins, whales, or other sea mammals that live and travel together.', example: 'The pod of dolphins swam in tight formation as they moved through the bay.' },
      { word: 'herd', definition: 'To move or guide a group of animals in a particular direction.', example: 'The dolphins worked together to herd the fish into a tight ball before feeding.' },
      { word: 'signature whistle', definition: 'A unique sound made by each dolphin that works like a personal name.', example: 'Scientists discovered that dolphins use their signature whistles to call out to specific individuals.' },
      { word: 'entangled', definition: 'Caught or twisted up in something, such as a net or rope, making it hard to move.', example: 'The sea turtle was entangled in a fishing net and needed rescuers to cut it free.' },
      { word: 'marine mammal', definition: 'A warm-blooded animal that breathes air, feeds its young milk, and lives in or near the ocean.', example: 'Dolphins, whales, and manatees are all marine mammals found in Florida\'s waters.' }
    ],
    questions: [
      {
        question: 'What is the MAIN IDEA of this passage?',
        options: [
          'Bottlenose dolphins are dangerous animals that people should stay away from.',
          'Florida\'s bottlenose dolphins are intelligent, social animals that face real threats and need protection.',
          'Dolphins are found only in Florida and nowhere else in the world.',
          'Scientists have given every wild dolphin in Florida an official name.'
        ],
        correctIndex: 1,
        explanation: 'The passage describes what dolphins are, how smart and social they are, the dangers they face, and how people can help protect them. Together, these details support the central idea that dolphins are remarkable animals facing threats.'
      },
      {
        question: 'How do dolphins use TEAMWORK to hunt fish?',
        options: [
          'They take turns diving deep to find fish hiding near the ocean floor.',
          'One dolphin finds the fish while the others wait at the surface.',
          'They herd schools of fish toward shallow water and take turns darting in to eat.',
          'They communicate with seabirds above the water to locate fish below.'
        ],
        correctIndex: 2,
        explanation: 'The passage explains that dolphins work as a team — they drive fish toward shallow water together, then take turns feeding. This cooperative hunting strategy makes them effective predators.'
      },
      {
        question: 'What does "signature whistle" suggest about each dolphin\'s unique call?',
        options: [
          'It is a whistle that scientists invented and taught dolphins to recognize.',
          'It is a sound all dolphins in a pod make together at the same time.',
          'It is a unique, personal sound that belongs to one individual dolphin, like a name.',
          'Signature whistles are only used by dolphins when they are in danger.'
        ],
        correctIndex: 2,
        explanation: 'The passage says each dolphin\'s signature whistle "works like a name" — it is unique to that individual and is used to find specific pod members when separated, just like calling someone\'s name.'
      },
      {
        question: 'According to the passage, what is the BEST way to protect wild dolphins?',
        options: [
          'Keep Florida\'s water clean and observe dolphins quietly from a distance without touching or feeding them.',
          'Bring food to the beach so dolphins stay close to shore where boats cannot reach them.',
          'Create special swimming areas where people can swim alongside dolphins safely.',
          'Report every dolphin sighting to scientists so they can track every pod in Florida.'
        ],
        correctIndex: 0,
        explanation: 'The passage gives specific guidance: "keep Florida\'s water clean," "give dolphins their space," "watch quietly from a distance," and "do not touch or feed them." All of these together make up the best way to protect them.'
      },
      {
        question: 'Which detail BEST supports the idea that dolphins are intelligent animals?',
        options: [
          'Bottlenose dolphins are often seen near Florida\'s Gulf Coast beaches.',
          'Dolphins sometimes ride the waves created by moving boats.',
          'A pod usually has between five and fifteen dolphins.',
          'Each dolphin has a unique signature whistle that works like a personal name to identify individuals.'
        ],
        correctIndex: 3,
        explanation: 'Having a unique personal "name" — a whistle that identifies an individual to others — is a sign of sophisticated communication, which is a hallmark of intelligence. This detail most directly supports the idea that dolphins are highly intelligent.'
      }
    ]
  },

  // ── E7 ── INFORMATIONAL | Science | ELA.2.R.2.2 (cause/effect text structure)
  {
    id: 'plants-sunlight',
    title: 'How Plants Make Their Own Food',
    topic: 'science',
    coverEmoji: '🌱',
    coverColor: '#059669',
    gradeLevel: '2-3',
    level: 'emerging',
    grades: [1, 2, 3, 4],
    wordCount: 242,
    readTimeMin: 1,
    text: `Have you ever wondered how a plant eats? Animals have to search for food — they hunt, graze, or gather. But plants do something remarkable: they make their own food, right inside their leaves.

This process is called **photosynthesis**.

To make food, a plant needs three things: sunlight, water, and a gas in the air called carbon dioxide. The plant's leaves are full of tiny structures called **chloroplasts**. Chloroplasts contain a green material called **chlorophyll** — and chlorophyll is what makes leaves green.

When sunlight hits the leaf, chlorophyll captures the energy from that light. The plant uses that energy to combine water (which travels up from the roots) and carbon dioxide (which enters through tiny holes in the leaf called **stomata**). The result is a type of sugar — the plant's food.

But something else is made at the same time: oxygen. The plant releases oxygen through the stomata as a **byproduct**. This is where most of the oxygen in our air comes from. Every time you take a breath, you are using oxygen that a plant released during photosynthesis.

This is also why plants need sunlight to live. A plant in a dark room cannot make food, so it slowly grows pale and weak.

You can test this yourself. Cover one leaf with dark tape for a few days and leave the rest in the light. The covered leaf will turn yellow — a sign that without light, photosynthesis cannot happen.`,
    vocabulary: [
      { word: 'photosynthesis', definition: 'The process plants use to make their own food using sunlight, water, and carbon dioxide.', example: 'Without sunlight, photosynthesis cannot occur and the plant will slowly weaken.' },
      { word: 'chloroplast', definition: 'A tiny structure inside plant cells where photosynthesis takes place.', example: 'The chloroplasts in the leaf captured light energy from the afternoon sun.' },
      { word: 'chlorophyll', definition: 'The green pigment inside plant cells that captures light energy and powers photosynthesis.', example: 'Chlorophyll gives leaves their green color and helps them absorb energy from the sun.' },
      { word: 'stomata', definition: 'Tiny openings on the surface of leaves that allow gases like carbon dioxide and oxygen to pass through.', example: 'During photosynthesis, carbon dioxide enters the leaf through its stomata.' },
      { word: 'byproduct', definition: 'Something produced as a result of making something else, even though it was not the main goal.', example: 'Oxygen is a byproduct of photosynthesis — it is released by plants while they make sugar.' }
    ],
    questions: [
      {
        question: 'What is the MAIN IDEA of this passage?',
        options: [
          'Plants make their own food through photosynthesis, using sunlight, water, and carbon dioxide.',
          'All living things make their own food, but plants do it most efficiently.',
          'Chlorophyll is the most important chemical substance on Earth.',
          'Plants cannot survive indoors because they need fresh outdoor air.'
        ],
        correctIndex: 0,
        explanation: 'The whole passage is organized around explaining photosynthesis — what it is, what ingredients it needs, and what it produces. That is the main idea the author builds step by step.'
      },
      {
        question: 'What THREE things does a plant need to make its own food?',
        options: [
          'Soil, air, and water.',
          'Oxygen, sugar, and chlorophyll.',
          'Sunlight, water, and carbon dioxide.',
          'Roots, chloroplasts, and oxygen.'
        ],
        correctIndex: 2,
        explanation: 'The passage states directly: "To make food, a plant needs three things: sunlight, water, and a gas in the air called carbon dioxide." All three are essential ingredients for photosynthesis.'
      },
      {
        question: 'What does the word "byproduct" MOST LIKELY mean in this passage?',
        options: [
          'The main ingredient a plant uses to make its food.',
          'Something extra that is produced while making something else.',
          'A gas that plants pull in from the air around them.',
          'The root system that carries water up to the leaves.'
        ],
        correctIndex: 1,
        explanation: 'The passage says oxygen is made "at the same time" as the plant\'s food, and calls it a byproduct — something produced alongside the main product (sugar), not the main goal of the process.'
      },
      {
        question: 'Why do plants in a dark room grow pale and weak?',
        options: [
          'Dark rooms are too cold for most plants to grow properly.',
          'Without sunlight, roots cannot absorb enough water from the soil.',
          'Without light, chlorophyll cannot capture energy, so the plant cannot make food.',
          'Dark rooms have less carbon dioxide than rooms with windows.'
        ],
        correctIndex: 2,
        explanation: 'The passage explains that without sunlight, photosynthesis cannot occur — meaning the plant cannot produce sugar (its food). Without food, it weakens and turns pale. The lack of light is the cause of the problem.'
      },
      {
        question: 'Based on the passage, what would MOST LIKELY happen if you covered a plant\'s leaves so no carbon dioxide could enter?',
        options: [
          'The plant would grow faster because it would store more water in its roots.',
          'The plant would still make food normally because it gets carbon dioxide from the soil.',
          'Photosynthesis would stop because one of the three needed ingredients could not get in.',
          'The leaves would turn a brighter green because more chlorophyll would build up.'
        ],
        correctIndex: 2,
        explanation: 'Since carbon dioxide enters through the stomata and is one of the three ingredients needed for photosynthesis, blocking it would stop the process — just like blocking sunlight stops it. Without all three ingredients, photosynthesis cannot happen.'
      }
    ]
  },

  // ── E8 ── LITERARY | Character / Perseverance | ELA.2.R.1.2 (theme) | ELA.2.R.1.1 (conflict)
  {
    id: 'the-free-throw',
    title: 'The Free Throw',
    topic: 'character',
    coverEmoji: '🏀',
    coverColor: '#f59e0b',
    gradeLevel: '2-3',
    level: 'emerging',
    grades: [1, 2, 3, 4],
    wordCount: 237,
    readTimeMin: 1,
    text: `Dominic had made free throws a hundred times at practice. He could make them almost without thinking. But that was practice. This was different.

The gym was packed. Twenty seconds left. His team was down by one point. The **referee** handed him the ball, and the whole world seemed to go quiet.

He bounced the ball three times — the way he always did. He looked at the hoop. He reminded himself: bend your knees, follow through, keep your elbow in.

He threw the ball.

It hit the front of the rim and bounced away. No good.

He heard the groan from his side of the gym. His stomach dropped.

But there was still a second free throw coming. He had another chance.

The referee handed him the ball again. Dominic took a slow breath. He was not going to think about the miss. He was not going to think about the score or the crowd or the clock. He was going to think about only one thing: the hoop.

He bent his knees.

He threw.

The ball **arced** perfectly and dropped through the net with a soft swish. Tie game.

His team won in **overtime**.

Afterward, his coach put a hand on his shoulder. "The first one was tough," she said. "But you came back. That\'s what I want to see."

Dominic nodded. He had learned something that night: it is not the miss that **defines** you. It is what you do next.`,
    vocabulary: [
      { word: 'referee', definition: 'A person whose job is to make sure the rules of a sport are followed during a game.', example: 'The referee blew the whistle and called a foul on the player who pushed.' },
      { word: 'arced', definition: 'Moved in a smooth, curved path through the air.', example: 'The ball arced high above the rim before dropping through the net.' },
      { word: 'overtime', definition: 'Extra time played at the end of a game when the score is tied.', example: 'Neither team scored in overtime, so the game went to a shootout.' },
      { word: 'defines', definition: 'Shows what something truly is or what someone is really like.', example: 'It\'s not one bad game that defines you — it\'s how you respond to it.' },
      { word: 'concentrate', definition: 'To focus all your attention and energy on one thing.', example: 'She had to concentrate carefully to hear the coach\'s instructions over the crowd noise.' }
    ],
    questions: [
      {
        question: 'What is the THEME of this story?',
        options: [
          'Free throw shooting requires years of serious practice to master.',
          'Sports teams always win when their best player stays calm under pressure.',
          'What defines you is not how you fail, but how you respond to failure.',
          'Overtime periods are always more exciting than regular game time.'
        ],
        correctIndex: 2,
        explanation: 'The last line states the theme directly: "it is not the miss that defines you. It is what you do next." Dominic misses the first shot, but comes back to make the second — showing that his response to failure is what matters.'
      },
      {
        question: 'What does the phrase "the whole world seemed to go quiet" suggest?',
        options: [
          'The noise in the gym actually stopped because the crowd went silent.',
          'Dominic became so focused on the moment that everything else faded away.',
          'The crowd was cheering so quietly that Dominic could barely hear them.',
          'Dominic had a hearing problem that affected him during high-pressure games.'
        ],
        correctIndex: 1,
        explanation: 'The gym was actually packed and loud. The phrase "the whole world seemed to go quiet" is figurative — it describes Dominic\'s intense focus narrowing his awareness down to just the moment in front of him.'
      },
      {
        question: 'What does Dominic do DIFFERENTLY on his second free throw?',
        options: [
          'He uses a completely different shooting technique his coach taught him.',
          'He looks at the crowd instead of the hoop to calm his nerves.',
          'He skips his usual three-bounce routine because it didn\'t work the first time.',
          'He blocks out everything — the miss, the crowd, the score — and focuses only on the hoop.'
        ],
        correctIndex: 3,
        explanation: 'Before the second shot, Dominic tells himself not to think about the miss, the score, or the crowd — only the hoop. This deliberate mental focus is what he does differently, and it results in a perfect shot.'
      },
      {
        question: 'What does the word "defines" mean as used at the end of the story?',
        options: [
          'Writes out the dictionary meaning of a word.',
          'Shows what someone is truly like or what they are really worth.',
          'Changes the official rules of a game.',
          'Describes the final score of a championship game.'
        ],
        correctIndex: 1,
        explanation: '"Defines" in this context means "shows who you really are." Dominic\'s coach and the narrator both suggest that a miss is not what reveals a player\'s character — the response to the miss is what shows who someone truly is.'
      },
      {
        question: 'How does Dominic CHANGE from the beginning of the story to the end?',
        options: [
          'He starts nervous and stays nervous the entire time.',
          'He starts confident and ends feeling he let his team down.',
          'He starts with a missed shot and a sinking feeling, but ends having recovered and learned something important.',
          'He starts as a weak player and becomes the best free throw shooter on the team.'
        ],
        correctIndex: 2,
        explanation: 'Dominic\'s arc goes from a missed shot (his stomach dropped) to a made shot (the team ties) to a lesson learned (it\'s what you do next that matters). This is a clear growth from failure to recovery to wisdom.'
      }
    ]
  },

  // ── 16 ── BIOGRAPHY | ELA.4.R.2.3 (author's perspective) | ELA.4.R.2.2 (central idea)
  {
    id: 'zora-neale-hurston',
    title: 'Voices Worth Keeping: Zora Neale Hurston',
    topic: 'biography',
    coverEmoji: '📝',
    coverColor: '#6d28d9',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 406,
    readTimeMin: 2,
    text: `Zora Neale Hurston grew up in Eatonville, Florida — one of the first all-Black self-governing towns in the United States. Born in 1891, she was raised in a community where Black residents owned businesses, held public office, and told their own stories without outside interference. That childhood gave Hurston something rare: a deep pride in Black culture long before the wider world paid it much attention.

As a young woman, Hurston moved north to attend Howard University and then Barnard College in New York City, where she became the school's first Black woman graduate in 1928. She studied under the **renowned** anthropologist Franz Boas, who taught her that the folk songs, stories, and traditions of Black communities in the South had real cultural value — not as curiosities, but as literature and history.

Hurston returned south to collect those stories. She traveled through Florida, Alabama, and Louisiana, recording the tales, songs, and sayings of ordinary people in churches, on front porches, and at work camps. Her collection, *Mules and Men*, published in 1935, became the first book of Black American **folklore** written by a Black American author.

Hurston is most celebrated for her novel *Their Eyes Were Watching God*, published in 1937. Set in Florida, it follows a Black woman named Janie Crawford through love, loss, and self-discovery. Hurston wrote it in just seven weeks. Critics disagreed: some praised its rich, lyrical language and honest portrayal of Black life; others believed it focused too much on personal stories rather than political ones. Hurston held her ground. She believed that the private voices of ordinary people deserved to be considered great literature.

After her death in 1960, much of her work fell into **obscurity** — out of print, largely forgotten. Then in the 1970s, author Alice Walker searched libraries and cemeteries to recover Hurston's legacy. Walker found Hurston's unmarked grave in Fort Pierce, Florida, placed a headstone, and wrote an influential essay that brought *Their Eyes Were Watching God* back into print.

Today, Hurston is recognized as one of the most important American writers of the twentieth century. Her life proves that collecting and celebrating ordinary people's stories — stories that might otherwise be lost — is itself an extraordinary act.`,
    vocabulary: [
      { word: 'renowned', definition: 'Famous and respected, especially in a particular field.', example: 'The renowned scientist had spent decades studying ocean biology.' },
      { word: 'folklore', definition: 'Traditional stories, songs, and customs passed down through generations within a community.', example: 'The collection preserved folklore from dozens of different cultures.' },
      { word: 'obscurity', definition: 'The state of being unknown or forgotten; lacking fame or recognition.', example: 'The brilliant painter spent her life in obscurity until her work was rediscovered years later.' },
      { word: 'lyrical', definition: 'Having a beautiful, musical quality; using vivid, flowing language.', example: 'The author\'s lyrical writing made readers feel as though they were inside the story.' },
      { word: 'legacy', definition: 'What a person leaves behind after they are gone — their lasting influence or impact on the world.', example: 'The teacher\'s legacy lived on in the students she had inspired over forty years.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'Zora Neale Hurston was the most popular author of the 1930s.',
          'Barnard College and Howard University produced many important Black scholars.',
          'Hurston\'s dedication to preserving Black stories and voices made her an enduring and important American author.',
          'Alice Walker was more influential than Hurston because she helped bring Hurston\'s work back into print.'
        ],
        correctIndex: 2,
        explanation: 'Every paragraph supports the idea that Hurston devoted her life to collecting and creating stories for people whose voices were often ignored — and that this work ultimately gave her a lasting place in American literature.'
      },
      {
        question: 'How did Franz Boas influence Hurston\'s work?',
        options: [
          'He taught her to write novels based on personal experience rather than community research.',
          'He gave her money to travel to Florida and publish her first book.',
          'He helped her see that the folk traditions of Black communities had real cultural and literary value.',
          'He encouraged her to leave the South and never return to her hometown.'
        ],
        correctIndex: 2,
        explanation: 'The passage says Boas taught Hurston that folk songs, stories, and traditions "had real cultural value — not as curiosities, but as literature and history." This shaped her decision to travel south and record those traditions.'
      },
      {
        question: 'What does the word "obscurity" suggest about what happened to Hurston\'s work after her death?',
        options: [
          'Her books became more popular than ever and were printed in large quantities.',
          'Her work was banned by publishers who disagreed with her ideas.',
          'Her writing became widely unknown and out of print, as if it had never existed.',
          'Her work was celebrated in Florida but ignored in the rest of the country.'
        ],
        correctIndex: 2,
        explanation: '"Obscurity" means being unknown or forgotten. The passage says her work fell "out of print, largely forgotten" — exactly the kind of disappearance that "obscurity" describes.'
      },
      {
        question: 'What is the AUTHOR\'S PERSPECTIVE toward Zora Neale Hurston?',
        options: [
          'The author thinks Hurston made a mistake by focusing on personal stories instead of politics.',
          'The author is neutral and presents only facts without expressing any view of Hurston.',
          'The author admires Hurston and presents her as a courageous figure who preserved an important cultural legacy.',
          'The author believes Alice Walker deserves more credit than Hurston for keeping Black literature alive.'
        ],
        correctIndex: 2,
        explanation: 'The author calls Hurston\'s act "extraordinary," credits her for being the first to publish Black folklore as a Black author, and ends the passage by praising her life\'s work — all signs of deep admiration and respect.'
      },
      {
        question: 'How does Alice Walker fit into the STRUCTURE of this passage?',
        options: [
          'She is introduced at the beginning to show how Hurston was first discovered.',
          'She appears in the middle to explain why critics disliked Hurston\'s novel.',
          'She is used as a contrast to show that Hurston\'s methods were outdated.',
          'She is introduced near the end as the person who recovered and restored Hurston\'s lost legacy.'
        ],
        correctIndex: 3,
        explanation: 'The passage ends with Walker discovering Hurston\'s unmarked grave and writing the essay that brought her back into print — Walker represents the recovery of a forgotten legacy, providing a hopeful conclusion to the passage.'
      }
    ]
  },

  // ── 17 ── INFORMATIONAL | ELA.4.R.2.1 (text structure: problem/solution) | ELA.4.R.2.2
  {
    id: 'florida-springs',
    title: "Florida's Hidden Water: The Springs",
    topic: 'florida-nature',
    coverEmoji: '💧',
    coverColor: '#0891b2',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 402,
    readTimeMin: 2,
    text: `Beneath Florida's flat plains and rolling hills, a hidden world of water lies waiting. Called the Floridan **Aquifer**, this vast underground network of limestone rock holds billions of gallons of fresh water — rainfall that seeped into the ground thousands of years ago and has been filtering slowly through porous stone ever since.

Where that ancient water pushes up through natural openings, something extraordinary appears: a freshwater spring. Florida has more natural springs than any other state — more than 700 documented springs, ranging from gentle trickles in shaded woodlands to first-magnitude springs that gush millions of gallons every single day.

These springs have a quality unlike any other waterway. The water stays a constant 68 to 72 degrees Fahrenheit year-round — warmer than the ocean in winter, cooler than the air in summer. The temperature never changes because the water comes from deep underground, **insulated** from seasonal shifts. This consistency makes Florida's springs critical winter refuges for manatees, which cannot survive in cold water. Every year, hundreds of manatees gather at spring-fed rivers like Blue Spring State Park, crowding into the warm, clear flow to wait out the cold.

The water itself is remarkably pure. Filtered through layers of limestone over decades, it arrives at the surface nearly free of sediment. At Silver Springs in Marion County, glass-bottom boat tours once gave visitors the feeling of floating above a living aquarium.

Today, however, many springs face serious stress. As Florida's population grows, more groundwater is pumped for homes, agriculture, and businesses. When aquifer pressure drops, spring flow weakens — some springs that once ran continuously now slow to a trickle in dry seasons. Fertilizers from farms and lawns seep into the groundwater, loading springs with excess **nutrients**. These nutrients feed algae blooms that cloud the once-crystal water and choke out native aquatic plants.

Conservation is expanding. Florida law now limits groundwater pumping in many regions. Volunteers remove invasive plants from spring runs. Scientists monitor water quality and flow rates at hundreds of sites statewide.

Florida's springs took thousands of years to form. They are connections to a deeper past — filled with water that fell as rain long before anyone alive today was born. Protecting them means protecting something that no human generation could quickly replace.`,
    vocabulary: [
      { word: 'aquifer', definition: 'An underground layer of rock or sediment that stores large amounts of water.', example: 'The city drilled wells into the aquifer to supply drinking water to thousands of households.' },
      { word: 'insulated', definition: 'Protected from outside temperature changes by a surrounding layer.', example: 'The thick cave walls kept the interior insulated from the heat of summer above.' },
      { word: 'sediment', definition: 'Tiny particles of sand, silt, or clay that settle at the bottom of water or are carried by it.', example: 'The flood left a layer of brown sediment across the fields when the water receded.' },
      { word: 'nutrients', definition: 'Substances in soil or water that help living things grow; too many can harm ecosystems.', example: 'The farmer added nutrients to the soil to help the corn grow taller and stronger.' },
      { word: 'magnitude', definition: 'Size or scale; for springs, it describes how much water flows per unit of time.', example: 'Scientists classify springs by magnitude — the largest produce millions of gallons per day.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'Florida\'s springs are warmer than ocean water and have always been popular tourist destinations.',
          'Florida\'s freshwater springs are extraordinary natural resources that face serious threats and need protection.',
          'The Floridan Aquifer is the largest underground water system in the entire world.',
          'Manatees are the only reason Florida\'s springs are considered important enough to protect.'
        ],
        correctIndex: 1,
        explanation: 'The passage describes what makes springs remarkable (their temperature, clarity, biodiversity), then identifies threats (overpumping, fertilizers), and ends with conservation responses — supporting the central idea that they are extraordinary and at risk.'
      },
      {
        question: 'According to the passage, why do manatees rely on Florida\'s springs in winter?',
        options: [
          'Springs provide manatees with the sea grass and algae they eat during winter months.',
          'The spring water washes parasites from manatees\' skin and keeps them healthy.',
          'Springs maintain a constant warm temperature that manatees require to survive cold seasons.',
          'Florida law requires manatees to gather at springs so scientists can count them each year.'
        ],
        correctIndex: 2,
        explanation: 'The passage states that manatees "cannot survive in cold water" and gather at spring-fed rivers because of their "constant 68 to 72 degrees Fahrenheit year-round." The stable warmth is what manatees depend on.'
      },
      {
        question: 'What does the word "insulated" suggest about the springs\' temperature?',
        options: [
          'The springs are artificially heated by a power source beneath the ground.',
          'The underground location protects the water from seasonal temperature changes, keeping it stable.',
          'The springs stay warm only in winter and cool only in summer.',
          'Scientists pour insulating material into the aquifer to keep the water temperature steady.'
        ],
        correctIndex: 1,
        explanation: '"Insulated" means protected from temperature changes. The passage explains that because the water comes from deep underground, it is insulated from seasonal shifts — keeping it at a constant temperature all year.'
      },
      {
        question: 'How does the AUTHOR ORGANIZE the information in this passage?',
        options: [
          'By comparing Florida\'s springs to springs in other states.',
          'By describing the springs, explaining the threats they face, and then presenting conservation solutions.',
          'By following a single manatee\'s journey through Florida\'s spring system.',
          'By listing the names of all 700 springs from largest to smallest.'
        ],
        correctIndex: 1,
        explanation: 'The passage describes the springs and their value, then identifies the problems they face (dropping aquifer pressure, fertilizer runoff), and ends with conservation responses — a clear problem-solution structure.'
      },
      {
        question: 'Which detail BEST supports the claim that Florida\'s springs are unusually clear?',
        options: [
          'The aquifer holds billions of gallons of water filtered through limestone over thousands of years.',
          'At Silver Springs, glass-bottom boat tours gave visitors the feeling of floating above a living aquarium.',
          'More than 700 springs have been documented throughout Florida.',
          'Florida law limits the amount of groundwater that can be pumped in many regions.'
        ],
        correctIndex: 1,
        explanation: 'The glass-bottom boat detail is a vivid, specific example that directly illustrates exceptional water clarity — clear enough that looking down through it felt like looking into an aquarium. This is the strongest support for the claim.'
      }
    ]
  },

  // ── 18 ── INFORMATIONAL | ELA.4.R.2.2 (central idea) | ELA.4.R.2.4 (claim + evidence)
  {
    id: 'ocean-currents',
    title: 'The Ocean\'s Invisible Rivers',
    topic: 'science',
    coverEmoji: '🌊',
    coverColor: '#1e3a8a',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 408,
    readTimeMin: 2,
    text: `In the Atlantic Ocean, an invisible river runs. It has no banks, no visible boundary, and no name that ships must watch for — yet it carries more water than all the rivers on Earth combined. This is the Gulf Stream, one of the most powerful ocean **currents** on the planet, and it has shaped Florida's climate, history, and coastlines for thousands of years.

An ocean current is a continuous, directed flow of water moving through the ocean. Currents near the surface are driven mainly by wind — steady prevailing winds push surface water into long, flowing streams. Deeper in the ocean, differences in temperature and **salinity** (the amount of salt dissolved in water) drive what scientists call thermohaline circulation — a slow, global movement connecting every ocean on Earth. Warm, less dense water flows at the surface; cold, dense water sinks and creeps along the ocean floor in the opposite direction.

The Gulf Stream begins in the warm, shallow waters of the Gulf of Mexico. It flows northward along Florida's Atlantic coast at up to five miles per hour — fast enough that early Spanish explorers learned to ride it northward and eastward toward Europe. The Gulf Stream carries enormous quantities of heat from the tropics northward, warming the coasts of Britain, Norway, and western Europe significantly. Scientists estimate that without it, average winter temperatures in those regions would be 9 to 18 degrees Fahrenheit colder.

For Florida, the Gulf Stream brings important benefits. It moderates coastal temperatures, keeping them milder than the state's inland areas. It carries **larvae** and nutrients that feed Florida's coral reefs. Early navigators who understood its position could cross the Atlantic in record time.

However, a warming ocean is changing the current. Studies show the Gulf Stream has weakened over recent decades as climate change alters ocean temperatures and melting ice sheets reduce salinity in the North Atlantic. A significant weakening could shift weather patterns across the entire Northern Hemisphere, bringing colder winters to Europe and disrupting rainfall across multiple continents.

Ocean currents are not merely physical features. They are the planet's circulatory system — distributing heat, oxygen, and nutrients from one region to another, and regulating the climate that all life on Earth depends upon. Understanding them is not just a matter of scientific curiosity. It is a matter of survival.`,
    vocabulary: [
      { word: 'current', definition: 'A continuous, directed flow of water moving through the ocean in a particular direction.', example: 'The strong current carried the swimmer farther from shore than she intended.' },
      { word: 'salinity', definition: 'The amount of dissolved salt in water; ocean water has higher salinity than fresh water.', example: 'The salinity of the Dead Sea is so high that swimmers float without effort.' },
      { word: 'thermohaline', definition: 'Relating to ocean circulation driven by differences in water temperature and salt content.', example: 'Thermohaline circulation moves water slowly from the tropics to the poles and back over centuries.' },
      { word: 'larvae', definition: 'The early, immature form of an animal that looks different from its adult form.', example: 'Fish larvae drift with ocean currents before growing into adults that swim on their own.' },
      { word: 'circulate', definition: 'To move continuously in a path or loop, distributing something throughout a system.', example: 'Blood circulates through the body, delivering oxygen to every organ.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'The Gulf Stream was discovered by Spanish explorers who used it to cross the Atlantic quickly.',
          'Ocean currents, especially the Gulf Stream, are powerful forces that regulate climate worldwide and face risks from warming.',
          'Florida\'s coral reefs depend entirely on the Gulf Stream for their survival.',
          'Ocean currents are the same as rivers, but they flow through the sea instead of over land.'
        ],
        correctIndex: 1,
        explanation: 'The passage introduces ocean currents as a global force, focuses on the Gulf Stream\'s effects on Florida and Europe, and ends by explaining that a weakening current could affect weather worldwide — all supporting the idea that currents are powerful climate regulators under threat.'
      },
      {
        question: 'According to the passage, what drives ocean currents near the SURFACE?',
        options: [
          'Differences in salinity between fresh and salt water.',
          'The movement of cold, dense water sinking toward the ocean floor.',
          'Steady prevailing winds that push surface water into long, flowing streams.',
          'The gravitational pull of the moon on ocean water.'
        ],
        correctIndex: 2,
        explanation: 'The passage specifically states that "Currents near the surface are driven mainly by wind — steady prevailing winds push surface water into long, flowing streams." Salinity and temperature drive deeper currents, not surface ones.'
      },
      {
        question: 'What evidence does the author provide to support the claim that the Gulf Stream affects European climate?',
        options: [
          'Early Spanish explorers learned to ride the Gulf Stream from Europe to Florida.',
          'The Gulf Stream carries larvae and nutrients that support Florida\'s coral reefs.',
          'Scientists estimate that without the Gulf Stream, winter temperatures in Britain and Norway would be 9 to 18 degrees Fahrenheit colder.',
          'The Gulf Stream flows at up to five miles per hour along Florida\'s Atlantic coast.'
        ],
        correctIndex: 2,
        explanation: 'The author provides specific, measurable evidence — "9 to 18 degrees Fahrenheit colder" — to support the claim that the Gulf Stream significantly warms Europe. Concrete numbers are strong evidence.'
      },
      {
        question: 'What does the word "salinity" mean based on how it is used in the passage?',
        options: [
          'The speed at which ocean currents move water from one region to another.',
          'The temperature of deep ocean water compared to surface water.',
          'The amount of dissolved salt in water.',
          'The direction in which a current flows based on wind patterns.'
        ],
        correctIndex: 2,
        explanation: 'The passage defines salinity directly in parentheses: "(the amount of salt dissolved in water)" — making the meaning clear from the text itself.'
      },
      {
        question: 'The author compares ocean currents to a "circulatory system." What does this comparison SUGGEST?',
        options: [
          'Ocean currents move in only one direction, like blood in a vein.',
          'The ocean is alive and currents are its way of breathing.',
          'Currents continuously move essential things — heat, oxygen, nutrients — through the connected ocean, the way blood moves through a body.',
          'Scientists should study currents using the same tools doctors use to study the human heart.'
        ],
        correctIndex: 2,
        explanation: 'A circulatory system moves essential substances throughout a body to keep it alive. The author uses this comparison to show that ocean currents serve the same function for the planet — distributing heat and nutrients throughout the connected ocean system.'
      }
    ]
  },

  // ── 19 ── LITERARY | ELA.4.R.1.2 (theme) | ELA.4.R.1.1 (character/conflict)
  {
    id: 'the-great-debate',
    title: 'The Great Debate',
    topic: 'character',
    coverEmoji: '🗣️',
    coverColor: '#2563eb',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 410,
    readTimeMin: 2,
    text: `Nathaniel had prepared for three days. He had index cards. He had evidence. He had a clear opening statement and three supporting arguments. The classroom debate was supposed to be about whether the school should eliminate the annual science fair — and Nathaniel had been assigned to argue yes.

The problem: he personally thought that was a terrible idea.

His **opponent** was a girl named Deja, who had been assigned to argue no. From the look on her face, she might have agreed with his real position. Life, Nathaniel thought, is deeply strange.

Their teacher, Mr. Osei, set the rules. "You will argue the position you were assigned — not your own opinion. You listen without interrupting. At the end, the class votes: not on who they agree with, but on who argued better."

Nathaniel went first. He hit his points cleanly: science fairs were expensive, they gave an unfair advantage to students whose families could help more, and the class time could be spent on actual learning. A few people nodded.

Deja did not rush. She waited a full two seconds after Nathaniel finished — a pause that somehow made the room even quieter. Then she said: "Everything Nathaniel just told you is real. And I want you to notice that he just spent three minutes making an excellent case for the other side."

She paused again.

"The science fair teaches something you cannot learn from a worksheet: how to ask a question, test it, fail, and try again. The solution to **inequality** isn't to remove the opportunity — it's to make sure everyone has equal access to it."

Nathaniel sat back. He had not expected someone to **acknowledge** his argument before countering it. He had not expected it to work so well.

When the class voted, Deja won — but only by three ballots. Three students who had voted to eliminate the fair said they changed their minds because of Nathaniel's points.

After class, Nathaniel found himself standing next to Deja at the water fountain.

"You used my own evidence," he said.

"A strong argument doesn't ignore what's real," she said. "It deals with it."

Nathaniel thought about that on the bus home. He had spent three days preparing to argue something he didn't believe. He had learned something he had not expected: how to listen, even when you think you already know the answer.`,
    vocabulary: [
      { word: 'opponent', definition: 'The person arguing against you in a debate or competition.', example: 'She shook hands with her opponent before the debate began, as a sign of respect.' },
      { word: 'inequality', definition: 'An unfair situation in which some people have advantages or opportunities that others do not.', example: 'The new program aimed to reduce inequality by giving every student access to the same tools.' },
      { word: 'acknowledge', definition: 'To admit or accept that something is true before making your own point.', example: 'A good debater acknowledges the strongest point on the other side before explaining why it doesn\'t change the conclusion.' },
      { word: 'evidence', definition: 'Facts, examples, or information used to support a claim or argument.', example: 'She brought photographs as evidence that the field had been flooded.' },
      { word: 'eliminate', definition: 'To completely remove or get rid of something.', example: 'The school decided to eliminate the late bus, which affected students who stayed after school.' }
    ],
    questions: [
      {
        question: 'What is Nathaniel\'s CONFLICT at the start of the story?',
        options: [
          'He must debate a topic he personally disagrees with — arguing to eliminate the science fair when he actually supports it.',
          'He has not prepared enough for the debate and is afraid he will forget his points.',
          'He and Deja are friends, and he feels bad about arguing against her.',
          'Mr. Osei assigns him the wrong side of the debate by accident, and he must correct the mistake.'
        ],
        correctIndex: 0,
        explanation: 'Nathaniel has been assigned to argue "yes, eliminate the science fair" but personally thinks it\'s "a terrible idea." He must make a strong argument for a position he does not actually hold — that is the central conflict.'
      },
      {
        question: 'What is the THEME of this story?',
        options: [
          'Science fairs should be eliminated because they are unfair to students without parental support.',
          'Preparing hard for a debate is more important than the result of the vote.',
          'Truly listening to the other side — even when you disagree — leads to better understanding and stronger thinking.',
          'A good debater should always argue for the position they personally believe in.'
        ],
        correctIndex: 2,
        explanation: 'Nathaniel learns on the bus home that the experience taught him "how to listen, even when you think you already know the answer." Deja\'s technique — acknowledging his points before countering them — shows the power of genuinely engaging with the other side.'
      },
      {
        question: 'What is UNUSUAL about how Deja begins her argument?',
        options: [
          'She asks Mr. Osei if she can change sides before speaking.',
          'She ignores all of Nathaniel\'s points and starts from the beginning as if he hadn\'t spoken.',
          'She admits Nathaniel\'s evidence is real and uses it before presenting her own position.',
          'She reads directly from prepared notes without making eye contact with the class.'
        ],
        correctIndex: 2,
        explanation: 'Instead of immediately countering Nathaniel, Deja says his points are "real" and even compliments his argument — then pivots to show why they don\'t change her conclusion. This unexpected acknowledgment was what surprised Nathaniel and impressed the class.'
      },
      {
        question: 'What does the word "acknowledge" suggest about what makes a strong argument?',
        options: [
          'A strong argument wins by ignoring the other side\'s best points.',
          'Recognizing and addressing the truth in the opposing argument makes your own position more credible.',
          'A debater who acknowledges the other side is admitting they have already lost.',
          'Debates are only strong when both sides share exactly the same evidence.'
        ],
        correctIndex: 1,
        explanation: 'Deja\'s strategy — acknowledging Nathaniel\'s valid points before making her own — was more persuasive than simply denying them. The story shows that honest engagement with the other side builds trust and makes arguments stronger.'
      },
      {
        question: 'How does Nathaniel CHANGE from the beginning of the story to the end?',
        options: [
          'He starts believing science fairs should be eliminated and ends supporting them.',
          'He starts confident and ends angry that he lost the vote by such a narrow margin.',
          'He starts focused on winning and ends having learned something deeper about listening and thinking.',
          'He starts nervous about debating and ends deciding he wants to compete in more debates.'
        ],
        correctIndex: 2,
        explanation: 'Nathaniel begins the story thinking he knows his position and his opponent\'s. By the end, he\'s sitting on the bus reflecting that the real lesson was about "how to listen, even when you think you already know the answer" — a much larger insight than debating strategy.'
      }
    ]
  },

  // ── 20 ── INFORMATIONAL | ELA.4.R.2.1 (text structure) | ELA.4.R.2.2 (central idea + details)
  {
    id: 'mangroves',
    title: "The Forest That Stands in the Sea",
    topic: 'florida-nature',
    coverEmoji: '🌴',
    coverColor: '#065f46',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 403,
    readTimeMin: 2,
    text: `At the edge of Florida's coasts, where land meets the sea and neither is quite sure it wins, a peculiar forest grows directly from the water. These are mangroves — salt-tolerant trees that rise on arching root systems from mud and shallow brine, tangled so thickly that a kayak can barely slip through. To a first-time visitor, they look like they are growing upside down.

Florida has three **species** of mangrove. Red mangroves, the most recognizable, grow in the water itself on prop roots that reach down from the trunk and branches like stilts, anchoring the tree in soft sediment. Black mangroves grow slightly landward and send up narrow, finger-like roots called **pneumatophores** that poke above the mud's surface — allowing the roots to breathe even when fully submerged at high tide. White mangroves grow farther inland on drier ground and are the least salt-tolerant of the three.

Mangroves are **ecological** powerhouses. Their tangled root systems trap sediment and build coastline — communities with mangrove forests lose far less land to erosion than those without them. When storms strike, mangroves act as a natural barrier: studies show that mangrove forests can reduce wave energy by as much as 66 percent, protecting inland areas from storm surge and flooding. Their roots also function as nurseries. Juvenile snook, tarpon, and spiny lobster hide among the prop roots, feeding on nutrients washed down from fallen mangrove leaves. Roseate spoonbills and great blue herons wade in the shallows hunting fish.

For much of Florida's history, mangroves were viewed as obstacles — dense, bug-infested swamps standing in the way of development. Millions of acres were dredged, filled, or cut to build homes, marinas, and roads.

Today, state law protects them. Mangroves cannot be removed without a permit, and trimming is restricted. Restoration crews plant **juvenile** mangroves in areas where they have been lost. Coastal communities that once tried to drain their mangrove zones are now recognizing that these trees are, in many ways, cheaper and more durable than the concrete seawalls used to replace them.

It turns out the tangled, unwalkable forest that developers once dismissed as worthless is one of the most valuable ecosystems on Earth — not despite standing in the water, but precisely because of it.`,
    vocabulary: [
      { word: 'species', definition: 'A group of living things that share the same characteristics and can reproduce with one another.', example: 'Scientists have identified more than 80 species of mangrove trees worldwide.' },
      { word: 'pneumatophore', definition: 'A specialized root structure that grows upward above water or mud to allow the plant to take in oxygen.', example: 'The black mangrove\'s pneumatophores looked like hundreds of tiny fingers poking out of the mud.' },
      { word: 'ecological', definition: 'Relating to the relationships between living things and their environment.', example: 'The removal of the top predator caused an ecological imbalance throughout the entire food chain.' },
      { word: 'erosion', definition: 'The gradual wearing away of land by water, wind, or other forces.', example: 'Beach erosion threatened the houses built close to the shoreline.' },
      { word: 'juvenile', definition: 'Young; not yet fully grown or developed.', example: 'Juvenile fish spend their early months hiding in shallow water before moving to deeper ocean.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'Mangroves are ugly, bug-infested swamps that Florida should replace with modern seawalls.',
          'Red, black, and white mangroves are three completely different species with nothing in common.',
          'Mangroves are remarkably valuable coastal ecosystems that Florida once destroyed but is now working to protect.',
          'Storm surge is Florida\'s most serious environmental problem, and only mangroves can stop it.'
        ],
        correctIndex: 2,
        explanation: 'The passage describes the mangroves\' ecological value (coastline protection, nurseries, wave reduction), explains how they were historically destroyed, and ends with current protection and restoration efforts — supporting the idea that they were once undervalued but are now recognized as essential.'
      },
      {
        question: 'How does the author use CONTRAST to show a change in how people view mangroves?',
        options: [
          'By comparing red mangroves to black mangroves to show one is more valuable than the other.',
          'By contrasting Florida\'s coastline with coastlines in other states.',
          'By describing how developers once saw mangroves as worthless obstacles, compared to how communities now recognize them as valuable protections.',
          'By contrasting the height of mangrove trees with the height of concrete seawalls.'
        ],
        correctIndex: 2,
        explanation: 'The passage explicitly contrasts two perspectives: mangroves were once "viewed as obstacles" and destroyed; now they are legally protected, restored, and recognized as "cheaper and more durable than concrete seawalls." This before-and-after contrast shows a shift in understanding.'
      },
      {
        question: 'Which detail BEST supports the claim that mangroves protect coastlines from storm damage?',
        options: [
          'Mangrove roots function as nurseries for juvenile snook, tarpon, and spiny lobster.',
          'White mangroves grow farther inland and are the least salt-tolerant of the three species.',
          'Studies show that mangrove forests can reduce wave energy by as much as 66 percent.',
          'Red mangroves grow on prop roots that anchor the tree in soft sediment.'
        ],
        correctIndex: 2,
        explanation: 'The "66 percent wave energy reduction" is the specific, measurable evidence the author provides to directly support the claim that mangroves protect inland areas from storms. It is the strongest and most concrete evidence in the passage.'
      },
      {
        question: 'What does the word "ecological" suggest about the role mangroves play?',
        options: [
          'Mangroves are unusual because they do not interact with any other living things.',
          'Mangroves are important primarily for human economic and commercial reasons.',
          'Mangroves play a powerful role in how many living things — fish, birds, plants — interact with their coastal environment.',
          'Scientists have only recently studied mangroves and do not yet understand their role.'
        ],
        correctIndex: 2,
        explanation: '"Ecological" means relating to the relationships between living things and their environment. Calling mangroves "ecological powerhouses" signals that they play a central role in how many different species — fish, birds, plants — interact with each other and the coastal environment.'
      },
      {
        question: 'Why does the author end the passage by saying mangroves are valuable "precisely because" they stand in the water?',
        options: [
          'To argue that Florida should flood more land so mangroves can spread inland.',
          'To show that the very quality that made people dismiss mangroves — standing in the water — is exactly what makes them so effective as coastline protectors.',
          'To explain that mangroves only grow where the water is too shallow for boats.',
          'To prove that mangroves are more valuable than coral reefs because they are on land.'
        ],
        correctIndex: 1,
        explanation: 'Mangroves were cut down partly because people didn\'t want "swamps." But it is exactly their position in the water — roots submerged, trapping sediment, absorbing wave energy — that makes them so effective. The final line reframes their "weakness" as their strength.'
      }
    ]
  },

  // ── E9 ── INFORMATIONAL | Science | ELA.2.R.2.2 (cause/effect text structure)
  {
    id: 'thunder-lightning',
    title: 'What Makes Thunder and Lightning?',
    topic: 'science',
    coverEmoji: '⚡',
    coverColor: '#1e3a8a',
    gradeLevel: '2-3',
    level: 'emerging',
    grades: [1, 2, 3, 4],
    wordCount: 243,
    readTimeMin: 1,
    text: `Have you ever seen a bright flash of light in the sky, followed by a loud BOOM? That's lightning and thunder — and they happen for a very interesting reason.

Lightning starts inside a storm cloud. Inside big storm clouds, tiny pieces of ice and water droplets crash into each other as they swirl up and down. These collisions build up electrical **charge** in the cloud. Eventually, the charge gets so strong that electricity has to jump — from cloud to cloud, or from cloud to the ground below.

That jump of electricity is lightning. It happens in less than a second, but it creates an enormous amount of heat — about five times hotter than the surface of the sun. That extreme heat causes the air around the **bolt** to expand outward very rapidly. When air expands that fast, it makes a booming sound.

That boom is thunder.

So if lightning and thunder happen at exactly the same moment, why do you usually see the lightning first? Because light travels much faster than sound. Lightning reaches your eyes almost instantly. Sound travels through the air more slowly. The farther away the storm is, the longer you wait for the thunder to arrive.

You can **estimate** how far away a storm is by counting the seconds between a flash and the thunder. Every five seconds equals about one mile.

Florida is sometimes called the **lightning capital** of the United States — more lightning bolts strike Florida than almost any other state, especially during the warm, stormy summer months.`,
    vocabulary: [
      { word: 'charge', definition: 'A buildup of electrical energy in an object or area.', example: 'The storm cloud built up a massive electrical charge before lightning struck.' },
      { word: 'bolt', definition: 'A single flash or discharge of lightning.', example: 'A bolt of lightning struck the tall oak tree at the edge of the field.' },
      { word: 'expand', definition: 'To grow larger or spread out suddenly.', example: 'The balloon will expand when you blow air into it.' },
      { word: 'estimate', definition: 'To make a careful guess based on information or observation.', example: 'She could estimate how far the storm was by counting seconds after each flash.' },
      { word: 'capital', definition: 'The leading or most well-known example of something.', example: 'Florida is sometimes called the lightning capital because more bolts strike there than almost anywhere else.' }
    ],
    questions: [
      {
        question: 'What is the MAIN IDEA of this passage?',
        options: [
          'Lightning is more dangerous than thunder because it carries electricity.',
          'Lightning and thunder are caused by electricity building up in storm clouds and the rapid heating of air.',
          'Florida has more storms than any other state in the country.',
          'Light and sound travel at the same speed, which is why thunder and lightning always arrive together.'
        ],
        correctIndex: 1,
        explanation: 'The passage explains the science behind both lightning (built-up electrical charge jumping) and thunder (the sound of rapidly expanding air). That cause-and-effect explanation is the main idea the author builds step by step.'
      },
      {
        question: 'According to the passage, what CAUSES thunder?',
        options: [
          'Clouds crashing into each other in the upper atmosphere.',
          'The sound of electricity jumping from cloud to cloud.',
          'Air expanding rapidly when superheated by a lightning bolt.',
          'Sound waves bouncing off the ground after lightning strikes.'
        ],
        correctIndex: 2,
        explanation: 'The passage explains that the extreme heat of lightning causes the surrounding air to "expand outward very rapidly" — and when air expands that fast, it creates the booming sound of thunder.'
      },
      {
        question: 'Why do you usually SEE lightning before you HEAR thunder?',
        options: [
          'Lightning always strikes closer to you than the thunder arrives.',
          'Your eyes are more sensitive to flashes than your ears are to booming sounds.',
          'Light travels much faster than sound, so it reaches your eyes almost instantly.',
          'Thunder is silent until it hits a wall or building that reflects it back.'
        ],
        correctIndex: 2,
        explanation: 'The passage directly explains: "light travels much faster than sound." Lightning reaches your eyes almost instantly, while sound (thunder) takes time to travel through the air — so the farther the storm, the longer the gap between the flash and the boom.'
      },
      {
        question: 'What does the word "estimate" mean in this passage?',
        options: [
          'To measure something exactly using a scientific tool.',
          'To make a careful guess based on available information.',
          'To predict whether a storm will bring lightning or only rain.',
          'To count how many lightning bolts fall during a storm.'
        ],
        correctIndex: 1,
        explanation: 'The passage explains how to count seconds between lightning and thunder to estimate distance — that\'s a calculation based on information (the 5-second rule), not an exact measurement. So "estimate" means a careful, informed guess.'
      },
      {
        question: 'Which detail from the passage BEST supports the idea that Florida has especially frequent lightning?',
        options: [
          'Every five seconds between a flash and thunder equals about one mile of distance.',
          'Lightning happens in less than a second and is five times hotter than the sun\'s surface.',
          'Florida is sometimes called the lightning capital of the United States.',
          'Ice and water droplets in storm clouds collide and build up electrical charge.'
        ],
        correctIndex: 2,
        explanation: 'Being called the "lightning capital of the United States" directly supports the idea that Florida experiences especially frequent lightning — far more than most other states, especially in summer.'
      }
    ]
  },

  // ── E10 ── LITERARY | ELA.2.R.1.2 (theme) | ELA.2.R.1.1 (character change)
  {
    id: 'lily-bees',
    title: "Lily and the Bees",
    topic: 'character',
    coverEmoji: '🐝',
    coverColor: '#d97706',
    gradeLevel: '2-3',
    level: 'emerging',
    grades: [1, 2, 3, 4],
    wordCount: 240,
    readTimeMin: 1,
    text: `Lily loved her grandmother's garden. She loved the roses, the sunflowers, and the smell of mint near the fence. But there was one problem.

The bees.

Whenever a bee came close, Lily froze. She crossed her arms, held her breath, and waited for it to go away. She had never been stung. She was just afraid.

Her grandmother, Nana Rose, watched her one afternoon. "Do you know what those bees are doing?" she asked.

Lily shook her head.

"They are **pollinating** the flowers," Nana Rose said. "Without them, there would be no garden at all."

Lily looked at the bee **hovering** over a sunflower. It didn't seem to notice her. It was too busy working.

"Will it sting me?" she asked.

"Only if it thinks you'll hurt it," her grandmother said. "Bees sting to **protect** themselves. If you stay calm and still, they see you as part of the garden — not a threat."

Lily tried. She held still. The bee moved slowly from flower to flower. Its back legs were dusted with yellow **pollen**. It buzzed away and another one came.

Neither bee stung her.

By the end of summer, Lily could walk through the whole garden without freezing. She still noticed the bees. But now she felt something different when she saw them — not fear, but **curiosity**.

She had learned that most things we are afraid of look very different once we take the time to understand them.`,
    vocabulary: [
      { word: 'pollinate', definition: 'To carry pollen from one flower to another, which helps plants make seeds and fruit.', example: 'Bees pollinate flowers as they travel from plant to plant collecting pollen.' },
      { word: 'hovering', definition: 'Staying in one spot in the air without moving forward or backward.', example: 'The hummingbird was hovering near the red flowers, beating its wings very fast.' },
      { word: 'protect', definition: 'To keep something or someone safe from harm.', example: 'The mother duck tried to protect her ducklings from the dog.' },
      { word: 'pollen', definition: 'A fine yellow powder made by flowers that bees carry to other plants.', example: 'The bee\'s fuzzy legs were covered in bright orange pollen from the sunflowers.' },
      { word: 'curiosity', definition: 'A strong desire to learn about or understand something.', example: 'Her curiosity about insects led her to read every book about bugs she could find.' }
    ],
    questions: [
      {
        question: 'What is the THEME of this story?',
        options: [
          'Bees are dangerous animals and people should stay far away from them.',
          'Gardens can only survive if people water them every single day.',
          'Understanding something we fear often changes fear into curiosity and calm.',
          'Grandmothers always know more than their grandchildren about nature.'
        ],
        correctIndex: 2,
        explanation: 'The last line of the story states the theme directly: "most things we are afraid of look very different once we take the time to understand them." Lily\'s fear of bees changes to curiosity once she learns what bees do and how they behave.'
      },
      {
        question: 'How does Lily CHANGE from the beginning of the story to the end?',
        options: [
          'She starts loving the garden and ends avoiding it because of the bees.',
          'She starts afraid of bees and ends feeling curious about them after learning how they behave.',
          'She starts curious about bees and ends getting stung for the first time.',
          'She starts working in the garden every day and ends giving it up.'
        ],
        correctIndex: 1,
        explanation: 'At the start, Lily freezes whenever a bee comes near. By the end of summer, she can walk through the whole garden calmly, and now feels "curiosity" instead of fear — a clear change driven by understanding.'
      },
      {
        question: 'What does the word "curiosity" suggest about how Lily feels at the end of the story?',
        options: [
          'She is still afraid of bees but is hiding her fear from Nana Rose.',
          'She is bored and no longer interested in spending time in the garden.',
          'She now wants to learn more about bees instead of avoiding them.',
          'She is surprised that the bees did not sting her during the summer.'
        ],
        correctIndex: 2,
        explanation: '"Curiosity" means a desire to understand or learn more. Instead of running from bees, Lily now watches them with interest — the opposite of fear. Curiosity replaced the fear once she understood what bees were doing.'
      },
      {
        question: 'What does Nana Rose\'s advice teach Lily about WHY bees sting?',
        options: [
          'Bees sting randomly and without any reason, so it is impossible to avoid being stung.',
          'Bees only sting people who are allergic to bee pollen.',
          'Bees sting to protect themselves and will leave you alone if you stay calm and still.',
          'Bees always sting the first person they see when they enter a garden.'
        ],
        correctIndex: 2,
        explanation: 'Nana Rose explains: "Bees sting to protect themselves. If you stay calm and still, they see you as part of the garden — not a threat." This teaches Lily that bee stings are a defensive reaction, not a random attack — and that her behavior affects what happens.'
      },
      {
        question: 'Which detail BEST shows that the bees were not dangerous to Lily?',
        options: [
          'Lily had never been stung before and was afraid for no reason.',
          'Nana Rose stood next to Lily in the garden and kept the bees away.',
          'Lily held still, the bees moved from flower to flower and buzzed away, and neither one stung her.',
          'The bees were too focused on collecting pollen to notice there was a garden nearby.'
        ],
        correctIndex: 2,
        explanation: 'The direct evidence that the bees weren\'t dangerous is what actually happened: Lily stood still, the bees worked around her, and neither stung her. This shows that Nana Rose\'s advice was correct — calm behavior leads to a safe outcome.'
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GRADES 1–2  (early reader — simple sentences, ~150 words, 3 questions)
  // ══════════════════════════════════════════════════════════════════════════

  // ── EARLY 1 ── Animals at Night
  {
    id: 'animals-night',
    title: 'Animals at Night',
    topic: 'science',
    coverEmoji: '🦉',
    coverColor: '#1e3a8a',
    gradeLevel: '1-2',
    level: 'early',
    grades: [1, 2, 3],
    wordCount: 155,
    readTimeMin: 1,
    text: `Some animals sleep during the day and come out at night. They are called **nocturnal** animals.

Owls are nocturnal. They have big eyes that can see in the dark. They also have soft feathers so they fly without making a sound. Owls eat mice and other small animals.

Bats are nocturnal too. Bats cannot see very well in the dark. Instead, they make tiny sounds and listen for the echo. This is called **echolocation**. The echo helps bats find bugs to eat.

Fireflies are nocturnal insects. They glow in the dark! The light comes from their belly. Fireflies use their glow to talk to other fireflies.

The next time it gets dark outside, look up at the sky. You might see an owl or a bat flying around. If it is summer, you might even see fireflies blinking in the grass!

These animals love the night. The dark is their home.`,
    vocabulary: [
      { word: 'nocturnal', definition: 'Active at night and sleeping during the day' },
      { word: 'echolocation', definition: 'Finding things by listening for echoes of sounds' },
      { word: 'glow', definition: 'To give off a soft light' },
      { word: 'echo', definition: 'A sound that bounces back to you' },
      { word: 'insect', definition: 'A small animal with six legs and three body parts' }
    ],
    questions: [
      {
        question: 'What does "nocturnal" mean?',
        options: ['Active during the day', 'Active at night', 'Living underground', 'Flying very fast'],
        correctIndex: 1,
        explanation: 'Nocturnal animals sleep during the day and come out at night.'
      },
      {
        question: 'How do bats find bugs in the dark?',
        options: ['They use their big eyes', 'They glow in the dark', 'They use echolocation', 'They follow owls'],
        correctIndex: 2,
        explanation: 'Bats make tiny sounds and listen for the echo — this is called echolocation.'
      },
      {
        question: 'Why do fireflies glow?',
        options: ['To scare owls', 'To find food', 'To talk to other fireflies', 'To stay warm'],
        correctIndex: 2,
        explanation: 'Fireflies use their glow to communicate with other fireflies.'
      }
    ]
  },

  // ── EARLY 2 ── Pets Need Us
  {
    id: 'pets-need-us',
    title: 'Pets Need Us',
    topic: 'character',
    coverEmoji: '🐶',
    coverColor: '#f59e0b',
    gradeLevel: '1-2',
    level: 'early',
    grades: [1, 2, 3],
    wordCount: 148,
    readTimeMin: 1,
    text: `Pets are animals that live with people. Dogs, cats, fish, and hamsters are common pets. Pets are fun, but they also need us to take care of them.

Dogs need walks every day. Walking gives dogs exercise and keeps them healthy. Dogs also need fresh water and food. They need love and playtime too!

Cats like to have a clean place to sleep. They also need fresh water and food each day. Cats love to play with toys. Some cats like to be held and pet.

Fish live in tanks of water. The water must be kept clean. Fish need the right kind of food and the right water temperature.

Hamsters are small and furry. They run on a wheel to get exercise. They need fresh food and water every day.

Every pet is different, but they all need the same thing — a caring owner. When you have a pet, you make a promise to take care of it every single day.`,
    vocabulary: [
      { word: 'common', definition: 'Seen or found often; not rare' },
      { word: 'exercise', definition: 'Moving your body to stay healthy and strong' },
      { word: 'temperature', definition: 'How hot or cold something is' },
      { word: 'furry', definition: 'Covered with soft, thick hair' },
      { word: 'owner', definition: 'A person who has something that belongs to them' }
    ],
    questions: [
      {
        question: 'What do ALL pets need every day?',
        options: ['A wheel to run on', 'A tank of water', 'Food, water, and care', 'Long walks outside'],
        correctIndex: 2,
        explanation: 'All pets need fresh food, water, and care from their owner every day.'
      },
      {
        question: 'Why do dogs need walks every day?',
        options: ['To keep the house clean', 'For exercise and health', 'To find their food', 'To stay cool'],
        correctIndex: 1,
        explanation: 'Walking gives dogs exercise and keeps them healthy.'
      },
      {
        question: 'What does a hamster use to get exercise?',
        options: ['A swimming tank', 'A running wheel', 'Long walks', 'Climbing trees'],
        correctIndex: 1,
        explanation: 'Hamsters run on a wheel inside their cage to get exercise.'
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GRADES 5–8  (advanced — complex ideas, ~480 words, 5 questions)
  // ══════════════════════════════════════════════════════════════════════════

  // ── ADVANCED 1 ── The Science of Climate Change
  {
    id: 'climate-change-science',
    title: 'Understanding Climate Change',
    topic: 'science',
    coverEmoji: '🌍',
    coverColor: '#1e3a8a',
    gradeLevel: '5-8',
    level: 'advanced',
    grades: [5, 6, 7, 8],
    wordCount: 482,
    readTimeMin: 3,
    text: `For thousands of years, Earth maintained a remarkably stable climate that allowed civilizations to develop, agriculture to flourish, and ecosystems to evolve in relative balance. Today, however, scientists are nearly unanimous in concluding that human activity has fundamentally disrupted that balance — triggering the phenomenon we call climate change.

**The Greenhouse Effect**

Earth stays warm because of a natural process called the **greenhouse effect**. Certain gases in the atmosphere — carbon dioxide (CO₂), methane, and water vapor — act like a blanket around the planet. When sunlight reaches Earth's surface, the planet absorbs it and releases heat. Greenhouse gases trap some of that heat, keeping the planet warm enough to support life. Without this natural process, Earth's average temperature would be approximately −18°C (0°F) — far too cold for most life.

The problem is not the greenhouse effect itself but rather the dramatic increase in greenhouse gas concentrations caused by human activity. Since the Industrial Revolution in the mid-1800s, the burning of fossil fuels — coal, oil, and natural gas — has released enormous quantities of CO₂ into the atmosphere. Deforestation compounds the problem, because forests normally absorb CO₂. As trees are cut down, stored carbon is released and less future CO₂ is captured.

**Observed Consequences**

Climate scientists measure the effects of this warming through multiple lines of evidence. Global average temperatures have risen by approximately 1.1°C since the pre-industrial era, and the rate of warming is accelerating. This seemingly small number carries enormous consequences.

Polar ice caps and glaciers are melting at unprecedented rates, contributing to rising sea levels worldwide. Low-lying coastal communities and island nations face increasing flood risks. Warmer ocean temperatures intensify hurricanes and alter precipitation patterns, making some regions wetter and others more prone to drought. Coral reefs, which depend on stable ocean temperatures, are bleaching and dying on a massive scale.

**The Path Forward**

Climate scientists and policymakers debate the best approaches to address climate change. Most experts agree that reducing greenhouse gas emissions is essential — through transitioning to renewable energy sources like solar and wind power, improving energy efficiency, and protecting forests. Some researchers also explore **carbon capture** technologies that remove CO₂ from the atmosphere.

Individuals can contribute through choices such as reducing energy use, eating less meat, and supporting climate-conscious policies. However, experts emphasize that the scale of the challenge requires coordinated international action.

Climate change is not a distant threat — its effects are already measurable and its consequences will shape the world today's students will inherit. Understanding the science behind it is the first step toward meaningful action.`,
    vocabulary: [
      { word: 'greenhouse effect', definition: 'The process by which gases in the atmosphere trap heat from the sun, warming the planet' },
      { word: 'fossil fuels', definition: 'Coal, oil, and natural gas formed from ancient organisms; burn to release energy and CO₂' },
      { word: 'deforestation', definition: 'The large-scale cutting down of forests' },
      { word: 'precipitation', definition: 'Any form of water that falls from clouds, including rain and snow' },
      { word: 'carbon capture', definition: 'Technology that removes carbon dioxide from the atmosphere and stores it' }
    ],
    questions: [
      {
        question: 'What is the PRIMARY cause of increased greenhouse gas concentrations in the atmosphere?',
        options: [
          'Natural volcanic eruptions',
          'Human burning of fossil fuels and deforestation',
          'Increased sunlight reaching Earth',
          'Evaporation from the oceans'
        ],
        correctIndex: 1,
        explanation: 'Since the Industrial Revolution, burning coal, oil, and natural gas has released enormous CO₂, and deforestation has reduced forests that normally absorb it.'
      },
      {
        question: 'What would Earth\'s average temperature be WITHOUT the natural greenhouse effect?',
        options: ['About 15°C (59°F)', 'About −5°C (23°F)', 'About −18°C (0°F)', 'Exactly 0°C (32°F)'],
        correctIndex: 2,
        explanation: 'Without the greenhouse effect keeping heat in, Earth\'s average temperature would be approximately −18°C — far too cold for most life.'
      },
      {
        question: 'How does deforestation COMPOUND the problem of climate change?',
        options: [
          'It creates more fossil fuels underground',
          'Trees release CO₂ when they photosynthesize',
          'Cutting trees releases stored carbon AND removes future CO₂ absorbers',
          'Forests produce methane that warms the atmosphere'
        ],
        correctIndex: 2,
        explanation: 'When trees are cut, stored carbon releases into the air, AND fewer trees remain to absorb future CO₂ — a double impact.'
      },
      {
        question: 'Which of the following is NOT listed as an observed consequence of climate change?',
        options: [
          'Rising sea levels from melting ice',
          'More intense hurricanes',
          'A decrease in ocean salinity',
          'Dying coral reefs from warmer water'
        ],
        correctIndex: 2,
        explanation: 'The passage mentions rising seas, intense hurricanes, and dying coral reefs — but does not discuss changes to ocean salinity.'
      },
      {
        question: 'What is the author\'s main point in the final paragraph?',
        options: [
          'Climate change is impossible to stop at this point',
          'Individual choices are the only meaningful solution',
          'Climate change is already affecting the world and requires understanding to act',
          'Scientists disagree about whether climate change is real'
        ],
        correctIndex: 2,
        explanation: 'The author states that effects are already measurable and understanding the science is the first step toward meaningful action — emphasizing urgency and empowerment.'
      }
    ]
  },

  // ── ADVANCED 2 ── The American Civil Rights Movement
  {
    id: 'civil-rights-movement',
    title: 'The American Civil Rights Movement',
    topic: 'history',
    coverEmoji: '✊',
    coverColor: '#7c3aed',
    gradeLevel: '5-8',
    level: 'advanced',
    grades: [5, 6, 7, 8],
    wordCount: 491,
    readTimeMin: 3,
    text: `Few chapters in American history are as transformative — or as hard-won — as the Civil Rights Movement of the 1950s and 1960s. Decades of legal segregation, systematic discrimination, and violence against Black Americans spurred a sustained campaign of nonviolent resistance that ultimately reshaped the nation's laws and its conscience.

**The System Being Challenged**

Following the end of the Civil War, a series of Constitutional amendments theoretically granted Black Americans full citizenship and voting rights. In practice, Southern states implemented so-called **Jim Crow laws** — a web of statutes mandating racial segregation in virtually every aspect of public life: schools, transportation, restaurants, restrooms, and even water fountains. Violence and the ever-present threat of lynching were used to enforce compliance and discourage political participation.

**The Rise of Organized Resistance**

The movement gained national momentum in December 1955 when Rosa Parks, a Black seamstress and trained activist in Montgomery, Alabama, refused to surrender her bus seat to a white passenger. Her arrest sparked the **Montgomery Bus Boycott**, a 381-day campaign in which Black residents refused to ride the city's buses, costing the transit system significant revenue and eventually forcing the desegregation of public transportation.

A young minister named **Dr. Martin Luther King Jr.** emerged as the movement's most prominent voice. Drawing on the philosophy of Indian independence leader Mahatma Gandhi, King advocated **nonviolent direct action** — peaceful protests, sit-ins, and marches designed to expose the brutality of segregation to the nation and the world.

In February 1960, four Black college students sat down at a whites-only lunch counter in Greensboro, North Carolina, and politely requested service. When refused, they remained seated quietly until the store closed. This "sit-in" sparked dozens of similar protests across the South. The following year, **Freedom Riders** — Black and white activists together — rode interstate buses to challenge segregation in bus terminals, often facing violent mobs and police attacks.

**Legislative Victories**

Perhaps the movement's most dramatic moment came in August 1963, when approximately 250,000 people gathered at the Lincoln Memorial in Washington, D.C., for the March on Washington. It was here that Dr. King delivered his iconic "I Have a Dream" speech, articulating a vision of racial equality that resonated worldwide.

Political pressure, combined with continued protests and significant loss of life — including the 1963 assassination of civil rights leader Medgar Evers and the 1965 murder of activists in Selma, Alabama — finally produced landmark legislation. The **Civil Rights Act of 1964** banned discrimination in public places and employment. The **Voting Rights Act of 1965** outlawed the discriminatory practices used to deny Black Americans the right to vote.

**A Continuing Journey**

The Civil Rights Movement demonstrated that organized, persistent, and principled resistance could change even deeply entrenched systems of injustice. Yet movement leaders acknowledged that legislation was a beginning, not an end. The work of achieving genuine equality — in education, wealth, housing, and criminal justice — continues to be debated and pursued today.`,
    vocabulary: [
      { word: 'segregation', definition: 'The forced separation of people by race in public places' },
      { word: 'Jim Crow laws', definition: 'State laws that enforced racial segregation in the American South after the Civil War' },
      { word: 'nonviolent direct action', definition: 'Peaceful protest tactics designed to draw attention to injustice without violence' },
      { word: 'boycott', definition: 'A refusal to use a product or service as a form of protest' },
      { word: 'landmark legislation', definition: 'Important laws that bring significant change' }
    ],
    questions: [
      {
        question: 'What was the PURPOSE of Jim Crow laws?',
        options: [
          'To guarantee voting rights for all citizens',
          'To enforce racial segregation in public life',
          'To fund public schools in the South',
          'To end the Civil War'
        ],
        correctIndex: 1,
        explanation: 'Jim Crow laws mandated racial segregation in virtually every aspect of public life — schools, transportation, restaurants, and more.'
      },
      {
        question: 'What made the Montgomery Bus Boycott effective?',
        options: [
          'It involved violent confrontations with police',
          'Federal troops enforced the protest',
          'It cost the transit system significant revenue over 381 days',
          'Rosa Parks was elected to political office'
        ],
        correctIndex: 2,
        explanation: 'By refusing to ride buses for 381 days, Black residents hit the transit system financially, eventually forcing desegregation.'
      },
      {
        question: 'Dr. King\'s philosophy of nonviolent direct action was influenced by whom?',
        options: [
          'President Dwight D. Eisenhower',
          'Medgar Evers',
          'The Freedom Riders',
          'Mahatma Gandhi'
        ],
        correctIndex: 3,
        explanation: 'King drew on the philosophy of Indian independence leader Mahatma Gandhi when developing his strategy of nonviolent resistance.'
      },
      {
        question: 'What was the significance of the Greensboro sit-ins?',
        options: [
          'They immediately changed federal law',
          'They sparked dozens of similar protests across the South',
          'They ended the Montgomery Bus Boycott',
          'They led directly to Rosa Parks\' arrest'
        ],
        correctIndex: 1,
        explanation: 'The four Greensboro students\' quiet resistance sparked a wave of sit-in protests throughout the South.'
      },
      {
        question: 'According to the final paragraph, what does the author argue about the Civil Rights Movement\'s legacy?',
        options: [
          'It completely solved racial inequality in America',
          'Legislation was unnecessary — only culture needed to change',
          'It proved peaceful resistance works, but equality remains an ongoing pursuit',
          'The movement failed because violence was used against protesters'
        ],
        correctIndex: 2,
        explanation: 'The author acknowledges the movement\'s power and legislative victories while noting that genuine equality in education, wealth, housing, and justice is still being pursued today.'
      }
    ]
  },

  // ── EARLY | Grade 1-3 ──────────────────────────────────────────────────────
  {
    id: 'my-first-garden',
    title: 'My First Garden',
    topic: 'florida-nature',
    coverEmoji: '🌱',
    coverColor: '#10b981',
    gradeLevel: '1',
    level: 'early',
    grades: [1, 2, 3],
    wordCount: 118,
    readTimeMin: 1,
    text: `Maya planted her first garden on a sunny Saturday. She dug small holes in the dirt with her fingers and dropped in seeds. Then she patted the soil back down gently.

"How long until I see something?" she asked her dad.

"Seeds need three things," he said. "Sun, water, and time."

Every morning, Maya came outside with her little watering can. She poured water around each spot where a seed was sleeping underground.

One week later, she saw something tiny and green poking up through the soil.

"It's alive!" she shouted.

By the end of the month, Maya had tomatoes, sunflowers, and basil growing strong. She had learned that growing things takes **patience** — you can't rush a seed. You just have to take care of it every day and trust that nature will do the rest.`,
    vocabulary: [
      { word: 'patience', definition: 'The ability to wait calmly without getting upset.', example: 'It takes patience to wait for seeds to grow.' },
    ],
    questions: [
      { question: 'What THREE things does Maya\'s dad say seeds need?', options: ['Love, water, soil', 'Sun, water, and time', 'Dirt, rain, and shade', 'Seeds, light, and bugs'], correctIndex: 1, explanation: 'Maya\'s dad says seeds need sun, water, and time to grow.' },
      { question: 'How did Maya water her garden each day?', options: ['With a hose', 'With a bucket', 'With her little watering can', 'With rainwater only'], correctIndex: 2, explanation: 'Each morning Maya used her little watering can to water the seeds.' },
      { question: 'What did Maya learn from her garden?', options: ['Tomatoes grow fast', 'Growing things takes patience', 'Seeds don\'t need sunlight', 'Dirt is not important'], correctIndex: 1, explanation: 'Maya learned that you can\'t rush a seed — growing things takes patience and daily care.' },
    ]
  },

  {
    id: 'the-helpful-bees',
    title: 'The Helpful Bees',
    topic: 'science',
    coverEmoji: '🐝',
    coverColor: '#f59e0b',
    gradeLevel: '2',
    level: 'early',
    grades: [1, 2, 3],
    wordCount: 138,
    readTimeMin: 1,
    text: `Bees are some of the most helpful insects in the world. They may be small, but they do a very big job.

Bees drink a sweet liquid called **nectar** from flowers. As they fly from flower to flower, tiny bits of yellow dust called **pollen** stick to their fuzzy bodies. When they land on the next flower, some of that pollen rubs off. This is called **pollination** — and it helps plants grow fruit and seeds.

Without bees, many fruits and vegetables we eat every day would not exist. Apples, watermelons, strawberries, and pumpkins all need bees to pollinate them.

Bees also make honey. Worker bees bring nectar back to the hive and turn it into honey by adding special fluids and fanning out the moisture with their wings. Honey never spoils — scientists have found honey in ancient Egyptian tombs that is over 3,000 years old!

The next time you see a bee, remember: it is not just buzzing around. It is doing important work that helps all of us.`,
    vocabulary: [
      { word: 'nectar', definition: 'A sweet liquid made by flowers that bees drink.', example: 'The bee sipped nectar from the bright yellow flower.' },
      { word: 'pollen', definition: 'A fine yellow powder made by flowers, used to help plants make seeds.', example: 'Yellow pollen stuck to the bee\'s fuzzy legs.' },
      { word: 'pollination', definition: 'Moving pollen from one flower to another so plants can grow seeds.', example: 'Without pollination, the apple tree could not grow fruit.' },
    ],
    questions: [
      { question: 'What do bees carry from flower to flower?', options: ['Honey', 'Water', 'Pollen', 'Seeds'], correctIndex: 2, explanation: 'As bees fly from flower to flower, pollen sticks to their fuzzy bodies and is carried along.' },
      { question: 'What is pollination?', options: ['Making honey', 'Moving pollen between flowers', 'Building a hive', 'Drinking water'], correctIndex: 1, explanation: 'Pollination happens when bees carry pollen from one flower to another, helping plants grow fruit and seeds.' },
      { question: 'Which food NEEDS bees to grow?', options: ['Rice', 'Carrots', 'Strawberries', 'Potatoes'], correctIndex: 2, explanation: 'Strawberries, apples, and many other fruits need bees to pollinate them in order to grow.' },
    ]
  },

  {
    id: 'the-friendship-jar',
    title: 'The Friendship Jar',
    topic: 'character',
    coverEmoji: '🫙',
    coverColor: '#ec4899',
    gradeLevel: '2',
    level: 'early',
    grades: [1, 2, 3],
    wordCount: 147,
    readTimeMin: 1,
    text: `Maya had a jar on her desk at school. Every time she did something kind, she put a small stone in the jar.

One Monday, Maya held the door open for a teacher carrying heavy boxes. She put in a stone. On Tuesday, she shared her crayons with Jaylen when his broke. Another stone. On Wednesday, she noticed that Emma was sitting alone at lunch. Maya walked over and said, "Do you want to eat with me?"

Emma smiled so big it looked like the sun had come out.

At the end of the week, Maya counted twelve stones. She felt warm inside — not because she wanted anyone to notice, but because she had paid attention.

"You don't have to look for big chances to be kind," her teacher, Ms. Rivera, had said. "They're hiding in tiny moments."

Maya looked at her jar and smiled. The stones were small. The kindness was not.`,
    vocabulary: [
      { word: 'noticed', definition: 'Saw or became aware of something.', example: 'She noticed her friend was sad and went to help.' },
      { word: 'kindness', definition: 'Being caring, helpful, and gentle toward others.', example: 'Sharing her lunch was an act of kindness.' },
    ],
    questions: [
      { question: 'Why did Maya put stones in her jar?', options: ['To count the days of the week', 'To remember her teacher\'s name', 'To track kind things she did', 'To give to her friends'], correctIndex: 2, explanation: 'Each stone represented a kind act Maya had done.' },
      { question: 'What kind thing did Maya do on Wednesday?', options: ['Held the door open', 'Shared her crayons', 'Invited a lonely girl to eat lunch', 'Helped her teacher'], correctIndex: 2, explanation: 'On Wednesday, Maya noticed Emma sitting alone and invited her to eat lunch together.' },
      { question: 'What did Ms. Rivera mean by "tiny moments"?', options: ['Small stones in a jar', 'Little chances to be kind every day', 'Short minutes of the school day', 'Small pieces of paper'], correctIndex: 1, explanation: 'Ms. Rivera meant that opportunities to be kind happen in everyday, ordinary moments — not just big events.' },
    ]
  },

  {
    id: 'the-power-of-habits',
    title: 'The Power of Habits',
    topic: 'science',
    coverEmoji: '🧠',
    coverColor: '#7c3aed',
    gradeLevel: '7',
    level: 'advanced',
    grades: [5, 6, 7, 8],
    wordCount: 412,
    readTimeMin: 2,
    text: `Every morning, you wake up, brush your teeth, and eat breakfast — probably in the same order, without thinking about it. These are habits, and your brain loves them. Understanding how habits work can give you a powerful advantage in life.

A habit forms through a three-part loop scientists call the **habit loop**: a cue, a routine, and a reward. The **cue** is a trigger that tells your brain to go into automatic mode. The **routine** is the behavior itself — the thing you do. The **reward** is what your brain gets from the experience, which tells it to remember the loop for the future.

Here's a simple example. You sit down to do homework (cue). You check your phone (routine). You feel entertained for a moment (reward). Over time, sitting down to study becomes the trigger for reaching for your phone, even when you're trying to focus. The brain has wired this loop so efficiently that it happens without conscious thought.

Neuroscientists have found that habits are stored in a part of the brain called the **basal ganglia** — a very primitive structure that operates largely outside of conscious awareness. This is why habits are so hard to break: they aren't stored in the thinking part of your brain, but in the automatic part.

The good news is that habits can be intentionally redesigned. The most effective strategy isn't to eliminate a bad habit but to **replace the routine** while keeping the same cue and reward. If you always snack on chips while watching TV (cue: TV; routine: chips; reward: taste + relaxation), you can swap the chips for fruit and get a similar reward while changing the unhealthy routine.

This insight — that the cue and reward must stay the same for a new habit to stick — has been used by athletes, surgeons, and military commanders to build peak performance. Michael Phelps, one of the most decorated Olympic swimmers in history, used a pre-race **visualization** habit to prepare his mind for every event. His coach called it "the videotape" — a mental movie of a perfect race that Phelps played in his head hundreds of times before competitions.

The most important habit of all? Identifying which habits serve your goals and which ones work against them. That kind of self-awareness is what separates people who drift through life on autopilot from those who deliberately build the life they want.`,
    vocabulary: [
      { word: 'habit loop', definition: 'The three-part cycle of cue, routine, and reward that forms a habit in the brain.', example: 'Understanding the habit loop helped her change her afternoon snacking.' },
      { word: 'basal ganglia', definition: 'A part of the brain that stores automatic behaviors and habits.', example: 'Habits stored in the basal ganglia happen without conscious thought.' },
      { word: 'visualization', definition: 'The practice of creating a detailed mental image of an event or outcome.', example: 'Athletes use visualization to mentally rehearse their performance.' },
    ],
    questions: [
      { question: 'What are the three parts of the habit loop?', options: ['Think, act, repeat', 'Cue, routine, reward', 'Sleep, wake, practice', 'Brain, body, behavior'], correctIndex: 1, explanation: 'The habit loop consists of a cue (trigger), routine (behavior), and reward (the payoff).' },
      { question: 'Where are habits stored in the brain?', options: ['The frontal lobe', 'The cerebellum', 'The basal ganglia', 'The hippocampus'], correctIndex: 2, explanation: 'Habits are stored in the basal ganglia, a primitive brain structure that operates outside conscious thought.' },
      { question: 'According to the article, what is the best way to break a bad habit?', options: ['Eliminate the reward completely', 'Replace the routine but keep the cue and reward', 'Ignore the cue until the habit disappears', 'Train your brain to avoid all habits'], correctIndex: 1, explanation: 'The most effective strategy is to swap the routine while keeping the same cue and reward.' },
      { question: 'How did Michael Phelps use habits to improve performance?', options: ['By sleeping 12 hours before races', 'By changing his diet the day before events', 'By visualizing a perfect race hundreds of times', 'By avoiding pre-race routines to stay relaxed'], correctIndex: 2, explanation: 'Phelps used a pre-race visualization habit — mentally replaying a perfect race to prepare his mind.' },
      { question: 'What is the main message of this article?', options: ['Habits are impossible to change once formed', 'Everyone should stop watching TV', 'Understanding the habit loop lets you deliberately build better habits', 'The brain prefers conscious decisions over automatic behavior'], correctIndex: 2, explanation: 'The article argues that understanding how habits work gives you power to redesign your routines on purpose.' },
    ]
  },

  {
    id: 'deep-ocean-frontiers',
    title: 'The Last Frontier: Deep Ocean Exploration',
    topic: 'science',
    coverEmoji: '🌊',
    coverColor: '#0891b2',
    gradeLevel: '7',
    level: 'advanced',
    grades: [5, 6, 7, 8],
    wordCount: 445,
    readTimeMin: 2,
    text: `More than half of Earth's surface lies beneath the ocean — and most of it remains completely unexplored. In fact, scientists have mapped the surface of Mars in greater detail than the bottom of Earth's own seas. The deep ocean is, in many ways, the last true frontier of exploration on our planet.

The ocean is divided into zones based on depth. The **sunlit zone** (0–200 meters) receives enough light for photosynthesis, supporting most of the sea life familiar to us. Below that is the **twilight zone** (200–1,000 meters), where light fades and the pressure begins to build. Deeper still is the **midnight zone** (1,000–4,000 meters), where no sunlight reaches at all. The deepest parts of the ocean — called **hadal zones** — plunge more than 6,000 meters down in places like the Mariana Trench, the deepest known point on Earth at nearly 11,000 meters.

Life at these extreme depths faces crushing pressure, freezing temperatures, and total darkness. Yet life exists. Hydrothermal vents — cracks in the seafloor that spew superheated water and minerals — support thriving **ecosystems** that have no dependence on sunlight whatsoever. Instead of photosynthesis, the organisms here use **chemosynthesis**, converting chemicals from the vents into energy. Giant tube worms, ghost-white crabs, and shrimp with no eyes cluster around these vents in conditions that would be instantly lethal to surface life.

These discoveries have transformed scientists' understanding of what "habitable" means — not just on Earth, but across the solar system. If life can survive without sunlight in chemically rich environments, it raises the possibility of life existing in the subsurface oceans of Jupiter's moon Europa or Saturn's moon Enceladus, both of which are believed to harbor liquid water beneath thick ice shells.

Exploring the deep ocean is extraordinarily difficult. The pressure at the bottom of the Mariana Trench is more than 1,000 times the atmospheric pressure at sea level. Only three humans have ever descended to its deepest point — the Challenger Deep. The first two were Don Walsh and Jacques Piccard in 1960; the third was filmmaker James Cameron in 2012, who made the dive alone. More people have walked on the Moon than have visited the ocean's greatest depths.

Remote-operated vehicles (ROVs) and autonomous underwater vehicles (AUVs) are gradually mapping these hidden landscapes, but the technology is expensive and slow. What they're discovering, however, is rewriting biology textbooks — and expanding our sense of where, and how, life can exist in the universe.`,
    vocabulary: [
      { word: 'hadal zone', definition: 'The deepest part of the ocean, below 6,000 meters, found in ocean trenches.', example: 'The Mariana Trench is located in the hadal zone.' },
      { word: 'chemosynthesis', definition: 'A process where organisms produce energy from chemicals rather than sunlight.', example: 'Organisms near hydrothermal vents use chemosynthesis to survive without sunlight.' },
      { word: 'hydrothermal vents', definition: 'Cracks in the ocean floor that release superheated, mineral-rich water.', example: 'Hydrothermal vents support unique ecosystems in the deep ocean.' },
    ],
    questions: [
      { question: 'Why is the deep ocean called "the last frontier"?', options: ['It is too hot to explore', 'More of it remains unmapped than the surface of Mars', 'No life exists there', 'It is only 1,000 meters deep'], correctIndex: 1, explanation: 'Scientists have mapped Mars in more detail than Earth\'s ocean floor, making it a true unexplored frontier.' },
      { question: 'How do organisms near hydrothermal vents get energy?', options: ['Photosynthesis from bioluminescent light', 'Chemosynthesis from vent chemicals', 'Absorbing heat from the vents directly', 'Eating surface animals that sink down'], correctIndex: 1, explanation: 'Without sunlight, these organisms use chemosynthesis — converting chemicals from the vents into energy.' },
      { question: 'How many humans have descended to the deepest point of the Mariana Trench?', options: ['Zero — it has never been reached', 'Three', 'Twelve', 'Hundreds using ROVs'], correctIndex: 1, explanation: 'Only three humans have visited the Challenger Deep: Walsh, Piccard (1960), and James Cameron (2012).' },
      { question: 'Why do the deep ocean discoveries matter for space exploration?', options: ['They prove aliens exist in the ocean', 'Life without sunlight suggests other moons might support life', 'They show Mars once had oceans', 'Deep ocean pressure matches conditions on Jupiter\'s surface'], correctIndex: 1, explanation: 'If life can survive without sunlight in chemically rich water, moons like Europa or Enceladus might support life too.' },
      { question: 'What is the correct order of ocean zones from surface to deepest?', options: ['Midnight → Twilight → Sunlit → Hadal', 'Hadal → Sunlit → Midnight → Twilight', 'Sunlit → Twilight → Midnight → Hadal', 'Twilight → Sunlit → Hadal → Midnight'], correctIndex: 2, explanation: 'From surface to bottom: sunlit (0-200m), twilight (200-1000m), midnight (1000-4000m), hadal (6000m+).' },
    ]
  },

  {
    id: 'rainy-day-science',
    title: 'Where Does Rain Come From?',
    topic: 'science',
    coverEmoji: '🌧️',
    coverColor: '#2563eb',
    gradeLevel: '2',
    level: 'early',
    grades: [1, 2, 3],
    wordCount: 152,
    readTimeMin: 1,
    text: `Have you ever wondered where rain comes from? It does not just appear from nowhere. Rain is part of a never-ending loop called the **water cycle**.

Here is how it works.

Step 1: The sun warms water in rivers, lakes, and oceans. The water turns into an invisible gas called **water vapor** and rises into the air. This is called **evaporation**.

Step 2: High in the sky, the air is cold. The water vapor cools down and turns back into tiny water droplets. These droplets cluster together to form clouds. This is called **condensation**.

Step 3: The water droplets inside clouds bump into each other and get bigger and heavier. When they get heavy enough, they fall to the ground as rain. This is called **precipitation**.

Step 4: The rain fills rivers and lakes, soaks into the ground, and flows back to the ocean — where the whole cycle starts again.

The same water has been cycling around Earth for billions of years. The rain that falls on your head today might have once been part of a dinosaur's swimming hole!`,
    vocabulary: [
      { word: 'evaporation', definition: 'When liquid water is heated and turns into water vapor (invisible gas) that rises into the air.', example: 'Evaporation makes puddles disappear on a hot day.' },
      { word: 'condensation', definition: 'When water vapor cools and turns back into liquid water droplets.', example: 'Condensation forms on a cold glass of water on a warm day.' },
      { word: 'precipitation', definition: 'Water that falls from clouds to the ground as rain, snow, or hail.', example: 'The weather app showed 80% chance of precipitation.' },
    ],
    questions: [
      { question: 'What happens during EVAPORATION?', options: ['Water vapor turns into rain', 'Water is heated and turns into vapor', 'Clouds form in the sky', 'Rain falls to the ground'], correctIndex: 1, explanation: 'Evaporation happens when the sun heats water and it turns into invisible water vapor that rises into the air.' },
      { question: 'What forms when water vapor cools high in the sky?', options: ['Snow', 'Fog', 'Clouds', 'Rainbows'], correctIndex: 2, explanation: 'When water vapor cools and condenses, tiny water droplets form and cluster together to make clouds.' },
      { question: 'Why is the water cycle called a "cycle"?', options: ['It only happens in a circle shape', 'It repeats over and over with no end', 'It only happens during the summer', 'Water only moves up, never down'], correctIndex: 1, explanation: 'It is called a cycle because the process repeats continuously — water evaporates, condenses, and falls again, over and over.' },
    ]
  },

  // ── NEW ── INFORMATIONAL | ELA.4.R.2.1 (cause/effect) | ELA.4.R.2.2 (central idea) | Florida History
  {
    id: 'seminole-nation',
    title: 'The Seminole Nation: Surviving Against All Odds',
    topic: 'florida-history',
    coverEmoji: '🦅',
    coverColor: '#92400e',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 415,
    readTimeMin: 2,
    text: `The Seminole people did not begin as a single group. During the 1700s, Creek, Hitchiti, and other Native American peoples moved south into Florida. Spanish settlers called them "Cimarrones," meaning "free people" — a word that became "Seminole." They built farming villages, developed rich traditions, and made a life shaped by Florida's rivers, forests, and wetlands.

Then came three devastating wars.

Between 1817 and 1858, the United States government fought three Seminole Wars to remove Native Americans from Florida and open the land to settlers. The Second Seminole War (1835–1842) became the longest and most expensive Native American conflict in American history. Seminole warriors, led by leaders including Osceola, refused to retreat. Instead, they used the deep swamps and tangled forests of the Everglades as cover, launching surprise attacks and **vanishing** before soldiers could respond. This strategy, called **guerrilla warfare**, made a small group of fighters remarkably effective against a much larger army.

The result was extraordinary. The U.S. government spent over $20 million and lost more than 1,500 soldiers — yet it could not defeat the Seminoles in the Everglades. About 3,000 Seminoles were eventually forced west on what became known as the Trail of Tears. But a few hundred refused. They disappeared deeper into the wilderness, into land that no army would follow them through.

Those survivors never signed a peace treaty with the United States. As a result, the Seminole Tribe of Florida officially calls itself "the Unconquered People" — a title earned through **resilience** that still matters today.

The consequences of that survival continue. The Seminole Tribe of Florida is now a **sovereign** nation — a self-governing people with the legal right to manage their own land, schools, and businesses. Their traditional crafts — brilliantly colored **patchwork** clothing, hand-carved canoes, and intricate beadwork — are still taught and practiced. The chickee, an open-sided house with a thatched palm-leaf roof, remains a symbol of Seminole identity passed down through generations.

The Seminole people's story demonstrates a direct chain of cause and effect: because a few hundred people refused to surrender, they preserved a culture, a homeland, and a political identity that exists and thrives today. Their history is not a footnote to Florida's story — it is one of its most remarkable chapters.`,
    vocabulary: [
      { word: 'vanishing', definition: 'Disappearing suddenly, as if gone without a trace.', example: 'The deer bolted into the forest, vanishing before the hikers could take a photo.' },
      { word: 'guerrilla warfare', definition: 'A way of fighting in which small groups use surprise attacks and natural terrain to resist a larger enemy.', example: 'The soldiers used guerrilla warfare in the mountains, hiding between attacks.' },
      { word: 'resilience', definition: 'The ability to recover from great difficulty and keep going.', example: 'After the storm destroyed their crops, the farmers showed resilience by replanting the very next week.' },
      { word: 'sovereign', definition: 'Having the right to govern itself, free from outside control.', example: 'The sovereign nation set its own laws and elected its own leaders.' },
      { word: 'patchwork', definition: 'Pieces of colorful fabric sewn together in patterns; a traditional Seminole art form.', example: 'The quilt was made from patchwork squares of red, blue, and yellow cloth.' }
    ],
    questions: [
      {
        question: 'What is the TEXT STRUCTURE of this passage?',
        options: [
          'Chronological order — the author lists events from oldest to most recent with no explanation of causes.',
          'Cause and effect — the author explains how events caused specific outcomes, including the Seminoles\' survival and present-day sovereignty.',
          'Compare and contrast — the Seminole people are compared to other Native American groups.',
          'Description — the author describes Seminole culture without connecting any events to outcomes.'
        ],
        correctIndex: 1,
        explanation: 'Throughout the passage, the author connects causes to effects: the Seminoles\' guerrilla warfare caused the government to fail; their refusal to surrender caused them to remain in Florida; that survival caused them to become a sovereign nation today — a clear cause/effect structure.'
      },
      {
        question: 'According to the passage, why was the Second Seminole War so costly for the U.S. government?',
        options: [
          'The Seminoles had a larger army than the U.S. military expected.',
          'Seminole warriors used guerrilla tactics in the Everglades, making it nearly impossible for soldiers to defeat them.',
          'The U.S. government ran out of weapons and could not keep fighting.',
          'Many U.S. soldiers refused to fight against the Seminoles.'
        ],
        correctIndex: 1,
        explanation: 'The passage directly explains that Seminole warriors launched surprise attacks and "vanished" before soldiers could respond — using the swamps as cover in a way the U.S. army could not counter. This caused the war to last seven years and cost $20 million.'
      },
      {
        question: 'What does the word "resilience" MOST LIKELY mean based on how it is used in the passage?',
        options: [
          'The right to govern oneself under independent laws.',
          'A traditional form of art passed from parent to child.',
          'The ability to survive great hardship and keep going.',
          'A peace agreement signed between two governments.'
        ],
        correctIndex: 2,
        explanation: 'The passage says the title "Unconquered People" was "earned through resilience that still matters today" — describing how the Seminoles survived enormous pressure and refused to give up. Resilience means recovering and continuing despite hardship.'
      },
      {
        question: 'How does the author SUPPORT the claim that the Seminoles\' survival has ongoing consequences today?',
        options: [
          'By explaining how many Seminoles were removed to Oklahoma on the Trail of Tears.',
          'By describing their businesses, schools, cultural programs, traditional crafts, and sovereign status as a nation.',
          'By explaining how much the U.S. government spent during the Second Seminole War.',
          'By naming Osceola as the leader of Seminole resistance.'
        ],
        correctIndex: 1,
        explanation: 'In the fifth paragraph, the author describes the Seminole Tribe today — sovereign government, schools, businesses, crafts, and cultural identity — as direct results of their ancestors\' survival. These concrete examples support the claim that the past still matters now.'
      },
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'The U.S. government made a costly mistake by trying to remove Native Americans from Florida.',
          'Florida\'s history includes many cultures that should be studied in schools.',
          'The Seminole people\'s refusal to be defeated preserved a culture and a sovereign identity that continues today.',
          'Guerrilla warfare is an effective military strategy in swamp environments.'
        ],
        correctIndex: 2,
        explanation: 'Every paragraph supports one central idea: the Seminoles\' extraordinary resistance — especially the few hundred who refused to leave — directly resulted in the survival of a culture, a people, and eventually a self-governing nation. That cause-and-effect chain is the central idea.'
      }
    ]
  },

  // ── NEW ── INFORMATIONAL | ELA.4.R.2.3 (author\'s perspective) | ELA.4.R.2.4 (claim + evidence) | Florida History
  {
    id: 'flagler-florida',
    title: "Henry Flagler's Florida: From Wilderness to Wonder",
    topic: 'florida-history',
    coverEmoji: '🚂',
    coverColor: '#1e3a8a',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 405,
    readTimeMin: 2,
    text: `In the 1880s, most of Florida was wilderness — hot, difficult to reach, and largely unknown to people in the northern United States. There were no paved roads, no luxury hotels, and very few reasons for tourists to visit. Then Henry Flagler arrived, and everything changed.

Flagler had already made a fortune as co-founder of Standard Oil, one of the most powerful companies in American history. When he first visited Florida in 1878, he saw something that others had missed: **potential**. Where others saw swamps and insects, Flagler imagined grand hotels, busy ports, and a railroad connecting the entire eastern coast of the state.

He began in St. Augustine, building two luxury hotels — the Ponce de León and the Alcazar — that were among the most spectacular buildings in the United States at the time. Wealthy tourists who had never considered Florida began arriving by train. Flagler saw that success and pushed further south: to Daytona, then to Palm Beach, then to Miami, which was little more than a small village when Flagler arrived. Within years of his investment, Miami became a real city.

But Flagler's most **audacious** project came at the end of his life. In 1905, at age 75, he began building the Overseas Railroad — a train line extending 128 miles across the open ocean from Miami to Key West, crossing dozens of islands on a series of bridges, including the famous Seven Mile Bridge. Engineers called it one of the greatest construction achievements of its era. Critics called it "Flagler's Folly" — too expensive, too dangerous, and impossible to complete. Flagler proved them wrong. He rode the first train into Key West in 1912, at age 82, to a thunderous celebration. He died the following year.

Flagler's **legacy** is not simple. His railroads and hotels brought enormous growth to Florida, creating industries, cities, and connections that transformed the state. But that growth displaced local communities and launched a wave of development that permanently altered Florida's natural landscape. The same railroad that opened Key West to the world also opened Florida's coasts to overdevelopment.

No single person shaped modern Florida more dramatically than Henry Flagler. He turned a coastal wilderness into one of the most visited places on Earth — for better and for worse.`,
    vocabulary: [
      { word: 'potential', definition: 'The possibility that something could become great or successful, even if it isn\'t yet.', example: 'The coach saw great potential in the young player who had never played on a team before.' },
      { word: 'audacious', definition: 'Willing to take bold risks that most people would consider too dangerous or unlikely to succeed.', example: 'The audacious plan to build a bridge over the canyon shocked even experienced engineers.' },
      { word: 'legacy', definition: 'What a person or event leaves behind that continues to have an effect after it is over.', example: 'The scientist\'s legacy lived on through the students she had trained and inspired.' },
      { word: 'displaced', definition: 'Forced out of a place, usually by development, conflict, or another powerful force.', example: 'Hundreds of families were displaced when the old neighborhood was demolished for a new highway.' },
      { word: 'era', definition: 'A long period of time identified by a particular characteristic or event.', example: 'The invention of the telephone marked a new era in human communication.' }
    ],
    questions: [
      {
        question: 'What is the AUTHOR\'S PERSPECTIVE toward Henry Flagler?',
        options: [
          'The author believes Flagler was a villain who should not be celebrated.',
          'The author views Flagler as a bold and important figure whose impact was both positive and negative.',
          'The author thinks Flagler was Florida\'s greatest hero with no flaws.',
          'The author is completely neutral and offers no opinion about Flagler at all.'
        ],
        correctIndex: 1,
        explanation: 'The author calls Flagler\'s impact "not simple" and describes both his accomplishments (creating cities, connecting Florida) and his harms (displacement, overdevelopment). The final line — "for better and for worse" — shows the author sees Flagler as a complex figure.'
      },
      {
        question: 'How does the author SUPPORT the claim that the Overseas Railroad was an extraordinary achievement?',
        options: [
          'By explaining that Flagler had already built successful railroads in other states.',
          'By noting that engineers called it one of the greatest construction achievements of its era, and that critics who called it impossible were proven wrong.',
          'By describing the number of passengers who rode the train each year after it opened.',
          'By comparing the Overseas Railroad to other famous bridges in the United States.'
        ],
        correctIndex: 1,
        explanation: 'The author cites what engineers said ("one of the greatest construction achievements of its era"), describes the challenge (128 miles over the ocean), and notes that critics called it impossible — yet it was completed. These are concrete pieces of evidence supporting the claim.'
      },
      {
        question: 'What does the word "audacious" suggest about Flagler\'s decision to build the Overseas Railroad?',
        options: [
          'It was a plan that most experts considered safe and straightforward.',
          'It was a bold, risky undertaking that most people thought could not succeed.',
          'It was a plan that Flagler copied from engineers in another country.',
          'It was too expensive for Flagler to complete without government help.'
        ],
        correctIndex: 1,
        explanation: 'The author uses "audacious" to describe the Overseas Railroad project, then immediately confirms its risky nature: critics called it "Flagler\'s Folly" and said it was "too expensive, too dangerous, and impossible to complete." Audacious means bold enough to try what others say is impossible.'
      },
      {
        question: 'According to the passage, what was one NEGATIVE consequence of Flagler\'s development of Florida?',
        options: [
          'His hotels were too expensive for most tourists to afford.',
          'His railroads caused conflict between the U.S. government and Florida settlers.',
          'His development displaced local communities and launched overdevelopment of Florida\'s natural coasts.',
          'His Overseas Railroad was destroyed by a hurricane and never rebuilt.'
        ],
        correctIndex: 2,
        explanation: 'The author specifically states that Flagler\'s growth "displaced local communities" and "launched a wave of development that permanently altered Florida\'s natural landscape" — these are clear negative consequences named in the passage.'
      },
      {
        question: 'How does the author use the phrase "for better and for worse" to conclude the passage?',
        options: [
          'To suggest that Flagler was uncertain whether his decisions were right.',
          'To show that Florida\'s growth under Flagler produced both significant benefits and significant harms.',
          'To argue that Florida would have been better off without Flagler\'s involvement.',
          'To signal that historians still disagree about whether Flagler existed at all.'
        ],
        correctIndex: 1,
        explanation: 'The phrase "for better and for worse" summarizes the entire passage\'s argument: Flagler\'s transformation of Florida brought real benefits (tourism, cities, connections) alongside real costs (displacement, overdevelopment). The author uses this phrase to hold both truths at once.'
      }
    ]
  },

  // ── NEW ── LITERARY | ELA.4.R.3.1 (figurative language) | ELA.4.R.1.2 (theme)
  {
    id: 'garden-after-storm',
    title: 'The Garden After the Storm',
    topic: 'florida-nature',
    coverEmoji: '🌱',
    coverColor: '#059669',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 420,
    readTimeMin: 2,
    text: `Grandma's garden looked like a **battlefield**.

Two days after Hurricane Irene moved through, Lucia stood at the back door and stared at the damage. The tomato plants her grandmother had been **nurturing** since March lay twisted on the ground, their stakes snapped like broken pencils. The banana trees — Grandma always called them "my Florida daughters" — drooped so low their tips dragged in the mud. The birdhouse was gone entirely, lifted by a wind that had screamed like a living thing.

"Grandma," Lucia said carefully, "it's pretty bad."

Her grandmother stood behind her and was quiet for a moment. Then she let out a long breath — a sound like a door closing softly.

"Yes," she said. "It is bad."

Lucia expected tears. Or the slow walk to the armchair that meant the conversation was finished. Instead, Grandma stepped off the porch in her rain boots, walked into the mud, and picked up the first fallen tomato stake.

"Help me," she said.

They worked for three hours. They righted the plants and tied new stakes. They cut away what was too broken to save and cleared space for what still had a chance. The banana trees — **battered** but not dead — gradually straightened as Lucia wedged wooden boards beneath them. Grandma moved along the cleared rows, **methodically** pressing seeds from labeled envelopes into the earth.

"What are those for?" Lucia asked.

"Next season," Grandma said, as if that were obvious.

"But we're planting *now*? After all this?"

Her grandmother pressed the last seed into the soil and patted it flat. "Especially after this. A storm is not the end, Lucia. It is the most important moment for deciding what you do next."

Lucia looked around the battered garden. Here and there, small green leaves were still reaching upward — **stubborn**, unhurried, as if they hadn't even heard about the hurricane.

She knelt beside her grandmother and pressed seeds into the cool, dark earth.

By the end of summer, the garden was fuller than it had ever been. And whenever Lucia saw a storm moving in from the Gulf — dark clouds rolling like a closing fist — she thought of her grandmother's boots in the mud, and the seeds, and the small stubborn leaves.

She always started making plans.`,
    vocabulary: [
      { word: 'battlefield', definition: 'A place where a battle has been fought; used figuratively to describe something that looks devastated.', example: 'After the wild game, the playing field looked like a battlefield — torn up and scattered with gear.' },
      { word: 'nurturing', definition: 'Caring for something patiently over time to help it grow and thrive.', example: 'She had been nurturing the seedlings for weeks before they were ready to plant outside.' },
      { word: 'battered', definition: 'Damaged by repeated hits or rough conditions; worn and beaten.', example: 'The battered kite had survived three storms but finally needed to be repaired.' },
      { word: 'methodically', definition: 'Done in a careful, organized, step-by-step way.', example: 'She methodically checked each answer before turning in her test.' },
      { word: 'stubborn', definition: 'Refusing to give in or give up, even when conditions are difficult.', example: 'The stubborn dandelion kept growing back no matter how many times they pulled it out.' }
    ],
    questions: [
      {
        question: 'What is the THEME of this story?',
        options: [
          'Hurricanes cause more damage to gardens than to any other type of property.',
          'After loss or hardship, choosing to act and begin again is what defines a person\'s character.',
          'Grandparents always know more than their grandchildren about dealing with problems.',
          'Florida\'s weather makes it impossible to grow a successful garden.'
        ],
        correctIndex: 1,
        explanation: 'Grandma does not grieve the storm — she acts. Her words ("A storm is not the end. It is the most important moment for deciding what you do next") and the image of Lucia later planning when storms approach both reinforce the theme: responding with action after hardship defines who we are.'
      },
      {
        question: 'Read this sentence: "their stakes snapped like broken pencils." What type of FIGURATIVE LANGUAGE is this, and what does it help the reader understand?',
        options: [
          'Metaphor — it suggests the stakes and pencils are the same object.',
          'Personification — it gives the stakes human qualities.',
          'Simile — it compares the broken stakes to broken pencils to help the reader picture how completely they were snapped.',
          'Hyperbole — it greatly exaggerates how many stakes were broken.'
        ],
        correctIndex: 2,
        explanation: '"Like broken pencils" uses the word "like" to make a direct comparison — that is a simile. The comparison helps the reader visualize the stakes as thin, snapped completely in two, the way a pencil breaks cleanly when too much pressure is applied.'
      },
      {
        question: 'At the end, the author describes small green leaves "reaching upward — stubborn, unhurried, as if they hadn\'t even heard about the hurricane." What type of figurative language is this?',
        options: [
          'Simile — the leaves are compared to stubborn people.',
          'Personification — the leaves are given human traits: stubbornness, calm, and the ability to "hear" news.',
          'Alliteration — the repeated sounds create a musical effect.',
          'Metaphor — the leaves become a direct symbol for Grandma.'
        ],
        correctIndex: 1,
        explanation: 'The leaves are described as "stubborn" and "unhurried," and the phrase "as if they hadn\'t even heard about the hurricane" gives them the human ability to know about events. This is personification — giving non-human things human qualities.'
      },
      {
        question: 'How does Grandma\'s response to the storm damage DEVELOP her character?',
        options: [
          'She becomes overwhelmed and asks Lucia to handle everything.',
          'She shows that she is the kind of person who responds to difficulty with immediate, purposeful action rather than despair.',
          'She becomes angry about the storm and expresses that anger by working in the garden.',
          'She waits for a sunny day before deciding whether the garden can be saved.'
        ],
        correctIndex: 1,
        explanation: 'Lucia expects Grandma to cry or retreat to her chair — but instead she walks into the mud and starts working. The author reveals Grandma\'s character through her actions: she is someone who chooses action over grief, and that choice is what the whole story is about.'
      },
      {
        question: 'What does Grandma mean when she says "Especially after this" in response to Lucia\'s surprise about planting seeds?',
        options: [
          'The storm created more open ground, so now is the best time to plant more seeds.',
          'After a storm is exactly the right moment to plant — it is an act of hope and commitment, not despite the damage, but because of it.',
          'The rain from the storm will help the seeds grow faster than usual.',
          'She means they must plant quickly before another storm arrives.'
        ],
        correctIndex: 1,
        explanation: 'Grandma explains: "A storm is not the end. It is the most important moment for deciding what you do next." Planting seeds immediately after destruction is a deliberate act — it says that you intend to continue. "Especially after this" means the hard moment is exactly when it matters most to choose to go on.'
      }
    ]
  },

  // ── NEW ── LITERARY | ELA.4.R.1.3 (narrator perspective) | ELA.4.R.1.1 (conflict/character)
  {
    id: 'last-seat',
    title: 'The Last Seat on the Bus',
    topic: 'character',
    coverEmoji: '🚌',
    coverColor: '#7c3aed',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 410,
    readTimeMin: 2,
    text: `The new girl, Priya, sat alone in the last seat of the school bus every single day.

Dominic had noticed this for two weeks. He also noticed that she never said good morning to anyone, never saved a seat, and always had headphones in before the bus even started moving. His friend Keisha said she seemed "stuck-up." Dominic wasn't so sure, but he nodded anyway.

One afternoon, the bus was unusually packed. Every seat held two students except the last one — Priya's seat. Dominic was the last one on. He stood in the aisle, looked at Priya, and then at the only available space beside her.

Priya pulled one earbud out. "You can sit here," she said. "I don't bite."

Dominic sat down. For the first minute, nobody said anything.

Then Priya said, without looking at him: "Your class did the Florida history project, right? The one about the Seminoles?"

He blinked. "Yeah. How did you know?"

"I heard you presenting in the hallway. You said something interesting about why they didn't sign a treaty. I've been reading about it." She paused. "I just moved from Georgia. We learned completely different things. Florida history is actually kind of amazing."

Dominic didn't know what to say. He had **assumed** — without thinking much about it — that Priya kept to herself because she thought she was better than everyone else. Now she was talking to him about Seminole history.

"Why do you always wear headphones?" he asked.

"Noise makes it hard to think," she said simply. "I have **sensory** stuff. The bus is loud. The headphones help me get through it so I can function when I get home." She said it matter-of-factly, the way you might explain that you take an umbrella when it rains.

Dominic was quiet for a moment.

"Keisha thinks you're stuck-up," he admitted.

Priya turned and looked at him directly for the first time. "I know," she said. "A lot of people do. It's okay. It's easier to **assume** something than to ask."

The bus stopped at Dominic's street. He got up.

"My name's Dominic," he said.

"I know," she said. "You announced it pretty loudly during your presentation." A small smile.

He laughed — the kind of laugh that **dissolves** tension the way warm water dissolves sugar.

He started sitting in the back seat the next day. And the day after that.`,
    vocabulary: [
      { word: 'assumed', definition: 'Believed something was true without checking or asking — decided without evidence.', example: 'She assumed the test would be multiple choice and didn\'t study for the essay questions.' },
      { word: 'sensory', definition: 'Related to the body\'s five senses — sight, hearing, touch, smell, and taste.', example: 'The loud cafeteria created sensory overload that made it hard for him to concentrate.' },
      { word: 'matter-of-factly', definition: 'In a calm, straightforward way, without drama or apology.', example: 'She explained the rules matter-of-factly, as if everyone already knew them.' },
      { word: 'dissolves', definition: 'Disappears gradually, as if melting away.', example: 'His nervousness dissolved as soon as the crowd started laughing with him.' },
      { word: 'function', definition: 'To operate or work normally; to manage tasks effectively.', example: 'After a good night\'s sleep, she was finally able to function properly in class.' }
    ],
    questions: [
      {
        question: 'The story is told from DOMINIC\'S point of view. How does his perspective LIMIT what the reader knows at the beginning?',
        options: [
          'Dominic knows Priya\'s name and class schedule, so the reader learns everything about her.',
          'Because the reader only sees Priya through Dominic\'s observations and assumptions, Priya appears unfriendly — until she explains herself.',
          'Dominic is an unreliable narrator who lies about what happened on the bus.',
          'Dominic\'s perspective gives the reader more information about Priya than Priya has about herself.'
        ],
        correctIndex: 1,
        explanation: 'Because the reader only has Dominic\'s view, Priya seems cold and isolated — the same way Dominic sees her. It is only when Priya speaks and explains herself that the reader (and Dominic) understand what was actually happening. The narrator\'s limited perspective creates the story\'s central misunderstanding.'
      },
      {
        question: 'What is the CONFLICT in this story, and how is it resolved?',
        options: [
          'Dominic and Priya argue about Florida history, but eventually agree.',
          'Dominic incorrectly assumes Priya is unfriendly; a forced conversation reveals the truth and changes his perspective.',
          'Priya is bullied by Keisha and Dominic, but tells a teacher who resolves the problem.',
          'The bus is too crowded, forcing students to sit with people they don\'t know.'
        ],
        correctIndex: 1,
        explanation: 'The conflict is Dominic\'s misunderstanding of Priya — he has assumed she is stuck-up. The resolution comes through their unexpected conversation, where Priya\'s real interests and the real reason she wears headphones are revealed. The conflict dissolves when assumptions are replaced by actual communication.'
      },
      {
        question: 'What does Priya mean when she says "It\'s easier to assume something than to ask"?',
        options: [
          'She means that asking questions is rude and people should mind their own business.',
          'She is pointing out that people often judge without communicating — it takes more effort to actually find out the truth.',
          'She means that Dominic was right to make assumptions about her behavior.',
          'She is saying that she prefers not to talk to people on the bus.'
        ],
        correctIndex: 1,
        explanation: 'Priya is acknowledging that many people — not just Keisha — have judged her without asking why she behaves as she does. Her statement is a quiet critique: making assumptions is the lazy path; actually asking someone takes more courage and effort, but it produces understanding.'
      },
      {
        question: 'Read this sentence: "He laughed — the kind of laugh that dissolves tension the way warm water dissolves sugar." What type of figurative language is this?',
        options: [
          'Personification — the laugh is given the ability to feel tension.',
          'Simile — the laugh is compared to warm water dissolving sugar to show how it melted the awkwardness.',
          'Hyperbole — the comparison greatly exaggerates how funny the moment was.',
          'Alliteration — the repeated sounds create a rhythmic effect.'
        ],
        correctIndex: 1,
        explanation: '"The way warm water dissolves sugar" is a comparison using "the way" — making it a simile. The comparison helps the reader feel exactly what happened: just as sugar disappears in warm water, the awkwardness between them simply vanished when they both laughed.'
      },
      {
        question: 'How does DOMINIC\'S CHARACTER CHANGE from the beginning of the story to the end?',
        options: [
          'He starts friendly and ends suspicious of Priya.',
          'He begins by going along with unfair assumptions about Priya and ends by choosing to know her as she actually is.',
          'He becomes less interested in Florida history after talking to Priya.',
          'He starts afraid of Priya and ends up replacing Keisha as his best friend.'
        ],
        correctIndex: 1,
        explanation: 'At the start, Dominic nods when Keisha calls Priya "stuck-up" — he doesn\'t push back. By the end, he chooses to sit with Priya day after day. The change is subtle but clear: he moves from passive assumption to active understanding.'
      }
    ]
  },

  // ── NEW ── INFORMATIONAL (Emerging) | ELA.2.R.2.1 (central idea) | Florida Nature
  {
    id: 'scrub-jay',
    title: 'The Florida Scrub-Jay: Found Nowhere Else on Earth',
    topic: 'florida-nature',
    coverEmoji: '🐦',
    coverColor: '#2563eb',
    gradeLevel: '2-3',
    level: 'emerging',
    grades: [1, 2, 3, 4],
    wordCount: 245,
    readTimeMin: 1,
    text: `Have you ever seen a bird that lives in only one state? The Florida scrub-jay is that bird. It is found only in Florida — not in any other state or country in the world. That makes it very special and very important to protect.

Scrub-jays are bright blue and gray birds, about the size of a robin. They live in a **habitat** called Florida scrub — patches of sandy soil with low oak bushes and open ground. This type of land used to be common across Florida. Today, most of it has been cleared to build homes, farms, and shopping centers. Because their habitat has shrunk, scrub-jays are now **endangered**. Fewer than 8,000 remain in the wild.

What makes scrub-jays extra interesting is how they live as a family. Young birds from a previous year — called "helpers" — stay with their parents instead of going off on their own. They help feed and **guard** the new chicks. If a hawk flies nearby, the helpers call out a warning to protect the nest.

Scrub-jays are also unusually **bold** around people. They will fly right up to a person's hand to take a piece of food. Scientists use this boldness to study them up close, placing tiny ID bands on their legs to track each bird.

The best way to protect scrub-jays is to protect their land. When communities set aside scrubland and let it stay natural, scrub-jays have room to survive. Every patch of saved habitat is a home for a family that exists nowhere else on Earth.`,
    vocabulary: [
      { word: 'habitat', definition: 'The natural place where an animal lives and finds everything it needs to survive.', example: 'The raccoon\'s habitat includes forests and wetlands where it can find food and shelter.' },
      { word: 'endangered', definition: 'At serious risk of dying out completely if nothing is done to help.', example: 'The endangered sea turtle needs protected beaches to lay its eggs safely.' },
      { word: 'guard', definition: 'To watch over something or someone to keep it safe from danger.', example: 'The dog would guard the yard whenever strangers walked by.' },
      { word: 'bold', definition: 'Confident and not afraid; willing to act even when there is risk.', example: 'The bold little bird flew right up to the picnic table to grab a crumb.' },
      { word: 'community', definition: 'A group of people who live in the same area and share responsibility for it.', example: 'The community worked together to plant trees along the neighborhood streets.' }
    ],
    questions: [
      {
        question: 'What is the MAIN IDEA of this passage?',
        options: [
          'All birds in Florida are endangered and need to be protected.',
          'The Florida scrub-jay is a unique, endangered bird that can only be saved by protecting its habitat.',
          'Scrub-jays are the largest blue birds found anywhere in North America.',
          'Scientists use ID bands to study all types of birds in Florida.'
        ],
        correctIndex: 1,
        explanation: 'The passage describes what makes scrub-jays unique (found only in Florida), explains why they are endangered (habitat loss), and concludes with how to protect them (save scrubland). All of these details support the main idea that the scrub-jay needs habitat protection to survive.'
      },
      {
        question: 'According to the passage, why are Florida scrub-jays ENDANGERED?',
        options: [
          'Hawks and other predators eat too many scrub-jay chicks each year.',
          'Most of their sandy scrub habitat has been cleared for homes, farms, and shopping centers.',
          'People capture them because they are so bold and easy to approach.',
          'Scrub-jays have trouble finding enough food in Florida\'s scrub habitat.'
        ],
        correctIndex: 1,
        explanation: 'The passage directly states that scrub habitat "has been cleared to build homes, farms, and shopping centers" and that the shrinking habitat is what has made the birds endangered — not predators or capturing.'
      },
      {
        question: 'What does the word "bold" MOST LIKELY mean as it is used in the passage?',
        options: [
          'Frightened of humans and quick to fly away.',
          'Colorful and bright, easy to spot in the wild.',
          'Confident and unafraid, willing to come close.',
          'Shy and quiet, hard to find in the scrub.'
        ],
        correctIndex: 2,
        explanation: 'The passage says scrub-jays "will fly right up to a person\'s hand to take food" — that behavior shows they are not afraid of people. Bold means confident and unafraid, which is exactly how the scrub-jay acts around humans.'
      },
      {
        question: 'How do "helper" scrub-jays SUPPORT their family?',
        options: [
          'They fly south for winter and bring food back in the spring.',
          'They build a new nest for the parents to use each season.',
          'They stay with their parents, help feed the chicks, and warn the family when predators are near.',
          'They compete with the parents to take control of the nest.'
        ],
        correctIndex: 2,
        explanation: 'The passage explains that helpers "stay with their parents," "help feed and guard the new chicks," and "call out a warning" when hawks appear. These three roles — feeding, guarding, and warning — are all named in the text.'
      },
      {
        question: 'According to the passage, what is the BEST way to protect scrub-jays?',
        options: [
          'Training scientists to place ID bands on every scrub-jay they find.',
          'Feeding scrub-jays by hand so they grow strong and healthy.',
          'Protecting and preserving the scrubland habitat where scrub-jays live.',
          'Moving scrub-jays to other states so they are not limited to Florida.'
        ],
        correctIndex: 2,
        explanation: 'The final paragraph states: "The best way to protect scrub-jays is to protect their land." The passage is clear that habitat protection — not feeding, banding, or moving them — is the primary solution.'
      }
    ]
  },

  // ── NEW ── INFORMATIONAL | ELA.5-8.R.2.2 (central idea) | ELA.5-8.R.2.4 (claim + evidence) | Science
  {
    id: 'bioluminescence',
    title: "Bioluminescence: The Ocean's Living Light",
    topic: 'science',
    coverEmoji: '✨',
    coverColor: '#0e7490',
    gradeLevel: '5-8',
    level: 'advanced',
    grades: [5, 6, 7, 8],
    wordCount: 445,
    readTimeMin: 2,
    text: `In certain bays in Puerto Rico, kayakers paddle through water that glows electric blue with every stroke. Along the coast of central Florida, summer swimmers sometimes emerge from the waves trailed by sheets of pale green light. In the deep ocean, where sunlight never penetrates, an estimated 76 percent of all animals produce their own light. This phenomenon — **bioluminescence** — is one of nature's most widespread and least understood abilities.

Bioluminescence is light produced by a living organism through a chemical reaction. The process involves two key molecules: a compound called **luciferin** and an enzyme called luciferase. When luciferin is oxidized — exposed to oxygen — in the presence of luciferase, it releases energy as light rather than heat. Unlike the light from a light bulb, which produces significant heat as a byproduct, bioluminescent light is extraordinarily efficient: nearly 100 percent of the energy produced becomes visible light. Scientists call this "cold light."

The organisms capable of bioluminescence span an astonishing range: bacteria, fungi, marine worms, jellyfish, squid, anglerfish, and dozens of species of fish. Fireflies — one of the few bioluminescent animals found on land — are familiar examples. In Florida, Indian River Lagoon and Merritt Island's waters occasionally **bloom** with bioluminescent **dinoflagellates**: single-celled marine organisms that produce a flash of blue light when agitated by movement. The effect, visible on calm summer nights, is often described by witnesses as one of the most beautiful things they have ever seen.

Why have so many unrelated organisms **independently evolved** the same ability? Research suggests bioluminescence serves several distinct functions. In deep-sea predators like the anglerfish, a dangling light lure attracts prey directly into the predator's range. In squid and other prey species, bioluminescence produces **counterillumination** — matching the faint light from the surface above so predators looking up from below cannot see a silhouette. Some deep-sea organisms flash bioluminescent signals to find and attract mates. Others use sudden bright flashes to startle or **disorient** predators long enough to escape.

Despite its prevalence, bioluminescence remains an active area of research. Scientists have identified over 40 separate evolutionary origins of the ability — meaning it evolved independently more than 40 times across different branches of life. Each origin used similar chemistry but developed for different purposes in different environments.

In 2020, researchers announced the discovery of bioluminescence in sharks — an ability previously unknown in that group. The finding suggested that far more ocean species may glow than scientists had previously estimated, and that the deep ocean, largely unexplored, may contain many more luminous organisms than anyone has yet imagined.

The ocean has been making its own light for hundreds of millions of years. We are only beginning to understand why.`,
    vocabulary: [
      { word: 'bioluminescence', definition: 'The production of light by a living organism through a chemical reaction inside its body.', example: 'The bioluminescence of the jellyfish made the dark water glow like a lamp.' },
      { word: 'luciferin', definition: 'A light-producing chemical compound found in bioluminescent organisms that releases energy as light when oxidized.', example: 'Scientists isolated luciferin from fireflies to study how living light is produced.' },
      { word: 'dinoflagellates', definition: 'Tiny single-celled marine organisms that float in ocean water; some species are bioluminescent and glow when disturbed.', example: 'The kayaker\'s paddle stirred up thousands of dinoflagellates, leaving a glowing trail behind her.' },
      { word: 'counterillumination', definition: 'A camouflage technique in which an animal produces light to match the brightness of its surroundings, making itself invisible to predators.', example: 'The squid\'s counterillumination made it nearly impossible for predators below to spot it against the surface light.' },
      { word: 'disorient', definition: 'To confuse something about its location or direction, making it temporarily unable to act or react effectively.', example: 'The sudden burst of light was enough to disorient the predator and let the fish escape.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'Fireflies are the most well-known bioluminescent organism, but they are found only on land.',
          'Bioluminescence is a widespread, chemically efficient natural phenomenon that evolved independently many times and serves multiple purposes across ocean life.',
          'Scientists have recently proven that all ocean animals are capable of producing some form of bioluminescent light.',
          'Florida\'s coastal waters contain the highest concentration of bioluminescent organisms in the world.'
        ],
        correctIndex: 1,
        explanation: 'The passage explains what bioluminescence is, how it works chemically, which organisms produce it, why it evolved, and how researchers are still discovering new examples — all pointing to the central idea that it is widespread, evolved many times independently, and serves multiple purposes.'
      },
      {
        question: 'The author states that bioluminescence has evolved independently more than 40 times. What does this SUGGEST about the ability?',
        options: [
          'That all bioluminescent organisms share a single common ancestor that developed the ability once.',
          'That the ability must have significant survival advantages, since so many unrelated species developed it separately.',
          'That bioluminescence is a recent development that appeared only after the deep ocean was formed.',
          'That scientists have been unable to explain why so many organisms share this ability.'
        ],
        correctIndex: 1,
        explanation: 'If 40 completely unrelated branches of life independently evolved the same ability, it strongly suggests that bioluminescence provides real survival benefits. When an adaptation evolves this many times, it is because it works — organisms without it were at a disadvantage.'
      },
      {
        question: 'How does the author SUPPORT the claim that bioluminescent light is unusually efficient?',
        options: [
          'By explaining that bioluminescent organisms use the same chemistry as electric light bulbs but in a smaller form.',
          'By comparing it to a light bulb and noting that unlike bulb light, nearly 100 percent of bioluminescent energy becomes visible light rather than heat.',
          'By citing research showing that bioluminescent animals live longer than non-bioluminescent species.',
          'By describing how dinoflagellates can light up an entire bay with just a small number of organisms.'
        ],
        correctIndex: 1,
        explanation: 'The author directly states that unlike a light bulb (which produces significant heat), bioluminescent light converts "nearly 100 percent of the energy produced" into visible light — and labels this "cold light." The comparison to a light bulb is the evidence for the efficiency claim.'
      },
      {
        question: 'What does the word "disorient" MOST LIKELY mean based on how it is used in the passage?',
        options: [
          'To attract a predator toward a bright light source.',
          'To cause something to feel confused about direction or surroundings, temporarily impairing its ability to act.',
          'To produce a chemical that poisons a predator.',
          'To signal to other members of the same species using flashes of light.'
        ],
        correctIndex: 1,
        explanation: 'The passage says organisms "use sudden bright flashes to startle or disorient predators long enough to escape" — the flash does not harm or attract the predator, but it confuses it, giving the prey a window of time. Disorient means to make something temporarily confused about where it is or what is happening.'
      },
      {
        question: 'How does the discovery of bioluminescence in sharks SUPPORT the passage\'s broader argument?',
        options: [
          'It proves that bioluminescence evolved from a single origin shared by all fish.',
          'It shows that sharks are the most recently evolved bioluminescent organisms in the ocean.',
          'It suggests the ocean holds far more bioluminescent life than scientists have yet catalogued, reinforcing how widespread and underexplored the phenomenon is.',
          'It contradicts earlier research that said bioluminescence was limited to invertebrates like jellyfish and squid.'
        ],
        correctIndex: 2,
        explanation: 'The shark discovery supports the passage\'s central claim by showing that even well-studied animals had hidden bioluminescent abilities — suggesting the unexplored deep ocean likely contains many more examples. It reinforces the idea that bioluminescence is even more widespread than currently known.'
      }
    ]
  },

  // ── EARLY ── Grade 1-2 | Florida Nature
  {
    id: 'pelican-fishing',
    title: 'The Pelican Goes Fishing',
    topic: 'florida-nature',
    coverEmoji: '🐦',
    coverColor: '#0891b2',
    gradeLevel: '1-2',
    level: 'early',
    grades: [1, 2, 3],
    wordCount: 145,
    readTimeMin: 1,
    text: `Brown pelicans live near the ocean in Florida. They are big birds with long beaks and a stretchy pouch underneath.

Pelicans eat fish. They have a very special way of catching them.

First, a pelican **soars** high in the sky. It looks down into the water below. When it sees a fish, it folds its wings and dives straight down — fast as an arrow!

It hits the water with a big splash. The pouch under its beak opens wide and **scoops** up water and fish at the same time.

Then the pelican lifts its head. The water drains out through the sides of its beak. The fish stays inside. Gulp!

Pelicans are very good fishers. Sometimes they sit on docks and wait for people to share their catch. They are one of the most fun birds to watch at a Florida beach.`,
    vocabulary: [
      { word: 'soars', definition: 'Flies high up in the sky without flapping wings much.', example: 'The eagle soars above the mountains.' },
      { word: 'pouch', definition: 'A soft bag or pocket — on a pelican, it hangs under the beak.', example: 'The pelican\'s pouch was full of fish.' },
      { word: 'scoops', definition: 'Picks up something quickly with a cup or hollow shape.', example: 'She scoops ice cream into the bowl.' },
      { word: 'dives', definition: 'Drops down quickly, head first.', example: 'The dolphin dives into the wave.' },
      { word: 'drains', definition: 'Flows out until empty.', example: 'The water drains from the bathtub.' }
    ],
    questions: [
      {
        question: 'How does a pelican catch fish?',
        options: ['It uses its feet to grab fish', 'It dives from the sky and scoops fish in its pouch', 'It waits for fish to jump out of the water', 'It uses its wings like a net'],
        correctIndex: 1,
        explanation: 'The pelican soars high, spots a fish, then dives down and scoops it up in the stretchy pouch under its beak.'
      },
      {
        question: 'What does the word "soars" mean?',
        options: ['Swims fast', 'Digs in the sand', 'Flies high in the sky', 'Calls loudly'],
        correctIndex: 2,
        explanation: 'Soars means to fly high up in the sky — the pelican soars above the water so it can look for fish below.'
      },
      {
        question: 'What happens to the water after the pelican scoops up a fish?',
        options: ['The pelican drinks it', 'It stays in the pouch', 'It drains out through the sides of the beak', 'It splashes onto the dock'],
        correctIndex: 2,
        explanation: 'The water drains out through the sides of the pelican\'s beak while the fish stays inside — then the pelican swallows the fish.'
      }
    ]
  },

  // ── EARLY ── Grade 1-2 | Florida Nature | Hatchling sea turtle
  {
    id: 'tiny-turtle',
    title: 'The Tiny Turtle\'s Big Journey',
    topic: 'florida-nature',
    coverEmoji: '🐢',
    coverColor: '#10b981',
    gradeLevel: '1-2',
    level: 'early',
    grades: [1, 2, 3],
    wordCount: 148,
    readTimeMin: 1,
    text: `It was a warm summer night on a Florida beach. Under the sand, something was moving.

Crack! Crack! Crack!

Baby sea turtles were **hatching** from their eggs. They pushed out of their shells and dug up through the sand. It took a long time, but they did not give up.

At last, they reached the top. The ocean was right in front of them, shining under the moon.

The baby turtles ran as fast as their little flippers could carry them. Seabirds were watching, so they had to hurry!

One by one, the tiny turtles reached the waves. The cold water felt wonderful. They swam and swam, going farther and farther out to sea.

Someday these little turtles will grow very large. And someday, the females will swim all the way back to this exact same beach to lay their own eggs.

The beach will be waiting for them.`,
    vocabulary: [
      { word: 'hatching', definition: 'Breaking out of an egg to be born.', example: 'The chicks were hatching one by one.' },
      { word: 'flippers', definition: 'Flat, wide limbs that animals use to swim.', example: 'The seal used its flippers to push through the water.' },
      { word: 'shell', definition: 'A hard outer covering that protects an animal or egg.', example: 'The baby turtle broke through its shell.' },
      { word: 'females', definition: 'The girl animals of a species.', example: 'The female sea turtle laid her eggs on the beach.' },
      { word: 'exact', definition: 'The very same — not a different one.', example: 'She sat in the exact same seat every day.' }
    ],
    questions: [
      {
        question: 'What do the baby turtles do as soon as they reach the top of the sand?',
        options: ['They rest and sleep', 'They run toward the ocean', 'They look for food on the beach', 'They climb into the trees'],
        correctIndex: 1,
        explanation: 'As soon as the baby turtles reach the top, they run toward the ocean as fast as they can — they have to hurry because seabirds are watching.'
      },
      {
        question: 'What does "hatching" mean?',
        options: ['Digging a hole in the sand', 'Swimming in the ocean', 'Breaking out of an egg to be born', 'Running from a bird'],
        correctIndex: 2,
        explanation: 'Hatching means breaking out of an egg — the baby turtles cracked through their shells to be born.'
      },
      {
        question: 'What will the female turtles do when they grow up?',
        options: ['They will stay in the ocean forever', 'They will return to the same beach to lay their eggs', 'They will travel to a different beach each time', 'They will build nests in trees'],
        correctIndex: 1,
        explanation: 'The story says the females will swim all the way back to "this exact same beach" to lay their own eggs someday.'
      }
    ]
  },

  // ── EARLY ── Grade 1-2 | Character | Making a friend
  {
    id: 'new-neighbor',
    title: 'The New Neighbor',
    topic: 'character',
    coverEmoji: '🏠',
    coverColor: '#7c3aed',
    gradeLevel: '1-2',
    level: 'early',
    grades: [1, 2, 3],
    wordCount: 142,
    readTimeMin: 1,
    text: `A moving truck stopped next door on Saturday morning.

Rosa watched from her window. A girl climbed out of a car. She had dark braids and was carrying a stuffed elephant. She looked a little **nervous**.

Rosa knew that feeling. She had moved to this street two years ago. She remembered how quiet everything felt at first.

She went outside.

"Hi," Rosa said. "I'm Rosa. I live next door."

The girl looked up. "I'm Amara. We just moved here from Miami."

"Do you want to see the park?" Rosa asked. "It has a really good swing."

Amara looked back at her mom, who smiled and nodded.

"Yes," Amara said. And then she smiled too.

They walked to the park together, Amara still holding her elephant. By the time they came home, they were already making plans for the next day.

Moving to a new place is hard. But sometimes a **neighbor** is waiting just next door.`,
    vocabulary: [
      { word: 'nervous', definition: 'Feeling a little worried or unsure about something new.', example: 'She felt nervous on her first day of school.' },
      { word: 'neighbor', definition: 'Someone who lives very close to you.', example: 'Our neighbor brought us cookies when we moved in.' },
      { word: 'moving truck', definition: 'A big vehicle used to carry furniture and boxes when someone moves to a new home.', example: 'The moving truck took all day to unload.' },
      { word: 'smiled', definition: 'Made a happy face by turning up the corners of the mouth.', example: 'He smiled when he heard the good news.' },
      { word: 'plans', definition: 'Decisions about what to do in the future.', example: 'They made plans to meet at the park on Saturday.' }
    ],
    questions: [
      {
        question: 'Why does Rosa decide to go outside and talk to Amara?',
        options: ['Her mom told her to go say hello', 'She remembered how quiet and lonely moving felt, and wanted to help', 'She wanted to see what was in the moving truck', 'Amara knocked on her door first'],
        correctIndex: 1,
        explanation: 'Rosa remembered how it felt when she moved — quiet and lonely at first. She wanted to help Amara feel welcome, so she went outside on her own.'
      },
      {
        question: 'What does "nervous" mean as used in the story?',
        options: ['Very happy and excited', 'A little worried or unsure about something new', 'Tired from a long trip', 'Angry about something'],
        correctIndex: 1,
        explanation: 'Amara looked nervous — she was in a new place and didn\'t know anyone yet. Nervous means feeling a little worried or unsure.'
      },
      {
        question: 'What is the MAIN IDEA of this story?',
        options: ['Miami is very far from this town', 'Moving trucks are very large', 'Being kind to a new neighbor can turn a hard day into a good one', 'Parks are the best places to make friends'],
        correctIndex: 2,
        explanation: 'Rosa reaches out to Amara, who is nervous and new. By the end, they are already making plans together — the story shows that a small act of kindness can make a big difference.'
      }
    ]
  },

  // ── EARLY ── Grade 1-2 | Florida Nature | Manatee calf
  {
    id: 'manatee-calf',
    title: 'Mama and the Calf',
    topic: 'florida-nature',
    coverEmoji: '🐟',
    coverColor: '#0891b2',
    gradeLevel: '1-2',
    level: 'early',
    grades: [1, 2, 3],
    wordCount: 138,
    readTimeMin: 1,
    text: `A baby manatee was born in a warm Florida river.

The baby — called a **calf** — was already as big as a large dog. But it needed its mama to take care of it.

The calf stayed very close to its mother. It nudged her with its nose. She nudged it back. This is how manatees show they love each other.

Every few minutes, the calf swam up to the surface to breathe air. Manatees are not fish — they are **mammals**, like whales and dolphins. They must come up for air.

The mama manatee ate thick river grass all day. The calf watched and learned.

They moved slowly through the water, side by side. Manatees are very gentle animals. They do not hurt anyone.

People in boats must drive slowly to keep manatees safe. In Florida, it is a law.

Gentle animals need gentle neighbors.`,
    vocabulary: [
      { word: 'calf', definition: 'A baby manatee, whale, or large animal.', example: 'The manatee calf stayed right next to its mother.' },
      { word: 'mammal', definition: 'A warm-blooded animal that breathes air and feeds milk to its babies.', example: 'Dogs, whales, and humans are all mammals.' },
      { word: 'nudged', definition: 'Pushed gently with the nose or elbow.', example: 'The puppy nudged her hand with its nose.' },
      { word: 'surface', definition: 'The top of the water.', example: 'The dolphin came up to the surface to breathe.' },
      { word: 'gentle', definition: 'Soft, calm, and careful — not rough or loud.', example: 'Be gentle when you pet the rabbit.' }
    ],
    questions: [
      {
        question: 'Why does the manatee calf swim to the surface every few minutes?',
        options: ['To look for food', 'To play with boats', 'To breathe air', 'To find its mother'],
        correctIndex: 2,
        explanation: 'Manatees are mammals, not fish — they must come up to the surface to breathe air, just like whales and dolphins.'
      },
      {
        question: 'What does it mean that manatees are "mammals"?',
        options: ['They live only in salt water', 'They are fish with special gills', 'They breathe air and are warm-blooded, like whales and dogs', 'They never need to eat'],
        correctIndex: 2,
        explanation: 'The story says manatees are mammals, like whales and dolphins — they breathe air and are not fish.'
      },
      {
        question: 'Why must boats drive slowly near manatees?',
        options: ['So the boats don\'t make too much noise', 'Because manatees are gentle animals and the law protects them from being hurt', 'So the manatees can see the boats clearly', 'Because manatees sometimes block the river'],
        correctIndex: 1,
        explanation: 'The story says manatees are gentle and do not hurt anyone — and that in Florida it is a law to drive boats slowly to keep them safe.'
      }
    ]
  },

  // ── EARLY ── Grade 1-2 | Science | Florida weather
  {
    id: 'afternoon-thunder',
    title: 'Florida\'s Afternoon Thunderstorm',
    topic: 'science',
    coverEmoji: '⛈️',
    coverColor: '#374151',
    gradeLevel: '1-2',
    level: 'early',
    grades: [1, 2, 3],
    wordCount: 150,
    readTimeMin: 1,
    text: `Almost every summer afternoon in Florida, something happens. The sky turns dark gray. Clouds pile up tall and wide. And then — BOOM! Thunder!

Florida gets more **thunderstorms** than almost anywhere else in the United States. This happens because Florida is hot and wet in the summer. The sun heats the ground. Warm, wet air rises into the sky. When that air gets high enough, it cools down and forms big clouds. These clouds hold water and electricity.

The electricity makes **lightning** — a bright flash that shoots through the sky. Lightning is very hot. When it heats the air so fast, the air makes a loud booming sound. That is **thunder**.

Most Florida thunderstorms happen in the afternoon. They usually last about an hour. Then the sky clears, the sun comes back out, and everything smells fresh and clean.

Florida rain is warm. Sometimes kids play in it anyway!

But if you hear thunder, go inside right away. Lightning can be dangerous.`,
    vocabulary: [
      { word: 'thunderstorm', definition: 'A storm with heavy rain, lightning, and thunder.', example: 'We stayed inside during the thunderstorm.' },
      { word: 'lightning', definition: 'A bright flash of electricity in the sky during a storm.', example: 'We saw lightning flash across the dark clouds.' },
      { word: 'thunder', definition: 'The loud booming sound that comes after lightning heats the air.', example: 'The thunder was so loud it shook the windows.' },
      { word: 'electricity', definition: 'A form of energy — lightning is a giant spark of natural electricity.', example: 'Electricity powers our lights and computers.' },
      { word: 'dangerous', definition: 'Not safe; could cause harm.', example: 'Swimming during a thunderstorm is dangerous.' }
    ],
    questions: [
      {
        question: 'Why does Florida get so many thunderstorms?',
        options: ['Because Florida is close to the North Pole', 'Because Florida is hot and wet — warm air rises and forms big storm clouds', 'Because Florida has very tall mountains', 'Because the ocean is very cold near Florida'],
        correctIndex: 1,
        explanation: 'Florida is hot and wet in summer. The sun heats the ground, warm wet air rises, cools, and forms storm clouds — which is why Florida gets more thunderstorms than almost anywhere else.'
      },
      {
        question: 'What causes the SOUND of thunder?',
        options: ['Clouds bumping into each other', 'Rain hitting the ground very hard', 'Lightning heating air so fast that it booms', 'Wind blowing through the trees'],
        correctIndex: 2,
        explanation: 'Lightning heats the air so fast that the air makes a loud booming sound — that\'s thunder.'
      },
      {
        question: 'What should you do if you hear thunder?',
        options: ['Keep playing outside', 'Swim in the pool quickly before it rains', 'Go inside right away', 'Stand under a tall tree'],
        correctIndex: 2,
        explanation: 'The story says "if you hear thunder, go inside right away" because lightning can be dangerous.'
      }
    ]
  },

  // ── ADVANCED ── Grade 5-8 | ELA.5-8.R.2.4 (claim + evidence) | Science/Tech
  {
    id: 'artificial-intelligence',
    title: 'The Machine That Learns: How Artificial Intelligence Works',
    topic: 'science',
    coverEmoji: '🤖',
    coverColor: '#1e3a8a',
    gradeLevel: '5-8',
    level: 'advanced',
    grades: [5, 6, 7, 8],
    wordCount: 455,
    readTimeMin: 3,
    text: `When you ask a phone assistant for directions, receive a personalized playlist, or get a social media feed tailored to your interests, you are interacting with **artificial intelligence** (AI) — software that has been trained to perform tasks that previously required human thinking. AI is no longer a concept from science fiction. It is embedded in everyday life, and understanding how it works has become one of the most important skills of this century.

Traditional computer programs follow explicit instructions written by human programmers. If you tell a traditional program to sort a list of numbers, it follows the exact steps you give it — no more, no less. AI systems work differently. Rather than following rigid rules, most modern AI systems **learn from data**.

Consider the example of image recognition. To teach an AI to identify cats in photographs, engineers do not write rules like "look for fur" or "check for whiskers." Instead, they feed the system millions of labeled photographs — cat, not a cat, cat, not a cat — and allow the system to find its own patterns. Over many **iterations**, the system adjusts its internal settings (called parameters) until it can reliably distinguish cats from non-cats with remarkable accuracy.

This approach, called **machine learning**, is extraordinarily powerful but carries real limitations. An AI is only as good as the data it trains on. If that data contains **biases** — for example, if a facial recognition system is trained mostly on photographs of one demographic group — the system will perform poorly on others. This has caused documented cases of AI incorrectly identifying people, with serious real-world consequences in law enforcement and hiring.

AI also lacks genuine understanding. A language AI that produces fluent, confident sentences has no idea whether those sentences are true. It generates statistically probable sequences of words based on patterns in its training data. This makes it capable of producing plausible-sounding misinformation at enormous scale — a challenge that researchers, journalists, and governments are only beginning to address.

Despite these challenges, the potential applications of AI are extraordinary. Medical AI systems already detect certain cancers from imaging scans more accurately than many trained specialists. Climate scientists use AI to model complex weather systems. Educators are beginning to use AI to personalize instruction for individual students in ways that would be impossible for a single teacher to deliver.

The machine does not understand. But it learns. And that learning — powerful, useful, and imperfect — is reshaping every field of human activity. Understanding what AI can and cannot do is no longer optional knowledge. It is part of what it means to be an informed person in the twenty-first century.`,
    vocabulary: [
      { word: 'artificial intelligence', definition: 'Computer systems trained to perform tasks that normally require human thinking, such as recognizing images or understanding language.', example: 'Artificial intelligence helped the doctor detect the tumor earlier than expected.' },
      { word: 'iterations', definition: 'Repetitions of a process, each one building on the results of the last.', example: 'After hundreds of iterations, the design was finally ready to test.' },
      { word: 'machine learning', definition: 'A type of AI in which systems learn from data by finding patterns, rather than following explicit programmed rules.', example: 'Machine learning allowed the app to improve its recommendations the more you used it.' },
      { word: 'biases', definition: 'Unfair tendencies built into a system, often from unrepresentative data, that cause it to favor or disadvantage certain groups.', example: 'The researchers found biases in the hiring algorithm that consistently overlooked qualified candidates.' },
      { word: 'demographic', definition: 'Relating to groups of people defined by characteristics such as age, race, gender, or location.', example: 'The study showed differences in outcomes across several demographic groups.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'Artificial intelligence is dangerous and should be banned.',
          'AI is a powerful technology that learns from data, but it has real limitations that everyone should understand.',
          'Traditional computer programs are better than AI for most tasks.',
          'AI will eventually replace all human workers in every profession.'
        ],
        correctIndex: 1,
        explanation: 'The passage describes how AI works, its powerful capabilities (medical diagnosis, climate modeling), and its significant limitations (bias, lack of understanding). The central idea is that AI is powerful but imperfect — and understanding it matters.'
      },
      {
        question: 'According to the passage, how is machine learning DIFFERENT from traditional programming?',
        options: [
          'Traditional programs are faster, but machine learning is more accurate.',
          'Traditional programs follow explicit rules written by humans; machine learning systems find their own patterns from data.',
          'Machine learning requires more hardware but produces simpler results.',
          'Traditional programs can only sort numbers, while machine learning can do everything else.'
        ],
        correctIndex: 1,
        explanation: 'The passage directly states: "Rather than following rigid rules, most modern AI systems learn from data." Traditional programs follow exact instructions; machine learning systems discover patterns on their own.'
      },
      {
        question: 'The author states that AI "lacks genuine understanding." What EVIDENCE supports this claim?',
        options: [
          'AI systems require millions of labeled photographs to learn anything.',
          'A language AI produces statistically probable word sequences without knowing whether they are true — making it capable of confident misinformation.',
          'AI facial recognition systems have performed poorly on certain demographic groups.',
          'AI medical systems can detect cancers from scans more accurately than some specialists.'
        ],
        correctIndex: 1,
        explanation: 'The passage explains that language AI generates "statistically probable sequences of words" without any knowledge of truth. This directly supports the claim that AI lacks genuine understanding — it mimics language without comprehending meaning.'
      },
      {
        question: 'What does the word "biases" suggest about how AI learns?',
        options: [
          'AI systems deliberately choose to treat certain groups unfairly.',
          'Biases show that AI systems are impossible to improve over time.',
          'If training data is unrepresentative, the AI\'s patterns will reflect those imbalances, causing unfair or inaccurate results.',
          'Biases are a minor technical issue that engineers have already solved.'
        ],
        correctIndex: 2,
        explanation: 'The passage explains that AI learns from data — so if that data is skewed toward certain groups, the AI\'s results will be skewed too. Biases in data produce biases in outcomes, which has had "documented cases" of real harm.'
      },
      {
        question: 'How does the author BALANCE the argument about AI in this passage?',
        options: [
          'The author argues only that AI is dangerous and must be regulated.',
          'The author presents both significant limitations (bias, misinformation) and powerful benefits (medical diagnosis, climate modeling) to give a complete picture.',
          'The author argues only that AI is beneficial and should be adopted everywhere.',
          'The author avoids taking any position and only defines technical terms.'
        ],
        correctIndex: 1,
        explanation: 'The passage explicitly discusses AI\'s risks (bias in hiring/law enforcement, misinformation) alongside its benefits (cancer detection, climate science, personalized education). This balanced approach reflects the author\'s goal of informing rather than alarming or promoting.'
      }
    ]
  },

  // ── ADVANCED ── Grade 5-8 | ELA.5-8.R.1.2 (theme) | ELA.5-8.R.2.3 (author's perspective) | Biography
  {
    id: 'douglass-literacy',
    title: 'Frederick Douglass: The Power of the Forbidden Word',
    topic: 'biography',
    coverEmoji: '✊',
    coverColor: '#7c3aed',
    gradeLevel: '5-8',
    level: 'advanced',
    grades: [5, 6, 7, 8],
    wordCount: 450,
    readTimeMin: 3,
    text: `In 1826, a slaveholder named Hugh Auld discovered that his wife Sophia had been teaching their enslaved servant, Frederick, to read. Auld was furious. "If you teach that n----- how to read," he reportedly told his wife, "there will be no keeping him. It will forever unfit him to be a slave."

He was right.

Frederick Douglass would later describe this moment as the turning point of his life. Overhearing Auld's words did not discourage him — it ignited him. "From that moment, I understood the pathway from slavery to freedom," he wrote in his 1845 **autobiography**. He recognized instantly what Auld already knew: that **literacy** — the ability to read and write — was the most powerful tool a human being could possess, and that those in power had deliberately kept it from enslaved people for exactly that reason.

Douglass taught himself the rest. He **solicited** lessons from poor white children in Baltimore, trading bread for alphabet instruction. He studied newspapers, pamphlets, and discarded writing exercises. He memorized passages. By the time he escaped north at age twenty, he could read, write, argue, and inspire.

He used all of it.

In 1841, Douglass gave his first major speech at an abolitionist convention in Massachusetts. The audience was stunned. Here was a formerly enslaved man speaking with precision, authority, and **eloquence** that matched any university-trained orator of the day. He became the most prominent Black voice in the American abolitionist movement, publishing his autobiography, founding a newspaper called The North Star, and advising President Abraham Lincoln on matters of emancipation and Black military service.

Douglass understood that his voice was his most dangerous weapon — not just because of what he said, but because of what his existence **proved**: that the intellectual **inferiority** attributed to enslaved people by defenders of slavery was a lie constructed to maintain a system, not a truth rooted in fact. Every speech he gave was evidence.

His argument was simple and devastating: if enslaved people were truly incapable of reason, why did the law make it a crime to teach them to read?

The question answered itself.

Frederick Douglass died in 1895, having lived to see slavery abolished, Black men granted the right to vote, and three constitutional amendments rewrite the law of the land. He had done it largely with words — words that had once been forbidden to him, and that he had claimed anyway.`,
    vocabulary: [
      { word: 'autobiography', definition: 'A book a person writes about their own life.', example: 'In her autobiography, she described growing up in rural Georgia during the Great Depression.' },
      { word: 'literacy', definition: 'The ability to read and write.', example: 'Literacy programs helped thousands of adults learn to read for the first time.' },
      { word: 'solicited', definition: 'Actively asked for or sought out something needed.', example: 'He solicited advice from every expert he could find.' },
      { word: 'eloquence', definition: 'The ability to speak or write in a clear, powerful, and persuasive way.', example: 'Her eloquence during the debate convinced many undecided voters.' },
      { word: 'inferiority', definition: 'The false belief or claim that one group is less capable or less valuable than another.', example: 'The movement challenged centuries of propaganda about the supposed inferiority of certain peoples.' }
    ],
    questions: [
      {
        question: 'What is the THEME of this passage?',
        options: [
          'Violence is the only effective tool against injustice.',
          'Literacy is a form of power, and those who control it control the people around them.',
          'Education is most valuable when it comes from formal schooling.',
          'One person\'s actions cannot change unjust laws.'
        ],
        correctIndex: 1,
        explanation: 'The passage shows that slaveholders deliberately kept literacy from enslaved people because it would "unfit" them for slavery — and Douglass\'s entire life demonstrates that literacy was the pathway to freedom and influence. The theme is that literacy is power.'
      },
      {
        question: 'What was the EFFECT of overhearing Hugh Auld\'s words on Frederick Douglass?',
        options: [
          'It frightened Douglass and made him stop trying to learn to read.',
          'It made Douglass angry at Sophia Auld for revealing his progress.',
          'It confirmed for Douglass that literacy was the pathway to freedom and intensified his drive to learn.',
          'It caused Douglass to escape north the very next day.'
        ],
        correctIndex: 2,
        explanation: 'Douglass wrote that from that moment, he "understood the pathway from slavery to freedom." Auld\'s words — meant as a warning — instead revealed to Douglass exactly why literacy was so important, which "ignited" him rather than discouraging him.'
      },
      {
        question: 'The author writes that Douglass\'s "existence proved" something. What did it prove?',
        options: [
          'That formerly enslaved people could always escape if they tried hard enough.',
          'That the claimed intellectual inferiority of enslaved people was a deliberate lie used to justify slavery, not a fact.',
          'That university training was unnecessary for success as a public speaker.',
          'That abolitionist conventions were the most effective way to change public opinion.'
        ],
        correctIndex: 1,
        explanation: 'The author explains that every speech Douglass gave was evidence against the claim that enslaved people were incapable of reason. His existence as an educated, eloquent, published writer proved the supposed "inferiority" was a constructed justification for slavery, not reality.'
      },
      {
        question: 'What does "solicited" suggest about how Douglass learned to read after Auld stopped his lessons?',
        options: [
          'He waited patiently until someone offered to teach him again.',
          'He actively sought out and pursued opportunities to learn, trading bread for lessons from poor white children.',
          'He found books in the library and taught himself without any help.',
          'He convinced Sophia Auld to continue teaching him in secret.'
        ],
        correctIndex: 1,
        explanation: '"Solicited" means he actively sought out what he needed — he didn\'t wait, he pursued. The passage describes him trading bread for instruction, studying newspapers and pamphlets, memorizing passages — all active, self-directed efforts.'
      },
      {
        question: 'The author ends with the phrase "words that had once been forbidden to him, and that he had claimed anyway." What does this reveal about the AUTHOR\'S PERSPECTIVE?',
        options: [
          'The author believes Douglass was lucky to escape and learn to read.',
          'The author views Douglass\'s reclaiming of literacy as an act of deliberate resistance — taking back what was unjustly withheld.',
          'The author thinks Douglass should have focused on politics rather than writing and speaking.',
          'The author presents a neutral, fact-only account with no opinion about Douglass.'
        ],
        correctIndex: 1,
        explanation: 'The word "claimed" — not "earned" or "received" — implies active reclamation of something wrongfully taken. The phrase "forbidden to him" acknowledges the injustice, while "claimed anyway" celebrates his defiance. The author clearly admires Douglass\'s determination and frames his literacy as an act of resistance.'
      }
    ]
  },

  // ── ADVANCED ── Grade 5-8 | ELA.5-8.R.2.1 (text structure) | ELA.5-8.R.2.2 (central idea) | Florida/Environment
  {
    id: 'florida-coral-reefs',
    title: 'The Third Largest: Florida\'s Coral Reef',
    topic: 'florida-nature',
    coverEmoji: '🪸',
    coverColor: '#0891b2',
    gradeLevel: '5-8',
    level: 'advanced',
    grades: [5, 6, 7, 8],
    wordCount: 448,
    readTimeMin: 3,
    text: `Stretching approximately 360 miles along the Florida Keys, the Florida Reef Tract is the third largest **coral reef** system in the world, after the Great Barrier Reef of Australia and the Mesoamerican Reef of Central America. For most of Florida's history, this underwater wilderness was one of the most biodiverse ecosystems on the planet — a labyrinth of living structures housing thousands of species of fish, invertebrates, sea turtles, sharks, and marine mammals.

That reef is now in critical condition.

Since the 1970s, Florida's coral cover — the percentage of the reef surface actually covered by living coral — has declined from roughly 30 percent to less than 2 percent. The causes are interconnected and **cumulative**: rising ocean temperatures cause coral **bleaching**, in which corals expel the colorful algae that feed them and turn ghostly white; **eutrophication** from agricultural and residential runoff delivers excess nutrients that fuel algae growth, smothering coral; boat anchors, fishing gear, and physical contact from divers cause direct structural damage; and invasive species — particularly the lionfish, introduced to Atlantic waters from the Pacific — consume the small fish that would otherwise control algae growth on the reef.

In 2023, ocean temperatures near the Florida Keys reached record highs — in some areas exceeding 100°F, temperatures that are lethal to coral. Scientists described the event as the most severe bleaching episode in recorded history for this reef system. Thousands of coral colonies died within weeks.

The response has been extraordinary. Florida's coral nurseries — underwater gardens where scientists grow coral fragments on tree-shaped metal structures — now house the largest collection of **genetically distinct** coral individuals in the world. Restoration teams **transplant** these lab-grown corals onto damaged sections of reef. Researchers are also selectively breeding heat-tolerant coral varieties in hopes of developing strains that can survive the warmer temperatures projected by climate models.

Community engagement has proven equally important. Local dive shops, school groups, and volunteers participate in reef monitoring programs, reporting coral health data that scientists could never collect alone. Some Florida counties have adopted **ordinances** restricting certain sunscreen chemicals — specifically oxybenzone and octinoxate, which are toxic to coral larvae — from being worn in reef waters.

Recovery will not be fast. Scientists caution that even under the most optimistic projections, full reef restoration will take decades. But the commitment of researchers, communities, and policymakers has demonstrated something significant: when a community decides that an ecosystem is worth saving, the tools and the will to do so can be found.

Florida's reef is still here. Barely. And that is, against all odds, enough to work with.`,
    vocabulary: [
      { word: 'coral reef', definition: 'An underwater structure built from the skeletons of tiny marine animals called coral polyps, forming a complex ecosystem.', example: 'The coral reef supported hundreds of species of fish and invertebrates.' },
      { word: 'cumulative', definition: 'Building up gradually over time as multiple factors combine.', example: 'The cumulative effect of small temperature increases caused widespread damage.' },
      { word: 'bleaching', definition: 'A stress response in coral where it expels its colorful algae and turns white, often leading to death.', example: 'Scientists documented widespread coral bleaching after the record ocean temperatures.' },
      { word: 'genetically distinct', definition: 'Containing different DNA from other individuals of the same species, which increases a population\'s ability to adapt.', example: 'Planting genetically distinct coral increases the chances that some will survive warming waters.' },
      { word: 'ordinances', definition: 'Local laws passed by a city or county government.', example: 'New ordinances limited construction near the wetland to protect wildlife.' }
    ],
    questions: [
      {
        question: 'What is the CENTRAL IDEA of this passage?',
        options: [
          'Florida\'s coral reef is the largest in the world and is perfectly healthy.',
          'Florida\'s coral reef is critically damaged by multiple interconnected causes, but active restoration and community efforts give reason for cautious hope.',
          'Coral bleaching is caused entirely by sunscreen chemicals and can be solved by banning them.',
          'The only solution to reef decline is to stop all diving and boating near the reef permanently.'
        ],
        correctIndex: 1,
        explanation: 'The passage describes the reef\'s dramatic decline, the multiple causes, the severity of recent bleaching, and the extraordinary restoration efforts underway. The central idea is that the reef is in crisis — but that human commitment to saving it makes recovery possible.'
      },
      {
        question: 'How does the author ORGANIZE information about the reef\'s decline?',
        options: [
          'Chronologically, describing each decade from 1970 to the present.',
          'By comparing Florida\'s reef to the Great Barrier Reef.',
          'Using cause and effect — listing multiple interconnected causes of coral decline and their specific impacts.',
          'By describing the problem from the perspective of a single coral colony.'
        ],
        correctIndex: 2,
        explanation: 'The passage lists causes (rising temperatures → bleaching, runoff → algae growth, physical damage, invasive species) and explains the specific effects each cause produces. This is a clear cause-and-effect structure within the description of decline.'
      },
      {
        question: 'According to the passage, why are GENETICALLY DISTINCT corals important for restoration?',
        options: [
          'They grow faster than other coral varieties.',
          'They are less likely to be damaged by anchors and fishing gear.',
          'A diverse genetic collection increases the chances that some individuals will survive changing conditions.',
          'They produce more oxygen than corals grown in natural conditions.'
        ],
        correctIndex: 2,
        explanation: 'The passage states that Florida\'s nurseries house "the largest collection of genetically distinct coral individuals in the world" — genetic diversity means different individuals have different traits, increasing the likelihood that some can survive warmer or more stressful conditions.'
      },
      {
        question: 'What does the word "cumulative" suggest about the threats to Florida\'s reef?',
        options: [
          'Each threat acts independently and has no connection to the others.',
          'The threats are temporary and will naturally reverse themselves.',
          'The threats build on each other over time, making the combined damage greater than any single cause alone.',
          'Scientists have already identified which single cause is most responsible.'
        ],
        correctIndex: 2,
        explanation: 'The author uses "cumulative" to describe the causes as "interconnected and cumulative" — meaning they combine and build over time. Bleaching from warming, algae from runoff, physical damage, and invasive species together create damage far greater than any one factor would cause alone.'
      },
      {
        question: 'The author concludes: "Florida\'s reef is still here. Barely. And that is, against all odds, enough to work with." What does this reveal about the AUTHOR\'S PERSPECTIVE?',
        options: [
          'The author believes the reef cannot be saved and is already gone.',
          'The author thinks survival, even in a damaged state, is still a foundation worth building on — the situation is serious but not hopeless.',
          'The author is relieved that the reef has fully recovered thanks to restoration efforts.',
          'The author is critical of scientists for not acting sooner.'
        ],
        correctIndex: 1,
        explanation: 'The phrase "barely" acknowledges the severity honestly — but "enough to work with" reframes survival as opportunity rather than defeat. The author presents cautious but genuine hope, grounded in the real restoration work being done.'
      }
    ]
  },

  // ── PAIRED PASSAGE ── ELA.4.R.1.3 + ELA.4.R.2.3 (compare perspectives) | FAST format
  {
    id: 'springs-paired',
    title: 'Two Views of a Florida Spring — Paired Passages',
    topic: 'florida-nature',
    coverEmoji: '💧',
    coverColor: '#0891b2',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 420,
    readTimeMin: 3,
    paired: true,
    text: `**PAIRED PASSAGES** — Read both passages, then answer the questions.

---

**Passage 1 — Literary (First Person)**
*"The Clearest Water I've Ever Seen"*

The first thing I noticed was the color.

I expected the spring to look like the lake near our house — greenish and murky, with a smell like old leaves. But when my uncle pulled over at the edge of the state park and said, "Go look," I walked through the scrub and stopped at the bank and could not believe what I was seeing.

The water was not a color I had a word for. Somewhere between blue and green and glass. And it was moving — slowly, gently — even though there was no wind and no current I could see.

"That's coming straight from underground," my uncle said, appearing beside me. "A spring. It's been the same temperature for thousands of years. Sixty-eight degrees, year round."

I knelt down and put my hand in. It felt like the water had never once been touched by summer.

We swam for an hour. The water was so clear I could see every pebble on the bottom, ten feet down, as if they were sitting right at the surface. Schools of fish moved through the pale light like silver shadows.

When we climbed out, I didn't want to leave.

I understand now why people **trek** across Florida just to sit beside one of these springs. There is something about water that old and clear that makes everything else feel less **urgent**. Like you have accidentally wandered into a place that time forgot — and for a while, time forgot you too.

---

**Passage 2 — Informational**
*"Florida's Springs: Natural Wonders Under Pressure"*

Florida has more freshwater springs than any other state in the world — over 1,000 in total, including 33 first-magnitude springs that pump more than 100 cubic feet of water per second. These springs form where underground **aquifer** water is pushed up through the limestone bedrock at a remarkably constant temperature of 68°F year-round, regardless of air temperature.

For centuries, Florida's springs served as freshwater sources for Native American communities and early settlers. Today, they attract millions of visitors annually and are home to endangered species, including the West Indian manatee, which relies on their constant warm temperatures during winter months.

However, Florida's springs are under serious threat. Groundwater **extraction** by farms, cities, and suburban developments has reduced water pressure in the aquifer, causing many springs to flow more slowly or stop entirely. Increased nitrogen from fertilizers and sewage has created **algae blooms** that cloud the once-transparent water and suffocate native plants.

Scientists estimate that more than 30 percent of Florida's springs have seen significant flow reductions since 1950. Conservation groups are working to establish **minimum flows** — legally protected water levels that ensure springs remain functional ecosystems. Several springs have been restored after reducing nearby agricultural runoff, offering evidence that recovery is possible.

The challenge is balancing Florida's continued growth against the preservation of resources that, once gone, cannot easily be restored.`,
    vocabulary: [
      { word: 'trek', definition: 'To make a long, difficult journey, especially on foot.', example: 'They trekked through the forest for two hours before reaching the waterfall.' },
      { word: 'urgent', definition: 'Requiring immediate attention; pressing.', example: 'The urgent message arrived just in time to prevent the mistake.' },
      { word: 'aquifer', definition: 'An underground layer of rock or sediment that holds large amounts of water.', example: 'The city\'s drinking water comes from a deep aquifer beneath the limestone.' },
      { word: 'extraction', definition: 'The process of removing or drawing something out, especially from the ground.', example: 'Water extraction from wells has lowered the level of the underground aquifer.' },
      { word: 'minimum flows', definition: 'Legally protected water levels set to ensure a spring or river remains a functioning ecosystem.', example: 'The state established minimum flows to prevent the spring from drying up completely.' }
    ],
    questions: [
      {
        question: 'Both passages describe Florida springs. How are the PURPOSES of the two passages DIFFERENT?',
        options: [
          'Passage 1 argues that springs need protection; Passage 2 describes how they formed.',
          'Passage 1 uses personal experience to show what a spring feels like; Passage 2 uses facts to explain what springs are and why they are threatened.',
          'Passage 1 is written for scientists; Passage 2 is written for young children.',
          'Both passages have the same purpose — to convince readers to visit a spring.'
        ],
        correctIndex: 1,
        explanation: 'Passage 1 is a personal narrative focused on sensory experience and feeling — the narrator\'s emotional response to seeing a spring. Passage 2 is informational — it provides facts, statistics, and scientific context about what springs are and the threats they face. The purposes are clearly different.'
      },
      {
        question: 'The narrator in Passage 1 says the spring made everything feel less "urgent." What does this word mean in context?',
        options: [
          'Less colorful or vivid than she expected.',
          'Less pressing or important — as if worries and hurry had faded away.',
          'Less clean than the water she was used to.',
          'Less cold than the water temperature suggested.'
        ],
        correctIndex: 1,
        explanation: 'In context, the narrator says the water made "everything else feel less urgent" after describing the spring as a place where "time forgot you." Urgent means pressing or requiring immediate attention — she is saying the spring made ordinary worries feel less important.'
      },
      {
        question: 'Passage 2 states that Florida\'s springs are "under serious threat." Which detail from PASSAGE 1 connects to this idea?',
        options: [
          'The narrator describes the water as moving gently with no visible current.',
          'The narrator says the water felt like it had never been touched by summer.',
          'The narrator says she understands why people trek across Florida to visit a spring.',
          'The narrator describes fish moving through the water like silver shadows.'
        ],
        correctIndex: 2,
        explanation: 'The narrator\'s statement that people "trek across Florida" to see springs supports Passage 2\'s point about millions of visitors annually — and implicitly connects to the idea of why these places are worth protecting. It reflects the spring\'s appeal, which is precisely what is threatened.'
      },
      {
        question: 'How does the AUTHOR\'S PERSPECTIVE in Passage 2 differ from the narrator\'s perspective in Passage 1?',
        options: [
          'The Passage 2 author believes springs are already beyond saving; the Passage 1 narrator is hopeful.',
          'The Passage 2 author takes an analytical, fact-based view focused on environmental threats; the Passage 1 narrator takes a personal, emotional view focused on beauty and wonder.',
          'The Passage 2 author experienced the spring personally; the Passage 1 narrator learned about it from a textbook.',
          'Both authors share the same perspective — both focus on how the springs feel when you swim in them.'
        ],
        correctIndex: 1,
        explanation: 'Passage 1\'s narrator is entirely personal — her perspective is emotional and sensory, rooted in a single experience. Passage 2\'s author takes a scientific and environmental perspective, using statistics and expert knowledge to analyze a problem. The two perspectives complement each other but are clearly different in tone and approach.'
      },
      {
        question: 'What information from PASSAGE 2 would BEST help the reader understand why the spring in Passage 1 was so clear and beautiful?',
        options: [
          'The fact that extraction and algae blooms have reduced spring clarity in many locations.',
          'The fact that springs form from underground aquifer water at a constant 68°F, filtered through limestone bedrock.',
          'The fact that manatees use springs for warmth during winter.',
          'The fact that more than 30 percent of springs have experienced flow reductions since 1950.'
        ],
        correctIndex: 1,
        explanation: 'The narrator was amazed by the clarity and temperature of the water. Passage 2 explains why: springs are fed by ancient underground water filtered through limestone at a constant 68°F. This scientific explanation directly answers why the spring in Passage 1 looked and felt the way it did.'
      }
    ]
  }

  ,

  // ── PAIRED 2 ── ELA.4.R.2.3 + ELA.4.R.2.4 | Florida Nature | Two perspectives on manatees
  {
    id: 'manatee-paired',
    title: 'Two Views of the Gentle Giant — Paired Passages',
    topic: 'florida-nature',
    coverEmoji: '🐟',
    coverColor: '#0891b2',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 400,
    readTimeMin: 3,
    paired: true,
    text: `**PAIRED PASSAGES** — Read both passages, then answer the questions.

---

**Passage 1 — Literary**
*"The Shadow Beneath the Boat"*

The first time Maya saw a manatee, she thought the boat had drifted over a boulder.

Then the boulder moved.

It rose slowly toward the surface — enormous, gray-brown, and entirely unbothered by the small aluminum boat above it. Maya grabbed the side railing and leaned over. The manatee's whiskered snout broke the surface three feet from her hand, releasing a slow breath that sounded, somehow, like a sigh.

"Don't touch," her grandfather said quietly from behind her. He wasn't warning her against the manatee. He was warning the manatee against her.

They watched it feed for twenty minutes. It grazed along the river bottom in a kind of slow **deliberateness**, pulling up clumps of grass with the same unhurried certainty as a cow in a field. Once it bumped gently against the hull, rocking the boat — not aggressively, Maya realized, but curiously, the way a very large, very gentle thing might explore something new.

When it finally sank back into the green water and disappeared, Maya felt an unexpected **pang** — like saying goodbye to something she hadn't known she needed to meet.

"Will it come back?" she asked.

"They always do," her grandfather said. "Same river, same grass, same slow life. They don't change. That's what makes them **vulnerable**."

---

**Passage 2 — Informational**
*"Manatees: Slow Giants in a Fast World"*

The West Indian manatee is one of Florida's most recognizable animals — and one of its most at-risk. Weighing up to 1,200 pounds and stretching as long as 13 feet, manatees are the largest herbivores in Florida's waterways. They feed almost entirely on seagrass, consuming up to 10 percent of their body weight each day.

Manatees are **cold-sensitive**: they cannot survive in water below 68°F. Florida's warm springs and the discharge channels of power plants have become essential winter refuges, sometimes drawing hundreds of manatees into a single location.

This dependence on warmth and predictable food sources has made manatees highly **susceptible** to human activity. Boat propeller strikes remain the leading cause of manatee injury and death — most adult manatees carry distinctive scar patterns on their backs from past encounters. Water pollution has destroyed vast stretches of seagrass in Florida's Indian River Lagoon, triggering a starvation crisis that killed over 1,100 manatees between 2021 and 2022 — the largest die-off ever recorded.

In response, wildlife managers began emergency supplemental feedings — providing lettuce to starving animals directly — a measure considered extraordinary in wild animal conservation. The U.S. Fish and Wildlife Service reclassified manatees as **"threatened"** in 2017, though conservation groups argue that "endangered" status would provide stronger legal protection.

Recovery is possible. Where seagrass is restored and boat speeds are reduced, manatee populations stabilize. The question is whether Florida's human growth will outpace those conservation efforts.`,
    vocabulary: [
      { word: 'deliberateness', definition: 'The quality of doing something carefully and without rushing, with clear intention.', example: 'She moved with deliberateness, checking each step before committing to it.' },
      { word: 'pang', definition: 'A sudden, brief feeling of emotion — often sadness, longing, or regret.', example: 'He felt a pang of nostalgia looking at old photos from his childhood.' },
      { word: 'vulnerable', definition: 'Easily hurt or harmed; at risk because of a particular weakness or situation.', example: 'Young birds are most vulnerable before they learn to fly.' },
      { word: 'susceptible', definition: 'Easily affected by something harmful; likely to be impacted by a particular threat.', example: 'Plants in direct sun without water are susceptible to wilting quickly.' },
      { word: 'supplemental', definition: 'Added to something to make it more complete or to make up for what is missing.', example: 'The doctor recommended supplemental vitamins to fill gaps in her diet.' }
    ],
    questions: [
      {
        question: 'How do the TWO PASSAGES approach the subject of manatees differently?',
        options: [
          'Passage 1 focuses on manatee biology; Passage 2 tells a personal story.',
          'Passage 1 uses personal experience and emotion to show the impact of encountering a manatee; Passage 2 uses facts and data to explain their biology and the threats they face.',
          'Passage 1 argues manatees should be left alone; Passage 2 argues they need more protection.',
          'Both passages focus on the same thing — the dangers manatees face from boats.'
        ],
        correctIndex: 1,
        explanation: 'Passage 1 is a narrative — Maya\'s emotional encounter with a manatee. Passage 2 is informational — facts, statistics, and analysis of the threats to manatees. The two passages complement each other by showing the same animal through completely different lenses.'
      },
      {
        question: 'In Passage 1, Maya\'s grandfather says manatees\' predictability is "what makes them vulnerable." How does Passage 2 SUPPORT this idea?',
        options: [
          'By explaining that manatees are too large to hide from predators.',
          'By showing that manatees\' dependence on warm water and predictable food sources makes them concentrated in specific locations, where human threats are greatest.',
          'By noting that manatees always return to the same rivers regardless of danger.',
          'By explaining that manatees cannot change their diet when seagrass disappears.'
        ],
        correctIndex: 1,
        explanation: 'Passage 2 explains that manatees gather in predictable spots (warm springs, power plant channels) and depend on specific food sources — exactly the kind of predictability the grandfather describes. This predictability concentrates them in areas where boat strikes and food loss become deadly threats.'
      },
      {
        question: 'What does the word "pang" suggest about Maya\'s feelings at the end of Passage 1?',
        options: [
          'She felt frightened when the manatee bumped the boat.',
          'She felt a brief, unexpected sadness when the manatee left — as if she had lost something meaningful.',
          'She felt pain from leaning too far over the railing.',
          'She felt disappointed that the manatee was not as large as she expected.'
        ],
        correctIndex: 1,
        explanation: 'A "pang" is a sudden feeling of emotion, often sadness. Maya describes it as "saying goodbye to something she hadn\'t known she needed to meet" — the unexpected depth of feeling after a brief encounter. It suggests the manatee affected her more deeply than she anticipated.'
      },
      {
        question: 'Which piece of information from Passage 2 would BEST help the reader understand why Maya\'s grandfather says the manatees "always" return to the same river?',
        options: [
          'The fact that manatees weigh up to 1,200 pounds.',
          'The fact that manatees are cold-sensitive and depend on warm springs and predictable food sources.',
          'The fact that most adult manatees have scar patterns from boat strikes.',
          'The fact that over 1,100 manatees died between 2021 and 2022.'
        ],
        correctIndex: 1,
        explanation: 'Passage 2 explains that manatees depend on specific warm water locations and seagrass feeding grounds. This biological need for consistency directly explains why they "always" return — they have no choice but to come back to the same places.'
      },
      {
        question: 'Both passages suggest manatees are at risk. Which AUTHOR shows more urgency about the threat?',
        options: [
          'The Passage 1 narrator, because she describes the manatee as "vulnerable" directly.',
          'The Passage 2 author, because they use specific death statistics and describe the die-off as "extraordinary" to convey the scale of the crisis.',
          'Both authors show equal urgency.',
          'Neither author — both present the information neutrally without concern.'
        ],
        correctIndex: 1,
        explanation: 'The Passage 2 author uses specific, alarming data: 1,100 deaths, the largest die-off ever recorded, and emergency feedings described as "extraordinary." These concrete details create urgency. Passage 1\'s grandfather uses one quiet word — "vulnerable" — which is more understated by comparison.'
      }
    ]
  },

  // ── PAIRED 3 ── ELA.4.R.1.2 + ELA.4.R.2.2 | Character vs. Informational | Perseverance
  {
    id: 'marathon-paired',
    title: 'Running to the Finish — Paired Passages',
    topic: 'character',
    coverEmoji: '🏃',
    coverColor: '#7c3aed',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 390,
    readTimeMin: 3,
    paired: true,
    text: `**PAIRED PASSAGES** — Read both passages, then answer the questions.

---

**Passage 1 — Literary**
*"Mile Twenty-Two"*

By mile twenty-two, Darnell's legs had stopped feeling like legs.

They were moving — he could see them moving — but the connection between his brain and his feet had become something **theoretical**, like a signal traveling through a very long, very tired wire. Around him, other runners looked the same way: hollowed out, faces blank, eyes fixed on some private point ahead.

He had not told anyone he was running the race. Not his coach. Not his parents. He had signed up, trained in secret for eight months, and arrived at the start line alone, because he needed to know — privately, without witnesses — whether he was the kind of person who could finish something this hard.

At mile twenty-three, a cramp hit his calf like a fist. He slowed to a walk. A few runners passed him. He thought about stopping.

Then he thought about the first day he could only run three blocks without stopping. He thought about the January mornings when the ground was iced over and he ran anyway. He thought about why he had started.

He started running again.

The last mile was the longest thing he had ever experienced. But when the finish line appeared — a banner strung between two orange poles — he felt something **give way** inside him, not like breaking, but like a door opening.

He crossed.

He stood on the other side.

He knew.

---

**Passage 2 — Informational**
*"The Science of Hitting the Wall"*

In long-distance running, "hitting the wall" refers to the sudden, **extreme** fatigue that many runners experience between miles 18 and 23 of a marathon. It is not simply tiredness — it is a physiological event with a specific cause.

The human body stores energy in the form of **glycogen**, a carbohydrate found in the muscles and liver. During intense exercise, the body burns through these glycogen stores steadily. A typical marathon runner has enough stored glycogen for approximately 20 miles of racing. When those stores are depleted, the body is forced to switch to burning fat — a much slower fuel source. This transition causes a sudden, dramatic drop in energy output, which runners experience as a near-total loss of power and focus.

The mental effects are just as significant as the physical ones. Studies show that when glycogen drops, the brain — which also runs on glucose — begins to struggle with decision-making, focus, and **emotional regulation**. Runners may feel despair, confusion, or an overwhelming urge to stop, even when they are physically capable of continuing.

**Elite** runners minimize the wall through careful pacing, nutrition during the race (consuming carbohydrates every 30–45 minutes), and years of training that teach the body to burn fat more efficiently.

The wall is real. But it is also survivable — which is exactly what experienced runners know that beginners do not yet believe.`,
    vocabulary: [
      { word: 'theoretical', definition: 'Based on ideas or concepts rather than actual experience; existing in theory but not fully felt in reality.', example: 'After hours in the cold, the warmth of the fire felt almost theoretical — she could barely feel it.' },
      { word: 'give way', definition: 'To break down, collapse, or release — can be physical or emotional.', example: 'After weeks of holding it together, her composure finally gave way and she cried.' },
      { word: 'glycogen', definition: 'A form of stored energy (carbohydrate) that the body draws on during physical activity.', example: 'Athletes eat carbohydrates before a race to maximize their glycogen stores.' },
      { word: 'emotional regulation', definition: 'The ability to manage and control one\'s own feelings and emotional responses.', example: 'Good sleep helps with emotional regulation, making it easier to stay calm under pressure.' },
      { word: 'elite', definition: 'Among the very best; at the highest level of skill or performance in a field.', example: 'Elite gymnasts train for hours every day to maintain their competitive edge.' }
    ],
    questions: [
      {
        question: 'What connection can be made between Darnell\'s experience at mile twenty-two and the information in Passage 2?',
        options: [
          'Darnell stopped running at mile twenty-two because he was not well-trained enough.',
          'Darnell\'s loss of feeling in his legs, mental struggle, and urge to stop match the physiological description of "hitting the wall" — glycogen depletion causing physical and mental collapse.',
          'Passage 2 explains that marathon runners should never run alone, which is what Darnell did wrong.',
          'Darnell\'s experience proves that the wall only affects beginner runners, not experienced ones.'
        ],
        correctIndex: 1,
        explanation: 'Passage 2 describes hitting the wall: sudden fatigue, loss of power, mental despair, and an urge to stop. Darnell experiences all of these — disconnection from his legs, a calf cramp, slowing to a walk, and considering quitting. The scientific explanation in Passage 2 perfectly describes what Darnell physically went through.'
      },
      {
        question: 'What is the THEME of Passage 1?',
        options: [
          'Marathons are too dangerous for untrained runners to attempt.',
          'Proving yourself to others is the most important reason to take on challenges.',
          'True self-knowledge comes from privately choosing to push through something hard.',
          'Running injuries can be prevented with proper training.'
        ],
        correctIndex: 2,
        explanation: 'Darnell specifically runs alone, in secret, "because he needed to know — privately, without witnesses — whether he was the kind of person who could finish something this hard." The theme is about internal discovery — what we learn about ourselves when we choose to keep going despite difficulty.'
      },
      {
        question: 'Passage 2 ends with: "The wall is real. But it is also survivable — which is exactly what experienced runners know that beginners do not yet believe." How does Darnell\'s story ILLUSTRATE this statement?',
        options: [
          'Darnell is an experienced runner who easily manages his glycogen through nutrition.',
          'Darnell is a beginner who initially does not believe he can survive the wall, but chooses to continue and discovers it is survivable.',
          'Darnell proves that believing in yourself eliminates the physical effects of glycogen depletion.',
          'Darnell\'s story contradicts Passage 2 because he does not use any nutrition strategy during the race.'
        ],
        correctIndex: 1,
        explanation: 'Darnell is not an elite runner — he trained secretly, alone. When he hits the wall, he faces the despair Passage 2 describes ("he thought about stopping"). But he continues, and crosses the finish line. His story is a personal illustration of the statement: the wall is survivable, even for someone who didn\'t know that yet.'
      },
      {
        question: 'The word "theoretical" is used in Passage 1 to describe Darnell\'s connection to his legs. What does this suggest?',
        options: [
          'Darnell is thinking about the theory of running while he races.',
          'The connection between his mind and body still existed in concept but had become so weak that it barely felt real.',
          'Darnell has studied the science of running and is applying that knowledge.',
          'His legs have gone completely numb and he can no longer move them.'
        ],
        correctIndex: 1,
        explanation: 'Darnell says his legs are "moving — he could see them moving — but the connection...had become something theoretical." This means the link still existed technically, but had become so faint it barely felt like a real experience. It is a precise description of the dissociation that glycogen depletion causes, as described in Passage 2.'
      },
      {
        question: 'What do BOTH passages agree on?',
        options: [
          'Runners should always train with a team for safety and motivation.',
          'The hardest part of a marathon is physical, not mental.',
          'The wall is a real, difficult experience — but it can be overcome.',
          'Only elite runners should attempt to run a full marathon.'
        ],
        correctIndex: 2,
        explanation: 'Passage 2 states directly: "The wall is real. But it is also survivable." Passage 1 shows Darnell experiencing exactly this — the wall nearly stops him, but he continues and finishes. Both passages agree that the difficulty is genuine but not insurmountable.'
      }
    ]
  },

  // ── PAIRED 4 ── ELA.4.R.2.1 + ELA.4.R.2.3 | Florida History | Two accounts of same event
  {
    id: 'hurricane-paired',
    title: 'The Storm That Changed Florida — Paired Passages',
    topic: 'florida-history',
    coverEmoji: '🌀',
    coverColor: '#374151',
    gradeLevel: '4',
    level: 'grade4',
    grades: [3, 4, 5, 6, 7, 8],
    wordCount: 410,
    readTimeMin: 3,
    paired: true,
    text: `**PAIRED PASSAGES** — Read both passages, then answer the questions.

---

**Passage 1 — Historical Fiction**
*"The Morning After"*

The morning after the hurricane, Clara walked out of the school gymnasium where her family had sheltered and did not recognize the street she had lived on for nine years.

The oaks were down. Three of them — the ones she used to climb — lay across the road like fallen soldiers, roots pointing skyward, dirt still clinging to them. Mrs. Okafor's front porch had migrated into the intersection. A car she did not recognize sat upside-down in what had been, yesterday, somebody's front yard.

Her mother put a hand on her shoulder. "It will be rebuilt," she said.

Clara had heard this phrase before, in history class. Hurricanes, her teacher had said, had shaped Florida more than almost anything else — the land, the laws, the way people built their houses. Every devastating storm brought new building codes, new **evacuation** routes, new knowledge about how to survive the next one.

She looked at the overturned car. At the vanished porch. At the great roots reaching at the sky.

"How long?" she asked.

Her mother squeezed her shoulder. "Longer than we want. Not as long as it feels."

---

**Passage 2 — Informational**
*"How Hurricanes Shaped Modern Florida"*

Florida has been struck by more major hurricanes than any other U.S. state. This is not a coincidence — Florida's position at the meeting point of the warm Gulf of Mexico and the Atlantic Ocean, combined with its long coastline, makes it uniquely exposed to tropical storms.

The consequences of this history go far beyond the storms themselves. Each major hurricane has directly changed how Florida is built, governed, and **prepared**.

The 1926 Miami Hurricane nearly destroyed the city and ended Florida's first real estate boom, demonstrating that rapid, unplanned development had created a fragile and **vulnerable** coastline. After Hurricane Donna in 1960 and Hurricane Andrew in 1992 — which leveled entire neighborhoods in Miami-Dade County and caused $27 billion in damage — Florida overhauled its building codes. Modern Florida homes must be constructed to withstand winds exceeding 140 miles per hour, one of the strictest standards in the world.

Florida also developed one of the most **sophisticated** evacuation systems in the United States, with clearly marked evacuation zones, coordinated shelter networks, and mandatory evacuation orders that have saved thousands of lives.

Scientists warn that as ocean temperatures rise due to climate change, hurricanes are expected to become more intense. Florida's challenge is not simply recovering from storms — it is building a state that can **absorb** repeated, more powerful impacts while still growing.

The storms do not stop. But neither does Florida.`,
    vocabulary: [
      { word: 'evacuation', definition: 'The organized removal of people from a dangerous area to safety.', example: 'The evacuation of the coastal towns began as soon as the hurricane warning was issued.' },
      { word: 'vulnerable', definition: 'Easily hurt or damaged; exposed to risk.', example: 'Beachfront homes are especially vulnerable to storm surge during hurricanes.' },
      { word: 'sophisticated', definition: 'Complex, well-developed, and effective; showing advanced knowledge or skill.', example: 'The hospital\'s sophisticated equipment allowed doctors to detect problems early.' },
      { word: 'absorb', definition: 'To take in and deal with something without being destroyed or overwhelmed by it.', example: 'The thick walls absorbed most of the sound from outside.' },
      { word: 'overhaul', definition: 'To completely examine and make major improvements or changes to something.', example: 'After several accidents, the factory overhauled its entire safety system.' }
    ],
    questions: [
      {
        question: 'Clara\'s mother says the street "will be rebuilt." Which detail from Passage 2 BEST supports this statement?',
        options: [
          'The fact that Florida has stricter building codes than almost any other state.',
          'The fact that Florida has been struck by more major hurricanes than any other U.S. state.',
          'The fact that Hurricane Andrew caused $27 billion in damage.',
          'The fact that scientists warn hurricanes will become more intense.'
        ],
        correctIndex: 0,
        explanation: 'Passage 2 explains that Florida\'s strict building codes and evacuation systems were developed specifically to survive and recover from hurricanes. These systems exist to make recovery — rebuilding — possible. This directly supports the mother\'s confidence that things will be rebuilt.'
      },
      {
        question: 'Clara\'s teacher told the class that hurricanes "shaped Florida more than almost anything else." How does Passage 2 SUPPORT this claim?',
        options: [
          'By explaining that Florida\'s location makes it impossible to avoid hurricanes.',
          'By showing that major hurricanes directly caused changes to Florida\'s building codes, evacuation systems, and development practices.',
          'By listing the specific damage cost of Hurricane Andrew.',
          'By warning that future hurricanes will be even more powerful.'
        ],
        correctIndex: 1,
        explanation: 'Passage 2 provides specific examples of how storms changed Florida: the 1926 hurricane ended a real estate boom; Andrew led to overhauled building codes; the storm history created one of the nation\'s most sophisticated evacuation systems. Each storm changed something permanently — directly supporting the teacher\'s claim.'
      },
      {
        question: 'How does the STRUCTURE of Passage 2 help the reader understand its main idea?',
        options: [
          'It lists events in random order to show that hurricanes are unpredictable.',
          'It uses a cause-and-effect structure, showing how each major storm caused specific changes to Florida\'s laws, buildings, and preparation.',
          'It compares Florida\'s hurricanes to those in other states.',
          'It presents the story of one hurricane from beginning to end.'
        ],
        correctIndex: 1,
        explanation: 'Passage 2 consistently links specific storms to specific outcomes: the 1926 hurricane → exposed fragile development; Andrew → new building codes; storm history → sophisticated evacuation systems. This cause-and-effect structure supports the central idea that hurricanes shaped Florida.'
      },
      {
        question: 'Both passages describe the same type of event but from different perspectives. What does Passage 1 provide that Passage 2 does NOT?',
        options: [
          'Scientific explanations of why Florida gets so many hurricanes.',
          'Specific statistics about the cost of hurricane damage.',
          'An emotional, human perspective that shows how a storm feels to someone living through its aftermath.',
          'Information about how Florida\'s building codes have changed over time.'
        ],
        correctIndex: 2,
        explanation: 'Passage 1 is a personal narrative — Clara\'s experience of loss and disorientation in her own neighborhood. Passage 2 provides facts and analysis but no emotional perspective. Only Passage 1 gives readers a sense of what it actually feels like to live through a hurricane\'s aftermath.'
      },
      {
        question: 'Passage 2 ends: "The storms do not stop. But neither does Florida." What is the AUTHOR\'S PERSPECTIVE in this sentence?',
        options: [
          'The author believes Florida will eventually be destroyed by hurricanes.',
          'The author is frustrated that Florida has not done enough to prepare.',
          'The author views Florida as resilient — a place that endures and adapts rather than surrendering to repeated disasters.',
          'The author is neutral and presents no opinion about Florida\'s future.'
        ],
        correctIndex: 2,
        explanation: 'The parallel structure — "The storms do not stop. But neither does Florida." — places Florida\'s persistence as equal to the persistence of the storms. The author is clearly presenting Florida as resilient. This is not a neutral observation — it is a deliberate framing that shows admiration for the state\'s ability to endure.'
      }
    ]
  }

];
