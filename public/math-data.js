// math-data.js — Florida FAST Math Grade 4 B.E.S.T. aligned question sets
// 6 topics × 8 questions each
// Standards: MA.4.NSO.2, MA.4.FR.1–2, MA.4.GR.1–2, MA.4.M.1
// Each question includes a `steps` array for the step-by-step "Show Me How" feature.

const MATH_SETS = [

  // ── 1 ── MULTI-DIGIT MULTIPLICATION | MA.4.NSO.2.2, 2.3
  {
    id: 'multiplication',
    title: 'Multi-Digit Multiplication',
    coverEmoji: '✖️',
    coverColor: '#2563eb',
    topic: 'multiplication',
    grades: [3, 4, 5],
    questions: [
      {
        question: 'What is 6 × 4,213?',
        options: ['24,278', '25,278', '25,368', '24,918'],
        correctIndex: 1,
        explanation: 'Use partial products: 6 × 4,000 = 24,000 · 6 × 200 = 1,200 · 6 × 13 = 78. Add: 24,000 + 1,200 + 78 = 25,278.',
        steps: [
          'Break 4,213 into parts: 4,000 + 200 + 13',
          'Multiply each part by 6:\n  6 × 4,000 = 24,000\n  6 × 200 = 1,200\n  6 × 13 = 78',
          'Add the partial products:\n  24,000 + 1,200 + 78 = 25,278'
        ]
      },
      {
        question: 'What is 23 × 14?',
        options: ['312', '342', '322', '332'],
        correctIndex: 2,
        explanation: 'Break it up: 23 × 10 = 230 and 23 × 4 = 92. Add the partial products: 230 + 92 = 322.',
        steps: [
          'Break 14 into 10 + 4',
          'Multiply: 23 × 10 = 230',
          'Multiply: 23 × 4 = 92',
          'Add the parts: 230 + 92 = 322'
        ]
      },
      {
        question: 'A school orders 8 boxes of colored pencils. Each box holds 124 pencils. How many pencils are there in all?',
        options: ['892', '982', '1,024', '992'],
        correctIndex: 3,
        explanation: '8 × 100 = 800 and 8 × 24 = 192. Add: 800 + 192 = 992 pencils.',
        steps: [
          'Break 124 into 100 + 24',
          'Multiply: 8 × 100 = 800',
          'Multiply: 8 × 24 = 192',
          'Add: 800 + 192 = 992 pencils'
        ]
      },
      {
        question: 'Which expression shows the CORRECT use of the distributive property to solve 5 × 134?',
        options: [
          '5 × (100 + 30 + 4) = 500 + 150 + 20 = 670',
          '5 × (100 + 30 + 4) = 500 + 30 + 4 = 534',
          '(5 + 100) × (5 + 34) = 105 × 39',
          '5 × 134 = 5 × 100 + 34 = 534'
        ],
        correctIndex: 0,
        explanation: 'The distributive property means multiplying 5 by EACH part of 134 separately: 5 × 100 = 500, 5 × 30 = 150, 5 × 4 = 20. Total: 500 + 150 + 20 = 670.',
        steps: [
          'Break 134 into 100 + 30 + 4',
          'Multiply 5 by EACH part separately:\n  5 × 100 = 500\n  5 × 30 = 150\n  5 × 4 = 20',
          'Add all the parts: 500 + 150 + 20 = 670'
        ]
      },
      {
        question: 'A cafeteria has 32 tables. Each table seats 12 students. How many students can sit in the cafeteria at one time?',
        options: ['364', '374', '394', '384'],
        correctIndex: 3,
        explanation: '32 × 12 = 32 × 10 + 32 × 2 = 320 + 64 = 384 students.',
        steps: [
          'Break 12 into 10 + 2',
          'Multiply: 32 × 10 = 320',
          'Multiply: 32 × 2 = 64',
          'Add: 320 + 64 = 384 students'
        ]
      },
      {
        question: 'What is 7 × 3,052?',
        options: ['21,264', '21,354', '21,374', '21,364'],
        correctIndex: 3,
        explanation: '7 × 3,000 = 21,000 · 7 × 50 = 350 · 7 × 2 = 14. Add: 21,000 + 350 + 14 = 21,364.',
        steps: [
          'Break 3,052 into 3,000 + 50 + 2',
          'Multiply each part:\n  7 × 3,000 = 21,000\n  7 × 50 = 350\n  7 × 2 = 14',
          'Add: 21,000 + 350 + 14 = 21,364'
        ]
      },
      {
        question: 'A school has 24 classrooms. Each classroom has 28 students. How many students attend the school in all?',
        options: ['652', '662', '682', '672'],
        correctIndex: 3,
        explanation: '24 × 28: break into 24 × 20 = 480 and 24 × 8 = 192. Add: 480 + 192 = 672 students.',
        steps: [
          'Break 28 into 20 + 8',
          'Multiply: 24 × 20 = 480',
          'Multiply: 24 × 8 = 192',
          'Add: 480 + 192 = 672 students'
        ]
      },
      {
        question: 'A librarian earns $9 per hour and worked 215 hours last month. How much did she earn in all?',
        options: ['$1,845', '$1,925', '$2,035', '$1,935'],
        correctIndex: 3,
        explanation: '9 × 215: break into 9 × 200 = 1,800 and 9 × 15 = 135. Add: 1,800 + 135 = $1,935.',
        steps: [
          'Break 215 into 200 + 15',
          'Multiply: 9 × 200 = 1,800',
          'Multiply: 9 × 15 = 135',
          'Add: $1,800 + $135 = $1,935'
        ]
      }
    ]
  },

  // ── 2 ── DIVISION WITH REMAINDERS | MA.4.NSO.2.4, 2.5
  {
    id: 'division',
    title: 'Division & Remainders',
    coverEmoji: '➗',
    coverColor: '#7c3aed',
    topic: 'division',
    grades: [3, 4, 5],
    questions: [
      {
        question: 'What is 87 ÷ 6?',
        options: ['13 R 9', '15 R 1', '14 R 4', '14 R 3'],
        correctIndex: 3,
        explanation: '6 × 14 = 84. Subtract: 87 − 84 = 3. So 87 ÷ 6 = 14 remainder 3.',
        steps: [
          'Think: 6 × ? is close to 87 without going over',
          '6 × 14 = 84 — that works!',
          'Subtract: 87 − 84 = 3 left over',
          'Answer: 14 remainder 3'
        ]
      },
      {
        question: 'A baker has 95 cookies to put equally into bags. Each bag holds 8 cookies. How many FULL bags can she make?',
        options: ['10 bags', '9 bags', '12 bags', '11 bags'],
        correctIndex: 3,
        explanation: '8 × 11 = 88 and 95 − 88 = 7. She can make 11 full bags, with 7 cookies left over.',
        steps: [
          'Think: 8 × ? gets us close to 95',
          '8 × 11 = 88 (fits!)',
          'Subtract: 95 − 88 = 7 cookies left over',
          '7 < 8, so we can\'t fill another bag. Answer: 11 full bags'
        ]
      },
      {
        question: 'What is 3,672 ÷ 4?',
        options: ['908', '928', '968', '918'],
        correctIndex: 3,
        explanation: 'Work digit by digit: 36 ÷ 4 = 9 · bring down 7: 7 ÷ 4 = 1 R 3 · bring down 2: 32 ÷ 4 = 8. Answer: 918.',
        steps: [
          'Divide the first digits: 36 ÷ 4 = 9 (write 9)',
          'Bring down 7. Now divide 7 ÷ 4 = 1 R 3 (write 1)',
          'Bring down 2. Now divide 32 ÷ 4 = 8 (write 8)',
          'Answer: 918. Check: 4 × 918 = 3,672 ✓'
        ]
      },
      {
        question: '5 friends want to share 74 stickers equally. How many stickers will be LEFT OVER after sharing as evenly as possible?',
        options: ['1 sticker', '2 stickers', '3 stickers', '4 stickers'],
        correctIndex: 3,
        explanation: '5 × 14 = 70. Subtract: 74 − 70 = 4. There are 4 stickers left over.',
        steps: [
          'Think: 5 × ? is close to 74',
          '5 × 14 = 70 — each friend gets 14 stickers',
          'Subtract: 74 − 70 = 4 left over',
          '4 stickers can\'t be split evenly among 5 friends. Remainder = 4'
        ]
      },
      {
        question: 'Which division problem has a remainder of 2?',
        options: ['25 ÷ 5', '41 ÷ 7', '19 ÷ 4', '32 ÷ 6'],
        correctIndex: 3,
        explanation: '6 × 5 = 30. Subtract: 32 − 30 = 2. So 32 ÷ 6 = 5 R 2.',
        steps: [
          'Test each option:\n  25 ÷ 5 = 5 R 0 ✗\n  41 ÷ 7: 7×5=35, 41−35=6, R 6 ✗',
          '  19 ÷ 4: 4×4=16, 19−16=3, R 3 ✗',
          '  32 ÷ 6: 6×5=30, 32−30=2, R 2 ✓',
          'Answer: 32 ÷ 6 has remainder 2'
        ]
      },
      {
        question: 'A school bus has 56 seats arranged in 7 equal rows. How many seats are in each row?',
        options: ['6', '9', '7', '8'],
        correctIndex: 3,
        explanation: '56 ÷ 7 = 8. You can also think: 7 × ? = 56. Since 7 × 8 = 56, there are 8 seats per row.',
        steps: [
          'We need 56 ÷ 7',
          'Think: 7 × ? = 56',
          '7 × 8 = 56 ✓',
          'Answer: 8 seats per row'
        ]
      },
      {
        question: 'A coach has 125 baseballs to divide equally among 9 teams. How many baseballs does each team get, and how many are left over?',
        options: ['12 baseballs, 5 left over', '14 baseballs, 0 left over', '13 baseballs, 6 left over', '13 baseballs, 8 left over'],
        correctIndex: 3,
        explanation: '9 × 13 = 117. Subtract: 125 − 117 = 8. Each team gets 13 baseballs with 8 left over.',
        steps: [
          'Think: 9 × ? is close to 125',
          '9 × 13 = 117 — fits!',
          'Subtract: 125 − 117 = 8 left over',
          'Answer: 13 baseballs each, 8 left over'
        ]
      },
      {
        question: 'A librarian has 248 books to place on shelves. Each shelf holds exactly 6 books. What is the MINIMUM number of shelves needed to hold ALL the books?',
        options: ['40 shelves', '41 shelves', '43 shelves', '42 shelves'],
        correctIndex: 3,
        explanation: '248 ÷ 6 = 41 remainder 2. The 41 full shelves hold 246 books, but 2 books remain. Those 2 books need one more shelf. Minimum: 42 shelves.',
        steps: [
          'Divide: 248 ÷ 6',
          '6 × 41 = 246 → 41 full shelves hold 246 books',
          'Subtract: 248 − 246 = 2 books left over',
          '2 books need 1 more shelf. Total: 41 + 1 = 42 shelves'
        ]
      }
    ]
  },

  // ── 3 ── FRACTIONS | MA.4.FR.1.3, 1.4, 2.2, 2.4
  {
    id: 'fractions',
    title: 'Fractions & Equivalence',
    coverEmoji: '🍕',
    coverColor: '#dc2626',
    topic: 'fractions',
    grades: [3, 4, 5, 6],
    questions: [
      {
        question: 'Which fraction is equivalent to 2/3?',
        options: ['4/9', '6/8', '3/4', '4/6'],
        correctIndex: 3,
        explanation: 'To find an equivalent fraction, multiply both numerator AND denominator by the same number. 2 × 2 = 4 and 3 × 2 = 6, so 2/3 = 4/6.',
        steps: [
          'Multiply top and bottom by the SAME number',
          'Try multiplying by 2:\n  2 × 2 = 4 (new numerator)\n  3 × 2 = 6 (new denominator)',
          'So 2/3 = 4/6 ✓'
        ]
      },
      {
        question: 'What is 3/8 + 2/8?',
        options: ['5/16', '6/8', '1/4', '5/8'],
        correctIndex: 3,
        explanation: 'When fractions have the SAME denominator, add only the numerators and keep the denominator: 3 + 2 = 5, so the answer is 5/8.',
        steps: [
          'The denominators are the same (both 8) — great!',
          'Add only the numerators: 3 + 2 = 5',
          'Keep the denominator the same: answer is 5/8'
        ]
      },
      {
        question: 'Which comparison is CORRECT?',
        options: ['3/4 < 2/4', '5/6 < 4/6', '3/8 > 5/8', '4/5 > 3/5'],
        correctIndex: 3,
        explanation: 'When two fractions have the same denominator, the larger numerator wins. Since 4 > 3, we know 4/5 > 3/5.',
        steps: [
          'When denominators match, compare only the numerators',
          'For 4/5 vs 3/5: both have denominator 5',
          '4 > 3, so 4/5 > 3/5 ✓'
        ]
      },
      {
        question: 'Leo ate 4 out of 10 equal slices of pizza. Which fraction with a denominator of 100 is equal to the amount Leo ate?',
        options: ['4/100', '14/100', '44/100', '40/100'],
        correctIndex: 3,
        explanation: 'To convert from tenths to hundredths, multiply numerator and denominator by 10: 4 × 10 = 40 and 10 × 10 = 100. So 4/10 = 40/100.',
        steps: [
          'We want the denominator to be 100',
          '10 × 10 = 100, so multiply BOTH top and bottom by 10',
          '4 × 10 = 40 (new numerator)',
          'Answer: 40/100'
        ]
      },
      {
        question: 'What is 7/8 − 3/8?',
        options: ['4/16', '10/8', '3/8', '4/8'],
        correctIndex: 3,
        explanation: 'Subtract only the numerators and keep the denominator: 7 − 3 = 4, denominator stays 8. Answer: 4/8.',
        steps: [
          'The denominators match (both 8)',
          'Subtract only the numerators: 7 − 3 = 4',
          'Keep the denominator: 4/8 (which also equals 1/2)'
        ]
      },
      {
        question: 'Leo has 2 and 3/4 cups of juice. His sister has 1 and 2/4 cups. How much do they have together?',
        options: ['3 and 5/4 cups', '3 and 1/4 cups', '4 and 5/4 cups', '4 and 1/4 cups'],
        correctIndex: 3,
        explanation: 'Add whole numbers: 2 + 1 = 3. Add fractions: 3/4 + 2/4 = 5/4. Since 5/4 = 1 and 1/4, combine: 3 + 1 and 1/4 = 4 and 1/4 cups.',
        steps: [
          'Add the whole numbers: 2 + 1 = 3',
          'Add the fractions: 3/4 + 2/4 = 5/4',
          'Convert 5/4: 5 ÷ 4 = 1 remainder 1, so 5/4 = 1 and 1/4',
          'Combine: 3 + 1 and 1/4 = 4 and 1/4 cups'
        ]
      },
      {
        question: 'Which fraction is NOT equivalent to 1/2?',
        options: ['2/4', '4/8', '3/6', '3/8'],
        correctIndex: 3,
        explanation: '2/4 = 1/2, 4/8 = 1/2, 3/6 = 1/2 (each numerator is half the denominator). But for 3/8: half of 8 is 4, not 3. So 3/8 ≠ 1/2.',
        steps: [
          'For a fraction to equal 1/2, the numerator must be HALF the denominator',
          '2/4: half of 4 = 2 ✓  |  4/8: half of 8 = 4 ✓  |  3/6: half of 6 = 3 ✓',
          '3/8: half of 8 = 4, but the numerator is 3 ✗',
          'Answer: 3/8 is NOT equivalent to 1/2'
        ]
      },
      {
        question: 'A recipe needs 3/5 cup of sugar. If Mia wants to make 3 batches, how much sugar does she need in all?',
        options: ['6/5 cups', '9/10 cups', '1 and 2/5 cups', '1 and 4/5 cups'],
        correctIndex: 3,
        explanation: 'Multiply the fraction by the whole number: 3 × (3/5) = 9/5. Convert: 9 ÷ 5 = 1 remainder 4, so 9/5 = 1 and 4/5 cups.',
        steps: [
          'Multiply the whole number by the numerator: 3 × 3 = 9',
          'Keep the denominator: 9/5',
          'Convert to a mixed number: 9 ÷ 5 = 1 remainder 4',
          'Answer: 1 and 4/5 cups'
        ]
      }
    ]
  },

  // ── 4 ── AREA & PERIMETER | MA.4.GR.2.1, MA.4.GR.2.2
  {
    id: 'area-perimeter',
    title: 'Area & Perimeter',
    coverEmoji: '📐',
    coverColor: '#059669',
    topic: 'area-perimeter',
    grades: [4, 5, 6],
    questions: [
      {
        question: 'A rectangle is 9 feet long and 6 feet wide. What is the AREA?',
        options: ['30 sq ft', '45 sq ft', '63 sq ft', '54 sq ft'],
        correctIndex: 3,
        explanation: 'Area of a rectangle = length × width. 9 × 6 = 54 square feet.',
        steps: [
          'Formula: Area = length × width',
          '9 × 6 = 54',
          'Answer: 54 square feet'
        ]
      },
      {
        question: 'What is the PERIMETER of a rectangle that is 12 cm long and 5 cm wide?',
        options: ['60 cm', '24 cm', '17 cm', '34 cm'],
        correctIndex: 3,
        explanation: 'Perimeter = distance all the way around. Add all four sides: 12 + 5 + 12 + 5 = 34 cm. Or: 2 × (12 + 5) = 2 × 17 = 34 cm.',
        steps: [
          'Perimeter = all 4 sides added up',
          'Add: 12 + 5 + 12 + 5',
          'Or use the formula: 2 × (length + width) = 2 × (12 + 5) = 2 × 17 = 34 cm'
        ]
      },
      {
        question: 'A garden has a perimeter of 40 feet and is 14 feet long. What is the WIDTH?',
        options: ['4 feet', '8 feet', '12 feet', '6 feet'],
        correctIndex: 3,
        explanation: 'Perimeter = 2 × (length + width). So 40 = 2 × (14 + width). Divide by 2: 20 = 14 + width. Subtract: width = 20 − 14 = 6 feet.',
        steps: [
          'Formula: Perimeter = 2 × (length + width)',
          'Plug in: 40 = 2 × (14 + width)',
          'Divide both sides by 2: 20 = 14 + width',
          'Subtract: width = 20 − 14 = 6 feet'
        ]
      },
      {
        question: 'Rectangle A is 8 in. by 4 in. Rectangle B is 10 in. by 2 in. Both have the SAME perimeter. Which has the GREATER area?',
        options: ['Rectangle B', 'They have the same area', 'Cannot be determined', 'Rectangle A'],
        correctIndex: 3,
        explanation: 'Both perimeters = 24 in. But Area A = 8 × 4 = 32 sq in, Area B = 10 × 2 = 20 sq in. Rectangle A has the greater area.',
        steps: [
          'Check perimeters: A = 8+4+8+4 = 24 ✓, B = 10+2+10+2 = 24 ✓ (same)',
          'Find Area A: 8 × 4 = 32 square inches',
          'Find Area B: 10 × 2 = 20 square inches',
          '32 > 20 → Rectangle A has the greater area'
        ]
      },
      {
        question: 'A classroom floor is 30 feet long and 25 feet wide. How many square feet of carpet are needed to cover the entire floor?',
        options: ['110 sq ft', '550 sq ft', '700 sq ft', '750 sq ft'],
        correctIndex: 3,
        explanation: 'Area = 30 × 25. Partial products: 30 × 20 = 600 and 30 × 5 = 150. Add: 600 + 150 = 750 sq ft.',
        steps: [
          'Area = length × width = 30 × 25',
          'Break 25 into 20 + 5:\n  30 × 20 = 600\n  30 × 5 = 150',
          'Add: 600 + 150 = 750 square feet'
        ]
      },
      {
        question: 'Jenna wants to put a fence around her rectangular yard that is 18 meters long and 11 meters wide. How many meters of fence does she need?',
        options: ['198 meters', '29 meters', '38 meters', '58 meters'],
        correctIndex: 3,
        explanation: 'A fence goes around the outside — that\'s the PERIMETER. 2 × (18 + 11) = 2 × 29 = 58 meters.',
        steps: [
          'A fence = perimeter (all the way around)',
          'Perimeter = 2 × (length + width)',
          '= 2 × (18 + 11) = 2 × 29 = 58 meters'
        ]
      },
      {
        question: 'A square has an area of 81 square feet. What is the length of ONE side?',
        options: ['18 feet', '27 feet', '36 feet', '9 feet'],
        correctIndex: 3,
        explanation: 'For a square: Area = side × side. Ask: what number times itself = 81? Since 9 × 9 = 81, each side is 9 feet.',
        steps: [
          'Area of a square = side × side',
          'Find: ? × ? = 81',
          '9 × 9 = 81 ✓',
          'Answer: each side is 9 feet'
        ]
      },
      {
        question: 'The perimeter of a rectangle is 50 cm. The length is 4 times the width. What is the WIDTH?',
        options: ['10 cm', '20 cm', '4 cm', '5 cm'],
        correctIndex: 3,
        explanation: 'Let width = w. Then length = 4w. Perimeter: 2(4w) + 2w = 10w = 50. So w = 5 cm.',
        steps: [
          'Call the width "w". Then the length = 4w',
          'Perimeter = 2(length) + 2(width) = 2(4w) + 2w = 8w + 2w = 10w',
          'Set equal to 50: 10w = 50 → w = 5 cm',
          'Check: length = 20, perimeter = 2(20) + 2(5) = 40 + 10 = 50 ✓'
        ]
      }
    ]
  },

  // ── 5 ── ANGLES & LINES | MA.4.GR.1.1, 1.2, 1.3
  {
    id: 'angles',
    title: 'Angles & Lines',
    coverEmoji: '📏',
    coverColor: '#b45309',
    topic: 'angles',
    grades: [4, 5, 6, 7],
    questions: [
      {
        question: 'An angle that measures EXACTLY 90° is called a _____ angle.',
        options: ['Acute', 'Obtuse', 'Straight', 'Right'],
        correctIndex: 3,
        explanation: 'A right angle measures exactly 90°. It is shown with a small square in the corner. The corner of a piece of paper is a right angle.',
        steps: [
          'Remember the angle types:\n  Acute < 90°\n  Right = 90°\n  Obtuse > 90°\n  Straight = 180°',
          'Exactly 90° → Right angle',
          'Think: corner of a piece of paper'
        ]
      },
      {
        question: 'Which angle measure describes an ACUTE angle?',
        options: ['90°', '95°', '180°', '45°'],
        correctIndex: 3,
        explanation: 'An acute angle measures LESS than 90°. Only 45° is less than 90°.',
        steps: [
          'Acute means LESS than 90°',
          'Check each option:\n  90° = right (not acute)\n  95° > 90° = obtuse\n  180° = straight',
          '45° < 90° → acute angle ✓'
        ]
      },
      {
        question: 'Two lines that cross each other at exactly 90° are called _____ lines.',
        options: ['Parallel', 'Intersecting', 'Diagonal', 'Perpendicular'],
        correctIndex: 3,
        explanation: 'Perpendicular lines meet at exactly 90°. Think of the crossing in a "+" symbol.',
        steps: [
          'Lines that cross at exactly 90° form a right angle',
          'The word for this is: Perpendicular',
          'Think: where a wall meets the floor, or the "+" symbol'
        ]
      },
      {
        question: 'Lines that travel in the same direction and NEVER meet, no matter how far they extend, are called _____ lines.',
        options: ['Perpendicular', 'Intersecting', 'Diagonal', 'Parallel'],
        correctIndex: 3,
        explanation: 'Parallel lines always stay the same distance apart and never cross. Think of railroad tracks.',
        steps: [
          'Key phrase: NEVER meet, no matter how far they go',
          'They stay the same distance apart forever',
          'This is called: Parallel\nThink: railroad tracks'
        ]
      },
      {
        question: 'An angle that measures 130° is BEST described as:',
        options: ['Acute — less than 90°', 'Right — exactly 90°', 'Straight — exactly 180°', 'Obtuse — between 90° and 180°'],
        correctIndex: 3,
        explanation: '130° is greater than 90° but less than 180°, so it is an obtuse angle.',
        steps: [
          'Is 130° less than 90°? No → not acute',
          'Is 130° equal to 90°? No → not right',
          'Is 130° equal to 180°? No → not straight',
          '130° is between 90° and 180° → Obtuse ✓'
        ]
      },
      {
        question: 'A straight angle measures exactly:',
        options: ['45°', '90°', '135°', '180°'],
        correctIndex: 3,
        explanation: 'A straight angle forms a perfectly flat line and measures exactly 180°.',
        steps: [
          'A straight angle looks like a perfectly flat, straight line',
          'It measures exactly 180°',
          'Think: a fully opened book lying flat'
        ]
      },
      {
        question: 'A right triangle has one 90° angle and one 55° angle. What is the measure of the THIRD angle?',
        options: ['25°', '45°', '55°', '35°'],
        correctIndex: 3,
        explanation: 'All three angles in a triangle add up to 180°. Known: 90° + 55° = 145°. Third angle: 180° − 145° = 35°.',
        steps: [
          'Rule: all 3 angles in a triangle add up to 180°',
          'Add the known angles: 90° + 55° = 145°',
          'Subtract from 180°: 180° − 145° = 35°'
        ]
      },
      {
        question: 'Two angles together form a straight line. One angle measures 65°. What does the OTHER angle measure?',
        options: ['25°', '65°', '125°', '115°'],
        correctIndex: 3,
        explanation: 'Angles that together form a straight line add up to 180°. So: 180° − 65° = 115°.',
        steps: [
          'Angles on a straight line always add up to 180°',
          'We know one angle: 65°',
          'Other angle: 180° − 65° = 115°'
        ]
      }
    ]
  },

  // ── 7 ── PLACE VALUE & ROUNDING | MA.4.NSO.1.1, 1.3, 1.4
  {
    id: 'place-value',
    title: 'Place Value & Rounding',
    coverEmoji: '🔢',
    coverColor: '#1e3a8a',
    topic: 'place-value',
    grades: [2, 3, 4, 5],
    questions: [
      {
        question: 'What is the VALUE of the digit 7 in 47,382?',
        options: ['700', '7,000', '70', '7'],
        correctIndex: 1,
        explanation: 'In 47,382, the digit 7 is in the thousands place. Its value is 7 × 1,000 = 7,000.',
        steps: [
          'Identify each place in 47,382:\n  4 = ten-thousands\n  7 = thousands\n  3 = hundreds\n  8 = tens\n  2 = ones',
          'The 7 is in the THOUSANDS place',
          '7 × 1,000 = 7,000'
        ]
      },
      {
        question: 'Which number has a 4 in the HUNDRED-THOUSANDS place?',
        options: ['54,720', '754,100', '405,632', '4,358,200'],
        correctIndex: 2,
        explanation: '405,632: the 4 is in the hundred-thousands place (400,000). Check: 4×100,000 = 400,000 ✓',
        steps: [
          'Place values (left to right): hundred-thousands, ten-thousands, thousands, hundreds, tens, ones',
          'Check 405,632:\n  4 = hundred-thousands ✓',
          '4 × 100,000 = 400,000 — yes, the 4 is in the hundred-thousands place'
        ]
      },
      {
        question: 'Round 6,847 to the nearest HUNDRED.',
        options: ['6,800', '6,850', '6,900', '7,000'],
        correctIndex: 0,
        explanation: 'Look at the tens digit: 4. Since 4 < 5, round DOWN — keep the hundreds digit at 8 and change everything after to zero. Answer: 6,800.',
        steps: [
          'Find the hundreds digit in 6,847 → it is 8',
          'Look at the digit to the RIGHT (tens place): 4',
          '4 < 5 → round DOWN: keep 8, change everything after to 0',
          'Answer: 6,800'
        ]
      },
      {
        question: 'Which number is BETWEEN 245,000 and 250,000?',
        options: ['254,100', '244,999', '250,001', '247,836'],
        correctIndex: 3,
        explanation: '247,836 is greater than 245,000 and less than 250,000. The other options are outside this range.',
        steps: [
          'Check each option: is it > 245,000 AND < 250,000?',
          '254,100 > 250,000 ✗  |  244,999 < 245,000 ✗  |  250,001 > 250,000 ✗',
          '247,836: 245,000 < 247,836 < 250,000 ✓',
          'Answer: 247,836'
        ]
      },
      {
        question: 'Round 83,561 to the nearest THOUSAND.',
        options: ['83,000', '84,000', '83,500', '80,000'],
        correctIndex: 1,
        explanation: 'Look at the hundreds digit: 5. Since 5 ≥ 5, round UP — the thousands digit increases from 3 to 4. Answer: 84,000.',
        steps: [
          'Find the thousands digit in 83,561 → it is 3',
          'Look at the digit to the RIGHT (hundreds): 5',
          '5 ≥ 5 → round UP: 3 becomes 4',
          'Answer: 84,000'
        ]
      },
      {
        question: 'What is the STANDARD FORM of: 400,000 + 30,000 + 200 + 7?',
        options: ['43,027', '430,027', '430,270', '430,207'],
        correctIndex: 3,
        explanation: 'Add each part: 400,000 + 30,000 = 430,000. Then + 200 = 430,200. Then + 7 = 430,207.',
        steps: [
          'Add the parts:\n  400,000\n+  30,000\n+     200\n+       7',
          '400,000 + 30,000 = 430,000',
          '430,000 + 200 = 430,200',
          '430,200 + 7 = 430,207'
        ]
      },
      {
        question: 'A city has a population of 138,472. Which digit is in the TEN-THOUSANDS place?',
        options: ['1', '8', '3', '4'],
        correctIndex: 2,
        explanation: 'In 138,472: 1=hundred-thousands, 3=ten-thousands, 8=thousands, 4=hundreds, 7=tens, 2=ones. The ten-thousands digit is 3.',
        steps: [
          'Write the place values for 138,472:',
          '1=hundred-thousands | 3=ten-thousands | 8=thousands | 4=hundreds | 7=tens | 2=ones',
          'The TEN-THOUSANDS digit is 3'
        ]
      },
      {
        question: 'Which comparison is CORRECT?',
        options: ['62,453 > 62,500', '308,000 < 38,900', '74,999 > 75,000', '519,200 > 519,099'],
        correctIndex: 3,
        explanation: 'Compare 519,200 and 519,099 digit by digit: 5=5, 1=1, 9=9, then 2 > 0. So 519,200 > 519,099 ✓',
        steps: [
          'Compare digit by digit from left to right',
          'For 519,200 vs 519,099:\n  5=5 ✓  1=1 ✓  9=9 ✓  then 2 > 0',
          'Since 2 > 0 in the hundreds place: 519,200 > 519,099 ✓'
        ]
      }
    ]
  },

  // ── 8 ── DECIMALS & MONEY | MA.4.NSO.1.5, 1.6; MA.4.FR.1.3 (tenths/hundredths)
  {
    id: 'decimals',
    title: 'Decimals & Money',
    coverEmoji: '💵',
    coverColor: '#059669',
    topic: 'decimals',
    grades: [4, 5, 6],
    questions: [
      {
        question: 'What decimal represents 7 TENTHS?',
        options: ['0.07', '7.0', '70.0', '0.7'],
        correctIndex: 3,
        explanation: 'Tenths are ONE place after the decimal point. 7 tenths = 0.7 (think: 7/10 = 0.7).',
        steps: [
          'Tenths are the FIRST place after the decimal point',
          '7 tenths = 7/10',
          'Write as a decimal: 0.7'
        ]
      },
      {
        question: 'Which decimal is GREATER: 0.4 or 0.38?',
        options: ['0.38 is greater', 'They are equal', '0.4 is greater', 'Cannot be determined'],
        correctIndex: 2,
        explanation: 'Write 0.4 as 0.40. Compare tenths: 4 vs 3. Since 4 > 3, we know 0.4 > 0.38.',
        steps: [
          'Make both decimals the same length: 0.4 = 0.40',
          'Compare the tenths digit: 4 vs 3',
          '4 > 3, so 0.40 > 0.38 → 0.4 is greater ✓'
        ]
      },
      {
        question: 'Leo has $4.76. He earns $2.50 more. How much does he have in all?',
        options: ['$6.26', '$7.26', '$6.76', '$7.16'],
        correctIndex: 1,
        explanation: 'Add: $4.76 + $2.50. Cents: 76 + 50 = 126¢ = $1.26. Dollars: $4 + $2 = $6. Total: $6 + $1.26 = $7.26.',
        steps: [
          'Line up the decimal points:\n  $4.76\n+ $2.50',
          'Add cents: 76 + 50 = 126¢ = $1 and 26¢',
          'Add dollars: $4 + $2 = $6',
          'Combine: $6 + $1.26 = $7.26'
        ]
      },
      {
        question: 'Which fraction is equal to 0.25?',
        options: ['1/4', '25/10', '2/5', '1/5'],
        correctIndex: 0,
        explanation: '0.25 means 25 hundredths = 25/100. Simplify: 25/100 ÷ 25 = 1/4. Check: 1 ÷ 4 = 0.25 ✓',
        steps: [
          '0.25 = 25 hundredths = 25/100',
          'Simplify by dividing top and bottom by 25:\n  25 ÷ 25 = 1\n  100 ÷ 25 = 4',
          'So 25/100 = 1/4. Check: 1 ÷ 4 = 0.25 ✓'
        ]
      },
      {
        question: 'What is 3.6 + 2.15?',
        options: ['5.21', '5.75', '5.71', '5.85'],
        correctIndex: 1,
        explanation: 'Write 3.6 as 3.60 so both have the same decimal places. 3.60 + 2.15: hundredths 0+5=5, tenths 6+1=7, ones 3+2=5. Answer: 5.75.',
        steps: [
          'Write 3.6 as 3.60 (same number, easier to line up)',
          'Line up decimals:\n  3.60\n+ 2.15',
          'Add: hundredths 0+5=5 · tenths 6+1=7 · ones 3+2=5',
          'Answer: 5.75'
        ]
      },
      {
        question: 'Maya has $10.00. She buys a book for $3.49. How much CHANGE does she get?',
        options: ['$7.41', '$6.51', '$7.51', '$6.61'],
        correctIndex: 1,
        explanation: '$10.00 − $3.49 = $6.51. Check: $3.49 + $6.51 = $10.00 ✓',
        steps: [
          'Subtract: $10.00 − $3.49',
          'Start from the right — borrow as needed:\n  100¢ − 49¢ ... use regrouping',
          '$10.00 − $3.49 = $6.51',
          'Check: $6.51 + $3.49 = $10.00 ✓'
        ]
      },
      {
        question: 'Which decimal shows FIVE AND THREE HUNDREDTHS?',
        options: ['5.3', '5.03', '53.0', '0.53'],
        correctIndex: 1,
        explanation: '"Five" = 5 (before the decimal). "Three hundredths" = 0.03 (TWO places after the decimal). Together: 5.03.',
        steps: [
          '"Five" = 5 (the whole number part)',
          '"Three hundredths" = 3 in the hundredths place (TWO places after the decimal)',
          'Write it: 5.03',
          '(Note: 5.3 would be five and three TENTHS — different!)'
        ]
      },
      {
        question: 'A store sells 3 items for $1.29, $2.45, and $0.89. What is the TOTAL cost?',
        options: ['$4.53', '$4.63', '$4.73', '$4.83'],
        correctIndex: 1,
        explanation: 'Add: $1.29 + $2.45 = $3.74. Then $3.74 + $0.89: cents 74+89=163¢=$1.63, dollars $3+$0=$3. Total: $3+$1.63=$4.63.',
        steps: [
          'First: $1.29 + $2.45\n  cents: 29+45=74¢\n  dollars: $1+$2=$3\n  → $3.74',
          'Then: $3.74 + $0.89\n  cents: 74+89=163¢ = $1 and 63¢\n  dollars: $3+$0=$3\n  → $3+$1.63 = $4.63',
          'Total: $4.63'
        ]
      }
    ]
  },

  // ── 9 ── TIME & MEASUREMENT | MA.4.M.1.1, 1.2 (elapsed time, unit conversion)
  {
    id: 'measurement',
    title: 'Time & Measurement',
    coverEmoji: '⏱️',
    coverColor: '#b45309',
    topic: 'measurement',
    grades: [2, 3, 4, 5],
    questions: [
      {
        question: 'A movie starts at 1:45 PM and ends at 3:20 PM. How long is the movie?',
        options: ['1 hour 45 min', '1 hour 15 min', '1 hour 25 min', '1 hour 35 min'],
        correctIndex: 3,
        explanation: 'From 1:45 to 2:45 = 1 hour. From 2:45 to 3:20 = 35 more minutes. Total: 1 hour 35 minutes.',
        steps: [
          'Count up from 1:45 PM',
          '1:45 → 2:45 = 1 hour',
          '2:45 → 3:20 = 35 more minutes',
          'Total: 1 hour 35 minutes'
        ]
      },
      {
        question: 'How many INCHES are in 4 feet?',
        options: ['36 inches', '48 inches', '24 inches', '40 inches'],
        correctIndex: 1,
        explanation: '1 foot = 12 inches. Multiply: 4 × 12 = 48 inches.',
        steps: [
          'Conversion: 1 foot = 12 inches',
          'Multiply: 4 × 12 = 48',
          'Answer: 48 inches'
        ]
      },
      {
        question: 'A recipe takes 2 hours 45 minutes. You start at 11:30 AM. What time will it be done?',
        options: ['1:15 PM', '2:15 PM', '1:45 PM', '2:45 PM'],
        correctIndex: 1,
        explanation: 'Add 2 hours to 11:30 → 1:30 PM. Then add 45 minutes: 1:30 + 30 min = 2:00, + 15 min = 2:15 PM.',
        steps: [
          'Start: 11:30 AM',
          'Add 2 hours: 11:30 + 2:00 = 1:30 PM',
          'Add 45 minutes: 1:30 + 0:30 = 2:00 PM, then + 0:15 = 2:15 PM',
          'Done at: 2:15 PM'
        ]
      },
      {
        question: 'A bag weighs 3 pounds and 6 ounces. How many OUNCES is that in all?',
        options: ['54 ounces', '51 ounces', '48 ounces', '42 ounces'],
        correctIndex: 0,
        explanation: '1 pound = 16 ounces. Convert 3 pounds: 3 × 16 = 48 oz. Add 6 more: 48 + 6 = 54 ounces.',
        steps: [
          'Conversion: 1 pound = 16 ounces',
          'Convert 3 pounds: 3 × 16 = 48 ounces',
          'Add the extra 6 oz: 48 + 6 = 54 ounces'
        ]
      },
      {
        question: 'Which measurement is the LONGEST?',
        options: ['2 yards', '5 feet', '70 inches', '1 yard 2 feet'],
        correctIndex: 0,
        explanation: 'Convert all to inches: 2 yd = 72 in · 5 ft = 60 in · 70 in · 1 yd 2 ft = 60 in. Largest is 72 in (2 yards).',
        steps: [
          'Convert all to inches (1 yd = 36 in, 1 ft = 12 in):',
          '2 yards = 2 × 36 = 72 in',
          '5 feet = 5 × 12 = 60 in',
          '70 inches = 70 in',
          '1 yard 2 feet = 36 + 24 = 60 in',
          'Compare: 72 > 70 > 60 → 2 yards is longest ✓'
        ]
      },
      {
        question: 'A container holds 3 gallons of water. How many QUARTS is that?',
        options: ['6 quarts', '8 quarts', '10 quarts', '12 quarts'],
        correctIndex: 3,
        explanation: '1 gallon = 4 quarts. Multiply: 3 × 4 = 12 quarts.',
        steps: [
          'Conversion: 1 gallon = 4 quarts',
          'Multiply: 3 × 4 = 12 quarts'
        ]
      },
      {
        question: 'School starts at 7:55 AM. Carlos wakes up 1 hour 20 minutes BEFORE school. What time does he wake up?',
        options: ['6:45 AM', '6:35 AM', '6:25 AM', '7:25 AM'],
        correctIndex: 1,
        explanation: 'Subtract 1 hour from 7:55 → 6:55 AM. Then subtract 20 minutes: 6:55 − 20 = 6:35 AM.',
        steps: [
          'Start at 7:55 AM and count BACKWARD',
          'Subtract 1 hour: 7:55 → 6:55 AM',
          'Subtract 20 minutes: 6:55 − 20 min = 6:35 AM',
          'Carlos wakes up at 6:35 AM'
        ]
      },
      {
        question: 'A plank of wood is 7 feet 4 inches long. How many INCHES is that in all?',
        options: ['84 inches', '92 inches', '80 inches', '88 inches'],
        correctIndex: 3,
        explanation: '1 foot = 12 inches. Convert 7 feet: 7 × 12 = 84 inches. Add 4 more: 84 + 4 = 88 inches.',
        steps: [
          'Conversion: 1 foot = 12 inches',
          'Convert 7 feet: 7 × 12 = 84 inches',
          'Add the extra 4 inches: 84 + 4 = 88 inches'
        ]
      }
    ]
  },

  // ── 10 ── DATA & LINE PLOTS | MA.4.DP.1.1, 1.2 (interpret data, line plots)
  {
    id: 'data-graphs',
    title: 'Data & Line Plots',
    coverEmoji: '📊',
    coverColor: '#ec4899',
    topic: 'data-graphs',
    grades: [3, 4, 5, 6],
    questions: [
      {
        question: 'Plant heights (inches): 3, 4, 4, 5, 5, 5, 6, 6, 7, 8. What is the MODE?',
        options: ['4', '5', '6', '7'],
        correctIndex: 1,
        explanation: 'The mode is the value that appears most often. 5 appears 3 times — more than any other value. Mode = 5.',
        steps: [
          'The MODE = the value that appears most often',
          'Count each: 3→1, 4→2, 5→3, 6→2, 7→1, 8→1',
          '5 appears 3 times — the most!',
          'Mode = 5'
        ]
      },
      {
        question: 'Same plant heights: 3, 4, 4, 5, 5, 5, 6, 6, 7, 8. What is the RANGE?',
        options: ['5', '6', '4', '3'],
        correctIndex: 0,
        explanation: 'Range = Highest − Lowest = 8 − 3 = 5.',
        steps: [
          'Range = Highest value − Lowest value',
          'Highest: 8 · Lowest: 3',
          '8 − 3 = 5',
          'Range = 5'
        ]
      },
      {
        question: 'A line plot shows books read this week: ×× at 1, × at 2, ××× at 3, × at 4, ×× at 5. How many students read MORE THAN 3 books?',
        options: ['2 students', '4 students', '3 students', '5 students'],
        correctIndex: 2,
        explanation: '"More than 3" means 4 or 5 books. At 4: 1 student. At 5: 2 students. Total: 1 + 2 = 3 students.',
        steps: [
          '"More than 3" means 4 books OR 5 books',
          'Count marks at 4: 1 student',
          'Count marks at 5: 2 students',
          'Total: 1 + 2 = 3 students'
        ]
      },
      {
        question: 'Using the same line plot (×× at 1, × at 2, ××× at 3, × at 4, ×× at 5), how many students are there IN TOTAL?',
        options: ['7 students', '8 students', '9 students', '10 students'],
        correctIndex: 2,
        explanation: 'Count all × marks: 2 + 1 + 3 + 1 + 2 = 9 students.',
        steps: [
          'Count ALL × marks on the plot:',
          'At 1: ×× = 2',
          'At 2: × = 1',
          'At 3: ××× = 3',
          'At 4: × = 1',
          'At 5: ×× = 2',
          'Add: 2+1+3+1+2 = 9 students'
        ]
      },
      {
        question: 'Laps swum: Aiden 6, Bella 4, Carlos 6, Dani 8, Emma 6. What is the TOTAL?',
        options: ['28 laps', '30 laps', '32 laps', '34 laps'],
        correctIndex: 1,
        explanation: 'Add all laps: 6 + 4 + 6 + 8 + 6 = 30 laps.',
        steps: [
          'Add all the values:',
          '6 + 4 = 10',
          '10 + 6 = 16',
          '16 + 8 = 24',
          '24 + 6 = 30 laps'
        ]
      },
      {
        question: 'Using the same swim data (total 30 laps, 5 students), what is the MEAN (average) laps per student?',
        options: ['5 laps', '8 laps', '4 laps', '6 laps'],
        correctIndex: 3,
        explanation: 'Mean = Total ÷ Number of students = 30 ÷ 5 = 6 laps per student.',
        steps: [
          'Mean = Total ÷ Number of students',
          'Total laps = 30',
          'Number of students = 5',
          '30 ÷ 5 = 6 laps per student'
        ]
      },
      {
        question: 'Books read this month — Ana: 8, Ben: 5, Cho: 10, Dan: 5, Eve: 6. Which two students read the SAME number?',
        options: ['Ana and Cho', 'Ben and Dan', 'Cho and Eve', 'Ana and Eve'],
        correctIndex: 1,
        explanation: 'Ben: 5 and Dan: 5 — both read 5 books, the same amount.',
        steps: [
          'Look for matching values:',
          'Ana=8, Ben=5, Cho=10, Dan=5, Eve=6',
          'Ben = 5 and Dan = 5 → they match!',
          'Answer: Ben and Dan'
        ]
      },
      {
        question: 'Using the same data (Ana:8, Ben:5, Cho:10, Dan:5, Eve:6), how many MORE books did the highest reader read than the lowest?',
        options: ['3 books', '4 books', '6 books', '5 books'],
        correctIndex: 3,
        explanation: 'Highest: Cho = 10. Lowest: Ben or Dan = 5. Difference: 10 − 5 = 5 more books.',
        steps: [
          'Find the highest: Cho = 10 books',
          'Find the lowest: Ben and Dan = 5 books each',
          'Subtract: 10 − 5 = 5 more books'
        ]
      }
    ]
  },

  // ── 6 ── MATH FACTS FLUENCY | MA.4.NSO.2 (fluency, fact families, patterns)
  {
    id: 'math-facts',
    title: 'Math Facts Fluency',
    coverEmoji: '⚡',
    coverColor: '#f59e0b',
    topic: 'math-facts',
    grades: [1, 2, 3, 4],
    questions: [
      {
        question: 'What is 7 × 8?',
        options: ['54', '64', '48', '56'],
        correctIndex: 3,
        explanation: '7 × 8 = 56. You can remember it as: 5, 6, 7, 8 → 56 = 7 × 8.',
        steps: [
          'Count by 7s: 7, 14, 21, 28, 35, 42, 49, 56',
          'Or count by 8s: 8, 16, 24, 32, 40, 48, 56',
          'Either way: 7 × 8 = 56'
        ]
      },
      {
        question: 'What is 63 ÷ 9?',
        options: ['6', '8', '9', '7'],
        correctIndex: 3,
        explanation: '63 ÷ 9 = 7 because 9 × 7 = 63. Division and multiplication are fact family partners.',
        steps: [
          'Think of the multiplication fact: 9 × ? = 63',
          'Count by 9s: 9, 18, 27, 36, 45, 54, 63 — that\'s 7 steps',
          '9 × 7 = 63, so 63 ÷ 9 = 7'
        ]
      },
      {
        question: 'Which multiplication fact has the PRODUCT 54?',
        options: ['7 × 8', '8 × 7', '6 × 9', '9 × 6'],
        correctIndex: 2,
        explanation: '6 × 9 = 54. Note that 7 × 8 = 56 (not 54). The answer is 6 × 9.',
        steps: [
          'Test each option:\n  7 × 8 = 56 (not 54)\n  8 × 7 = 56 (not 54)',
          '  6 × 9 = 54 ✓',
          'Answer: 6 × 9 = 54'
        ]
      },
      {
        question: 'If 8 × 6 = 48, what is 48 ÷ 8?',
        options: ['7', '5', '8', '6'],
        correctIndex: 3,
        explanation: 'Multiplication and division are in the same fact family. If 8 × 6 = 48, then 48 ÷ 8 = 6.',
        steps: [
          'Multiplication and division are fact family partners',
          'If 8 × 6 = 48, then the related division fact is...',
          '48 ÷ 8 = 6 ✓'
        ]
      },
      {
        question: 'A baker makes 9 batches of cookies. Each batch has 12 cookies. How many cookies in all?',
        options: ['98', '99', '108', '118'],
        correctIndex: 2,
        explanation: '9 × 12 = 108. Break it up: 9 × 10 = 90 and 9 × 2 = 18. Add: 90 + 18 = 108.',
        steps: [
          'Multiply: 9 × 12',
          'Break 12 into 10 + 2:\n  9 × 10 = 90\n  9 × 2 = 18',
          'Add: 90 + 18 = 108 cookies'
        ]
      },
      {
        question: 'What number goes in the box? 6 × □ = 72',
        options: ['9', '8', '11', '12'],
        correctIndex: 3,
        explanation: '6 × 12 = 72. Count by 6s: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72 — that\'s 12 steps.',
        steps: [
          'We need: 6 × □ = 72',
          'Count by 6s: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72',
          'That\'s 12 sixes → 6 × 12 = 72 ✓'
        ]
      },
      {
        question: 'What pattern comes NEXT? 4, 8, 12, 16, ___',
        options: ['18', '22', '24', '20'],
        correctIndex: 3,
        explanation: 'This is the ×4 pattern — counting by 4s. 16 + 4 = 20.',
        steps: [
          'Look at the pattern: 4, 8, 12, 16...',
          'Each number is 4 MORE than the one before (counting by 4s)',
          '16 + 4 = 20 ✓'
        ]
      },
      {
        question: '72 students are split into equal teams of 8. How many teams are there?',
        options: ['8 teams', '7 teams', '10 teams', '9 teams'],
        correctIndex: 3,
        explanation: '72 ÷ 8 = 9. Think: 8 × 9 = 72. There are 9 teams.',
        steps: [
          'We need 72 ÷ 8',
          'Think: 8 × ? = 72',
          'Count by 8s: 8, 16, 24, 32, 40, 48, 56, 64, 72 — that\'s 9 steps',
          '8 × 9 = 72, so 72 ÷ 8 = 9 teams'
        ]
      }
    ]
  },

  // ── NEW MATH SETS ───────────────────────────────────────────────────────────

  // ── GRADE 1-2 | Addition and Subtraction Within 20
  {
    id: 'add-subtract-20',
    title: 'Addition & Subtraction Within 20',
    topic: 'addition-subtraction',
    gradeLevel: 2,
    icon: '➕',
    color: '#10b981',
    standards: ['MA.2.NSO.1.3', 'MA.2.AR.1.1'],
    questions: [
      {
        question: 'What is 8 + 7?',
        type: 'multiple-choice',
        options: ['14', '15', '16', '17'],
        correctIndex: 1,
        explanation: 'Count on from 8: 9, 10, 11, 12, 13, 14, 15. Or break it down: 8 + 2 = 10, then 10 + 5 = 15.',
        steps: [
          'Start with 8',
          'Break 7 into 2 + 5',
          '8 + 2 = 10',
          '10 + 5 = 15'
        ]
      },
      {
        question: '17 - 9 = ?',
        type: 'multiple-choice',
        options: ['6', '7', '8', '9'],
        correctIndex: 2,
        explanation: 'Think: 9 + ? = 17. Count up from 9 to 17, which is 8 steps.',
        steps: [
          'Think: 9 + ? = 17',
          'Count up: 10, 11, 12, 13, 14, 15, 16, 17',
          'That\'s 8 steps',
          '17 - 9 = 8'
        ]
      },
      {
        question: 'Maya has 12 stickers. Her friend gives her 6 more. How many stickers does Maya have now?',
        type: 'multiple-choice',
        options: ['16', '17', '18', '19'],
        correctIndex: 2,
        explanation: '12 + 6 = 18. We can use the "make ten" strategy: 12 + 6 = (10 + 2) + 6 = 10 + 8 = 18.',
        steps: [
          'Start with 12 stickers',
          'Add 6 more',
          '12 + 6 = 18',
          'Maya has 18 stickers'
        ]
      },
      {
        question: 'There are 15 apples in a basket. 8 apples are eaten. How many apples are left?',
        type: 'multiple-choice',
        options: ['5', '6', '7', '8'],
        correctIndex: 2,
        explanation: '15 - 8 = 7. We can count back from 15 or think: 8 + 7 = 15.',
        steps: [
          'Start with 15 apples',
          'Subtract 8',
          'Think: 8 + ? = 15',
          '8 + 7 = 15, so 15 - 8 = 7'
        ]
      },
      {
        question: 'What is 9 + 9?',
        type: 'multiple-choice',
        options: ['16', '17', '18', '19'],
        correctIndex: 2,
        explanation: 'Double 9 is 18. You can also think: 9 + 9 = 10 + 8 = 18.',
        steps: [
          '9 + 9 is a doubles fact',
          'Double 9 = 18',
          'Or: 9 + 9 = (10 - 1) + 9 = 10 + 8 = 18'
        ]
      }
    ]
  },

  // ── GRADE 3 | Multiplication & Division
  {
    id: 'multiply-divide-basic',
    title: 'Multiplication & Division Facts',
    topic: 'multiplication-division',
    gradeLevel: 3,
    icon: '✖️',
    color: '#f59e0b',
    standards: ['MA.3.NSO.2.1', 'MA.3.AR.1.2'],
    questions: [
      {
        question: '7 × 6 = ?',
        type: 'multiple-choice',
        options: ['36', '40', '42', '48'],
        correctIndex: 2,
        explanation: '7 × 6 = 42. Think: 7 groups of 6, or 6 groups of 7.',
        steps: [
          '7 × 6 means 7 groups of 6',
          'Or count by 6s: 6, 12, 18, 24, 30, 36, 42',
          '7 × 6 = 42'
        ]
      },
      {
        question: '56 ÷ 8 = ?',
        type: 'multiple-choice',
        options: ['6', '7', '8', '9'],
        correctIndex: 1,
        explanation: 'Think: 8 × ? = 56. We know 8 × 7 = 56, so 56 ÷ 8 = 7.',
        steps: [
          'Think: 8 × ? = 56',
          '8 × 7 = 56',
          'So 56 ÷ 8 = 7'
        ]
      },
      {
        question: 'A baker makes 9 batches of cookies. Each batch has 8 cookies. How many cookies total?',
        type: 'multiple-choice',
        options: ['63', '72', '81', '90'],
        correctIndex: 1,
        explanation: '9 × 8 = 72 cookies.',
        steps: [
          '9 batches × 8 cookies per batch',
          '9 × 8 = 72',
          'The baker made 72 cookies'
        ]
      },
      {
        question: '48 ÷ 6 = ?',
        type: 'multiple-choice',
        options: ['6', '7', '8', '9'],
        correctIndex: 2,
        explanation: 'Think: 6 × ? = 48. We know 6 × 8 = 48, so 48 ÷ 6 = 8.',
        steps: [
          'Think: 6 × ? = 48',
          '6 × 8 = 48',
          'So 48 ÷ 6 = 8'
        ]
      },
      {
        question: 'If 5 × 9 = 45, what is 45 ÷ 5?',
        type: 'multiple-choice',
        options: ['7', '8', '9', '10'],
        correctIndex: 2,
        explanation: 'Division is the inverse of multiplication. Since 5 × 9 = 45, then 45 ÷ 5 = 9.',
        steps: [
          'We know 5 × 9 = 45',
          'Division undoes multiplication',
          '45 ÷ 5 = 9'
        ]
      }
    ]
  },

  // ── GRADE 5 | Fractions
  {
    id: 'fractions-operations',
    title: 'Adding & Subtracting Fractions',
    topic: 'fractions',
    gradeLevel: 5,
    icon: '½',
    color: '#8b5cf6',
    standards: ['MA.5.FR.2.1', 'MA.5.FR.2.2'],
    questions: [
      {
        question: '1/4 + 3/4 = ?',
        type: 'multiple-choice',
        options: ['1/2', '3/4', '4/4 or 1', '4/8'],
        correctIndex: 2,
        explanation: 'When fractions have the same denominator, add the numerators: 1 + 3 = 4. So 1/4 + 3/4 = 4/4 = 1.',
        steps: [
          'Same denominators (4)',
          'Add numerators: 1 + 3 = 4',
          '4/4 = 1 whole'
        ]
      },
      {
        question: '2/5 + 1/5 = ?',
        type: 'multiple-choice',
        options: ['1/5', '2/5', '3/5', '3/10'],
        correctIndex: 2,
        explanation: 'Same denominator, so add numerators: 2 + 1 = 3. The answer is 3/5.',
        steps: [
          'Same denominators (5)',
          'Add numerators: 2 + 1 = 3',
          '2/5 + 1/5 = 3/5'
        ]
      },
      {
        question: '5/6 - 2/6 = ?',
        type: 'multiple-choice',
        options: ['1/6', '2/6', '3/6 or 1/2', '4/6'],
        correctIndex: 2,
        explanation: 'Same denominator, so subtract numerators: 5 - 2 = 3. The answer is 3/6, which simplifies to 1/2.',
        steps: [
          'Same denominators (6)',
          'Subtract numerators: 5 - 2 = 3',
          '3/6 simplifies to 1/2'
        ]
      },
      {
        question: 'Maya ate 1/3 of a pizza. Her brother ate 1/3 of the same pizza. What fraction did they eat together?',
        type: 'multiple-choice',
        options: ['1/6', '1/3', '2/3', '3/3 or 1'],
        correctIndex: 2,
        explanation: '1/3 + 1/3 = 2/3. They ate two-thirds of the pizza together.',
        steps: [
          'Maya: 1/3',
          'Brother: 1/3',
          '1/3 + 1/3 = 2/3'
        ]
      },
      {
        question: 'A recipe calls for 3/4 cup of sugar. You only have 1/4 cup. How much more do you need?',
        type: 'multiple-choice',
        options: ['1/4 cup', '2/4 or 1/2 cup', '3/4 cup', '4/4 or 1 cup'],
        correctIndex: 1,
        explanation: '3/4 - 1/4 = 2/4 = 1/2 cup. You need 2/4 (or 1/2) cup more.',
        steps: [
          'Need: 3/4 cup',
          'Have: 1/4 cup',
          '3/4 - 1/4 = 2/4 = 1/2 cup'
        ]
      }
    ]
  },

  // ── GRADE 6 | Ratios and Proportions
  {
    id: 'ratios-proportions',
    title: 'Ratios & Proportional Reasoning',
    topic: 'ratios-proportions',
    gradeLevel: 6,
    icon: '⚖️',
    color: '#06b6d4',
    standards: ['MA.6.AR.3.1', 'MA.6.AR.3.2'],
    questions: [
      {
        question: 'The ratio of cats to dogs at a shelter is 3:5. If there are 15 cats, how many dogs are there?',
        type: 'multiple-choice',
        options: ['9', '15', '20', '25'],
        correctIndex: 3,
        explanation: 'If 3 cats corresponds to 5 dogs, then 15 cats (which is 3 × 5) corresponds to 25 dogs (which is 5 × 5).',
        steps: [
          'Ratio: 3 cats : 5 dogs',
          '15 cats = 3 × 5',
          'So multiply dogs by 5 too: 5 × 5 = 25',
          'There are 25 dogs'
        ]
      },
      {
        question: 'A recipe for 4 servings uses 2 cups of flour. How many cups for 12 servings?',
        type: 'multiple-choice',
        options: ['4 cups', '6 cups', '8 cups', '10 cups'],
        correctIndex: 1,
        explanation: '12 servings is 3 times as many as 4 servings, so multiply flour by 3: 2 × 3 = 6 cups.',
        steps: [
          '4 servings → 2 cups',
          '12 servings = 4 × 3',
          '2 cups × 3 = 6 cups'
        ]
      },
      {
        question: 'A car travels 120 miles in 2 hours. At this rate, how far in 5 hours?',
        type: 'multiple-choice',
        options: ['200 miles', '240 miles', '300 miles', '360 miles'],
        correctIndex: 2,
        explanation: 'Rate: 120 miles / 2 hours = 60 miles per hour. In 5 hours: 60 × 5 = 300 miles.',
        steps: [
          'Find rate: 120 ÷ 2 = 60 mph',
          'Multiply by 5 hours',
          '60 × 5 = 300 miles'
        ]
      },
      {
        question: 'If 3 pencils cost $1.50, how much do 7 pencils cost?',
        type: 'multiple-choice',
        options: ['$2.50', '$3.00', '$3.50', '$4.00'],
        correctIndex: 2,
        explanation: 'Each pencil costs $1.50 ÷ 3 = $0.50. Seven pencils: 7 × $0.50 = $3.50.',
        steps: [
          'Cost per pencil: $1.50 ÷ 3 = $0.50',
          '7 pencils × $0.50',
          '7 × $0.50 = $3.50'
        ]
      },
      {
        question: 'In a class, the ratio of boys to girls is 4:3. If there are 28 students total, how many are boys?',
        type: 'multiple-choice',
        options: ['12', '14', '16', '18'],
        correctIndex: 2,
        explanation: 'The ratio 4:3 means 4 + 3 = 7 parts total. 28 students ÷ 7 parts = 4 students per part. Boys = 4 parts × 4 = 16.',
        steps: [
          'Ratio: 4 boys : 3 girls',
          'Total parts: 4 + 3 = 7',
          '28 ÷ 7 = 4 students per part',
          'Boys: 4 parts × 4 = 16'
        ]
      }
    ]
  },

  // ── GRADE 7-8 | Algebraic Expressions & Equations
  {
    id: 'algebra-equations',
    title: 'Solving Linear Equations',
    topic: 'algebra',
    gradeLevel: 7,
    icon: '📐',
    color: '#ef4444',
    standards: ['MA.7.AR.2.1', 'MA.7.AR.2.2'],
    questions: [
      {
        question: 'Solve: x + 7 = 15',
        type: 'multiple-choice',
        options: ['x = 6', 'x = 7', 'x = 8', 'x = 22'],
        correctIndex: 2,
        explanation: 'Subtract 7 from both sides: x + 7 - 7 = 15 - 7, so x = 8.',
        steps: [
          'x + 7 = 15',
          'Subtract 7 from both sides',
          'x = 15 - 7',
          'x = 8'
        ]
      },
      {
        question: 'Solve: 3x = 21',
        type: 'multiple-choice',
        options: ['x = 3', 'x = 6', 'x = 7', 'x = 63'],
        correctIndex: 2,
        explanation: 'Divide both sides by 3: x = 21 ÷ 3 = 7.',
        steps: [
          '3x = 21',
          'Divide both sides by 3',
          'x = 21 ÷ 3',
          'x = 7'
        ]
      },
      {
        question: 'Solve: 2x - 5 = 9',
        type: 'multiple-choice',
        options: ['x = 2', 'x = 4', 'x = 7', 'x = 14'],
        correctIndex: 2,
        explanation: 'Add 5 to both sides: 2x = 14. Then divide by 2: x = 7.',
        steps: [
          '2x - 5 = 9',
          'Add 5 to both sides: 2x = 14',
          'Divide by 2',
          'x = 7'
        ]
      },
      {
        question: 'Solve: x/4 = 6',
        type: 'multiple-choice',
        options: ['x = 2', 'x = 10', 'x = 24', 'x = 30'],
        correctIndex: 2,
        explanation: 'Multiply both sides by 4: x = 6 × 4 = 24.',
        steps: [
          'x/4 = 6',
          'Multiply both sides by 4',
          'x = 6 × 4',
          'x = 24'
        ]
      },
      {
        question: 'A number minus 8 equals 12. What is the number?',
        type: 'multiple-choice',
        options: ['4', '12', '20', '96'],
        correctIndex: 2,
        explanation: 'Let x be the number. x - 8 = 12. Add 8 to both sides: x = 20.',
        steps: [
          'Let x = the number',
          'x - 8 = 12',
          'Add 8 to both sides',
          'x = 20'
        ]
      }
    ]
  }

];
