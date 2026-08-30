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

  // ═══════════════════════════════════════════════════════
  // NEW SETS — Grades 1-2, 3-4 additions, 5-6, 7-8
  // ═══════════════════════════════════════════════════════

{
    id: 'adding-within-20',
    title: 'Adding Within 20',
    coverEmoji: '➕',
    coverColor: '#2563eb',
    topic: 'addition',
    grades: [1, 2],
    questions: [
      {
        question: 'There are 7 pelicans sitting on a dock and 5 more land. How many pelicans are there in all?',
        options: ['10', '11', '12', '13'],
        correctIndex: 2,
        explanation: '7 + 5 = 12. Start at 7 and count up 5 more.',
        steps: [
          'Start with 7 pelicans on the dock.',
          'Count on 5 more: 8, 9, 10, 11, 12.',
          '7 + 5 = 12 pelicans in all.'
        ]
      },
      {
        question: 'Mia picks 9 oranges and her brother picks 8 oranges. How many oranges do they have together?',
        options: ['16', '17', '18', '15'],
        correctIndex: 1,
        explanation: '9 + 8 = 17. You can make a 10: 9 + 1 = 10, then 10 + 7 = 17.',
        steps: [
          'Start with 9 oranges.',
          'Make a ten: 9 + 1 = 10, and 8 - 1 = 7 left.',
          '10 + 7 = 17 oranges total.'
        ]
      },
      {
        question: 'What is 6 + 6?',
        options: ['11', '13', '12', '14'],
        correctIndex: 2,
        explanation: '6 + 6 = 12. This is a doubles fact.',
        steps: [
          '6 + 6 is a doubles fact.',
          'Think: 6 groups of 2 = 12, or count up: 6, 7, 8, 9, 10, 11, 12.',
          '6 + 6 = 12.'
        ]
      },
      {
        question: 'A sandbox has 4 buckets and a child brings 9 more. How many buckets are there now?',
        options: ['14', '12', '13', '11'],
        correctIndex: 2,
        explanation: '4 + 9 = 13. Flip the numbers: 9 + 4 = 13.',
        steps: [
          'It is easier to start with the bigger number.',
          'Start at 9, count on 4 more: 10, 11, 12, 13.',
          '4 + 9 = 13 buckets.'
        ]
      },
      {
        question: 'What is 8 + 7?',
        options: ['16', '14', '13', '15'],
        correctIndex: 3,
        explanation: '8 + 7 = 15. Make a ten: 8 + 2 = 10, then 10 + 5 = 15.',
        steps: [
          'Start with 8.',
          'Take 2 from the 7 to make a ten: 8 + 2 = 10.',
          '7 - 2 = 5 left, so 10 + 5 = 15.'
        ]
      },
      {
        question: 'There are 3 manatees in the cove. Then 7 more swim in. How many manatees are there?',
        options: ['9', '10', '11', '8'],
        correctIndex: 1,
        explanation: '3 + 7 = 10. This is a make-ten pair.',
        steps: [
          'Start with 3 manatees.',
          '3 and 7 are make-ten partners.',
          '3 + 7 = 10 manatees.'
        ]
      },
      {
        question: 'Leo has 5 shells and finds 5 more on the beach. How many shells does he have?',
        options: ['9', '11', '8', '10'],
        correctIndex: 3,
        explanation: '5 + 5 = 10. This is a doubles fact.',
        steps: [
          '5 + 5 is a doubles fact.',
          'Count on: 5, 6, 7, 8, 9, 10.',
          '5 + 5 = 10 shells.'
        ]
      },
      {
        question: 'A class has 9 crayons and gets 9 more from the art room. How many crayons in all?',
        options: ['17', '20', '18', '16'],
        correctIndex: 2,
        explanation: '9 + 9 = 18. This is a doubles fact.',
        steps: [
          '9 + 9 is a doubles fact.',
          'Think: 10 + 10 = 20, then subtract 2 because both numbers are 1 less than 10.',
          '20 - 2 = 18. So 9 + 9 = 18.'
        ]
      }
    ]
  },
  {
    id: 'subtracting-within-20',
    title: 'Subtracting Within 20',
    coverEmoji: '➖',
    coverColor: '#dc2626',
    topic: 'subtraction',
    grades: [1, 2],
    questions: [
      {
        question: 'There are 15 dolphins in the bay. 6 swim away. How many are left?',
        options: ['8', '10', '9', '11'],
        correctIndex: 2,
        explanation: '15 - 6 = 9. Count back from 15 six times.',
        steps: [
          'Start at 15.',
          'Count back 6: 14, 13, 12, 11, 10, 9.',
          '15 - 6 = 9 dolphins left.'
        ]
      },
      {
        question: 'Jake has 12 oranges. He gives 5 to his friend. How many does he have now?',
        options: ['6', '8', '7', '9'],
        correctIndex: 2,
        explanation: '12 - 5 = 7. Use a fact family: 5 + 7 = 12.',
        steps: [
          'Think about the related addition fact.',
          '5 + ? = 12. What plus 5 equals 12?',
          '5 + 7 = 12, so 12 - 5 = 7 oranges.'
        ]
      },
      {
        question: 'What is 14 - 8?',
        options: ['7', '5', '6', '8'],
        correctIndex: 2,
        explanation: '14 - 8 = 6. Make a ten: 14 - 4 = 10, then 10 - 4 = 6.',
        steps: [
          'Break apart 8 into 4 + 4.',
          '14 - 4 = 10 (get to a ten first).',
          '10 - 4 = 6. So 14 - 8 = 6.'
        ]
      },
      {
        question: 'There are 20 sea turtles on a beach. 9 go back to the ocean. How many stay?',
        options: ['12', '10', '9', '11',],
        correctIndex: 3,
        explanation: '20 - 9 = 11. 20 - 10 = 10, but we only subtract 9, so it is 1 more: 11.',
        steps: [
          'Start with 20 sea turtles.',
          'Subtract 9. Think: 20 - 10 = 10.',
          'Since 9 is one less than 10, the answer is one more: 11.'
        ]
      },
      {
        question: 'What is 11 - 4?',
        options: ['8', '6', '7', '5'],
        correctIndex: 2,
        explanation: '11 - 4 = 7. Use a related addition fact: 4 + 7 = 11.',
        steps: [
          'Think: 4 + ? = 11.',
          'Count up from 4: 5, 6, 7, 8, 9, 10, 11. That is 7 steps.',
          '11 - 4 = 7.'
        ]
      },
      {
        question: 'Ana has 16 stickers. She uses 9 on a card. How many stickers are left?',
        options: ['6', '8', '5', '7'],
        correctIndex: 3,
        explanation: '16 - 9 = 7. Think: 9 + 7 = 16.',
        steps: [
          'Think about what plus 9 equals 16.',
          '9 + 1 = 10, and 10 + 6 = 16, so 9 + 7 = 16.',
          '16 - 9 = 7 stickers left.'
        ]
      },
      {
        question: 'What is 13 - 7?',
        options: ['5', '7', '4', '6'],
        correctIndex: 3,
        explanation: '13 - 7 = 6. Use the related fact: 7 + 6 = 13.',
        steps: [
          'Think: 7 + ? = 13.',
          '7 + 3 = 10, and 10 + 3 = 13, so 7 + 6 = 13.',
          '13 - 7 = 6.'
        ]
      },
      {
        question: 'There are 18 sandcastles on the beach. The tide washes away 9. How many sandcastles are left?',
        options: ['10', '8', '9', '7'],
        correctIndex: 2,
        explanation: '18 - 9 = 9. This is a doubles subtraction: 9 + 9 = 18.',
        steps: [
          'Think: 9 + ? = 18.',
          'This is the doubles fact 9 + 9 = 18.',
          '18 - 9 = 9 sandcastles left.'
        ]
      }
    ]
  },
  {
    id: 'place-value-tens-ones',
    title: 'Tens and Ones',
    coverEmoji: '🔟',
    coverColor: '#7c3aed',
    topic: 'place-value',
    grades: [1, 2],
    questions: [
      {
        question: 'What is the value of the digit 3 in the number 35?',
        options: ['3', '35', '5', '30'],
        correctIndex: 3,
        explanation: 'In 35, the 3 is in the tens place. Its value is 3 tens = 30.',
        steps: [
          'Look at the number 35.',
          'The digit 3 is in the tens place.',
          '3 tens = 30. The value is 30.'
        ]
      },
      {
        question: 'A jar has 4 groups of 10 marbles and 7 extra marbles. How many marbles in all?',
        options: ['74', '47', '11', '40'],
        correctIndex: 1,
        explanation: '4 tens and 7 ones = 47.',
        steps: [
          '4 groups of 10 = 40 marbles.',
          'Add 7 more ones: 40 + 7 = 47.',
          'The answer is 47 marbles.'
        ]
      },
      {
        question: 'Which number has 6 tens and 2 ones?',
        options: ['26', '602', '62', '206'],
        correctIndex: 2,
        explanation: '6 tens = 60, plus 2 ones = 62.',
        steps: [
          '6 tens means 60.',
          '2 ones means 2.',
          '60 + 2 = 62.'
        ]
      },
      {
        question: 'What is 50 + 8?',
        options: ['85', '508', '58', '580'],
        correctIndex: 2,
        explanation: '5 tens + 8 ones = 58.',
        steps: [
          '50 is 5 tens.',
          '8 is 8 ones.',
          '5 tens and 8 ones makes 58.'
        ]
      },
      {
        question: 'How many tens are in the number 73?',
        options: ['3', '10', '73', '7'],
        correctIndex: 3,
        explanation: '73 has 7 in the tens place, so there are 7 tens.',
        steps: [
          'Look at the tens place in 73.',
          'The digit in the tens place is 7.',
          'There are 7 tens in 73.'
        ]
      },
      {
        question: 'A Florida orange grove has 8 boxes with 10 oranges each and 5 extra oranges. How many oranges are there?',
        options: ['13', '80', '85', '58'],
        correctIndex: 2,
        explanation: '8 tens and 5 ones = 85 oranges.',
        steps: [
          '8 boxes of 10 = 80 oranges.',
          'Add 5 more: 80 + 5 = 85.',
          'There are 85 oranges in all.'
        ]
      },
      {
        question: 'What number is the same as 3 tens and 0 ones?',
        options: ['3', '13', '30', '300'],
        correctIndex: 2,
        explanation: '3 tens and 0 ones = 30.',
        steps: [
          '3 tens = 30.',
          '0 ones = 0.',
          '30 + 0 = 30.'
        ]
      },
      {
        question: 'In the number 91, which digit is in the ones place?',
        options: ['9', '91', '19', '1'],
        correctIndex: 3,
        explanation: 'In 91, the 9 is in the tens place and the 1 is in the ones place.',
        steps: [
          'Write the number 91.',
          'The ones place is the digit on the right.',
          'The digit on the right in 91 is 1.'
        ]
      }
    ]
  },
  {
    id: 'comparing-numbers-g1',
    title: 'Comparing Numbers to 100',
    coverEmoji: '⚖️',
    coverColor: '#0891b2',
    topic: 'number-sense',
    grades: [1, 2],
    questions: [
      {
        question: 'Which symbol makes this true? 45 ___ 54',
        options: ['=', '+', '>', '<'],
        correctIndex: 3,
        explanation: '45 is less than 54, so we use the < symbol.',
        steps: [
          'Compare the tens digits: 4 tens vs. 5 tens.',
          '4 tens is less than 5 tens.',
          '45 < 54. The < symbol points to the smaller number.'
        ]
      },
      {
        question: 'Which number is greater: 67 or 76?',
        options: ['67', 'They are equal', '63', '76'],
        correctIndex: 3,
        explanation: '76 is greater because it has 7 tens, while 67 has only 6 tens.',
        steps: [
          'Compare the tens: 67 has 6 tens, 76 has 7 tens.',
          '7 tens is more than 6 tens.',
          '76 is greater than 67.'
        ]
      },
      {
        question: 'A beach shop has 82 hats and 28 sunglasses. Which item does the shop have MORE of?',
        options: ['Sunglasses', 'They are the same', 'Both are 50', 'Hats'],
        correctIndex: 3,
        explanation: '82 > 28 because 8 tens is greater than 2 tens.',
        steps: [
          'Compare 82 and 28.',
          '82 has 8 tens; 28 has 2 tens.',
          '8 tens > 2 tens, so the shop has more hats.'
        ]
      },
      {
        question: 'Which symbol makes this true? 99 ___ 100',
        options: ['<', '≠', '>', '='],
        correctIndex: 0,
        explanation: '99 is less than 100, so 99 < 100.',
        steps: [
          'Compare 99 and 100.',
          '100 is one more than 99.',
          '99 < 100. 99 is less than 100.'
        ]
      },
      {
        question: 'Which group of numbers is in order from least to greatest? ',
        options: ['50, 45, 60', '45, 60, 50', '60, 50, 45', '45, 50, 60'],
        correctIndex: 3,
        explanation: '45, 50, 60 goes from the smallest to the largest number.',
        steps: [
          'Least to greatest means smallest first.',
          'Compare: 45 < 50 < 60.',
          'The correct order is 45, 50, 60.'
        ]
      },
      {
        question: 'Which symbol makes this true? 38 ___ 38',
        options: ['<', '+', '>', '='],
        correctIndex: 3,
        explanation: '38 is equal to 38, so we use the = symbol.',
        steps: [
          'Compare 38 and 38.',
          'Both numbers are exactly the same.',
          '38 = 38.'
        ]
      },
      {
        question: 'There are 71 fish in a tank at the Florida Aquarium and 17 in another tank. Which tank has fewer fish?',
        options: ['The tank with 71', 'Both tanks are equal', 'The tank with 17', 'Cannot tell'],
        correctIndex: 2,
        explanation: '17 < 71 because 1 ten is less than 7 tens.',
        steps: [
          'Compare 17 and 71.',
          '17 has 1 ten; 71 has 7 tens.',
          '1 ten < 7 tens, so the tank with 17 fish has fewer.'
        ]
      },
      {
        question: 'What is the greatest number? 54, 45, 55, 44',
        options: ['45', '44', '54', '55'],
        correctIndex: 3,
        explanation: '55 is the greatest because it has the most tens and then the most ones.',
        steps: [
          'Compare the tens digits: 5, 4, 5, 4.',
          'The numbers with 5 tens are 54 and 55.',
          'Compare the ones: 54 has 4 ones, 55 has 5 ones. 55 is greatest.'
        ]
      }
    ]
  },
  {
    id: 'shapes-grade1',
    title: '2D and 3D Shapes',
    coverEmoji: '🔺',
    coverColor: '#059669',
    topic: 'geometry',
    grades: [1, 2],
    questions: [
      {
        question: 'How many sides does a rectangle have?',
        options: ['3', '5', '6', '4'],
        correctIndex: 3,
        explanation: 'A rectangle has 4 sides and 4 corners.',
        steps: [
          'A rectangle is a flat shape.',
          'Count its sides: top, right, bottom, left.',
          'A rectangle has 4 sides.'
        ]
      },
      {
        question: 'Which shape has 3 sides and 3 corners?',
        options: ['Square', 'Circle', 'Pentagon', 'Triangle'],
        correctIndex: 3,
        explanation: 'A triangle has exactly 3 sides and 3 corners (vertices).',
        steps: [
          'Think about shapes with 3 sides.',
          'A triangle has 3 sides and 3 corners.',
          'The answer is triangle.'
        ]
      },
      {
        question: 'A ball is shaped like which 3D figure?',
        options: ['Cone', 'Cube', 'Sphere', 'Cylinder'],
        correctIndex: 2,
        explanation: 'A ball is a sphere — it is perfectly round in all directions.',
        steps: [
          'A ball is round all the way around.',
          'A sphere is a 3D shape that is round like a ball.',
          'A ball is shaped like a sphere.'
        ]
      },
      {
        question: 'How many corners does a circle have?',
        options: ['1', '0', '4', '2'],
        correctIndex: 1,
        explanation: 'A circle has no corners and no straight sides — it is completely round.',
        steps: [
          'Look at a circle.',
          'A circle is perfectly round with no straight edges.',
          'A circle has 0 corners.'
        ]
      },
      {
        question: 'A can of Florida orange juice is shaped like which 3D figure?',
        options: ['Sphere', 'Cube', 'Pyramid', 'Cylinder'],
        correctIndex: 3,
        explanation: 'A can is a cylinder — it has two circular faces and a curved side.',
        steps: [
          'Think about the shape of a can.',
          'It is round on top and bottom with a curved side.',
          'That shape is called a cylinder.'
        ]
      },
      {
        question: 'Which shape has 4 equal sides and 4 equal corners?',
        options: ['Rectangle', 'Triangle', 'Trapezoid', 'Square'],
        correctIndex: 3,
        explanation: 'A square has 4 equal sides and 4 right angle corners.',
        steps: [
          'Think of shapes with 4 sides.',
          'A rectangle has 4 sides, but not all are equal.',
          'A square has all 4 sides the same length — that is the answer.'
        ]
      },
      {
        question: 'Which 3D shape has a flat circle on the bottom and comes to a point at the top?',
        options: ['Cylinder', 'Cone', 'Sphere', 'Cube'],
        correctIndex: 1,
        explanation: 'A cone has one circular base and comes to a point called a vertex.',
        steps: [
          'Imagine an ice cream cone.',
          'It has a flat circle at the bottom and a point at the top.',
          'That shape is called a cone.'
        ]
      },
      {
        question: 'How many sides does a hexagon have?',
        options: ['5', '8', '4', '6'],
        correctIndex: 3,
        explanation: 'A hexagon has 6 sides. Hex means six.',
        steps: [
          'Hex- means 6.',
          'A hexagon looks like a honeycomb cell.',
          'A hexagon has 6 sides.'
        ]
      }
    ]
  },
  {
    id: 'measurement-grade1',
    title: 'Measuring Length',
    coverEmoji: '📏',
    coverColor: '#d97706',
    topic: 'measurement',
    grades: [1, 2],
    questions: [
      {
        question: 'A starfish is measured with paper clips. It is 4 paper clips long. A seashell is 6 paper clips long. Which is longer?',
        options: ['The starfish', 'They are the same length', 'Cannot tell', 'The seashell'],
        correctIndex: 3,
        explanation: '6 paper clips is more than 4 paper clips, so the seashell is longer.',
        steps: [
          'The starfish is 4 paper clips long.',
          'The seashell is 6 paper clips long.',
          '6 > 4, so the seashell is longer.'
        ]
      },
      {
        question: 'You measure a pencil with cubes. It takes 7 cubes placed end to end. About how long is the pencil?',
        options: ['About 3 cubes long', 'About 10 cubes long', 'About 7 cubes long', 'About 14 cubes long'],
        correctIndex: 2,
        explanation: 'If 7 cubes fit along the pencil, the pencil is about 7 cubes long.',
        steps: [
          'Place cubes end to end along the pencil.',
          'Count the cubes: 7 cubes fit.',
          'The pencil is about 7 cubes long.'
        ]
      },
      {
        question: 'Which tool would you use to measure how long a flamingo feather is?',
        options: ['A clock', 'A scale', 'A thermometer', 'A ruler'],
        correctIndex: 3,
        explanation: 'A ruler measures length.',
        steps: [
          'Think about what each tool measures.',
          'A ruler measures how long something is.',
          'Use a ruler to measure the feather\'s length.'
        ]
      },
      {
        question: 'A lizard is 5 blocks long and a gecko is 8 blocks long. How much longer is the gecko?',
        options: ['2 blocks', '4 blocks', '3 blocks', '13 blocks'],
        correctIndex: 2,
        explanation: '8 - 5 = 3 blocks. The gecko is 3 blocks longer.',
        steps: [
          'Gecko is 8 blocks, lizard is 5 blocks.',
          'Subtract to find the difference: 8 - 5 = 3.',
          'The gecko is 3 blocks longer.'
        ]
      },
      {
        question: 'Rosa lines up 3 crayons end to end. Each crayon is 4 paper clips long. How long is the line of crayons?',
        options: ['7 paper clips', '12 paper clips', '8 paper clips', '10 paper clips'],
        correctIndex: 1,
        explanation: '3 crayons × 4 paper clips each = 12 paper clips total.',
        steps: [
          'Each crayon is 4 paper clips long.',
          'There are 3 crayons: 4 + 4 + 4 = 12.',
          'The line of crayons is 12 paper clips long.'
        ]
      },
      {
        question: 'When measuring an object, what must you do with your unit (like a paper clip) each time?',
        options: ['Overlap the units a little', 'Leave gaps between units', 'Place units end to end with no gaps or overlaps', 'Measure from the middle'],
        correctIndex: 2,
        explanation: 'Units must be placed end to end with no gaps or overlaps for an accurate measurement.',
        steps: [
          'Line up the units (paper clips, cubes, etc.) along the object.',
          'Make sure there are no gaps or spaces between units.',
          'Make sure units do not overlap each other.'
        ]
      },
      {
        question: 'A toy alligator is 9 inches long and a toy snake is 15 inches long. Which is shorter?',
        options: ['The snake', 'They are the same', 'The alligator', 'Cannot compare them'],
        correctIndex: 2,
        explanation: '9 inches is less than 15 inches, so the alligator is shorter.',
        steps: [
          'The alligator is 9 inches.',
          'The snake is 15 inches.',
          '9 < 15, so the toy alligator is shorter.'
        ]
      },
      {
        question: 'You measure a book and a notebook with the same paper clips. The book takes 10 clips and the notebook takes 10 clips. What do you know?',
        options: ['The book is longer', 'They are the same length', 'The notebook is longer', 'You need a ruler to tell'],
        correctIndex: 1,
        explanation: 'If both take the same number of the same unit, they are the same length.',
        steps: [
          'Both measured with the same sized paper clips.',
          'Both measured 10 paper clips long.',
          'Same number, same unit = same length.'
        ]
      }
    ]
  },
  {
    id: 'time-grade1',
    title: 'Telling Time to the Hour and Half Hour',
    coverEmoji: '🕐',
    coverColor: '#0284c7',
    topic: 'measurement',
    grades: [1, 2],
    questions: [
      {
        question: 'The short hand points to 3 and the long hand points to 12. What time is it?',
        options: ['12:03', '3:30', '12:15', '3:00'],
        correctIndex: 3,
        explanation: 'When the long hand is on 12, it is the exact hour. The short hand on 3 means 3:00.',
        steps: [
          'The long (minute) hand on 12 means it is exactly on the hour.',
          'The short (hour) hand points to 3.',
          'The time is 3:00.'
        ]
      },
      {
        question: 'The short hand is between 7 and 8, and the long hand points to 6. What time is it?',
        options: ['7:00', '6:30', '8:30', '7:30'],
        correctIndex: 3,
        explanation: 'When the long hand is on 6, it is the half hour. The short hand between 7 and 8 means 7:30.',
        steps: [
          'The long (minute) hand on 6 means it is the half hour (:30).',
          'The short (hour) hand is between 7 and 8, closer to 7.',
          'The time is 7:30.'
        ]
      },
      {
        question: 'School starts at 8:00. Which clock shows 8:00?',
        options: ['Short hand on 12, long hand on 8', 'Short hand on 6, long hand on 8', 'Short hand on 8, long hand on 12', 'Short hand on 8, long hand on 6'],
        correctIndex: 2,
        explanation: 'At 8:00, the short hand points to 8 and the long hand points to 12.',
        steps: [
          'For any o\'clock time, the long hand always points to 12.',
          'The short hand points to the hour number.',
          'At 8:00, short hand → 8, long hand → 12.'
        ]
      },
      {
        question: 'It is 5:30. Where is the long hand pointing?',
        options: ['At 5', 'At 3', 'At 12', 'At 6'],
        correctIndex: 3,
        explanation: 'At :30 (half past), the long (minute) hand always points to 6.',
        steps: [
          'The long hand shows the minutes.',
          'At :30, the long hand has gone halfway around the clock.',
          'Halfway is the 6, so the long hand points to 6.'
        ]
      },
      {
        question: 'Maya feeds her dog at 6:30 every evening in Tampa. What do both hands look like at 6:30?',
        options: ['Both hands point to 6', 'Short hand between 6 and 7, long hand on 6', 'Short hand on 6, long hand on 12', 'Short hand between 5 and 6, long hand on 6'],
        correctIndex: 1,
        explanation: 'At 6:30, the long hand is on 6 and the short hand is halfway between 6 and 7.',
        steps: [
          'At :30, the long (minute) hand points to 6.',
          'The short (hour) hand has moved halfway between 6 and 7.',
          'Short hand between 6 and 7, long hand on 6.'
        ]
      },
      {
        question: 'What time does a clock show when both hands point to 12?',
        options: ['6:00', '12:30', '12:00', '1:00'],
        correctIndex: 2,
        explanation: 'When both hands point to 12, the time is 12:00.',
        steps: [
          'The long hand on 12 means it is on the hour.',
          'The short hand on 12 means the hour is 12.',
          'The time is 12:00.'
        ]
      },
      {
        question: 'The clock shows 9:00. One half hour passes. What time is it now?',
        options: ['10:00', '9:30', '8:30', '9:15'],
        correctIndex: 1,
        explanation: 'One half hour after 9:00 is 9:30.',
        steps: [
          'Start at 9:00.',
          'Add 30 minutes (one half hour).',
          '9:00 + 30 minutes = 9:30.'
        ]
      },
      {
        question: 'A surf lesson in Cocoa Beach starts at 10:30. On the clock, the long hand points to ___.',
        options: ['10', '12', '3', '6'],
        correctIndex: 3,
        explanation: 'At any half-hour time (:30), the long (minute) hand always points to 6.',
        steps: [
          'The time is 10:30.',
          'The :30 means the long hand is at the half-hour mark.',
          'The half-hour mark is always at the 6 on the clock.'
        ]
      }
    ]
  },
  {
    id: 'word-problems-grade1',
    title: 'Addition and Subtraction Word Problems',
    coverEmoji: '📝',
    coverColor: '#9333ea',
    topic: 'word-problems',
    grades: [1, 2],
    questions: [
      {
        question: 'There are 8 pelicans on a pier. 3 fly away. How many pelicans are still on the pier?',
        options: ['11', '6', '4', '5'],
        correctIndex: 3,
        explanation: '8 - 3 = 5. This is a take-away subtraction problem.',
        steps: [
          'Start with 8 pelicans.',
          '3 fly away, so subtract: 8 - 3.',
          '8 - 3 = 5 pelicans left.'
        ]
      },
      {
        question: 'Caleb has 6 toy crabs. He gets 7 more for his birthday. How many toy crabs does he have now?',
        options: ['12', '14', '1', '13'],
        correctIndex: 3,
        explanation: '6 + 7 = 13. This is an add-to problem.',
        steps: [
          'Start with 6 toy crabs.',
          'Add 7 more: 6 + 7.',
          '6 + 7 = 13 toy crabs.'
        ]
      },
      {
        question: 'There are 14 kids at the water park. Some go home and 9 kids are left. How many kids went home?',
        options: ['4', '5', '23', '6'],
        correctIndex: 1,
        explanation: '14 - ? = 9. Think: 9 + 5 = 14, so 5 kids went home.',
        steps: [
          'This is a missing-number problem: 14 - ? = 9.',
          'Think: what plus 9 equals 14?',
          '9 + 5 = 14, so 5 kids went home.'
        ]
      },
      {
        question: 'Sofia has 5 red fish and 8 blue fish in her tank. How many fish does she have in all?',
        options: ['14', '11', '13', '12'],
        correctIndex: 2,
        explanation: '5 + 8 = 13. Add the red and blue fish together.',
        steps: [
          'Red fish: 5. Blue fish: 8.',
          'Add them together: 5 + 8.',
          '5 + 8 = 13 fish in all.'
        ]
      },
      {
        question: 'There are 12 oranges in a basket. A family eats some oranges. Now there are 7 oranges. How many did they eat?',
        options: ['6', '5', '8', '4'],
        correctIndex: 1,
        explanation: '12 - ? = 7. Think: 7 + 5 = 12, so they ate 5 oranges.',
        steps: [
          'Start: 12 oranges. End: 7 oranges.',
          'Think: 12 - ? = 7, or 7 + ? = 12.',
          '7 + 5 = 12, so they ate 5 oranges.'
        ]
      },
      {
        question: 'There are 6 kids building sandcastles and 9 kids swimming. How many more kids are swimming than building?',
        options: ['15', '2', '4', '3'],
        correctIndex: 3,
        explanation: '9 - 6 = 3. This is a comparison problem.',
        steps: [
          'Compare the two groups: 9 swimmers vs. 6 builders.',
          'To compare, subtract: 9 - 6.',
          '9 - 6 = 3. There are 3 more swimmers.'
        ]
      },
      {
        question: 'Lila sees 4 manatees in the morning and 6 manatees in the afternoon. How many manatees does she see in all?',
        options: ['9', '11', '2', '10'],
        correctIndex: 3,
        explanation: '4 + 6 = 10. This is a put-together addition problem.',
        steps: [
          'Morning: 4 manatees. Afternoon: 6 manatees.',
          'Put them together: 4 + 6.',
          '4 + 6 = 10 manatees in all.'
        ]
      },
      {
        question: 'A class of 17 students is going to the Florida Museum. 8 students ride Bus A. The rest ride Bus B. How many ride Bus B?',
        options: ['10', '25', '8', '9'],
        correctIndex: 3,
        explanation: '17 - 8 = 9. Subtract the Bus A students from the total.',
        steps: [
          'Total students: 17. Bus A: 8.',
          'Bus B: 17 - 8.',
          '17 - 8 = 9 students ride Bus B.'
        ]
      }
    ]
  },
  {
    id: 'adding-3digit',
    title: 'Adding 3-Digit Numbers',
    coverEmoji: '🔢',
    coverColor: '#2563eb',
    topic: 'addition',
    grades: [2, 3],
    questions: [
      {
        question: 'What is 234 + 152?',
        options: ['376', '386', '396', '486'],
        correctIndex: 1,
        explanation: '234 + 152 = 386. Add ones, then tens, then hundreds.',
        steps: [
          'Add the ones: 4 + 2 = 6.',
          'Add the tens: 3 + 5 = 8.',
          'Add the hundreds: 2 + 1 = 3. Answer: 386.'
        ]
      },
      {
        question: 'A Florida theme park sold 245 tickets on Saturday and 318 tickets on Sunday. How many tickets were sold in all?',
        options: ['553', '563', '463', '543'],
        correctIndex: 1,
        explanation: '245 + 318 = 563. Add ones (5+8=13, carry 1), tens (4+1+1=6), hundreds (2+3=5).',
        steps: [
          'Add the ones: 5 + 8 = 13. Write 3, carry 1.',
          'Add the tens: 4 + 1 + 1 (carried) = 6.',
          'Add the hundreds: 2 + 3 = 5. Answer: 563.'
        ]
      },
      {
        question: 'What is 407 + 285?',
        options: ['682', '692', '702', '692'],
        correctIndex: 1,
        explanation: '407 + 285 = 692.',
        steps: [
          'Add the ones: 7 + 5 = 12. Write 2, carry 1.',
          'Add the tens: 0 + 8 + 1 (carried) = 9.',
          'Add the hundreds: 4 + 2 = 6. Answer: 692.'
        ]
      },
      {
        question: 'An orange grove picked 361 oranges in the morning and 479 oranges in the afternoon. How many oranges were picked?',
        options: ['740', '830', '840', '940'],
        correctIndex: 2,
        explanation: '361 + 479 = 840.',
        steps: [
          'Add the ones: 1 + 9 = 10. Write 0, carry 1.',
          'Add the tens: 6 + 7 + 1 (carried) = 14. Write 4, carry 1.',
          'Add the hundreds: 3 + 4 + 1 (carried) = 8. Answer: 840.'
        ]
      },
      {
        question: 'What is 500 + 267?',
        options: ['757', '767', '867', '677'],
        correctIndex: 1,
        explanation: '500 + 267 = 767. Just add the hundreds and keep the rest the same.',
        steps: [
          'Add the ones: 0 + 7 = 7.',
          'Add the tens: 0 + 6 = 6.',
          'Add the hundreds: 5 + 2 = 7. Answer: 767.'
        ]
      },
      {
        question: 'A library in Miami has 128 fiction books and 135 nonfiction books. How many books are there in all?',
        options: ['253', '263', '273', '243'],
        correctIndex: 1,
        explanation: '128 + 135 = 263.',
        steps: [
          'Add the ones: 8 + 5 = 13. Write 3, carry 1.',
          'Add the tens: 2 + 3 + 1 (carried) = 6.',
          'Add the hundreds: 1 + 1 = 2. Answer: 263.'
        ]
      },
      {
        question: 'What is 356 + 456?',
        options: ['802', '712', '812', '912'],
        correctIndex: 2,
        explanation: '356 + 456 = 812.',
        steps: [
          'Add the ones: 6 + 6 = 12. Write 2, carry 1.',
          'Add the tens: 5 + 5 + 1 (carried) = 11. Write 1, carry 1.',
          'Add the hundreds: 3 + 4 + 1 (carried) = 8. Answer: 812.'
        ]
      },
      {
        question: 'A school collected 175 cans and a second school collected 275 cans for a food drive. How many cans total?',
        options: ['340', '460', '440', '450'],
        correctIndex: 3,
        explanation: '175 + 275 = 450.',
        steps: [
          'Add the ones: 5 + 5 = 10. Write 0, carry 1.',
          'Add the tens: 7 + 7 + 1 (carried) = 15. Write 5, carry 1.',
          'Add the hundreds: 1 + 2 + 1 (carried) = 4. Answer: 450.'
        ]
      }
    ]
  },
  {
    id: 'subtracting-3digit',
    title: 'Subtracting 3-Digit Numbers',
    coverEmoji: '🔡',
    coverColor: '#b91c1c',
    topic: 'subtraction',
    grades: [2, 3],
    questions: [
      {
        question: 'What is 587 - 243?',
        options: ['354', '344', '334', '364'],
        correctIndex: 1,
        explanation: '587 - 243 = 344. Subtract ones, tens, then hundreds.',
        steps: [
          'Subtract the ones: 7 - 3 = 4.',
          'Subtract the tens: 8 - 4 = 4.',
          'Subtract the hundreds: 5 - 2 = 3. Answer: 344.'
        ]
      },
      {
        question: 'There were 465 people at a Miami Marlins game. 182 people left early. How many stayed?',
        options: ['293', '273', '283', '383'],
        correctIndex: 2,
        explanation: '465 - 182 = 283.',
        steps: [
          'Subtract the ones: 5 - 2 = 3.',
          'Subtract the tens: 6 - 8. Need to regroup! 16 - 8 = 8, carry.',
          'Subtract the hundreds: 4 - 1 - 1 (regrouped) = 2. Answer: 283.'
        ]
      },
      {
        question: 'What is 700 - 348?',
        options: ['362', '342', '352', '452'],
        correctIndex: 2,
        explanation: '700 - 348 = 352.',
        steps: [
          'The ones and tens are 0, so regroup from hundreds.',
          '700 becomes 6 hundreds, 9 tens, 10 ones.',
          '10-8=2, 9-4=5, 6-3=3. Answer: 352.'
        ]
      },
      {
        question: 'A Florida orange grove had 924 oranges. Workers packed 576. How many oranges are left?',
        options: ['358', '348', '448', '348'],
        correctIndex: 1,
        explanation: '924 - 576 = 348.',
        steps: [
          'Subtract ones: 4 - 6, regroup. 14 - 6 = 8.',
          'Subtract tens: 2 - 1 - 7, regroup. 12 - 7 = 5... wait, 11-7=4.',
          'Subtract hundreds: 9 - 1 - 5 = 3. Answer: 348.'
        ]
      },
      {
        question: 'What is 853 - 421?',
        options: ['422', '442', '432', '532'],
        correctIndex: 2,
        explanation: '853 - 421 = 432. No regrouping needed here.',
        steps: [
          'Subtract the ones: 3 - 1 = 2.',
          'Subtract the tens: 5 - 2 = 3.',
          'Subtract the hundreds: 8 - 4 = 4. Answer: 432.'
        ]
      },
      {
        question: 'A beach town had 600 visitors last week and 247 visitors this week. How many MORE visitors came last week?',
        options: ['363', '343', '353', '443'],
        correctIndex: 2,
        explanation: '600 - 247 = 353.',
        steps: [
          'Regroup 600: 5 hundreds, 9 tens, 10 ones.',
          '10 - 7 = 3 ones; 9 - 4 = 5 tens; 5 - 2 = 3 hundreds.',
          'Answer: 353 more visitors last week.'
        ]
      },
      {
        question: 'What is 490 - 135?',
        options: ['365', '345', '355', '455'],
        correctIndex: 2,
        explanation: '490 - 135 = 355.',
        steps: [
          'Subtract the ones: 0 - 5, regroup. 10 - 5 = 5.',
          'Subtract the tens: 9 - 1 - 3 = 5... 8 - 3 = 5 (after regrouping).',
          'Subtract the hundreds: 4 - 1 = 3. Answer: 355.'
        ]
      },
      {
        question: 'A school raised $875 for supplies. They spent $438. How much money is left?',
        options: ['447', '437', '337', '467'],
        correctIndex: 1,
        explanation: '875 - 438 = 437.',
        steps: [
          'Subtract ones: 5 - 8, regroup. 15 - 8 = 7.',
          'Subtract tens: 7 - 1 - 3 = 3.',
          'Subtract hundreds: 8 - 4 = 4. Answer: $437.'
        ]
      }
    ]
  },
  {
    id: 'even-odd',
    title: 'Even and Odd Numbers',
    coverEmoji: '🔵',
    coverColor: '#0f766e',
    topic: 'number-sense',
    grades: [2, 3],
    questions: [
      {
        question: 'Is the number 14 even or odd?',
        options: ['Odd, because it ends in 4', 'Even, because it ends in 4', 'Odd, because 1 is odd', 'Neither'],
        correctIndex: 1,
        explanation: '14 is even. A number is even if it ends in 0, 2, 4, 6, or 8.',
        steps: [
          'Look at the ones digit of 14.',
          'The ones digit is 4.',
          '4 is an even digit, so 14 is even.'
        ]
      },
      {
        question: 'Which number is ODD?',
        options: ['36', '48', '57', '70'],
        correctIndex: 2,
        explanation: '57 is odd because it ends in 7. Odd numbers end in 1, 3, 5, 7, or 9.',
        steps: [
          'Check the ones digit of each number.',
          '36 ends in 6 (even), 48 ends in 8 (even), 70 ends in 0 (even).',
          '57 ends in 7 — that is odd!'
        ]
      },
      {
        question: 'A bag has 9 oranges. Can you split them equally into 2 groups with none left over?',
        options: ['Yes, 4 in each group', 'Yes, 5 in each group', 'No, 9 is an odd number', 'No, 9 is too large'],
        correctIndex: 2,
        explanation: '9 is odd. Odd numbers cannot be split into 2 equal groups — there is always 1 left over.',
        steps: [
          'Try to split 9 into 2 equal groups.',
          '9 ÷ 2 = 4 with 1 left over.',
          '9 is odd, so you cannot split it equally.'
        ]
      },
      {
        question: 'What is the next even number after 26?',
        options: ['27', '30', '29', '28'],
        correctIndex: 3,
        explanation: '28 is the next even number after 26. Even numbers count by 2s: 26, 28, 30...',
        steps: [
          'Start at 26 (an even number).',
          'Add 2 to get the next even number.',
          '26 + 2 = 28.'
        ]
      },
      {
        question: 'Marcus has 7 toy boats. He wants to give an equal number to each of 2 friends. What will happen?',
        options: ['Each friend gets 3, with 1 left', 'Each friend gets 4', 'Each friend gets 3', 'Each friend gets 3.5'],
        correctIndex: 0,
        explanation: '7 is odd. 7 ÷ 2 = 3 remainder 1. Each friend gets 3 with 1 leftover.',
        steps: [
          '7 is odd, so it cannot be split evenly.',
          '7 ÷ 2 = 3 with 1 left over.',
          'Each friend gets 3 boats, and 1 boat is left over.'
        ]
      },
      {
        question: 'Which of these numbers is EVEN?',
        options: ['75', '83', '91', '42'],
        correctIndex: 3,
        explanation: '42 is even because it ends in 2.',
        steps: [
          'Check the ones digit of each number.',
          '75→5 (odd), 83→3 (odd), 91→1 (odd), 42→2 (even).',
          '42 is the even number.'
        ]
      },
      {
        question: 'Is 100 even or odd?',
        options: ['Odd, because 1 is odd', 'Even, because it ends in 0', 'Odd, because 100 is large', 'Even, because 100 = 10 × 10'],
        correctIndex: 1,
        explanation: '100 is even because it ends in 0. Numbers ending in 0, 2, 4, 6, or 8 are even.',
        steps: [
          'Look at the ones digit of 100.',
          'The ones digit is 0.',
          '0 is an even digit, so 100 is even.'
        ]
      },
      {
        question: 'There are 16 students in a class. The teacher puts them into pairs. Will every student have a partner?',
        options: ['No, 16 is odd', 'Yes, 16 is even so everyone pairs up', 'No, 16 is too large', 'Yes, but one student has 2 partners'],
        correctIndex: 1,
        explanation: '16 is even (ends in 6), so it can be split into equal pairs with no leftovers.',
        steps: [
          '16 ends in 6, which is an even digit.',
          '16 is even, so it can be divided into 2 equal groups.',
          '16 ÷ 2 = 8 pairs. Everyone has a partner!'
        ]
      }
    ]
  },
  {
    id: 'multiplication-intro',
    title: 'Introduction to Multiplication',
    coverEmoji: '✖️',
    coverColor: '#7c3aed',
    topic: 'multiplication',
    grades: [2, 3],
    questions: [
      {
        question: 'There are 3 boats with 4 people in each boat. How many people are there in all?',
        options: ['7', '16', '12', '9'],
        correctIndex: 2,
        explanation: '3 groups of 4 = 3 × 4 = 12 people.',
        steps: [
          'Think: 3 groups of 4.',
          'Add the groups: 4 + 4 + 4 = 12.',
          '3 × 4 = 12 people in all.'
        ]
      },
      {
        question: 'Which addition matches 5 × 2?',
        options: ['5 + 5', '2 + 5', '2 + 2 + 2 + 2 + 2', '5 + 2'],
        correctIndex: 2,
        explanation: '5 × 2 means 5 groups of 2, which is 2 + 2 + 2 + 2 + 2 = 10.',
        steps: [
          '5 × 2 means 5 groups of 2.',
          'Write the addition: 2 + 2 + 2 + 2 + 2.',
          '2 + 2 + 2 + 2 + 2 = 10.'
        ]
      },
      {
        question: 'A Florida souvenir shop has 4 shelves with 6 snow globes on each. How many snow globes in all?',
        options: ['10', '22', '26', '24'],
        correctIndex: 3,
        explanation: '4 × 6 = 24 snow globes.',
        steps: [
          'Think: 4 groups of 6.',
          'Add: 6 + 6 + 6 + 6 = 24.',
          '4 × 6 = 24 snow globes.'
        ]
      },
      {
        question: 'What is 2 × 8?',
        options: ['10', '18', '14', '16'],
        correctIndex: 3,
        explanation: '2 × 8 = 16. Two groups of 8.',
        steps: [
          'Think: 2 groups of 8.',
          '8 + 8 = 16.',
          '2 × 8 = 16.'
        ]
      },
      {
        question: 'Which picture shows 3 × 5?',
        options: ['3 groups of 3', '5 groups of 5', '3 groups of 5', '5 groups of 3'],
        correctIndex: 2,
        explanation: '3 × 5 means 3 groups with 5 in each group.',
        steps: [
          'The first number tells how many groups.',
          'The second number tells how many in each group.',
          '3 × 5 = 3 groups of 5.'
        ]
      },
      {
        question: 'There are 6 bags and 2 seashells in each bag. How many seashells are there?',
        options: ['8', '10', '12', '14'],
        correctIndex: 2,
        explanation: '6 × 2 = 12 seashells.',
        steps: [
          'Think: 6 groups of 2.',
          '2 + 2 + 2 + 2 + 2 + 2 = 12.',
          '6 × 2 = 12 seashells.'
        ]
      },
      {
        question: 'What does the 4 represent in the equation 4 × 7 = 28?',
        options: ['The total', 'The number in each group', 'The number of groups', 'The difference'],
        correctIndex: 2,
        explanation: 'In 4 × 7, the 4 is the number of groups and the 7 is how many are in each group.',
        steps: [
          'In a multiplication equation, the first number is the number of groups.',
          'The second number is how many are in each group.',
          '4 × 7: 4 groups, 7 in each group.'
        ]
      },
      {
        question: 'A park has 5 picnic tables with 3 people sitting at each. How many people are at the picnic tables?',
        options: ['8', '20', '15', '10'],
        correctIndex: 2,
        explanation: '5 × 3 = 15 people.',
        steps: [
          'Think: 5 groups of 3.',
          '3 + 3 + 3 + 3 + 3 = 15.',
          '5 × 3 = 15 people.'
        ]
      }
    ]
  },
  {
    id: 'fractions-intro',
    title: 'Introduction to Fractions',
    coverEmoji: '🍕',
    coverColor: '#ea580c',
    topic: 'fractions',
    grades: [2, 3],
    questions: [
      {
        question: 'A pizza is cut into 4 equal pieces. You eat 1 piece. What fraction did you eat?',
        options: ['4/1', '1/3', '1/4', '4/4'],
        correctIndex: 2,
        explanation: '1 out of 4 equal pieces = 1/4. The bottom number tells how many equal parts total.',
        steps: [
          'The pizza is cut into 4 equal parts.',
          'You eat 1 part.',
          '1 out of 4 = 1/4.'
        ]
      },
      {
        question: 'A sandwich is cut into 2 equal parts. What fraction is ONE part?',
        options: ['2/1', '2/2', '1/3', '1/2'],
        correctIndex: 3,
        explanation: '1 out of 2 equal parts = 1/2, called one-half.',
        steps: [
          'The sandwich is cut into 2 equal parts.',
          'One part is 1 out of 2.',
          'The fraction is 1/2.'
        ]
      },
      {
        question: 'A Florida orange is divided into 3 equal sections. What fraction does 2 sections represent?',
        options: ['3/2', '1/3', '2/4', '2/3'],
        correctIndex: 3,
        explanation: '2 out of 3 equal sections = 2/3.',
        steps: [
          'The orange has 3 equal sections total.',
          'We are looking at 2 sections.',
          '2 out of 3 = 2/3.'
        ]
      },
      {
        question: 'In the fraction 3/4, what does the 4 (bottom number) tell you?',
        options: ['How many parts are shaded', 'The total number of equal parts', 'How many parts are missing', 'The size of each part'],
        correctIndex: 1,
        explanation: 'The denominator (bottom number) tells the total number of equal parts the whole is divided into.',
        steps: [
          'A fraction has two numbers.',
          'The top number (numerator) = parts being considered.',
          'The bottom number (denominator) = total equal parts.'
        ]
      },
      {
        question: 'Which fraction means the WHOLE is eaten?',
        options: ['0/4', '3/4', '4/4', '1/4'],
        correctIndex: 2,
        explanation: '4/4 means all 4 out of 4 parts are eaten — the whole thing!',
        steps: [
          'If everything is eaten, all parts are taken.',
          'If there are 4 parts and all 4 are eaten: 4/4.',
          '4/4 = 1 whole.'
        ]
      },
      {
        question: 'A seashell collection is shown in 3 equal groups. One group is given away. What fraction is left?',
        options: ['1/3', '3/3', '1/2', '2/3'],
        correctIndex: 3,
        explanation: '3 groups total, 1 is gone, so 2 out of 3 remain = 2/3.',
        steps: [
          'There are 3 equal groups total.',
          '1 group was given away: 3 - 1 = 2 groups remain.',
          '2 out of 3 groups = 2/3.'
        ]
      },
      {
        question: 'Which fraction is the smallest?',
        options: ['1/2', '1/4', '3/4', '1/3'],
        correctIndex: 1,
        explanation: '1/4 is the smallest. When the top is 1, a bigger bottom number means smaller pieces.',
        steps: [
          'All fractions have 1 on top.',
          'A bigger bottom means the whole is cut into more pieces.',
          'More pieces means each piece is smaller. 1/4 < 1/3 < 1/2.'
        ]
      },
      {
        question: 'Lily cuts a granola bar into 4 equal pieces and eats 2. What fraction did she eat?',
        options: ['4/2', '2/4', '1/4', '4/4'],
        correctIndex: 1,
        explanation: '2 out of 4 equal pieces = 2/4 (which also equals 1/2).',
        steps: [
          'The bar is cut into 4 equal pieces.',
          'Lily eats 2 pieces.',
          '2 out of 4 = 2/4.'
        ]
      }
    ]
  },
  {
    id: 'money-coins',
    title: 'Counting Money',
    coverEmoji: '🪙',
    coverColor: '#ca8a04',
    topic: 'measurement',
    grades: [2, 3],
    questions: [
      {
        question: 'How much is 2 quarters worth?',
        options: ['20 cents', '10 cents', '50 cents', '25 cents'],
        correctIndex: 2,
        explanation: '1 quarter = 25 cents. 2 quarters = 25 + 25 = 50 cents.',
        steps: [
          'One quarter = 25 cents.',
          'Two quarters: 25 + 25.',
          '2 quarters = 50 cents.'
        ]
      },
      {
        question: 'You have 1 quarter, 2 dimes, and 1 nickel. How much money do you have?',
        options: ['55 cents', '50 cents', '45 cents', '60 cents'],
        correctIndex: 0,
        explanation: '25 + 10 + 10 + 5 = 50 cents.',
        steps: [
          'Quarter = 25¢, dime = 10¢, nickel = 5¢.',
          'Add: 25 + 10 + 10 + 5.',
          '25 + 20 + 5 = 50 cents.'
        ]
      },
      {
        question: 'A Florida postcard costs 75 cents. You pay with 3 quarters. Do you have enough?',
        options: ['No, 3 quarters = 60 cents', 'Yes, 3 quarters = 75 cents and that is exactly right', 'No, 3 quarters = 90 cents', 'Yes, 3 quarters = 100 cents'],
        correctIndex: 1,
        explanation: '3 × 25 = 75 cents. That is exactly the right amount.',
        steps: [
          'Each quarter = 25 cents.',
          '3 quarters: 25 + 25 + 25 = 75 cents.',
          '75 = 75, so you have exactly enough.'
        ]
      },
      {
        question: 'How many dimes equal 1 dollar ($1.00)?',
        options: ['5', '20', '10', '100'],
        correctIndex: 2,
        explanation: '1 dime = 10 cents. 10 × 10 = 100 cents = $1.00.',
        steps: [
          '1 dollar = 100 cents.',
          '1 dime = 10 cents.',
          '100 ÷ 10 = 10 dimes.'
        ]
      },
      {
        question: 'You have 4 dimes and 3 pennies. How much money is that?',
        options: ['34 cents', '7 cents', '43 cents', '47 cents'],
        correctIndex: 2,
        explanation: '4 dimes = 40 cents. 3 pennies = 3 cents. 40 + 3 = 43 cents.',
        steps: [
          '4 dimes = 4 × 10 = 40 cents.',
          '3 pennies = 3 × 1 = 3 cents.',
          '40 + 3 = 43 cents.'
        ]
      },
      {
        question: 'A small toy at the beach shop costs 62 cents. You have 2 quarters, 1 dime, and 2 pennies. Do you have enough?',
        options: ['No, you only have 52 cents', 'No, you only have 57 cents', 'Yes, you have exactly 62 cents', 'Yes, you have 72 cents'],
        correctIndex: 2,
        explanation: '2 quarters (50) + 1 dime (10) + 2 pennies (2) = 62 cents. Exactly enough.',
        steps: [
          '2 quarters = 50 cents.',
          '1 dime = 10 cents. Total so far: 60 cents.',
          '2 pennies = 2 cents. 60 + 2 = 62 cents. Exactly right!'
        ]
      },
      {
        question: 'What is the value of 5 nickels?',
        options: ['5 cents', '50 cents', '15 cents', '25 cents'],
        correctIndex: 3,
        explanation: '1 nickel = 5 cents. 5 × 5 = 25 cents.',
        steps: [
          'Each nickel = 5 cents.',
          'Count by 5s: 5, 10, 15, 20, 25.',
          '5 nickels = 25 cents.'
        ]
      },
      {
        question: 'You buy a cup of lemonade at a stand for 45 cents. You pay with 2 quarters. How much change do you get back?',
        options: ['15 cents', '5 cents', '10 cents', '20 cents'],
        correctIndex: 1,
        explanation: '2 quarters = 50 cents. 50 - 45 = 5 cents change.',
        steps: [
          '2 quarters = 50 cents.',
          'Lemonade costs 45 cents.',
          '50 - 45 = 5 cents change.'
        ]
      }
    ]
  },
  {
    id: 'measurement-grade2',
    title: 'Measurement with Rulers',
    coverEmoji: '📐',
    coverColor: '#0369a1',
    topic: 'measurement',
    grades: [2, 3],
    questions: [
      {
        question: 'You measure a crayon and it is 9 centimeters long. Your pencil is 14 centimeters long. How much longer is the pencil?',
        options: ['4 cm', '6 cm', '5 cm', '23 cm'],
        correctIndex: 2,
        explanation: '14 - 9 = 5 centimeters longer.',
        steps: [
          'Pencil: 14 cm. Crayon: 9 cm.',
          'To find the difference, subtract: 14 - 9.',
          '14 - 9 = 5 cm longer.'
        ]
      },
      {
        question: 'A ruler shows a shell is 7 centimeters long. In inches, would that be closest to which measurement?',
        options: ['About 7 inches', 'About 14 inches', 'About 3 inches', 'About 1 inch'],
        correctIndex: 2,
        explanation: '1 inch ≈ 2.54 cm. 7 cm is about 2.75 inches, closest to 3 inches.',
        steps: [
          '1 inch is about 2.5 centimeters.',
          '7 cm ÷ 2.5 ≈ 2.8 inches.',
          'That is closest to about 3 inches.'
        ]
      },
      {
        question: 'You measure a piece of ribbon. It is 24 inches long. You cut off 9 inches. How much ribbon is left?',
        options: ['33 inches', '14 inches', '16 inches', '15 inches'],
        correctIndex: 3,
        explanation: '24 - 9 = 15 inches of ribbon left.',
        steps: [
          'Start with 24 inches of ribbon.',
          'Cut off 9 inches: 24 - 9.',
          '24 - 9 = 15 inches left.'
        ]
      },
      {
        question: 'Where do you place the object when measuring with a ruler?',
        options: ['Anywhere on the ruler', 'At the 1-inch mark', 'At the end with no numbers', 'At the zero end of the ruler'],
        correctIndex: 3,
        explanation: 'Always start measuring at the zero (0) mark on the ruler.',
        steps: [
          'Find the zero (0) mark on the ruler.',
          'Line up one end of the object at zero.',
          'Read the number where the other end stops.'
        ]
      },
      {
        question: 'A manatee poster is 32 centimeters wide and 48 centimeters tall. What is the difference between the width and the height?',
        options: ['80 cm', '14 cm', '16 cm', '18 cm'],
        correctIndex: 2,
        explanation: '48 - 32 = 16 centimeters.',
        steps: [
          'Height: 48 cm. Width: 32 cm.',
          'Difference: 48 - 32.',
          '48 - 32 = 16 cm taller than wide.'
        ]
      },
      {
        question: 'A garden path in Orlando is 15 feet long. Another path is 8 feet long. What is the total length of both paths?',
        options: ['7 feet', '24 feet', '23 feet', '22 feet'],
        correctIndex: 2,
        explanation: '15 + 8 = 23 feet total.',
        steps: [
          'Path 1: 15 feet. Path 2: 8 feet.',
          'Add them: 15 + 8.',
          '15 + 8 = 23 feet total.'
        ]
      },
      {
        question: 'Which unit would you use to measure the length of a school hallway?',
        options: ['Centimeters', 'Millimeters', 'Feet or meters', 'Inches'],
        correctIndex: 2,
        explanation: 'A hallway is very long, so feet or meters (larger units) make the most sense.',
        steps: [
          'Think about how long a school hallway is — very long!',
          'Millimeters and centimeters are too small.',
          'Feet or meters are large units good for measuring hallways.'
        ]
      },
      {
        question: 'A piece of string is 18 cm long. You need a piece that is 25 cm long. How much more string do you need?',
        options: ['6 cm', '43 cm', '8 cm', '7 cm'],
        correctIndex: 3,
        explanation: '25 - 18 = 7 centimeters more.',
        steps: [
          'You have 18 cm and need 25 cm.',
          'Subtract: 25 - 18.',
          '25 - 18 = 7 cm more needed.'
        ]
      }
    ]
  },
  {
    id: 'word-problems-grade2',
    title: 'Two-Step Word Problems',
    coverEmoji: '🧩',
    coverColor: '#6d28d9',
    topic: 'word-problems',
    grades: [2, 3],
    questions: [
      {
        question: 'A Florida aquarium has 35 fish. They get 24 more fish on Monday. On Tuesday, 18 fish are moved to a new tank. How many fish are in the aquarium now?',
        options: ['42', '41', '77', '43'],
        correctIndex: 1,
        explanation: 'Step 1: 35 + 24 = 59. Step 2: 59 - 18 = 41 fish.',
        steps: [
          'Step 1: Add Monday\'s fish: 35 + 24 = 59.',
          'Step 2: Subtract fish moved: 59 - 18.',
          '59 - 18 = 41 fish remaining.'
        ]
      },
      {
        question: 'Maria has $1.00. She buys a pencil for 35 cents and an eraser for 25 cents. How much money does she have left?',
        options: ['30 cents', '40 cents', '60 cents', '50 cents'],
        correctIndex: 1,
        explanation: 'Step 1: 35 + 25 = 60 cents spent. Step 2: 100 - 60 = 40 cents left.',
        steps: [
          'Step 1: Find total spent: 35 + 25 = 60 cents.',
          'Step 2: Subtract from $1.00 (100 cents): 100 - 60.',
          '100 - 60 = 40 cents left.'
        ]
      },
      {
        question: 'A class collects shells for a project. Monday: 47 shells. Tuesday: 36 shells. They need 100 shells total. How many more do they still need?',
        options: ['13', '83', '27', '17'],
        correctIndex: 3,
        explanation: 'Step 1: 47 + 36 = 83. Step 2: 100 - 83 = 17 more shells needed.',
        steps: [
          'Step 1: Add shells found: 47 + 36 = 83.',
          'Step 2: Subtract from goal: 100 - 83.',
          '100 - 83 = 17 more shells needed.'
        ]
      },
      {
        question: 'There are 8 tables in the cafeteria. Each table has 6 chairs. 12 chairs are broken and removed. How many chairs are there now?',
        options: ['36', '48', '60', '40'],
        correctIndex: 0,
        explanation: 'Step 1: 8 × 6 = 48 chairs total. Step 2: 48 - 12 = 36 chairs.',
        steps: [
          'Step 1: Find total chairs: 8 tables × 6 chairs = 48.',
          'Step 2: Remove broken chairs: 48 - 12.',
          '48 - 12 = 36 chairs remaining.'
        ]
      },
      {
        question: 'Jake has 125 baseball cards. He gives 34 to his brother. Then he buys 50 more. How many cards does Jake have now?',
        options: ['141', '151', '161', '209'],
        correctIndex: 0,
        explanation: 'Step 1: 125 - 34 = 91. Step 2: 91 + 50 = 141 cards.',
        steps: [
          'Step 1: After giving away cards: 125 - 34 = 91.',
          'Step 2: After buying more: 91 + 50.',
          '91 + 50 = 141 cards.'
        ]
      },
      {
        question: 'A bakery makes 256 muffins. They sell 175 in the morning. In the afternoon they bake 80 more. How many muffins do they have now?',
        options: ['171', '151', '161', '431'],
        correctIndex: 2,
        explanation: 'Step 1: 256 - 175 = 81. Step 2: 81 + 80 = 161 muffins.',
        steps: [
          'Step 1: After morning sales: 256 - 175 = 81.',
          'Step 2: Add afternoon batch: 81 + 80.',
          '81 + 80 = 161 muffins.'
        ]
      },
      {
        question: 'There are 3 boats. Each boat holds 9 people. 7 people get off at the first stop. How many people are still on the boats?',
        options: ['27', '20', '34', '16'],
        correctIndex: 1,
        explanation: 'Step 1: 3 × 9 = 27 people total. Step 2: 27 - 7 = 20 people left.',
        steps: [
          'Step 1: Total people: 3 boats × 9 each = 27.',
          'Step 2: Subtract those who got off: 27 - 7.',
          '27 - 7 = 20 people still on the boats.'
        ]
      },
      {
        question: 'A zoo in Tampa had 314 visitors on Friday. On Saturday they had 267 visitors. On Sunday 95 visitors left early. How many total visitors were there who stayed through their whole visit (Friday + Saturday - those who left)?',
        options: ['486', '676', '581', '486'],
        correctIndex: 0,
        explanation: 'Step 1: 314 + 267 = 581. Step 2: 581 - 95 = 486 visitors who stayed.',
        steps: [
          'Step 1: Total visitors: 314 + 267 = 581.',
          'Step 2: Subtract early departures: 581 - 95.',
          '581 - 95 = 486 visitors.'
        ]
      }
    ]
  },

{
    id: 'multiplication-facts-g3',
    title: 'Multiplication Facts (0–10)',
    coverEmoji: '✖️',
    coverColor: '#7c3aed',
    topic: 'multiplication',
    grades: [3, 4],
    questions: [
      {
        question: 'A Florida orange grove has 6 rows of trees with 7 trees in each row. How many trees are in the grove?',
        options: ['36', '42', '48', '54'],
        correctIndex: 1,
        explanation: '6 × 7 = 42. Multiply 6 rows by 7 trees per row to get 42 trees total.',
        steps: [
          'Identify the groups: 6 rows, 7 trees each.',
          'Multiply: 6 × 7.',
          '6 × 7 = 42.',
          'There are 42 trees in the grove.'
        ]
      },
      {
        question: 'What is 8 × 9?',
        options: ['63', '81', '72', '64'],
        correctIndex: 2,
        explanation: '8 × 9 = 72. You can think of it as 8 × 10 = 80, then subtract 8 to get 72.',
        steps: [
          'Use a near-ten strategy: 8 × 10 = 80.',
          'Subtract one group of 8: 80 − 8 = 72.',
          '8 × 9 = 72.'
        ]
      },
      {
        question: 'A manatee swims 5 miles each day. How many miles does it swim in 9 days?',
        options: ['45', '54', '40', '50'],
        correctIndex: 0,
        explanation: '5 × 9 = 45. Multiply 5 miles per day by 9 days.',
        steps: [
          'Miles per day: 5. Number of days: 9.',
          'Multiply: 5 × 9.',
          'Fives pattern: 5, 10, 15, 20, 25, 30, 35, 40, 45.',
          '5 × 9 = 45 miles.'
        ]
      },
      {
        question: 'Which multiplication fact equals 0?',
        options: ['1 × 10', '0 × 7', '7 × 1', '5 × 2'],
        correctIndex: 1,
        explanation: 'Any number multiplied by 0 equals 0. So 0 × 7 = 0.',
        steps: [
          'Remember the Zero Property of Multiplication.',
          'Any number times 0 is always 0.',
          '0 × 7 = 0.'
        ]
      },
      {
        question: 'There are 4 pelicans, and each pelican caught 6 fish. How many fish were caught in all?',
        options: ['18', '24', '20', '28'],
        correctIndex: 1,
        explanation: '4 × 6 = 24. Multiply 4 pelicans by 6 fish each.',
        steps: [
          'Groups: 4 pelicans. Items per group: 6 fish.',
          'Multiply: 4 × 6.',
          '4 × 6 = 24 fish total.'
        ]
      },
      {
        question: 'What is 7 × 7?',
        options: ['42', '49', '56', '48'],
        correctIndex: 1,
        explanation: '7 × 7 = 49. This is a square fact — 7 groups of 7.',
        steps: [
          'You are multiplying 7 by itself.',
          '7 × 7 is a square number.',
          '7 × 7 = 49.'
        ]
      },
      {
        question: 'A bag holds 3 seashells. Mia collected 10 bags at the beach. How many seashells does she have?',
        options: ['13', '27', '33', '30'],
        correctIndex: 3,
        explanation: '3 × 10 = 30. Multiplying by 10 adds a zero to the ones digit.',
        steps: [
          'Bags: 10. Shells per bag: 3.',
          'Multiply: 3 × 10.',
          'Multiplying by 10: place a zero after the digit: 30.',
          'Mia has 30 seashells.'
        ]
      },
      {
        question: 'Which equation matches the array shown: ● ● ● ● ●  / ● ● ● ● ●  / ● ● ● ● ●',
        options: ['3 + 5 = 8', '5 × 5 = 25', '3 × 5 = 15', '5 × 3 = 10'],
        correctIndex: 2,
        explanation: 'The array has 3 rows and 5 columns, so the equation is 3 × 5 = 15.',
        steps: [
          'Count the rows: 3.',
          'Count the columns: 5.',
          'An array equation is rows × columns.',
          '3 × 5 = 15.'
        ]
      }
    ]
  },
  {
    id: 'division-basics',
    title: 'Division Facts and Sharing',
    coverEmoji: '➗',
    coverColor: '#0891b2',
    topic: 'division',
    grades: [3, 4],
    questions: [
      {
        question: 'A park ranger has 24 trail maps to hand out equally to 4 visitor groups. How many maps does each group get?',
        options: ['5', '8', '6', '7'],
        correctIndex: 2,
        explanation: '24 ÷ 4 = 6. Divide 24 maps among 4 groups: 24 ÷ 4 = 6 maps per group.',
        steps: [
          'Total maps: 24. Number of groups: 4.',
          'Ask: what times 4 equals 24?',
          '4 × 6 = 24, so 24 ÷ 4 = 6.',
          'Each group gets 6 maps.'
        ]
      },
      {
        question: 'What is 36 ÷ 9?',
        options: ['3', '5', '4', '6'],
        correctIndex: 2,
        explanation: '36 ÷ 9 = 4. Think: 9 × 4 = 36.',
        steps: [
          'Think of the related multiplication fact.',
          '9 × ? = 36.',
          '9 × 4 = 36.',
          '36 ÷ 9 = 4.'
        ]
      },
      {
        question: '18 sea turtles are divided equally among 3 nesting beaches. How many turtles are on each beach?',
        options: ['4', '5', '9', '6'],
        correctIndex: 3,
        explanation: '18 ÷ 3 = 6. Three groups from 18: 3 × 6 = 18, so 18 ÷ 3 = 6.',
        steps: [
          'Total turtles: 18. Beaches: 3.',
          'Divide: 18 ÷ 3.',
          'Use multiplication: 3 × 6 = 18.',
          'Each beach has 6 turtles.'
        ]
      },
      {
        question: 'Which equation is in the same fact family as 7 × 8 = 56?',
        options: ['56 + 7 = 63', '56 ÷ 7 = 8', '7 + 8 = 56', '56 × 7 = 8'],
        correctIndex: 1,
        explanation: '56 ÷ 7 = 8 is the related division fact. Fact families use the same three numbers.',
        steps: [
          'The fact family uses numbers 7, 8, and 56.',
          'Multiplication: 7 × 8 = 56 and 8 × 7 = 56.',
          'Division: 56 ÷ 7 = 8 and 56 ÷ 8 = 7.',
          '56 ÷ 7 = 8 is in the same fact family.'
        ]
      },
      {
        question: 'What is 0 ÷ 5?',
        options: ['5', '1', '0', 'undefined'],
        correctIndex: 2,
        explanation: '0 ÷ 5 = 0. Zero divided by any number (except 0) equals 0.',
        steps: [
          'Think: how many times does 5 go into 0?',
          '5 × 0 = 0.',
          'So 0 ÷ 5 = 0.'
        ]
      },
      {
        question: 'Carlos has 45 stickers to share equally with 9 friends (including himself). How many stickers does each person get?',
        options: ['4', '6', '5', '9'],
        correctIndex: 2,
        explanation: '45 ÷ 9 = 5. Divide 45 by 9 people: 9 × 5 = 45.',
        steps: [
          'Total stickers: 45. People sharing: 9.',
          'Divide: 45 ÷ 9.',
          '9 × 5 = 45.',
          'Each person gets 5 stickers.'
        ]
      },
      {
        question: 'What is 63 ÷ 7?',
        options: ['8', '9', '7', '6'],
        correctIndex: 1,
        explanation: '63 ÷ 7 = 9. Think: 7 × 9 = 63.',
        steps: [
          'Think of the related fact: 7 × ? = 63.',
          'Count by 7s: 7, 14, 21, 28, 35, 42, 49, 56, 63.',
          'That is 9 sevens.',
          '63 ÷ 7 = 9.'
        ]
      },
      {
        question: 'A boat tour has 32 life jackets to put equally into 8 storage bins. How many go in each bin?',
        options: ['5', '3', '6', '4'],
        correctIndex: 3,
        explanation: '32 ÷ 8 = 4. Think: 8 × 4 = 32.',
        steps: [
          'Total life jackets: 32. Bins: 8.',
          'Divide: 32 ÷ 8.',
          '8 × 4 = 32.',
          'Each bin holds 4 life jackets.'
        ]
      }
    ]
  },
  {
    id: 'fractions-number-line',
    title: 'Fractions on a Number Line',
    coverEmoji: '📏',
    coverColor: '#059669',
    topic: 'fractions',
    grades: [3, 4, 5],
    questions: [
      {
        question: 'A number line goes from 0 to 1 and is split into 4 equal parts. What fraction is at the second mark?',
        options: ['1/4', '3/4', '2/4', '1/2'],
        correctIndex: 2,
        explanation: '2/4 is at the second mark. Each part is 1/4, and the second mark is 2 parts from 0.',
        steps: [
          'The number line is divided into 4 equal parts.',
          'Each part has a size of 1/4.',
          'The second mark is 2 parts from 0.',
          '2 × 1/4 = 2/4.'
        ]
      },
      {
        question: 'On a number line from 0 to 1 divided into 3 equal parts, where is 2/3 located?',
        options: ['At the first mark', 'At the third mark', 'Halfway between 0 and 1', 'At the second mark'],
        correctIndex: 3,
        explanation: '2/3 is at the second mark. The line is divided into thirds; 2/3 is 2 parts from 0.',
        steps: [
          'Divide the number line into 3 equal parts.',
          'Each mark is one third from the previous.',
          'First mark = 1/3, second mark = 2/3, third mark = 3/3 = 1.',
          '2/3 is at the second mark.'
        ]
      },
      {
        question: 'Jaylen marks 1/2 on a number line from 0 to 1. How many equal parts is the number line divided into?',
        options: ['1', '4', '2', '3'],
        correctIndex: 2,
        explanation: 'To show halves, the number line must be divided into 2 equal parts.',
        steps: [
          'The fraction 1/2 has a denominator of 2.',
          'The denominator tells how many equal parts to divide the line into.',
          'Divide the line into 2 equal parts.',
          '1/2 is at the first mark.'
        ]
      },
      {
        question: 'A number line from 0 to 1 is divided into 8 equal parts. Which fraction is at the third mark?',
        options: ['1/8', '4/8', '3/8', '2/8'],
        correctIndex: 2,
        explanation: '3/8 is at the third mark. Each part is 1/8, so 3 parts = 3/8.',
        steps: [
          'Each part = 1/8.',
          'Count: first mark = 1/8, second = 2/8, third = 3/8.',
          '3/8 is at the third mark.'
        ]
      },
      {
        question: 'On a number line, 4/4 is the same as which whole number?',
        options: ['0', '4', '2', '1'],
        correctIndex: 3,
        explanation: '4/4 = 1. When the numerator equals the denominator, the fraction equals 1 whole.',
        steps: [
          '4/4 means 4 out of 4 equal parts.',
          'When you have all the parts, you have the whole.',
          '4/4 = 1.'
        ]
      },
      {
        question: 'Sofia places a point at 5/6 on a number line from 0 to 1. Is her point closer to 0 or to 1?',
        options: ['Closer to 0', 'Exactly in the middle', 'Closer to 1', 'At 1'],
        correctIndex: 2,
        explanation: '5/6 is close to 1. Since 5/6 > 1/2, it is closer to 1 than to 0.',
        steps: [
          '5/6 means 5 out of 6 equal parts.',
          'The midpoint of the number line is 3/6 = 1/2.',
          '5/6 > 3/6, so it is past the midpoint.',
          '5/6 is closer to 1.'
        ]
      },
      {
        question: 'A number line from 0 to 2 is divided so each whole number section has 4 equal parts. Where is the mark for 1 2/4?',
        options: ['At 1, two marks past it', 'At 2', 'Right at 1', 'Halfway between 0 and 1'],
        correctIndex: 0,
        explanation: '1 2/4 is located at the whole number 1, then 2 marks past it (since each section has 4 parts).',
        steps: [
          'The whole number part is 1 — start there.',
          'The fraction part is 2/4 — move 2 marks past 1.',
          '1 2/4 is 2 marks past the 1 on the number line.'
        ]
      },
      {
        question: 'Which fraction is represented by a point exactly halfway between 0 and 1 on a number line divided into 6 equal parts?',
        options: ['2/6', '1/6', '4/6', '3/6'],
        correctIndex: 3,
        explanation: '3/6 is exactly halfway. Half of 6 is 3, so 3/6 = 1/2 is the midpoint.',
        steps: [
          'The number line has 6 equal parts.',
          'Halfway means the middle mark.',
          'The middle of 6 is at 3.',
          '3/6 is the halfway point.'
        ]
      }
    ]
  },
  {
    id: 'area-square-units',
    title: 'Area Using Square Units',
    coverEmoji: '⬛',
    coverColor: '#b45309',
    topic: 'area',
    grades: [3, 4, 5],
    questions: [
      {
        question: 'A rectangle is 5 units long and 3 units wide. What is its area?',
        options: ['8 square units', '16 square units', '15 square units', '18 square units'],
        correctIndex: 2,
        explanation: 'Area = length × width = 5 × 3 = 15 square units.',
        steps: [
          'Write the formula: Area = length × width.',
          'Substitute values: 5 × 3.',
          '5 × 3 = 15.',
          'Area = 15 square units.'
        ]
      },
      {
        question: 'A square sandbox at a Florida park has sides that are each 4 feet long. What is the area of the sandbox?',
        options: ['8 square feet', '12 square feet', '20 square feet', '16 square feet'],
        correctIndex: 3,
        explanation: 'Area = 4 × 4 = 16 square feet. A square has equal sides.',
        steps: [
          'A square has all sides equal: 4 feet.',
          'Area = side × side = 4 × 4.',
          '4 × 4 = 16.',
          'Area = 16 square feet.'
        ]
      },
      {
        question: 'A tile floor is covered with unit squares. There are 6 rows with 8 squares in each row. What is the area of the floor?',
        options: ['14 square units', '28 square units', '48 square units', '42 square units'],
        correctIndex: 2,
        explanation: '6 rows × 8 squares per row = 48 square units.',
        steps: [
          'Count rows: 6. Squares per row: 8.',
          'Multiply: 6 × 8.',
          '6 × 8 = 48.',
          'Area = 48 square units.'
        ]
      },
      {
        question: 'A rectangular garden is 9 meters long and 2 meters wide. What is its area?',
        options: ['11 sq m', '22 sq m', '18 sq m', '20 sq m'],
        correctIndex: 2,
        explanation: 'Area = 9 × 2 = 18 square meters.',
        steps: [
          'Length = 9 m, Width = 2 m.',
          'Area = length × width.',
          '9 × 2 = 18.',
          'Area = 18 square meters.'
        ]
      },
      {
        question: 'Two rectangles are shown. Rectangle A is 4 × 6 and Rectangle B is 3 × 8. Which has the greater area?',
        options: ['Rectangle A (20 sq units)', 'Rectangle B (30 sq units)', 'They are equal (24 sq units)', 'Rectangle A (24 sq units)'],
        correctIndex: 2,
        explanation: 'Rectangle A: 4 × 6 = 24. Rectangle B: 3 × 8 = 24. They are equal!',
        steps: [
          'Area of Rectangle A: 4 × 6 = 24 square units.',
          'Area of Rectangle B: 3 × 8 = 24 square units.',
          '24 = 24, so the areas are equal.'
        ]
      },
      {
        question: 'A shape is made of two rectangles joined together. The first is 2 × 5 and the second is 3 × 4. What is the total area?',
        options: ['28 square units', '22 square units', '32 square units', '18 square units'],
        correctIndex: 1,
        explanation: 'Total area = (2 × 5) + (3 × 4) = 10 + 12 = 22 square units.',
        steps: [
          'Find the area of each rectangle separately.',
          'First rectangle: 2 × 5 = 10 square units.',
          'Second rectangle: 3 × 4 = 12 square units.',
          'Total: 10 + 12 = 22 square units.'
        ]
      },
      {
        question: 'Lena wants to cover a 7 × 7 square with unit tiles. How many tiles does she need?',
        options: ['28', '56', '42', '49'],
        correctIndex: 3,
        explanation: '7 × 7 = 49. She needs 49 unit tiles to cover the square.',
        steps: [
          'The square is 7 units on each side.',
          'Area = 7 × 7.',
          '7 × 7 = 49.',
          'She needs 49 tiles.'
        ]
      },
      {
        question: 'A classroom bulletin board is 10 feet long and 3 feet tall. What is the area of the board?',
        options: ['13 sq ft', '27 sq ft', '33 sq ft', '30 sq ft'],
        correctIndex: 3,
        explanation: 'Area = 10 × 3 = 30 square feet.',
        steps: [
          'Length = 10 ft, Height = 3 ft.',
          'Area = length × width.',
          '10 × 3 = 30.',
          'Area = 30 square feet.'
        ]
      }
    ]
  },
  {
    id: 'perimeter-grade3',
    title: 'Finding Perimeter',
    coverEmoji: '📐',
    coverColor: '#dc2626',
    topic: 'perimeter',
    grades: [3, 4, 5],
    questions: [
      {
        question: 'A rectangular swimming pool is 8 meters long and 5 meters wide. What is the perimeter of the pool?',
        options: ['26 m', '40 m', '13 m', '30 m'],
        correctIndex: 0,
        explanation: 'Perimeter = 2 × (8 + 5) = 2 × 13 = 26 meters.',
        steps: [
          'Perimeter = sum of all sides.',
          'A rectangle has 2 lengths and 2 widths.',
          'P = 8 + 8 + 5 + 5 = 26 m.',
          'Or use the formula: P = 2 × (l + w) = 2 × 13 = 26 m.'
        ]
      },
      {
        question: 'A square sandbox has sides of 6 feet each. What is its perimeter?',
        options: ['12 ft', '36 ft', '30 ft', '24 ft'],
        correctIndex: 3,
        explanation: 'Perimeter = 4 × 6 = 24 feet. A square has 4 equal sides.',
        steps: [
          'A square has 4 equal sides, each 6 feet.',
          'Perimeter = 4 × side length.',
          '4 × 6 = 24 feet.'
        ]
      },
      {
        question: 'A triangle has sides of 5 cm, 7 cm, and 9 cm. What is its perimeter?',
        options: ['19 cm', '21 cm', '22 cm', '16 cm'],
        correctIndex: 1,
        explanation: 'Perimeter = 5 + 7 + 9 = 21 cm. Add all three sides.',
        steps: [
          'Write all the side lengths: 5, 7, 9.',
          'Add them: 5 + 7 = 12.',
          '12 + 9 = 21.',
          'Perimeter = 21 cm.'
        ]
      },
      {
        question: 'A rectangle has a perimeter of 20 inches and a width of 3 inches. What is its length?',
        options: ['7 inches', '10 inches', '14 inches', '17 inches'],
        correctIndex: 0,
        explanation: 'P = 2l + 2w → 20 = 2l + 6 → 2l = 14 → l = 7 inches.',
        steps: [
          'Write the formula: P = 2l + 2w.',
          'Substitute: 20 = 2l + 2(3) = 2l + 6.',
          '2l = 20 − 6 = 14.',
          'l = 14 ÷ 2 = 7 inches.'
        ]
      },
      {
        question: 'Dario wants to put a fence around a rectangular yard that is 12 feet long and 8 feet wide. How much fence does he need?',
        options: ['20 ft', '96 ft', '40 ft', '48 ft'],
        correctIndex: 2,
        explanation: 'Perimeter = 2 × (12 + 8) = 2 × 20 = 40 feet.',
        steps: [
          'The fence goes around the perimeter.',
          'P = 2 × (length + width).',
          'P = 2 × (12 + 8) = 2 × 20.',
          'P = 40 feet of fence needed.'
        ]
      },
      {
        question: 'A regular pentagon (5 equal sides) has a side length of 4 cm. What is its perimeter?',
        options: ['16 cm', '24 cm', '20 cm', '9 cm'],
        correctIndex: 2,
        explanation: 'Perimeter = 5 × 4 = 20 cm. Multiply the number of sides by the side length.',
        steps: [
          'A regular pentagon has 5 equal sides.',
          'Each side = 4 cm.',
          'Perimeter = 5 × 4.',
          'P = 20 cm.'
        ]
      },
      {
        question: 'Two shapes have the same perimeter of 24 cm. Shape A is a square. What is the side length of Shape A?',
        options: ['8 cm', '4 cm', '12 cm', '6 cm'],
        correctIndex: 3,
        explanation: 'A square with perimeter 24 cm has sides of 24 ÷ 4 = 6 cm.',
        steps: [
          'A square has 4 equal sides.',
          'Perimeter = 4 × side.',
          '4 × side = 24.',
          'Side = 24 ÷ 4 = 6 cm.'
        ]
      },
      {
        question: 'A shape has these side lengths: 3, 3, 5, 5, and 4. What is its perimeter?',
        options: ['16', '24', '20', '18'],
        correctIndex: 2,
        explanation: 'Add all sides: 3 + 3 + 5 + 5 + 4 = 20.',
        steps: [
          'List all side lengths: 3, 3, 5, 5, 4.',
          'Add: 3 + 3 = 6.',
          '6 + 5 + 5 = 16.',
          '16 + 4 = 20.'
        ]
      }
    ]
  },
  {
    id: 'time-elapsed',
    title: 'Elapsed Time',
    coverEmoji: '🕐',
    coverColor: '#7c3aed',
    topic: 'time',
    grades: [3, 4],
    questions: [
      {
        question: 'A school field trip to the Everglades starts at 8:00 AM and ends at 11:30 AM. How long is the field trip?',
        options: ['2 hours 30 minutes', '4 hours', '3 hours', '3 hours 30 minutes'],
        correctIndex: 3,
        explanation: 'From 8:00 AM to 11:30 AM is 3 hours and 30 minutes.',
        steps: [
          'Start: 8:00 AM. End: 11:30 AM.',
          'From 8:00 to 11:00 = 3 hours.',
          'From 11:00 to 11:30 = 30 minutes.',
          'Total: 3 hours 30 minutes.'
        ]
      },
      {
        question: 'Maya started her homework at 4:15 PM and finished at 5:45 PM. How long did she work on homework?',
        options: ['2 hours', '1 hour 15 minutes', '1 hour 30 minutes', '2 hours 30 minutes'],
        correctIndex: 2,
        explanation: 'From 4:15 to 5:45 is 1 hour and 30 minutes.',
        steps: [
          'Start: 4:15 PM. End: 5:45 PM.',
          'From 4:15 to 5:15 = 1 hour.',
          'From 5:15 to 5:45 = 30 minutes.',
          'Total: 1 hour 30 minutes.'
        ]
      },
      {
        question: 'A movie starts at 2:10 PM and is 1 hour and 45 minutes long. What time does it end?',
        options: ['3:55 PM', '4:00 PM', '3:45 PM', '3:10 PM'],
        correctIndex: 0,
        explanation: '2:10 + 1 hour = 3:10, then + 45 minutes = 3:55 PM.',
        steps: [
          'Start: 2:10 PM.',
          'Add 1 hour: 2:10 + 1:00 = 3:10 PM.',
          'Add 45 minutes: 3:10 + 0:45 = 3:55 PM.',
          'The movie ends at 3:55 PM.'
        ]
      },
      {
        question: 'The beach opened at 7:30 AM and closed at 6:00 PM. How many hours was it open?',
        options: ['9 hours 30 minutes', '11 hours', '10 hours 30 minutes', '12 hours'],
        correctIndex: 2,
        explanation: 'From 7:30 AM to 6:00 PM is 10 hours and 30 minutes.',
        steps: [
          'Start: 7:30 AM. End: 6:00 PM.',
          'From 7:30 AM to 12:00 PM (noon) = 4 hours 30 minutes.',
          'From 12:00 PM to 6:00 PM = 6 hours.',
          'Total: 4h 30m + 6h = 10 hours 30 minutes.'
        ]
      },
      {
        question: 'Carlos began reading at 3:20 PM. He read for 40 minutes. What time did he stop?',
        options: ['3:60 PM', '4:10 PM', '4:00 PM', '3:50 PM'],
        correctIndex: 2,
        explanation: '3:20 + 40 minutes = 4:00 PM.',
        steps: [
          'Start time: 3:20 PM.',
          'Add 40 minutes to the minutes: 20 + 40 = 60.',
          '60 minutes = 1 hour, so carry 1 hour.',
          '3 hours + 1 hour = 4 hours → 4:00 PM.'
        ]
      },
      {
        question: 'A bus left the stop at 9:45 AM and arrived at 10:20 AM. How long was the ride?',
        options: ['45 minutes', '25 minutes', '35 minutes', '30 minutes'],
        correctIndex: 2,
        explanation: 'From 9:45 to 10:20 is 35 minutes.',
        steps: [
          'Start: 9:45 AM. End: 10:20 AM.',
          'From 9:45 to 10:00 = 15 minutes.',
          'From 10:00 to 10:20 = 20 minutes.',
          '15 + 20 = 35 minutes.'
        ]
      },
      {
        question: 'Practice started at 1:00 PM and ended at 3:30 PM. If there was a 15-minute break, how long was the actual practice time?',
        options: ['2 hours 30 minutes', '2 hours 15 minutes', '2 hours 45 minutes', '1 hour 45 minutes'],
        correctIndex: 1,
        explanation: 'Total time = 2h 30m. Subtract 15-minute break: 2h 30m − 15m = 2h 15m.',
        steps: [
          'Total elapsed time: 1:00 to 3:30 = 2 hours 30 minutes.',
          'Subtract the break: 2 hours 30 minutes − 15 minutes.',
          '30 minutes − 15 minutes = 15 minutes.',
          'Actual practice: 2 hours 15 minutes.'
        ]
      },
      {
        question: 'It takes 25 minutes to drive to the aquarium. If you need to arrive by 10:00 AM, what is the latest time you should leave?',
        options: ['9:45 AM', '9:25 AM', '9:30 AM', '9:35 AM'],
        correctIndex: 3,
        explanation: 'Subtract 25 minutes from 10:00 AM: 10:00 − 0:25 = 9:35 AM.',
        steps: [
          'Arrival time: 10:00 AM.',
          'Subtract travel time: 25 minutes.',
          '10:00 − 25 minutes: borrow 1 hour → 9:60 − 25 = 9:35.',
          'Latest departure: 9:35 AM.'
        ]
      }
    ]
  },
  {
    id: 'rounding-numbers',
    title: 'Rounding to Nearest 10 and 100',
    coverEmoji: '🔢',
    coverColor: '#0891b2',
    topic: 'place-value',
    grades: [3, 4, 5],
    questions: [
      {
        question: 'Round 47 to the nearest ten.',
        options: ['40', '47', '45', '50'],
        correctIndex: 3,
        explanation: '47 rounded to the nearest 10 is 50. The ones digit is 7 (≥ 5), so round up.',
        steps: [
          'Look at the ones digit: 7.',
          'If the ones digit is 5 or greater, round up.',
          '7 ≥ 5, so round the tens digit up.',
          '47 rounds to 50.'
        ]
      },
      {
        question: 'Round 324 to the nearest hundred.',
        options: ['320', '400', '300', '330'],
        correctIndex: 2,
        explanation: '324 rounded to the nearest hundred is 300. The tens digit is 2 (< 5), so round down.',
        steps: [
          'Look at the tens digit: 2.',
          'If the tens digit is less than 5, round down.',
          '2 < 5, so keep the hundreds digit the same.',
          '324 rounds to 300.'
        ]
      },
      {
        question: 'About 463 flamingos visit a Florida nature preserve. To the nearest hundred, about how many flamingos is that?',
        options: ['400', '460', '500', '550'],
        correctIndex: 2,
        explanation: '463 rounded to the nearest hundred is 500. The tens digit is 6 (≥ 5), so round up.',
        steps: [
          'Look at the tens digit of 463: it is 6.',
          '6 ≥ 5, so round up the hundreds digit.',
          '4 hundreds rounds up to 5 hundreds.',
          '463 ≈ 500.'
        ]
      },
      {
        question: 'Round 85 to the nearest ten.',
        options: ['80', '85', '90', '100'],
        correctIndex: 2,
        explanation: '85 rounded to the nearest 10 is 90. The ones digit is 5, so round up.',
        steps: [
          'Look at the ones digit: 5.',
          'When the digit is exactly 5, round up.',
          'Round up: 80 → 90.',
          '85 rounds to 90.'
        ]
      },
      {
        question: 'A theme park sold 732 tickets in one day. What is 732 rounded to the nearest ten?',
        options: ['700', '730', '740', '800'],
        correctIndex: 1,
        explanation: '732 rounded to the nearest 10 is 730. The ones digit is 2 (< 5), so round down.',
        steps: [
          'Look at the ones digit: 2.',
          '2 < 5, so round down (keep the tens digit the same).',
          'The tens digit stays at 3.',
          '732 rounds to 730.'
        ]
      },
      {
        question: 'Which number rounds to 200 when rounding to the nearest hundred?',
        options: ['249', '251', '299', '150'],
        correctIndex: 0,
        explanation: '249 rounds to 200. Its tens digit is 4, which is less than 5, so round down.',
        steps: [
          'To round to 200, the number must be between 150 and 249.',
          'Check 249: tens digit is 4, so round down to 200. ✓',
          '251: tens digit is 5, rounds up to 300. ✗',
          '249 rounds to 200.'
        ]
      },
      {
        question: 'An orange grove has 558 trees. To the nearest hundred, about how many trees is that?',
        options: ['500', '560', '550', '600'],
        correctIndex: 3,
        explanation: '558 rounded to the nearest hundred is 600. The tens digit is 5, so round up.',
        steps: [
          'Look at the tens digit: 5.',
          '5 ≥ 5, so round up the hundreds digit.',
          '5 hundreds rounds up to 6 hundreds.',
          '558 ≈ 600.'
        ]
      },
      {
        question: 'Marcus estimated that 362 + 419 ≈ _____ by rounding each number to the nearest hundred first. What is his estimate?',
        options: ['700', '800', '780', '750'],
        correctIndex: 1,
        explanation: '362 ≈ 400, 419 ≈ 400. Wait — 362 rounds to 400? No: 362 rounds to 400 only if tens ≥ 5. Tens digit is 6, so 362 → 400. 419 → 400. 400 + 400 = 800.',
        steps: [
          'Round 362 to nearest hundred: tens digit is 6 ≥ 5, so round up → 400.',
          'Round 419 to nearest hundred: tens digit is 1 < 5, so round down → 400.',
          'Add the rounded numbers: 400 + 400 = 800.',
          'Estimate: 800.'
        ]
      }
    ]
  },
  {
    id: 'word-problems-grade3',
    title: 'Multi-Step Word Problems',
    coverEmoji: '📝',
    coverColor: '#059669',
    topic: 'word-problems',
    grades: [3, 4],
    questions: [
      {
        question: 'Zoe had 24 stickers. She gave 6 to her sister and then bought 3 packs of 5 stickers. How many stickers does Zoe have now?',
        options: ['13', '27', '18', '33'],
        correctIndex: 3,
        explanation: '24 − 6 = 18. Then 3 × 5 = 15 new stickers. 18 + 15 = 33.',
        steps: [
          'Start: 24 stickers.',
          'Give away 6: 24 − 6 = 18.',
          'Buy 3 packs of 5: 3 × 5 = 15 new stickers.',
          'Total: 18 + 15 = 33 stickers.'
        ]
      },
      {
        question: 'A manatee sanctuary has 3 pools. Each pool holds 8 manatees. 5 manatees were released today. How many are left?',
        options: ['11', '19', '24', '13'],
        correctIndex: 1,
        explanation: '3 × 8 = 24 manatees total. 24 − 5 = 19 remaining.',
        steps: [
          'Find total manatees: 3 pools × 8 each = 24.',
          'Subtract released: 24 − 5 = 19.',
          '19 manatees remain.'
        ]
      },
      {
        question: 'A class collected 45 canned goods on Monday and 38 on Tuesday. They want to collect 100 total. How many more cans do they need?',
        options: ['17', '83', '7', '27'],
        correctIndex: 0,
        explanation: '45 + 38 = 83 cans so far. 100 − 83 = 17 more needed.',
        steps: [
          'Add Monday and Tuesday cans: 45 + 38 = 83.',
          'Goal: 100.',
          'How many more: 100 − 83 = 17.',
          'They need 17 more cans.'
        ]
      },
      {
        question: 'A bakery made 60 cupcakes. They sold 4 trays of 6 cupcakes each and then gave away 12 more. How many cupcakes are left?',
        options: ['24', '36', '34', '28'],
        correctIndex: 0,
        explanation: '4 × 6 = 24 sold. 24 + 12 = 36 total gone. 60 − 36 = 24 left.',
        steps: [
          'Cupcakes sold on trays: 4 × 6 = 24.',
          'Total removed: 24 + 12 = 36.',
          'Remaining: 60 − 36 = 24 cupcakes.'
        ]
      },
      {
        question: 'Javier scored 9 points in each of 3 games and then scored 7 points in his last game. What was his total score?',
        options: ['27', '33', '30', '34'],
        correctIndex: 3,
        explanation: '3 × 9 = 27 for the first three games. 27 + 7 = 34 total.',
        steps: [
          'First 3 games: 9 points each → 3 × 9 = 27.',
          'Add last game: 27 + 7 = 34.',
          'Total score: 34 points.'
        ]
      },
      {
        question: 'There are 5 teams. Each team has 6 players. After 8 players quit, how many players are there in all?',
        options: ['32', '22', '42', '28'],
        correctIndex: 1,
        explanation: '5 × 6 = 30 players total. 30 − 8 = 22 players remaining.',
        steps: [
          'Total players: 5 × 6 = 30.',
          'Players quit: 8.',
          'Remaining: 30 − 8 = 22.',
          'There are 22 players.'
        ]
      },
      {
        question: 'Ava buys 3 books for $7 each and pays with a $30 bill. How much change does she get?',
        options: ['$7', '$21', '$23', '$9'],
        correctIndex: 3,
        explanation: '3 × $7 = $21. Change = $30 − $21 = $9.',
        steps: [
          'Cost of 3 books: 3 × $7 = $21.',
          'Amount paid: $30.',
          'Change: $30 − $21 = $9.',
          'Ava gets $9 change.'
        ]
      },
      {
        question: 'A dolphin trainer fed 4 dolphins 6 fish each in the morning and 3 fish each in the afternoon. How many fish were used total?',
        options: ['36', '24', '30', '48'],
        correctIndex: 0,
        explanation: 'Morning: 4 × 6 = 24 fish. Afternoon: 4 × 3 = 12 fish. Total: 24 + 12 = 36.',
        steps: [
          'Morning fish: 4 dolphins × 6 fish = 24.',
          'Afternoon fish: 4 dolphins × 3 fish = 12.',
          'Total: 24 + 12 = 36 fish.'
        ]
      }
    ]
  },
  {
    id: 'patterns-rules',
    title: 'Number Patterns and Rules',
    coverEmoji: '🔁',
    coverColor: '#b45309',
    topic: 'patterns',
    grades: [3, 4, 5],
    questions: [
      {
        question: 'What is the rule for the pattern: 5, 10, 15, 20, 25, ___?',
        options: ['Add 4', 'Add 6', 'Multiply by 2', 'Add 5'],
        correctIndex: 3,
        explanation: 'Each number increases by 5. The rule is "Add 5."',
        steps: [
          'Find the difference between consecutive terms.',
          '10 − 5 = 5, 15 − 10 = 5, 20 − 15 = 5.',
          'The pattern increases by 5 each time.',
          'Rule: Add 5. Next number: 25 + 5 = 30.'
        ]
      },
      {
        question: 'What is the next number in the pattern: 3, 6, 12, 24, ___?',
        options: ['36', '27', '30', '48'],
        correctIndex: 3,
        explanation: 'Each number is multiplied by 2. 24 × 2 = 48.',
        steps: [
          'Look at how the numbers change.',
          '6 ÷ 3 = 2, 12 ÷ 6 = 2, 24 ÷ 12 = 2.',
          'The rule is "Multiply by 2."',
          'Next: 24 × 2 = 48.'
        ]
      },
      {
        question: 'Fill in the blank: 45, 40, 35, 30, ___',
        options: ['20', '25', '15', '28'],
        correctIndex: 1,
        explanation: 'The pattern subtracts 5 each time. 30 − 5 = 25.',
        steps: [
          'Find the difference: 45 − 40 = 5, 40 − 35 = 5.',
          'The pattern decreases by 5 each time.',
          'Rule: Subtract 5.',
          'Next: 30 − 5 = 25.'
        ]
      },
      {
        question: 'A pattern starts at 2 and uses the rule "multiply by 3." What are the next two terms after 2, 6, 18?',
        options: ['27, 81', '21, 24', '54, 81', '54, 162'],
        correctIndex: 3,
        explanation: '18 × 3 = 54. 54 × 3 = 162.',
        steps: [
          'Rule: multiply by 3.',
          'After 18: 18 × 3 = 54.',
          'After 54: 54 × 3 = 162.',
          'Next two terms: 54, 162.'
        ]
      },
      {
        question: 'Elena makes a pattern using tiles: row 1 has 1 tile, row 2 has 3 tiles, row 3 has 5 tiles. How many tiles are in row 5?',
        options: ['7', '11', '9', '10'],
        correctIndex: 2,
        explanation: 'Each row adds 2 tiles. Row 4 = 7, Row 5 = 9.',
        steps: [
          'Find the pattern: 1, 3, 5 — add 2 each time.',
          'Row 4: 5 + 2 = 7.',
          'Row 5: 7 + 2 = 9.',
          'Row 5 has 9 tiles.'
        ]
      },
      {
        question: 'Which table follows the rule "output = input × 4"?\n Input → Output: 2 → 8, 3 → ?, 5 → 20',
        options: ['3 → 9', '3 → 7', '3 → 15', '3 → 12'],
        correctIndex: 3,
        explanation: 'Rule: multiply input by 4. 3 × 4 = 12.',
        steps: [
          'Apply the rule: output = input × 4.',
          'Check: 2 × 4 = 8 ✓, 5 × 4 = 20 ✓.',
          'For input 3: 3 × 4 = 12.',
          'Output for 3 is 12.'
        ]
      },
      {
        question: 'What number is missing? 100, 90, ___, 70, 60',
        options: ['85', '80', '75', '78'],
        correctIndex: 1,
        explanation: 'The pattern decreases by 10. After 90 comes 80.',
        steps: [
          '100 − 90 = 10. 90 − 80 = 10.',
          'The pattern decreases by 10.',
          'After 90: 90 − 10 = 80.',
          'Missing number: 80.'
        ]
      },
      {
        question: 'A pattern adds 7 each time: 7, 14, 21, 28, ___. What is the 6th term?',
        options: ['35', '42', '49', '56'],
        correctIndex: 1,
        explanation: 'The 5th term is 35, so the 6th is 35 + 7 = 42.',
        steps: [
          'List terms: 7, 14, 21, 28 are terms 1–4.',
          '5th term: 28 + 7 = 35.',
          '6th term: 35 + 7 = 42.',
          'The 6th term is 42.'
        ]
      }
    ]
  },
  {
    id: 'fractions-compare',
    title: 'Comparing Fractions',
    coverEmoji: '⚖️',
    coverColor: '#dc2626',
    topic: 'fractions',
    grades: [3, 4, 5],
    questions: [
      {
        question: 'Which fraction is greater: 3/4 or 2/4?',
        options: ['2/4', '3/4', 'They are equal', 'Cannot be determined'],
        correctIndex: 1,
        explanation: '3/4 > 2/4 because the denominators are the same and 3 > 2.',
        steps: [
          'Same denominator (4), so compare numerators.',
          '3 > 2.',
          '3/4 > 2/4.',
          '3/4 is greater.'
        ]
      },
      {
        question: 'Compare 1/3 and 1/5. Which is greater?',
        options: ['1/5', '1/3', 'They are equal', '2/8'],
        correctIndex: 1,
        explanation: '1/3 > 1/5. With the same numerator, a smaller denominator means larger parts.',
        steps: [
          'Same numerator (1), compare denominators.',
          'A smaller denominator means each piece is larger.',
          '3 < 5, so thirds are bigger than fifths.',
          '1/3 > 1/5.'
        ]
      },
      {
        question: 'A pizza is cut into 8 slices. Tomás ate 5/8 and Priya ate 3/8. Who ate more?',
        options: ['Priya', 'They ate the same amount', 'Tomás', 'Cannot tell'],
        correctIndex: 2,
        explanation: '5/8 > 3/8 because the denominators are the same and 5 > 3.',
        steps: [
          'Both fractions have denominator 8 — same-size slices.',
          'Compare numerators: 5 vs. 3.',
          '5 > 3, so 5/8 > 3/8.',
          'Tomás ate more.'
        ]
      },
      {
        question: 'Which symbol makes this true?  2/3 ___ 2/5',
        options: ['<', '=', '>', '≤'],
        correctIndex: 2,
        explanation: '2/3 > 2/5. Same numerators; thirds are larger pieces than fifths.',
        steps: [
          'Numerators are both 2.',
          'Compare denominators: 3 vs. 5.',
          'Smaller denominator = larger fraction.',
          '2/3 > 2/5.'
        ]
      },
      {
        question: 'Which fraction is the smallest: 1/2, 1/4, 1/3?',
        options: ['1/2', '1/3', '1/4', 'They are all equal'],
        correctIndex: 2,
        explanation: '1/4 is the smallest. With numerator 1, the largest denominator gives the smallest fraction.',
        steps: [
          'All fractions have numerator 1.',
          'Larger denominator = smaller fraction.',
          'Denominators: 2, 3, 4. Largest is 4.',
          '1/4 is the smallest.'
        ]
      },
      {
        question: 'Rosa ate 3/6 of a granola bar and Leo ate 4/6 of the same size bar. Which comparison is correct?',
        options: ['3/6 > 4/6', '3/6 = 4/6', '4/6 < 3/6', '3/6 < 4/6'],
        correctIndex: 3,
        explanation: '3/6 < 4/6 because the denominators are the same and 3 < 4.',
        steps: [
          'Same denominator (6), so compare numerators.',
          '3 < 4.',
          'Therefore 3/6 < 4/6.',
          'Leo ate more.'
        ]
      },
      {
        question: 'Which pair of fractions are equivalent (equal in value)?',
        options: ['1/2 and 1/3', '2/4 and 1/2', '3/4 and 2/3', '1/4 and 2/6'],
        correctIndex: 1,
        explanation: '2/4 = 1/2. Both represent one-half. Divide numerator and denominator of 2/4 by 2.',
        steps: [
          'Check 2/4: divide top and bottom by 2 → 1/2.',
          '2/4 = 1/2. They are equivalent.',
          'The other pairs are not equal.',
          'Answer: 2/4 and 1/2.'
        ]
      },
      {
        question: 'Order these fractions from least to greatest: 3/8, 3/4, 3/6.',
        options: ['3/4, 3/6, 3/8', '3/8, 3/4, 3/6', '3/4, 3/8, 3/6', '3/8, 3/6, 3/4'],
        correctIndex: 3,
        explanation: 'Same numerator (3): larger denominator = smaller fraction. 8 > 6 > 4, so 3/8 < 3/6 < 3/4.',
        steps: [
          'All fractions have numerator 3.',
          'Larger denominator = smaller fraction.',
          'Denominators in order (largest first): 8, 6, 4.',
          'Least to greatest: 3/8, 3/6, 3/4.'
        ]
      }
    ]
  },
  {
    id: 'multi-step-problems',
    title: 'Multi-Step Word Problems',
    coverEmoji: '🧮',
    coverColor: '#7c3aed',
    topic: 'word-problems',
    grades: [4, 5],
    questions: [
      {
        question: 'A store sold 124 sunscreen bottles on Friday and 3 times as many on Saturday. How many bottles were sold over the two days?',
        options: ['248', '496', '620', '372'],
        correctIndex: 1,
        explanation: 'Saturday: 124 × 3 = 372. Total: 124 + 372 = 496.',
        steps: [
          'Friday sales: 124.',
          'Saturday sales: 124 × 3 = 372.',
          'Total: 124 + 372 = 496.',
          '496 bottles were sold.'
        ]
      },
      {
        question: 'A boat tour group of 96 tourists is split equally among 8 boats. Each person pays $15. How much money is collected per boat?',
        options: ['$120', '$180', '$150', '$90'],
        correctIndex: 1,
        explanation: '96 ÷ 8 = 12 people per boat. 12 × $15 = $180.',
        steps: [
          'People per boat: 96 ÷ 8 = 12.',
          'Money per boat: 12 × $15.',
          '12 × $15 = $180.',
          'Each boat collects $180.'
        ]
      },
      {
        question: 'Amara read 35 pages on Monday, 42 pages on Tuesday, and 28 pages on Wednesday. She wants to reach 150 pages total. How many more pages must she read?',
        options: ['55', '35', '45', '50'],
        correctIndex: 2,
        explanation: '35 + 42 + 28 = 105. 150 − 105 = 45 more pages.',
        steps: [
          'Total read: 35 + 42 + 28 = 105.',
          'Goal: 150.',
          'Still needed: 150 − 105 = 45.',
          'She must read 45 more pages.'
        ]
      },
      {
        question: 'A school bought 6 boxes of pencils. Each box has 24 pencils. They gave 30 pencils to each of 4 classrooms. How many pencils remain?',
        options: ['24', '60', '120', '34'],
        correctIndex: 0,
        explanation: '6 × 24 = 144 pencils. 4 × 30 = 120 given away. 144 − 120 = 24 remain.',
        steps: [
          'Total pencils: 6 × 24 = 144.',
          'Pencils given away: 4 × 30 = 120.',
          'Remaining: 144 − 120 = 24.',
          '24 pencils remain.'
        ]
      },
      {
        question: 'A hurricane shelter stocked 480 water bottles. If each family needs 12 bottles and 36 families are sheltered, do they have enough? How many extra or short?',
        options: ['Short by 12', 'Exactly enough', 'Extra — 48 bottles left', 'Short by 48'],
        correctIndex: 2,
        explanation: 'Needed: 36 × 12 = 432. Stock: 480. 480 − 432 = 48 extra.',
        steps: [
          'Bottles needed: 36 × 12 = 432.',
          'Bottles in stock: 480.',
          '480 > 432, so they have enough.',
          '480 − 432 = 48 bottles extra.'
        ]
      },
      {
        question: 'Admission to a nature park is $9 for children and $14 for adults. A family of 3 children and 2 adults visits. What is the total cost?',
        options: ['$46', '$27', '$50', '$55'],
        correctIndex: 3,
        explanation: 'Children: 3 × $9 = $27. Adults: 2 × $14 = $28. Total: $27 + $28 = $55.',
        steps: [
          'Children\'s tickets: 3 × $9 = $27.',
          'Adult tickets: 2 × $14 = $28.',
          'Total: $27 + $28 = $55.',
          'The total cost is $55.'
        ]
      },
      {
        question: 'A farmer planted 8 rows of corn with 15 plants per row. A storm destroyed 40 plants. How many corn plants survived?',
        options: ['80', '120', '60', '160'],
        correctIndex: 0,
        explanation: '8 × 15 = 120 plants. 120 − 40 = 80 survive.',
        steps: [
          'Total plants: 8 × 15 = 120.',
          'Destroyed: 40.',
          'Survived: 120 − 40 = 80.',
          '80 corn plants survived.'
        ]
      },
      {
        question: 'A library received 5 cartons of books. Each carton had 32 books. The librarian put them in groups of 8 on shelves. How many shelves were needed?',
        options: ['16', '20', '25', '40'],
        correctIndex: 1,
        explanation: 'Total books: 5 × 32 = 160. Shelves: 160 ÷ 8 = 20.',
        steps: [
          'Total books: 5 × 32 = 160.',
          'Books per shelf: 8.',
          'Shelves needed: 160 ÷ 8 = 20.',
          '20 shelves were needed.'
        ]
      }
    ]
  },
  {
    id: 'factors-multiples',
    title: 'Factors and Multiples',
    coverEmoji: '🔢',
    coverColor: '#059669',
    topic: 'number-theory',
    grades: [4, 5, 6],
    questions: [
      {
        question: 'Which of the following is a factor of 24?',
        options: ['5', '7', '6', '9'],
        correctIndex: 2,
        explanation: '6 is a factor of 24 because 24 ÷ 6 = 4 with no remainder.',
        steps: [
          'A factor divides evenly into the number.',
          'Test 6: 24 ÷ 6 = 4. No remainder. ✓',
          'Test 5: 24 ÷ 5 = 4 remainder 4. ✗',
          '6 is a factor of 24.'
        ]
      },
      {
        question: 'What are ALL the factors of 12?',
        options: ['1, 2, 4, 12', '1, 2, 3, 4, 6, 12', '2, 3, 4, 6', '1, 2, 3, 6, 12'],
        correctIndex: 1,
        explanation: 'Factors of 12: 1, 2, 3, 4, 6, 12. Each divides into 12 evenly.',
        steps: [
          'Start with 1: 12 ÷ 1 = 12. Both 1 and 12 are factors.',
          '12 ÷ 2 = 6. Both 2 and 6 are factors.',
          '12 ÷ 3 = 4. Both 3 and 4 are factors.',
          'Factors of 12: 1, 2, 3, 4, 6, 12.'
        ]
      },
      {
        question: 'Which number is a multiple of 7?',
        options: ['56', '27', '47', '33'],
        correctIndex: 0,
        explanation: '56 is a multiple of 7 because 7 × 8 = 56.',
        steps: [
          'Multiples of 7: 7, 14, 21, 28, 35, 42, 49, 56…',
          'Check 56: 56 ÷ 7 = 8. ✓',
          '56 is a multiple of 7.'
        ]
      },
      {
        question: 'Is 36 a multiple of 9?',
        options: ['No, because 9 × 4 = 36 is wrong', 'Yes, because 9 × 4 = 36', 'No, 36 is not divisible by 9', 'Yes, but only because 36 > 9'],
        correctIndex: 1,
        explanation: '36 is a multiple of 9 because 9 × 4 = 36.',
        steps: [
          'A multiple of 9 is found by multiplying 9 by a whole number.',
          '9 × 1 = 9, 9 × 2 = 18, 9 × 3 = 27, 9 × 4 = 36.',
          '36 = 9 × 4, so yes, 36 is a multiple of 9.'
        ]
      },
      {
        question: 'Which number is a common factor of both 16 and 24?',
        options: ['5', '6', '8', '12'],
        correctIndex: 2,
        explanation: '8 divides evenly into both 16 (16 ÷ 8 = 2) and 24 (24 ÷ 8 = 3).',
        steps: [
          'Find factors of 16: 1, 2, 4, 8, 16.',
          'Find factors of 24: 1, 2, 3, 4, 6, 8, 12, 24.',
          'Common factors: 1, 2, 4, 8.',
          '8 is the greatest common factor.'
        ]
      },
      {
        question: 'A florist has 18 red roses and 24 yellow roses. She wants to make equal bouquets using ALL the flowers with no flowers left over. What is the greatest number of bouquets she can make?',
        options: ['3', '9', '4', '6'],
        correctIndex: 3,
        explanation: 'Find the GCF of 18 and 24. GCF = 6. She can make 6 bouquets.',
        steps: [
          'Factors of 18: 1, 2, 3, 6, 9, 18.',
          'Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24.',
          'Greatest common factor: 6.',
          'She can make 6 bouquets (3 red and 4 yellow in each).'
        ]
      },
      {
        question: 'What is the least common multiple (LCM) of 4 and 6?',
        options: ['24', '8', '2', '12'],
        correctIndex: 3,
        explanation: 'LCM of 4 and 6 is 12. Multiples of 4: 4, 8, 12…; Multiples of 6: 6, 12…',
        steps: [
          'List multiples of 4: 4, 8, 12, 16, 20…',
          'List multiples of 6: 6, 12, 18, 24…',
          'First common multiple: 12.',
          'LCM of 4 and 6 = 12.'
        ]
      },
      {
        question: 'Which number has exactly 2 factors (making it a prime number)?',
        options: ['9', '15', '11', '21'],
        correctIndex: 2,
        explanation: '11 is prime. Its only factors are 1 and 11.',
        steps: [
          'A prime number has exactly 2 factors: 1 and itself.',
          'Check 9: factors are 1, 3, 9 — not prime.',
          'Check 15: factors are 1, 3, 5, 15 — not prime.',
          'Check 11: factors are 1 and 11 only — prime!'
        ]
      }
    ]
  },
  {
    id: 'fractions-operations',
    title: 'Adding and Subtracting Fractions',
    coverEmoji: '➕',
    coverColor: '#dc2626',
    topic: 'fractions',
    grades: [4, 5, 6],
    questions: [
      {
        question: 'What is 2/5 + 1/5?',
        options: ['3/10', '3/25', '3/5', '2/5'],
        correctIndex: 2,
        explanation: '2/5 + 1/5 = 3/5. Add the numerators and keep the same denominator.',
        steps: [
          'The denominators are the same (5).',
          'Add only the numerators: 2 + 1 = 3.',
          'Keep the denominator: 5.',
          '2/5 + 1/5 = 3/5.'
        ]
      },
      {
        question: 'What is 7/8 − 3/8?',
        options: ['4/16', '4/0', '4/8', '10/8'],
        correctIndex: 2,
        explanation: '7/8 − 3/8 = 4/8. Subtract numerators, keep the denominator.',
        steps: [
          'Same denominator (8).',
          'Subtract numerators: 7 − 3 = 4.',
          'Keep denominator: 8.',
          '7/8 − 3/8 = 4/8 (which simplifies to 1/2).'
        ]
      },
      {
        question: 'Mia drank 1/4 of a water bottle in the morning and 2/4 in the afternoon. What fraction did she drink in all?',
        options: ['3/8', '2/8', '3/4', '1/2'],
        correctIndex: 2,
        explanation: '1/4 + 2/4 = 3/4. Same denominator — add numerators.',
        steps: [
          'Morning: 1/4. Afternoon: 2/4.',
          'Denominators match (4).',
          'Add numerators: 1 + 2 = 3.',
          '1/4 + 2/4 = 3/4.'
        ]
      },
      {
        question: 'What is 1/3 + 1/6? (Hint: find a common denominator first)',
        options: ['2/9', '2/6', '1/6', '3/6'],
        correctIndex: 3,
        explanation: '1/3 = 2/6. Then 2/6 + 1/6 = 3/6 = 1/2.',
        steps: [
          'Find a common denominator for 3 and 6: it is 6.',
          'Convert 1/3 to sixths: 1/3 = 2/6.',
          'Add: 2/6 + 1/6 = 3/6.',
          '3/6 = 1/2.'
        ]
      },
      {
        question: 'A recipe calls for 3/4 cup of sugar. You already put in 1/4 cup. How much more sugar is needed?',
        options: ['4/4', '2/4', '1/8', '1/4'],
        correctIndex: 1,
        explanation: '3/4 − 1/4 = 2/4 = 1/2. You need 2/4 more cup of sugar.',
        steps: [
          'Total needed: 3/4. Already added: 1/4.',
          'Still needed: 3/4 − 1/4.',
          'Same denominator — subtract numerators: 3 − 1 = 2.',
          '2/4 more cup of sugar is needed.'
        ]
      },
      {
        question: 'What is 5/6 − 1/3? (Hint: convert to a common denominator)',
        options: ['4/6', '4/3', '3/6', '1/2'],
        correctIndex: 2,
        explanation: '1/3 = 2/6. Then 5/6 − 2/6 = 3/6 = 1/2.',
        steps: [
          'Common denominator for 6 and 3 is 6.',
          'Convert 1/3 = 2/6.',
          'Subtract: 5/6 − 2/6 = 3/6.',
          '3/6 simplifies to 1/2.'
        ]
      },
      {
        question: 'Marco ran 2 3/8 miles and then walked 1 1/8 miles. How far did he travel in all?',
        options: ['3 2/8', '3 4/8', '4 4/8', '3 6/8'],
        correctIndex: 1,
        explanation: 'Add whole numbers: 2 + 1 = 3. Add fractions: 3/8 + 1/8 = 4/8. Total: 3 4/8.',
        steps: [
          'Add the whole numbers: 2 + 1 = 3.',
          'Add the fractions: 3/8 + 1/8 = 4/8.',
          'Combine: 3 4/8.',
          'Marco traveled 3 4/8 miles (= 3 1/2 miles).'
        ]
      },
      {
        question: 'Which expression equals 1 whole?',
        options: ['3/4 + 1/8', '2/3 + 1/3', '1/2 + 2/6', '4/5 + 1/4'],
        correctIndex: 1,
        explanation: '2/3 + 1/3 = 3/3 = 1. The numerators add to equal the denominator.',
        steps: [
          'Check 2/3 + 1/3: same denominator, add numerators: 2 + 1 = 3.',
          '3/3 = 1 whole. ✓',
          'The other options do not equal 1.',
          '2/3 + 1/3 = 1.'
        ]
      }
    ]
  },
  {
    id: 'geometry-shapes',
    title: 'Lines, Angles, and Shapes',
    coverEmoji: '📐',
    coverColor: '#0891b2',
    topic: 'geometry',
    grades: [4, 5, 6],
    questions: [
      {
        question: 'Which term describes two lines that meet to form a perfect corner (90-degree angle)?',
        options: ['Parallel lines', 'Perpendicular lines', 'Intersecting lines', 'Diagonal lines'],
        correctIndex: 1,
        explanation: 'Perpendicular lines meet at a right angle (90°), forming a perfect corner.',
        steps: [
          'A right angle measures exactly 90°.',
          'Lines that form a right angle are called perpendicular.',
          'Think of the corner of a piece of paper — those edges are perpendicular.'
        ]
      },
      {
        question: 'What type of angle is shown when the two rays form a "V" shape that is less than a square corner?',
        options: ['Obtuse angle', 'Straight angle', 'Right angle', 'Acute angle'],
        correctIndex: 3,
        explanation: 'An acute angle measures less than 90°. It is smaller than a right angle.',
        steps: [
          'A right angle = 90°.',
          'An angle smaller than 90° is called acute.',
          'A "sharp" V-shape is less than 90°.',
          'It is an acute angle.'
        ]
      },
      {
        question: 'A triangle has two equal sides and two equal angles. What type of triangle is it?',
        options: ['Scalene', 'Equilateral', 'Right', 'Isosceles'],
        correctIndex: 3,
        explanation: 'An isosceles triangle has exactly two equal sides and two equal base angles.',
        steps: [
          'Equilateral: all 3 sides equal.',
          'Scalene: no sides equal.',
          'Isosceles: exactly 2 sides equal and 2 angles equal.',
          'This triangle is isosceles.'
        ]
      },
      {
        question: 'Which quadrilateral has exactly one pair of parallel sides?',
        options: ['Rectangle', 'Parallelogram', 'Trapezoid', 'Square'],
        correctIndex: 2,
        explanation: 'A trapezoid has exactly one pair of parallel sides.',
        steps: [
          'Rectangles and parallelograms have 2 pairs of parallel sides.',
          'A square also has 2 pairs of parallel sides.',
          'A trapezoid has exactly 1 pair of parallel sides.',
          'Answer: trapezoid.'
        ]
      },
      {
        question: 'An angle measures 135°. Which type of angle is this?',
        options: ['Acute', 'Right', 'Obtuse', 'Straight'],
        correctIndex: 2,
        explanation: 'An obtuse angle measures more than 90° but less than 180°. 135° is obtuse.',
        steps: [
          'Acute: less than 90°.',
          'Right: exactly 90°.',
          'Obtuse: more than 90° but less than 180°.',
          '135° is between 90° and 180° — it is obtuse.'
        ]
      },
      {
        question: 'How many lines of symmetry does a square have?',
        options: ['1', '2', '6', '4'],
        correctIndex: 3,
        explanation: 'A square has 4 lines of symmetry: 2 through opposite sides, 2 through opposite corners.',
        steps: [
          'A line of symmetry divides a shape into two mirror halves.',
          'Square: horizontal, vertical, and 2 diagonal lines of symmetry.',
          '4 lines of symmetry total.'
        ]
      },
      {
        question: 'A parallelogram has opposite angles that are equal. One angle measures 70°. What are the measures of all four angles?',
        options: ['70°, 70°, 70°, 70°', '70°, 110°, 70°, 110°', '70°, 90°, 70°, 90°', '70°, 120°, 70°, 100°'],
        correctIndex: 1,
        explanation: 'In a parallelogram, opposite angles are equal and consecutive angles are supplementary (sum to 180°). So 70°, 110°, 70°, 110°.',
        steps: [
          'Opposite angles are equal: two angles = 70°.',
          'Consecutive angles are supplementary: 70° + ? = 180°.',
          '? = 110°.',
          'Angles: 70°, 110°, 70°, 110°.'
        ]
      },
      {
        question: 'Which shape is NOT a polygon?',
        options: ['Hexagon', 'Pentagon', 'Circle', 'Octagon'],
        correctIndex: 2,
        explanation: 'A circle is not a polygon. Polygons are closed shapes made of straight sides only.',
        steps: [
          'A polygon is a closed figure made of straight line segments.',
          'Hexagon, pentagon, and octagon are all polygons.',
          'A circle has a curved side — it is not a polygon.',
          'Answer: circle.'
        ]
      }
    ]
  },

{
    id: 'add-subtract-fractions',
    title: 'Adding & Subtracting Fractions with Unlike Denominators',
    coverEmoji: '➕',
    coverColor: '#f59e0b',
    topic: 'fractions',
    grades: [5, 6],
    questions: [
      {
        question: 'What is 1/3 + 1/4?',
        options: ['2/7', '7/12', '5/12', '2/12'],
        correctIndex: 1,
        explanation: 'Find the LCD of 3 and 4, which is 12. Convert: 1/3 = 4/12, 1/4 = 3/12. Add: 4/12 + 3/12 = 7/12.',
        steps: ['Find the least common denominator (LCD) of 3 and 4: LCD = 12', 'Convert each fraction: 1/3 = 4/12 and 1/4 = 3/12', 'Add the numerators: 4 + 3 = 7', 'Answer: 7/12']
      },
      {
        question: 'A manatee swam 2/5 of a mile in the morning and 1/3 of a mile in the afternoon. How far did it swim in all?',
        options: ['3/8 mile', '3/15 mile', '11/15 mile', '7/15 mile'],
        correctIndex: 2,
        explanation: 'LCD of 5 and 3 is 15. Convert: 2/5 = 6/15, 1/3 = 5/15. Add: 6/15 + 5/15 = 11/15 mile.',
        steps: ['Find the LCD of 5 and 3: LCD = 15', 'Convert: 2/5 = 6/15 and 1/3 = 5/15', 'Add the numerators: 6 + 5 = 11', 'Answer: 11/15 mile']
      },
      {
        question: 'What is 3/4 − 1/6?',
        options: ['2/3', '7/12', '1/2', '5/12'],
        correctIndex: 1,
        explanation: 'LCD of 4 and 6 is 12. Convert: 3/4 = 9/12, 1/6 = 2/12. Subtract: 9/12 − 2/12 = 7/12.',
        steps: ['Find the LCD of 4 and 6: LCD = 12', 'Convert: 3/4 = 9/12 and 1/6 = 2/12', 'Subtract the numerators: 9 − 2 = 7', 'Answer: 7/12']
      },
      {
        question: 'Jaylen picked 5/6 of a bucket of oranges from a Florida grove. He gave 1/4 of a bucket to his neighbor. How much did he have left?',
        options: ['4/2', '7/12', '1/2', '4/12'],
        correctIndex: 1,
        explanation: 'LCD of 6 and 4 is 12. Convert: 5/6 = 10/12, 1/4 = 3/12. Subtract: 10/12 − 3/12 = 7/12.',
        steps: ['Find the LCD of 6 and 4: LCD = 12', 'Convert: 5/6 = 10/12 and 1/4 = 3/12', 'Subtract: 10 − 3 = 7', 'Answer: 7/12 of a bucket']
      },
      {
        question: 'What is 2/3 + 3/5?',
        options: ['5/8', '5/15', '19/15', '1/15'],
        correctIndex: 2,
        explanation: 'LCD of 3 and 5 is 15. Convert: 2/3 = 10/15, 3/5 = 9/15. Add: 10/15 + 9/15 = 19/15.',
        steps: ['Find the LCD of 3 and 5: LCD = 15', 'Convert: 2/3 = 10/15 and 3/5 = 9/15', 'Add numerators: 10 + 9 = 19', 'Answer: 19/15 (or 1 4/15 as a mixed number)']
      },
      {
        question: 'A recipe calls for 3/8 cup of sugar and 1/2 cup of brown sugar. How much sugar is needed in all?',
        options: ['4/10 cup', '7/8 cup', '4/8 cup', '1/8 cup'],
        correctIndex: 1,
        explanation: 'LCD of 8 and 2 is 8. Convert: 1/2 = 4/8. Add: 3/8 + 4/8 = 7/8 cup.',
        steps: ['Find the LCD of 8 and 2: LCD = 8', 'Convert 1/2 = 4/8 (3/8 stays the same)', 'Add: 3 + 4 = 7', 'Answer: 7/8 cup']
      },
      {
        question: 'What is 7/8 − 2/3?',
        options: ['5/5', '5/24', '5/11', '13/24'],
        correctIndex: 3,
        explanation: 'LCD of 8 and 3 is 24. Convert: 7/8 = 21/24, 2/3 = 16/24. Subtract: 21/24 − 16/24 = 5/24.',
        steps: ['Find the LCD of 8 and 3: LCD = 24', 'Convert: 7/8 = 21/24 and 2/3 = 16/24', 'Subtract: 21 − 16 = 5', 'Answer: 5/24']
      },
      {
        question: 'At Everglades National Park, rangers walked 4/5 of a trail on Saturday and 2/3 of the trail on Sunday. How much more did they walk on Saturday?',
        options: ['2/15 more', '2/2 more', '6/15 more', '2/8 more'],
        correctIndex: 0,
        explanation: 'LCD of 5 and 3 is 15. Convert: 4/5 = 12/15, 2/3 = 10/15. Subtract: 12/15 − 10/15 = 2/15.',
        steps: ['Find the LCD of 5 and 3: LCD = 15', 'Convert: 4/5 = 12/15 and 2/3 = 10/15', 'Subtract: 12 − 10 = 2', 'Answer: 2/15 more of the trail']
      }
    ]
  },
  {
    id: 'multiply-fractions',
    title: 'Multiplying Fractions and Mixed Numbers',
    coverEmoji: '✖️',
    coverColor: '#8b5cf6',
    topic: 'fractions',
    grades: [5, 6],
    questions: [
      {
        question: 'What is 2/3 × 3/4?',
        options: ['5/7', '6/12', '1/2', '5/12'],
        correctIndex: 2,
        explanation: 'Multiply numerators: 2 × 3 = 6. Multiply denominators: 3 × 4 = 12. Simplify 6/12 = 1/2.',
        steps: ['Multiply numerators: 2 × 3 = 6', 'Multiply denominators: 3 × 4 = 12', 'Write the fraction: 6/12', 'Simplify by dividing by 6: 1/2']
      },
      {
        question: 'A Florida orange grove covers 4/5 of a square mile. If 2/3 of the grove is planted with navel oranges, what fraction is navel oranges?',
        options: ['6/8', '8/15', '6/15', '2/8'],
        correctIndex: 1,
        explanation: 'Multiply: 4/5 × 2/3 = 8/15. The grove is not further reducible.',
        steps: ['Multiply numerators: 4 × 2 = 8', 'Multiply denominators: 5 × 3 = 15', 'Write the fraction: 8/15', '8 and 15 share no common factors — already simplified']
      },
      {
        question: 'What is 1 1/2 × 2/3?',
        options: ['3/6', '1', '2/6', '1 1/6'],
        correctIndex: 1,
        explanation: 'Convert 1 1/2 to an improper fraction: 3/2. Multiply: 3/2 × 2/3 = 6/6 = 1.',
        steps: ['Convert 1 1/2 to an improper fraction: 3/2', 'Multiply: 3/2 × 2/3 = 6/6', 'Simplify: 6/6 = 1', 'Answer: 1']
      },
      {
        question: 'What is 3/5 × 5/9?',
        options: ['8/14', '15/45', '1/3', '1/5'],
        correctIndex: 2,
        explanation: 'Multiply: 3/5 × 5/9 = 15/45. Simplify by dividing by 15: 1/3.',
        steps: ['Multiply numerators: 3 × 5 = 15', 'Multiply denominators: 5 × 9 = 45', 'Simplify 15/45 by dividing by GCF (15)', 'Answer: 1/3']
      },
      {
        question: 'A dolphin jumped 2 1/4 feet high. A second dolphin jumped 3/4 as high. How high did the second dolphin jump?',
        options: ['6/16 feet', '1 11/16 feet', '2 feet', '1 1/2 feet'],
        correctIndex: 1,
        explanation: 'Convert 2 1/4 to 9/4. Multiply: 9/4 × 3/4 = 27/16 = 1 11/16 feet.',
        steps: ['Convert 2 1/4 to an improper fraction: 9/4', 'Multiply: 9/4 × 3/4 = 27/16', 'Convert to mixed number: 27 ÷ 16 = 1 remainder 11', 'Answer: 1 11/16 feet']
      },
      {
        question: 'What is 2 1/3 × 1 1/2?',
        options: ['2 1/6', '3 1/2', '3 1/6', '2 5/6'],
        correctIndex: 1,
        explanation: 'Convert: 2 1/3 = 7/3, 1 1/2 = 3/2. Multiply: 7/3 × 3/2 = 21/6 = 3 1/2.',
        steps: ['Convert 2 1/3 → 7/3 and 1 1/2 → 3/2', 'Multiply: 7 × 3 = 21 and 3 × 2 = 6', 'Fraction: 21/6 → simplify to 7/2', 'Convert: 7/2 = 3 1/2']
      },
      {
        question: 'What is 4/7 × 7/8?',
        options: ['11/15', '28/56', '1/2', '4/8'],
        correctIndex: 2,
        explanation: 'Multiply: 4/7 × 7/8 = 28/56. Simplify by dividing by 28: 1/2.',
        steps: ['Multiply numerators: 4 × 7 = 28', 'Multiply denominators: 7 × 8 = 56', 'Simplify 28/56 (GCF = 28)', 'Answer: 1/2']
      },
      {
        question: 'A walking path at a Florida state park is 3 1/3 miles long. A scout troop walked 3/5 of the path. How many miles did they walk?',
        options: ['3 miles', '1 9/15 miles', '2 miles', '1 2/3 miles'],
        correctIndex: 2,
        explanation: 'Convert 3 1/3 = 10/3. Multiply: 10/3 × 3/5 = 30/15 = 2 miles.',
        steps: ['Convert 3 1/3 to an improper fraction: 10/3', 'Multiply: 10/3 × 3/5 = 30/15', 'Simplify 30/15 = 2', 'Answer: 2 miles']
      }
    ]
  },
  {
    id: 'divide-fractions',
    title: 'Dividing Fractions',
    coverEmoji: '➗',
    coverColor: '#ef4444',
    topic: 'fractions',
    grades: [5, 6],
    questions: [
      {
        question: 'What is 3/4 ÷ 1/2?',
        options: ['3/8', '1 1/2', '6/4', '2/3'],
        correctIndex: 1,
        explanation: 'To divide fractions, multiply by the reciprocal. 3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 1 1/2.',
        steps: ['Keep the first fraction: 3/4', 'Change ÷ to ×', 'Flip (reciprocal) the second fraction: 1/2 → 2/1', 'Multiply: 3/4 × 2/1 = 6/4 = 1 1/2']
      },
      {
        question: 'What is 2/3 ÷ 4?',
        options: ['8/3', '1/6', '2/12', '4/6'],
        correctIndex: 1,
        explanation: 'Write 4 as 4/1. Multiply by reciprocal: 2/3 × 1/4 = 2/12 = 1/6.',
        steps: ['Write 4 as a fraction: 4/1', 'Find the reciprocal of 4/1: 1/4', 'Multiply: 2/3 × 1/4 = 2/12', 'Simplify: 2/12 = 1/6']
      },
      {
        question: 'A sandcastle competition at Daytona Beach gives each team 3/4 of an hour. If each round takes 1/8 of an hour, how many rounds fit?',
        options: ['3/32 rounds', '6 rounds', '3/4 rounds', '8 rounds'],
        correctIndex: 1,
        explanation: '3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6 rounds.',
        steps: ['Divide: 3/4 ÷ 1/8', 'Multiply by the reciprocal: 3/4 × 8/1', 'Multiply: 3 × 8 = 24, denominator stays 4', 'Simplify: 24/4 = 6 rounds']
      },
      {
        question: 'What is 5/6 ÷ 5/12?',
        options: ['25/72', '2', '5/2', '1/2'],
        correctIndex: 1,
        explanation: '5/6 ÷ 5/12 = 5/6 × 12/5 = 60/30 = 2.',
        steps: ['Find the reciprocal of 5/12: 12/5', 'Multiply: 5/6 × 12/5 = 60/30', 'Simplify: 60/30 = 2', 'Answer: 2']
      },
      {
        question: 'What is 4 ÷ 2/3?',
        options: ['8/3', '2 2/3', '6', '8/12'],
        correctIndex: 2,
        explanation: '4 ÷ 2/3 = 4/1 × 3/2 = 12/2 = 6.',
        steps: ['Write 4 as 4/1', 'Find the reciprocal of 2/3: 3/2', 'Multiply: 4/1 × 3/2 = 12/2', 'Simplify: 12/2 = 6']
      },
      {
        question: 'A Florida chef has 7/8 pound of shrimp. Each serving uses 1/4 pound. How many full servings can she make?',
        options: ['7/32 servings', '2 servings', '3 servings', '7/2 servings'],
        correctIndex: 2,
        explanation: '7/8 ÷ 1/4 = 7/8 × 4/1 = 28/8 = 3 1/2. She can make 3 full servings.',
        steps: ['Divide: 7/8 ÷ 1/4', 'Multiply by reciprocal: 7/8 × 4/1 = 28/8', 'Simplify: 28/8 = 3 1/2', 'She can make 3 full servings (the 1/2 is not a complete serving)']
      },
      {
        question: 'What is 3/5 ÷ 9/10?',
        options: ['27/50', '2/3', '3/6', '9/6'],
        correctIndex: 1,
        explanation: '3/5 ÷ 9/10 = 3/5 × 10/9 = 30/45 = 2/3.',
        steps: ['Find the reciprocal of 9/10: 10/9', 'Multiply: 3/5 × 10/9 = 30/45', 'Find the GCF of 30 and 45: GCF = 15', 'Simplify: 30/45 = 2/3']
      },
      {
        question: 'How many 1/3-cup servings of trail mix are in 2 2/3 cups?',
        options: ['2/9 servings', '8 servings', '6 servings', '2/3 servings'],
        correctIndex: 1,
        explanation: 'Convert 2 2/3 to 8/3. Divide: 8/3 ÷ 1/3 = 8/3 × 3/1 = 24/3 = 8 servings.',
        steps: ['Convert 2 2/3 to an improper fraction: 8/3', 'Divide: 8/3 ÷ 1/3', 'Multiply by the reciprocal: 8/3 × 3/1 = 24/3', 'Simplify: 24/3 = 8 servings']
      }
    ]
  },
  {
    id: 'decimal-operations',
    title: 'Adding, Subtracting & Multiplying Decimals',
    coverEmoji: '🔢',
    coverColor: '#06b6d4',
    topic: 'decimals',
    grades: [5, 6],
    questions: [
      {
        question: 'What is 3.47 + 12.6?',
        options: ['16.07', '15.07', '16.7', '13.87'],
        correctIndex: 0,
        explanation: 'Line up the decimal points: 3.47 + 12.60 = 16.07.',
        steps: ['Line up the decimal points: 3.47 and 12.60', 'Add the hundredths: 7 + 0 = 7', 'Add the tenths: 4 + 6 = 10, write 0 carry 1', 'Add whole numbers with carry: 3 + 12 + 1 = 16 → Answer: 16.07']
      },
      {
        question: 'A sea turtle traveled 8.4 miles on Monday and 5.67 miles on Tuesday. How far did it travel in total?',
        options: ['13.11 miles', '14.07 miles', '12.97 miles', '14.11 miles'],
        correctIndex: 1,
        explanation: 'Line up decimal points: 8.40 + 5.67 = 14.07 miles.',
        steps: ['Rewrite 8.4 as 8.40 to align decimal places', 'Add hundredths: 0 + 7 = 7', 'Add tenths: 4 + 6 = 10, write 0 carry 1', 'Add ones with carry: 8 + 5 + 1 = 14 → Answer: 14.07 miles']
      },
      {
        question: 'What is 15.3 − 7.85?',
        options: ['8.55', '7.55', '8.45', '7.45'],
        correctIndex: 3,
        explanation: '15.30 − 7.85 = 7.45. Line up decimal points and subtract carefully.',
        steps: ['Rewrite 15.3 as 15.30', 'Subtract hundredths: need to borrow — 10 − 5 = 5', 'Subtract tenths: 2 − 8, need to borrow — 12 − 8 = 4', 'Subtract ones: 4 − 7, need to borrow — 14 − 7 = 7; tens: 0 → Answer: 7.45']
      },
      {
        question: 'What is 4.6 × 3?',
        options: ['12.18', '13.8', '1.38', '14.8'],
        correctIndex: 1,
        explanation: 'Multiply 46 × 3 = 138. There is 1 decimal place in 4.6, so the answer is 13.8.',
        steps: ['Ignore the decimal: 46 × 3 = 138', 'Count decimal places in the factors: 1 place (in 4.6)', 'Place the decimal: 13.8', 'Answer: 13.8']
      },
      {
        question: 'What is 2.4 × 1.5?',
        options: ['3.6', '36', '0.36', '3.06'],
        correctIndex: 0,
        explanation: 'Multiply 24 × 15 = 360. There are 2 decimal places total, so the answer is 3.60 = 3.6.',
        steps: ['Multiply without decimals: 24 × 15 = 360', 'Count decimal places in both factors: 1 + 1 = 2 places total', 'Place the decimal: 3.60', 'Simplify: 3.6']
      },
      {
        question: 'A bottle of sunscreen costs $8.75. Mia buys 3 bottles for a beach trip. How much does she spend?',
        options: ['$24.25', '$26.25', '$25.25', '$26.75'],
        correctIndex: 1,
        explanation: '$8.75 × 3: 875 × 3 = 2625. Two decimal places → $26.25.',
        steps: ['Multiply without decimals: 875 × 3 = 2625', 'Count decimal places: 2 places (cents)', 'Place the decimal: 26.25', 'Answer: $26.25']
      },
      {
        question: 'What is 0.06 × 0.4?',
        options: ['0.24', '0.024', '2.4', '0.0024'],
        correctIndex: 1,
        explanation: '6 × 4 = 24. Total decimal places: 2 + 1 = 3. So the answer is 0.024.',
        steps: ['Multiply without decimals: 6 × 4 = 24', 'Count decimal places: 0.06 has 2, 0.4 has 1 → 3 total', 'Place 3 decimal places in 24: 0.024', 'Answer: 0.024']
      },
      {
        question: 'The temperature in Miami was 91.4°F on Monday and 88.75°F on Tuesday. How much did the temperature drop?',
        options: ['3.35°F', '2.65°F', '2.35°F', '3.65°F'],
        correctIndex: 1,
        explanation: '91.40 − 88.75 = 2.65°F.',
        steps: ['Rewrite 91.4 as 91.40', 'Subtract hundredths: 0 − 5, need to borrow → 10 − 5 = 5', 'Subtract tenths after borrowing: 3 − 7, need to borrow → 13 − 7 = 6', 'Subtract whole numbers: 90 − 88 = 2 → Answer: 2.65°F']
      }
    ]
  },
  {
    id: 'volume-grade5',
    title: 'Volume of Rectangular Prisms',
    coverEmoji: '📦',
    coverColor: '#10b981',
    topic: 'geometry',
    grades: [5, 6],
    questions: [
      {
        question: 'A box has a length of 5 cm, width of 4 cm, and height of 3 cm. What is its volume?',
        options: ['47 cm³', '60 cm³', '20 cm³', '12 cm³'],
        correctIndex: 1,
        explanation: 'Volume = length × width × height = 5 × 4 × 3 = 60 cm³.',
        steps: ['Formula: V = l × w × h', 'Plug in values: V = 5 × 4 × 3', 'Multiply step by step: 5 × 4 = 20, then 20 × 3 = 60', 'Answer: 60 cm³']
      },
      {
        question: 'A cooler for a Florida beach trip measures 12 inches long, 8 inches wide, and 10 inches tall. What is its volume?',
        options: ['960 in³', '860 in³', '30 in³', '1,200 in³'],
        correctIndex: 0,
        explanation: 'V = 12 × 8 × 10 = 960 cubic inches.',
        steps: ['Formula: V = l × w × h', 'Plug in: V = 12 × 8 × 10', 'Multiply: 12 × 8 = 96, then 96 × 10 = 960', 'Answer: 960 in³']
      },
      {
        question: 'What is the volume of a cube with a side length of 6 feet?',
        options: ['36 ft³', '18 ft³', '216 ft³', '108 ft³'],
        correctIndex: 2,
        explanation: 'A cube has equal sides. V = 6 × 6 × 6 = 216 ft³.',
        steps: ['A cube has length = width = height = 6 ft', 'V = 6 × 6 × 6', 'First: 6 × 6 = 36', 'Then: 36 × 6 = 216 ft³']
      },
      {
        question: 'A fish tank is 24 in long, 12 in wide, and 15 in tall. What is its volume?',
        options: ['4,320 in³', '51 in³', '2,880 in³', '3,240 in³'],
        correctIndex: 0,
        explanation: 'V = 24 × 12 × 15 = 4,320 in³.',
        steps: ['Formula: V = l × w × h', 'Multiply: 24 × 12 = 288', 'Then: 288 × 15 = 4,320', 'Answer: 4,320 in³']
      },
      {
        question: 'A box has a volume of 120 cm³. Its length is 10 cm and its width is 4 cm. What is its height?',
        options: ['3 cm', '14 cm', '106 cm', '2 cm'],
        correctIndex: 0,
        explanation: 'V = l × w × h → 120 = 10 × 4 × h → 120 = 40 × h → h = 3 cm.',
        steps: ['Start with the formula: V = l × w × h', 'Plug in known values: 120 = 10 × 4 × h', 'Simplify: 120 = 40 × h', 'Divide: h = 120 ÷ 40 = 3 cm']
      },
      {
        question: 'Two boxes are stacked. Box A has a volume of 75 in³. Box B has a volume of 48 in³. What is the total volume?',
        options: ['113 in³', '123 in³', '27 in³', '3,600 in³'],
        correctIndex: 1,
        explanation: 'Add the volumes: 75 + 48 = 123 in³.',
        steps: ['Volumes of separate boxes can be added', 'Box A: 75 in³, Box B: 48 in³', 'Add: 75 + 48 = 123', 'Answer: 123 in³']
      },
      {
        question: 'A sandbox at a Florida playground is 6 ft long, 4 ft wide, and 1/2 ft deep. What is its volume?',
        options: ['10.5 ft³', '10 ft³', '12 ft³', '24 ft³'],
        correctIndex: 2,
        explanation: 'V = 6 × 4 × 0.5 = 12 ft³.',
        steps: ['Formula: V = l × w × h', 'Plug in: V = 6 × 4 × 0.5', 'Multiply: 6 × 4 = 24', 'Then: 24 × 0.5 = 12 ft³']
      },
      {
        question: 'A rectangular prism has a base area of 18 m² and a height of 5 m. What is its volume?',
        options: ['23 m³', '90 m³', '45 m³', '13 m³'],
        correctIndex: 1,
        explanation: 'V = base area × height = 18 × 5 = 90 m³.',
        steps: ['Volume formula using base area: V = B × h', 'B = 18 m², h = 5 m', 'Multiply: 18 × 5 = 90', 'Answer: 90 m³']
      }
    ]
  },
  {
    id: 'coordinate-plane',
    title: 'Coordinate Plane',
    coverEmoji: '📍',
    coverColor: '#3b82f6',
    topic: 'geometry',
    grades: [5, 6, 7],
    questions: [
      {
        question: 'Which ordered pair describes a point 4 units to the right and 3 units up from the origin?',
        options: ['(3, 4)', '(−4, 3)', '(4, 3)', '(4, −3)'],
        correctIndex: 2,
        explanation: 'Right means positive x, up means positive y. So the point is (4, 3).',
        steps: ['The first number in an ordered pair is the x-coordinate (left/right)', 'The second number is the y-coordinate (up/down)', '4 units right → x = 4; 3 units up → y = 3', 'Answer: (4, 3)']
      },
      {
        question: 'Point A is at (2, 5). Point B is at (2, −1). What is the distance between them?',
        options: ['4 units', '7 units', '6 units', '3 units'],
        correctIndex: 2,
        explanation: 'Both points have x = 2, so they are on the same vertical line. Distance = |5 − (−1)| = |6| = 6 units.',
        steps: ['Both points have the same x-value (x = 2)', 'Subtract the y-values: 5 − (−1) = 5 + 1 = 6', 'Take the absolute value: |6| = 6', 'Answer: 6 units']
      },
      {
        question: 'Which quadrant contains the point (−3, 4)?',
        options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
        correctIndex: 1,
        explanation: 'Quadrant II has a negative x and positive y. (−3, 4) has x < 0 and y > 0, so it is in Quadrant II.',
        steps: ['Quadrant I: (+, +), Quadrant II: (−, +)', 'Quadrant III: (−, −), Quadrant IV: (+, −)', 'The point is (−3, 4): x is negative, y is positive', 'Answer: Quadrant II']
      },
      {
        question: 'A Florida theme park map uses a coordinate grid. Roller Coaster A is at (3, 7) and Roller Coaster B is at (9, 7). How far apart are they?',
        options: ['7 units', '4 units', '12 units', '6 units'],
        correctIndex: 3,
        explanation: 'Both points have y = 7, so subtract x values: |9 − 3| = 6 units.',
        steps: ['Both points have the same y-value (y = 7)', 'Subtract the x-values: 9 − 3 = 6', 'Take absolute value: |6| = 6', 'Answer: 6 units apart']
      },
      {
        question: 'What is the y-coordinate of a point on the x-axis?',
        options: ['1', 'Any number', '0', 'undefined'],
        correctIndex: 2,
        explanation: 'All points on the x-axis have a y-coordinate of 0.',
        steps: ['The x-axis is the horizontal number line', 'Points on it are written as (x, 0)', 'The y-coordinate is always 0 on the x-axis', 'Answer: 0']
      },
      {
        question: 'A pelican flies from (−4, 2) to (5, 2) along a straight path. How far did it fly?',
        options: ['9 units', '1 unit', '7 units', '3 units'],
        correctIndex: 0,
        explanation: 'Same y-value — horizontal distance. |5 − (−4)| = |5 + 4| = 9 units.',
        steps: ['Both points are at y = 2, so this is a horizontal path', 'Subtract x-values: 5 − (−4) = 5 + 4 = 9', 'Take absolute value: |9| = 9', 'Answer: 9 units']
      },
      {
        question: 'If you reflect the point (3, −5) over the x-axis, where does it land?',
        options: ['(3, 5)', '(−3, −5)', '(−3, 5)', '(5, −3)'],
        correctIndex: 0,
        explanation: 'Reflecting over the x-axis flips the sign of the y-coordinate. (3, −5) → (3, 5).',
        steps: ['Reflecting over the x-axis only changes the y-coordinate', 'Flip the sign of y: −5 → +5', 'The x-coordinate stays the same: 3', 'Answer: (3, 5)']
      },
      {
        question: 'Which point lies on the y-axis?',
        options: ['(0, −6)', '(2, 0)', '(1, 1)', '(−4, −4)'],
        correctIndex: 0,
        explanation: 'Points on the y-axis have an x-coordinate of 0. (0, −6) has x = 0.',
        steps: ['The y-axis is the vertical number line', 'Points on it are written as (0, y)', 'Check each option for x = 0', 'Answer: (0, −6)']
      }
    ]
  },
  {
    id: 'order-of-operations',
    title: 'Order of Operations',
    coverEmoji: '🔣',
    coverColor: '#f97316',
    topic: 'operations',
    grades: [5, 6, 7],
    questions: [
      {
        question: 'What is 3 + 4 × 2?',
        options: ['14', '11', '10', '24'],
        correctIndex: 1,
        explanation: 'Multiply before adding: 4 × 2 = 8, then 3 + 8 = 11.',
        steps: ['Order of operations: multiply/divide before add/subtract', 'First: 4 × 2 = 8', 'Then add: 3 + 8 = 11', 'Answer: 11']
      },
      {
        question: 'What is (5 + 3) × 4 − 2?',
        options: ['30', '34', '18', '10'],
        correctIndex: 0,
        explanation: 'Parentheses first: (5 + 3) = 8. Then multiply: 8 × 4 = 32. Then subtract: 32 − 2 = 30.',
        steps: ['Parentheses first: 5 + 3 = 8', 'Multiply: 8 × 4 = 32', 'Subtract: 32 − 2 = 30', 'Answer: 30']
      },
      {
        question: 'What is 24 ÷ 6 + 3 × 2?',
        options: ['14', '10', '22', '5'],
        correctIndex: 1,
        explanation: 'Multiply and divide first (left to right): 24 ÷ 6 = 4, 3 × 2 = 6. Add: 4 + 6 = 10.',
        steps: ['Division: 24 ÷ 6 = 4', 'Multiplication: 3 × 2 = 6', 'Add the results: 4 + 6 = 10', 'Answer: 10']
      },
      {
        question: 'What is 5² − 3 × 4?',
        options: ['8', '13', '36', '88'],
        correctIndex: 1,
        explanation: 'Exponents first: 5² = 25. Then multiply: 3 × 4 = 12. Subtract: 25 − 12 = 13.',
        steps: ['Exponents first: 5² = 25', 'Multiply: 3 × 4 = 12', 'Subtract: 25 − 12 = 13', 'Answer: 13']
      },
      {
        question: 'A group of Florida students solve: 2 × (8 − 3) + 4². What is the answer?',
        options: ['18', '26', '50', '30'],
        correctIndex: 1,
        explanation: 'Parentheses: 8 − 3 = 5. Exponent: 4² = 16. Multiply: 2 × 5 = 10. Add: 10 + 16 = 26.',
        steps: ['Parentheses: 8 − 3 = 5', 'Exponent: 4² = 16', 'Multiply: 2 × 5 = 10', 'Add: 10 + 16 = 26']
      },
      {
        question: 'What is 18 ÷ (2 + 1) × 3?',
        options: ['2', '27', '18', '9'],
        correctIndex: 2,
        explanation: 'Parentheses: 2 + 1 = 3. Divide: 18 ÷ 3 = 6. Multiply: 6 × 3 = 18.',
        steps: ['Parentheses first: 2 + 1 = 3', 'Divide (left to right): 18 ÷ 3 = 6', 'Multiply: 6 × 3 = 18', 'Answer: 18']
      },
      {
        question: 'What is 3 + 6² ÷ 4?',
        options: ['20.25', '12', '11', '2.25'],
        correctIndex: 1,
        explanation: 'Exponent: 6² = 36. Divide: 36 ÷ 4 = 9. Add: 3 + 9 = 12.',
        steps: ['Exponents first: 6² = 36', 'Divide: 36 ÷ 4 = 9', 'Add: 3 + 9 = 12', 'Answer: 12']
      },
      {
        question: 'What is (4 + 1)² × 2 − 10?',
        options: ['40', '32', '60', '90'],
        correctIndex: 0,
        explanation: 'Parentheses: 4 + 1 = 5. Exponent: 5² = 25. Multiply: 25 × 2 = 50. Subtract: 50 − 10 = 40.',
        steps: ['Parentheses: 4 + 1 = 5', 'Exponent: 5² = 25', 'Multiply: 25 × 2 = 50', 'Subtract: 50 − 10 = 40']
      }
    ]
  },
  {
    id: 'numerical-patterns',
    title: 'Numerical Patterns and Rules',
    coverEmoji: '🔁',
    coverColor: '#84cc16',
    topic: 'patterns',
    grades: [5, 6],
    questions: [
      {
        question: 'What is the rule for the pattern: 3, 6, 12, 24, 48?',
        options: ['Add 3', 'Multiply by 3', 'Multiply by 2', 'Add 6'],
        correctIndex: 2,
        explanation: 'Each term is double the previous: 3 × 2 = 6, 6 × 2 = 12, and so on. The rule is multiply by 2.',
        steps: ['Check: 3 → 6 (difference of 3, ratio of 2)', 'Check: 6 → 12 (ratio of 2)', 'Check: 12 → 24 (ratio of 2)', 'The rule is: multiply by 2']
      },
      {
        question: 'The sequence starts at 2 and follows the rule "multiply by 3." What is the 4th term?',
        options: ['18', '54', '6', '27'],
        correctIndex: 1,
        explanation: 'Term 1: 2. Term 2: 6. Term 3: 18. Term 4: 54.',
        steps: ['Term 1: 2', 'Term 2: 2 × 3 = 6', 'Term 3: 6 × 3 = 18', 'Term 4: 18 × 3 = 54']
      },
      {
        question: 'A Florida nature center plants 5 trees in week 1 and adds 4 trees each week. How many trees are planted in week 5?',
        options: ['25 trees', '20 trees', '21 trees', '24 trees'],
        correctIndex: 2,
        explanation: 'Week 1: 5. Week 2: 9. Week 3: 13. Week 4: 17. Week 5: 21 trees.',
        steps: ['Week 1: 5 trees', 'Add 4 each week: 5, 9, 13, 17, 21', 'Week 5: 21 trees', 'Or use formula: 5 + 4 × (5 − 1) = 5 + 16 = 21']
      },
      {
        question: 'What are the next two terms in the pattern: 100, 50, 25, _____, _____?',
        options: ['12 and 6', '12.5 and 6.25', '10 and 5', '0 and −25'],
        correctIndex: 1,
        explanation: 'The rule is divide by 2 (multiply by 1/2): 25 ÷ 2 = 12.5, then 12.5 ÷ 2 = 6.25.',
        steps: ['Find the rule: 100 → 50 (÷ 2), 50 → 25 (÷ 2)', 'Rule: divide by 2 each time', 'Next term: 25 ÷ 2 = 12.5', 'Then: 12.5 ÷ 2 = 6.25']
      },
      {
        question: 'Sequence A starts at 1 and adds 2 each time. Sequence B starts at 0 and adds 3 each time. Which term do both sequences share first (after zero)?',
        options: ['6', '3', '9', '12'],
        correctIndex: 1,
        explanation: 'Sequence A: 1, 3, 5, 7, 9... Sequence B: 0, 3, 6, 9... The first shared term after 0 is 3.',
        steps: ['List Sequence A: 1, 3, 5, 7, 9, 11...', 'List Sequence B: 0, 3, 6, 9, 12...', 'Find first common term: 3 appears in both', 'Answer: 3']
      },
      {
        question: 'The table shows: x = 1 → y = 4; x = 2 → y = 7; x = 3 → y = 10. What is the rule?',
        options: ['y = 4x', 'y = x + 3', 'y = 3x + 1', 'y = 2x + 2'],
        correctIndex: 2,
        explanation: 'Check: y = 3(1) + 1 = 4 ✓, y = 3(2) + 1 = 7 ✓, y = 3(3) + 1 = 10 ✓. Rule: y = 3x + 1.',
        steps: ['Find the difference in y values: 7 − 4 = 3, so add 3 each time', 'The multiplier for x is 3', 'Check at x = 1: 3(1) = 3, but y = 4, so add 1', 'Rule: y = 3x + 1']
      },
      {
        question: 'A lizard counts 8 palm trees on day 1 and 5 more each day. On which day does it count 28 trees?',
        options: ['Day 3', 'Day 4', 'Day 5', 'Day 6'],
        correctIndex: 2,
        explanation: 'Start at 8 and add 5 each day: Day 1: 8, Day 2: 13, Day 3: 18, Day 4: 23, Day 5: 28. The answer is Day 5.',
        steps: ['Day 1: 8', 'Day 2: 8+5 = 13', 'Day 3: 13+5 = 18', 'Day 4: 18+5 = 23; Day 5: 23+5 = 28 → Day 5']
      },
      {
        question: 'Which rule matches the pattern: input 2 → output 10; input 5 → output 25; input 8 → output 40?',
        options: ['output = input + 8', 'output = input × 4', 'output = input × 5', 'output = 5 × input − 1'],
        correctIndex: 2,
        explanation: '2 × 5 = 10; 5 × 5 = 25; 8 × 5 = 40. The rule is output = input × 5.',
        steps: ['Test option: input × 5', '2 × 5 = 10 ✓', '5 × 5 = 25 ✓', '8 × 5 = 40 ✓ → Rule: multiply input by 5']
      }
    ]
  },
  {
    id: 'dividing-whole-numbers',
    title: 'Dividing Multi-Digit Numbers',
    coverEmoji: '🔄',
    coverColor: '#6366f1',
    topic: 'operations',
    grades: [5, 6],
    questions: [
      {
        question: 'What is 672 ÷ 8?',
        options: ['74', '84', '78', '94'],
        correctIndex: 1,
        explanation: '672 ÷ 8: 8 goes into 67 eight times (8 × 8 = 64), remainder 3. Bring down 2 → 32. 32 ÷ 8 = 4. Answer: 84.',
        steps: ['Set up long division: 672 ÷ 8', 'How many times does 8 go into 67? 8 times (64). Remainder: 3', 'Bring down the 2: 32', '8 goes into 32 exactly 4 times → Answer: 84']
      },
      {
        question: 'A school in Florida collects 1,248 canned goods. If 12 classes share them equally, how many does each class get?',
        options: ['96 cans', '104 cans', '108 cans', '112 cans'],
        correctIndex: 1,
        explanation: '1,248 ÷ 12 = 104.',
        steps: ['Divide: 1,248 ÷ 12', '12 × 100 = 1,200; remainder 48', '48 ÷ 12 = 4', 'Answer: 100 + 4 = 104 cans']
      },
      {
        question: 'What is 3,045 ÷ 5?',
        options: ['69', '609', '690', '60 r 9'],
        correctIndex: 1,
        explanation: '5 goes into 30 six times (30), remainder 0. 5 goes into 04 zero times. 5 goes into 45 nine times. Answer: 609.',
        steps: ['5 goes into 30: 6 times (30). Remainder: 0', 'Bring down 4: 5 goes into 04 zero times', 'Bring down 5: 5 goes into 45 nine times', 'Answer: 609']
      },
      {
        question: 'What is 4,536 ÷ 9?',
        options: ['504', '54', '514', '540'],
        correctIndex: 0,
        explanation: '4,536 ÷ 9: 9 × 500 = 4,500, remainder 36. 36 ÷ 9 = 4. Answer: 504.',
        steps: ['9 × 500 = 4,500; subtract: 4,536 − 4,500 = 36', '36 ÷ 9 = 4', 'Add: 500 + 4 = 504', 'Answer: 504']
      },
      {
        question: 'A Florida citrus farm packs 2,352 oranges into boxes of 24. How many full boxes are made?',
        options: ['89 boxes', '98 boxes', '97 boxes', '102 boxes'],
        correctIndex: 1,
        explanation: '2,352 ÷ 24 = 98.',
        steps: ['24 × 90 = 2,160; subtract: 2,352 − 2,160 = 192', '24 × 8 = 192; subtract: 192 − 192 = 0', '90 + 8 = 98', 'Answer: 98 boxes']
      },
      {
        question: 'What is 8,125 ÷ 25?',
        options: ['325', '300', '335', '3,250'],
        correctIndex: 0,
        explanation: '25 × 300 = 7,500; remainder 625. 25 × 25 = 625. 300 + 25 = 325.',
        steps: ['25 × 300 = 7,500; 8,125 − 7,500 = 625', '25 × 25 = 625; 625 − 625 = 0', '300 + 25 = 325', 'Answer: 325']
      },
      {
        question: 'What is the remainder when 497 is divided by 15?',
        options: ['5', '11', '2', '7'],
        correctIndex: 2,
        explanation: '15 × 33 = 495. 497 − 495 = 2. So the remainder is 2.',
        steps: ['Divide: 497 ÷ 15', '15 × 33 = 450 + 45 = 495', '497 − 495 = 2', 'Remainder = 2']
      },
      {
        question: 'A charter bus holds 45 passengers. A Florida field trip has 315 students. How many buses are needed?',
        options: ['6 buses', '7 buses', '8 buses', '9 buses'],
        correctIndex: 1,
        explanation: '315 ÷ 45 = 7. Each bus holds exactly 45 students, so 7 buses are needed.',
        steps: ['Divide: 315 ÷ 45', '45 × 7 = 315', 'There is no remainder', 'Answer: 7 buses']
      }
    ]
  },
  {
    id: 'line-plots-grade5',
    title: 'Line Plots with Fractions',
    coverEmoji: '📊',
    coverColor: '#ec4899',
    topic: 'data',
    grades: [5, 6],
    questions: [
      {
        question: 'A line plot shows the lengths of shells found at Clearwater Beach: 1/4, 1/4, 1/2, 1/2, 3/4, 3/4, 3/4, 1. How many shells are shorter than 3/4 inch?',
        options: ['4 shells', '5 shells', '2 shells', '3 shells'],
        correctIndex: 0,
        explanation: 'Shells shorter than 3/4 are: 1/4, 1/4, 1/2, 1/2 — that is 4 shells.',
        steps: ['Identify the lengths shorter than 3/4', '1/4 < 3/4 ✓ (appears twice)', '1/2 < 3/4 ✓ (appears twice)', 'Count: 2 + 2 = 4 shells']
      },
      {
        question: 'Using the same line plot (1/4, 1/4, 1/2, 1/2, 3/4, 3/4, 3/4, 1), what is the total length if you add all the shell lengths?',
        options: ['6 inches', '5 inches', '5 1/2 inches', '4 3/4 inches'],
        correctIndex: 3,
        explanation: 'Convert to quarters: 1+1+2+2+3+3+3+4 = 19 quarters = 19/4 = 4 3/4 inches.',
        steps: ['Convert to quarters: 1/4, 1/4, 2/4, 2/4, 3/4, 3/4, 3/4, 4/4', 'Add numerators: 1+1+2+2+3+3+3+4 = 19', '19/4 = 4 3/4', 'Answer: 4 3/4 inches']
      },
      {
        question: 'A line plot shows how much rain fell each day (in inches): 1/2, 1/2, 1/4, 3/4, 1/2. What is the difference between the greatest and least values?',
        options: ['1/4 inch', '3/4 inch', '1/2 inch', '1 inch'],
        correctIndex: 2,
        explanation: 'Greatest = 3/4, Least = 1/4. Difference: 3/4 − 1/4 = 2/4 = 1/2 inch.',
        steps: ['Identify greatest value: 3/4', 'Identify least value: 1/4', 'Subtract: 3/4 − 1/4 = 2/4', 'Simplify: 2/4 = 1/2 inch']
      },
      {
        question: 'Five students each measured a piece of ribbon. The measurements were: 1 1/4, 1 1/2, 1 1/4, 2, 1 3/4. What is the total length?',
        options: ['7 3/4 inches', '8 inches', '6 3/4 inches', '7 inches'],
        correctIndex: 0,
        explanation: '1 1/4 + 1 1/2 + 1 1/4 + 2 + 1 3/4 = 7 3/4. Add the whole numbers: 1+1+1+2+1 = 6. Add fractions: 1/4+2/4+1/4+0+3/4 = 7/4 = 1 3/4. Total: 6 + 1 3/4 = 7 3/4.',
        steps: ['Add the whole numbers: 1+1+1+2+1 = 6', 'Convert fractions to quarters: 1/4+2/4+1/4+0+3/4 = 7/4', '7/4 = 1 3/4', 'Add: 6 + 1 3/4 = 7 3/4 inches']
      },
      {
        question: 'A line plot shows distances jumped by frogs (in feet): 1/2, 1/2, 1, 1 1/2, 1, 1/2, 1 1/2. Which distance appeared most often?',
        options: ['1 foot', '1 1/2 feet', '1/2 foot', '2 feet'],
        correctIndex: 2,
        explanation: '1/2 appears 3 times, 1 appears 2 times, 1 1/2 appears 2 times. The mode is 1/2.',
        steps: ['Count 1/2: appears at positions 1, 2, 6 → 3 times', 'Count 1: appears at positions 3, 5 → 2 times', 'Count 1 1/2: appears at positions 4, 7 → 2 times', 'Most frequent: 1/2 foot']
      },
      {
        question: 'A line plot shows plant heights (inches): 2 1/4, 2 1/2, 2 1/4, 2 3/4, 2 1/2. What is the difference in height between the tallest and shortest plant?',
        options: ['1/2 inch', '1/4 inch', '3/4 inch', '1 inch'],
        correctIndex: 0,
        explanation: 'Tallest: 2 3/4. Shortest: 2 1/4. Difference: 2 3/4 − 2 1/4 = 2/4 = 1/2 inch.',
        steps: ['Identify tallest: 2 3/4 inches', 'Identify shortest: 2 1/4 inches', 'Subtract: 2 3/4 − 2 1/4 = 2/4', 'Simplify: 2/4 = 1/2 inch']
      },
      {
        question: 'A class measures rainfall each week for 6 weeks (in inches): 1/4, 3/4, 1/2, 1/4, 1/4, 3/4. What is the total rainfall?',
        options: ['2 3/4 inches', '3 inches', '2 1/4 inches', '2 1/2 inches'],
        correctIndex: 0,
        explanation: 'Add: 1/4+3/4+2/4+1/4+1/4+3/4 = 11/4 = 2 3/4 inches.',
        steps: ['Convert to quarters: 1/4, 3/4, 2/4, 1/4, 1/4, 3/4', 'Add numerators: 1+3+2+1+1+3 = 11', '11/4 = 2 3/4', 'Answer: 2 3/4 inches']
      },
      {
        question: 'A line plot shows how far students in a Florida school walked (in miles): 1/2, 1, 1/2, 1 1/2, 1, 1, 1/2. How many students walked more than 1/2 mile?',
        options: ['3 students', '4 students', '5 students', '2 students'],
        correctIndex: 1,
        explanation: 'Values greater than 1/2: 1, 1 1/2, 1, 1 — that is 4 students.',
        steps: ['List all values: 1/2, 1, 1/2, 1 1/2, 1, 1, 1/2', 'Identify those greater than 1/2: 1, 1 1/2, 1, 1', 'Count them: 4 students', 'Answer: 4 students']
      }
    ]
  },
  {
    id: 'ratios-rates',
    title: 'Ratios and Rates',
    coverEmoji: '⚖️',
    coverColor: '#0ea5e9',
    topic: 'ratios',
    grades: [6, 7],
    questions: [
      {
        question: 'In a bag of Florida mixed nuts, there are 6 almonds and 9 cashews. What is the ratio of almonds to cashews in simplest form?',
        options: ['6:9', '3:2', '2:3', '9:6'],
        correctIndex: 2,
        explanation: 'Ratio is 6:9. Simplify by dividing both by 3: 6÷3 = 2, 9÷3 = 3. Simplified ratio: 2:3.',
        steps: ['Write the ratio: 6 almonds to 9 cashews = 6:9', 'Find the GCF of 6 and 9: GCF = 3', 'Divide both parts by 3: 6÷3 = 2, 9÷3 = 3', 'Simplified ratio: 2:3']
      },
      {
        question: 'A car travels 150 miles in 3 hours. What is the unit rate in miles per hour?',
        options: ['30 mph', '45 mph', '50 mph', '60 mph'],
        correctIndex: 2,
        explanation: 'Unit rate = 150 miles ÷ 3 hours = 50 miles per hour.',
        steps: ['Unit rate means "per 1 unit"', 'Divide miles by hours: 150 ÷ 3', '150 ÷ 3 = 50', 'Answer: 50 miles per hour']
      },
      {
        question: 'A recipe uses 2 cups of sugar for every 5 cups of flour. If you use 10 cups of flour, how much sugar do you need?',
        options: ['5 cups', '4 cups', '25 cups', '8 cups'],
        correctIndex: 1,
        explanation: 'Ratio: 2:5. Scale up: 5 × 2 = 10, so sugar × 2 = 4 cups.',
        steps: ['Set up the ratio: 2 sugar : 5 flour', 'Find the scale factor: 10 ÷ 5 = 2', 'Multiply sugar by the scale factor: 2 × 2 = 4', 'Answer: 4 cups of sugar']
      },
      {
        question: 'A Florida soccer team won 8 games and lost 4. What is the ratio of wins to total games?',
        options: ['8:4', '2:3', '2:1', '4:12'],
        correctIndex: 1,
        explanation: 'Total games = 8 + 4 = 12. Ratio of wins to total = 8:12. Simplify: 8÷4 = 2, 12÷4 = 3. Ratio = 2:3.',
        steps: ['Total games = 8 + 4 = 12', 'Write ratio: 8:12', 'GCF of 8 and 12 = 4', 'Simplify: 8÷4 : 12÷4 = 2:3']
      },
      {
        question: 'A sea turtle lays 120 eggs in 4 nests equally. What is the rate of eggs per nest?',
        options: ['24 eggs/nest', '30 eggs/nest', '480 eggs/nest', '36 eggs/nest'],
        correctIndex: 1,
        explanation: '120 eggs ÷ 4 nests = 30 eggs per nest.',
        steps: ['Divide total eggs by number of nests', '120 ÷ 4 = 30', 'This is a unit rate', 'Answer: 30 eggs per nest']
      },
      {
        question: 'A map of Florida uses a scale of 1 inch = 50 miles. If two cities are 3.5 inches apart on the map, how far apart are they really?',
        options: ['53.5 miles', '175 miles', '143 miles', '200 miles'],
        correctIndex: 1,
        explanation: 'Multiply map distance by scale: 3.5 × 50 = 175 miles.',
        steps: ['Scale: 1 inch = 50 miles', 'Map distance: 3.5 inches', 'Multiply: 3.5 × 50 = 175', 'Answer: 175 miles']
      },
      {
        question: 'A store sells 3 bottles of sunscreen for $12. What is the price for 5 bottles at the same rate?',
        options: ['$15', '$18', '$20', '$24'],
        correctIndex: 2,
        explanation: 'Unit rate: $12 ÷ 3 = $4 per bottle. 5 × $4 = $20.',
        steps: ['Find the unit rate: $12 ÷ 3 = $4 per bottle', 'Multiply by 5: 5 × $4 = $20', 'Or use ratio: 3/12 = 5/x → x = 60/3 = 20', 'Answer: $20']
      },
      {
        question: 'In a class, the ratio of boys to girls is 3:4. There are 21 boys. How many girls are there?',
        options: ['16 girls', '24 girls', '28 girls', '18 girls'],
        correctIndex: 2,
        explanation: 'Scale factor: 21 ÷ 3 = 7. Girls: 4 × 7 = 28.',
        steps: ['Ratio is 3:4 (boys:girls)', 'Find scale factor: 21 ÷ 3 = 7', 'Multiply girls ratio by scale factor: 4 × 7 = 28', 'Answer: 28 girls']
      }
    ]
  },
  {
    id: 'percent-basics',
    title: 'Percents and Proportions',
    coverEmoji: '💯',
    coverColor: '#f59e0b',
    topic: 'ratios',
    grades: [6, 7, 8],
    questions: [
      {
        question: 'What is 30% of 200?',
        options: ['30', '60', '20', '600'],
        correctIndex: 1,
        explanation: '30% = 0.30. Multiply: 0.30 × 200 = 60.',
        steps: ['Convert percent to decimal: 30% = 0.30', 'Multiply: 0.30 × 200 = 60', 'Or: 30/100 × 200 = 6,000/100 = 60', 'Answer: 60']
      },
      {
        question: 'A Florida theme park sells a ticket for $80. With a 15% discount, how much do you save?',
        options: ['$8', '$12', '$15', '$68'],
        correctIndex: 1,
        explanation: '15% of $80 = 0.15 × 80 = $12 saved.',
        steps: ['Convert: 15% = 0.15', 'Multiply: 0.15 × 80 = 12', 'You save $12', 'Discounted price would be $80 − $12 = $68']
      },
      {
        question: '18 out of 24 students passed a test. What percent passed?',
        options: ['70%', '18%', '75%', '80%'],
        correctIndex: 2,
        explanation: '18/24 = 0.75 = 75%.',
        steps: ['Write as a fraction: 18/24', 'Divide: 18 ÷ 24 = 0.75', 'Convert to percent: 0.75 × 100 = 75%', 'Answer: 75%']
      },
      {
        question: 'A jacket costs $45 after a 10% discount. What was the original price?',
        options: ['$40.50', '$49.50', '$54.50', '$50'],
        correctIndex: 3,
        explanation: 'If 10% was removed, the sale price is 90% of original. $45 ÷ 0.90 = $50.',
        steps: ['Sale price = original × (1 − 0.10) = original × 0.90', 'Set up: 0.90 × original = $45', 'Divide: $45 ÷ 0.90 = $50', 'Answer: $50']
      },
      {
        question: 'What is 6% of 350?',
        options: ['2.1', '210', '21', '2100'],
        correctIndex: 2,
        explanation: '6% = 0.06. Multiply: 0.06 × 350 = 21.',
        steps: ['Convert: 6% = 0.06', 'Multiply: 0.06 × 350', '6 × 350 = 2,100 then move decimal: 21.0', 'Answer: 21']
      },
      {
        question: 'A school raised $600 for a Florida hurricane relief fund. Their goal was $750. What percent of the goal did they reach?',
        options: ['60%', '70%', '80%', '85%'],
        correctIndex: 2,
        explanation: '600/750 = 0.8 = 80%.',
        steps: ['Divide amount raised by goal: 600 ÷ 750', '600 ÷ 750 = 0.8', 'Convert to percent: 0.8 × 100 = 80%', 'Answer: 80%']
      },
      {
        question: 'A store marks up a surfboard from $180 to $225. What is the percent increase?',
        options: ['20%', '25%', '45%', '15%'],
        correctIndex: 1,
        explanation: 'Increase = $225 − $180 = $45. Percent increase = 45/180 = 0.25 = 25%.',
        steps: ['Find the increase: 225 − 180 = 45', 'Divide by original: 45 ÷ 180 = 0.25', 'Convert to percent: 0.25 × 100 = 25%', 'Answer: 25% increase']
      },
      {
        question: 'What is 120% of 50?',
        options: ['6', '120', '60', '70'],
        correctIndex: 2,
        explanation: '120% = 1.20. Multiply: 1.20 × 50 = 60.',
        steps: ['Convert: 120% = 1.20', 'Multiply: 1.20 × 50 = 60', 'Note: 120% of a number is greater than the number', 'Answer: 60']
      }
    ]
  },
  {
    id: 'integers-number-line',
    title: 'Integers and the Number Line',
    coverEmoji: '↔️',
    coverColor: '#64748b',
    topic: 'integers',
    grades: [6, 7, 8],
    questions: [
      {
        question: 'Which integer is greatest: −8, −1, 0, −5?',
        options: ['−8', '−1', '−5', '0'],
        correctIndex: 3,
        explanation: 'On a number line, numbers increase to the right. 0 is to the right of all negative numbers, so 0 is greatest.',
        steps: ['Plot numbers on a number line: −8, −5, −1, 0', 'Numbers increase from left to right', '0 is furthest to the right', 'Answer: 0 is the greatest']
      },
      {
        question: 'What is the absolute value of −14?',
        options: ['−14', '−1/14', '14', '0'],
        correctIndex: 2,
        explanation: 'Absolute value is the distance from 0 on the number line. |−14| = 14.',
        steps: ['Absolute value = distance from 0', '−14 is 14 units from 0', '|−14| = 14', 'Answer: 14']
      },
      {
        question: 'The temperature in Tallahassee dropped from 8°F to −3°F overnight. How many degrees did it drop?',
        options: ['5 degrees', '11 degrees', '3 degrees', '8 degrees'],
        correctIndex: 1,
        explanation: 'The drop is 8 − (−3) = 8 + 3 = 11 degrees.',
        steps: ['Starting temperature: 8°F', 'Ending temperature: −3°F', 'Change = 8 − (−3) = 8 + 3 = 11', 'Answer: 11 degrees drop']
      },
      {
        question: 'Which number is the opposite of −7?',
        options: ['7', '0', '1/7', '−70'],
        correctIndex: 0,
        explanation: 'The opposite of a number is the same distance from 0 but on the other side. The opposite of −7 is 7.',
        steps: ['The opposite of a number has the same absolute value', 'But it is on the other side of 0', 'Opposite of −7 is +7', 'Answer: 7']
      },
      {
        question: 'Order from least to greatest: −3, 5, −10, 0, 2.',
        options: ['−3, −10, 0, 2, 5', '−10, −3, 0, 2, 5', '5, 2, 0, −3, −10', '0, −3, 2, −10, 5'],
        correctIndex: 1,
        explanation: 'On a number line, negative numbers come first (most negative = furthest left). Order: −10, −3, 0, 2, 5.',
        steps: ['Negatives come before 0, which comes before positives', 'Most negative: −10', 'Then: −3, 0, 2, 5', 'Order: −10, −3, 0, 2, 5']
      },
      {
        question: 'A submarine is at −250 feet. It rises 80 feet. What is its new depth?',
        options: ['−330 feet', '−170 feet', '170 feet', '330 feet'],
        correctIndex: 1,
        explanation: '−250 + 80 = −170 feet.',
        steps: ['Start: −250 feet', 'Rise 80 feet means add 80', '−250 + 80 = −170', 'Answer: −170 feet']
      },
      {
        question: 'Which integer has the greatest absolute value: −20, 15, −8, 19?',
        options: ['19', '−8', '15', '−20'],
        correctIndex: 3,
        explanation: 'Absolute values: |−20| = 20, |15| = 15, |−8| = 8, |19| = 19. The greatest is 20, which is |−20|.',
        steps: ['Find each absolute value: |−20|=20, |15|=15, |−8|=8, |19|=19', 'Compare: 20, 15, 8, 19', 'Greatest absolute value: 20', 'Answer: −20 (has absolute value 20)']
      },
      {
        question: 'A football team gains 7 yards, then loses 12 yards. What integer represents the total change?',
        options: ['19 yards', '5 yards', '−5 yards', '−19 yards'],
        correctIndex: 2,
        explanation: '+7 + (−12) = 7 − 12 = −5. The net change is −5 yards.',
        steps: ['Gain 7 yards: +7', 'Lose 12 yards: −12', 'Total: 7 + (−12) = 7 − 12 = −5', 'Answer: −5 yards (net loss of 5)']
      }
    ]
  },
  {
    id: 'integer-operations',
    title: 'Adding and Subtracting Integers',
    coverEmoji: '➕',
    coverColor: '#dc2626',
    topic: 'integers',
    grades: [6, 7, 8],
    questions: [
      {
        question: 'What is −5 + (−3)?',
        options: ['8', '−2', '−8', '2'],
        correctIndex: 2,
        explanation: 'Adding two negative numbers: the answer is negative. −5 + (−3) = −8.',
        steps: ['Both numbers are negative', 'Add the absolute values: 5 + 3 = 8', 'Keep the negative sign', 'Answer: −8']
      },
      {
        question: 'What is −9 + 4?',
        options: ['13', '−5', '5', '−13'],
        correctIndex: 1,
        explanation: 'Signs are different. Subtract absolute values: 9 − 4 = 5. Keep the sign of the number with greater absolute value (−9): −5.',
        steps: ['The signs are different (−9 and +4)', 'Subtract the smaller from larger absolute value: 9 − 4 = 5', 'The larger absolute value (9) is negative', 'Answer: −5']
      },
      {
        question: 'What is 6 − (−4)?',
        options: ['2', '−2', '10', '−10'],
        correctIndex: 2,
        explanation: 'Subtracting a negative is the same as adding a positive: 6 − (−4) = 6 + 4 = 10.',
        steps: ['Subtracting a negative = adding a positive', '6 − (−4) = 6 + 4', '6 + 4 = 10', 'Answer: 10']
      },
      {
        question: 'The temperature at a Florida ski simulator was −2°F. It dropped another 5 degrees. What is the new temperature?',
        options: ['3°F', '−7°F', '7°F', '−3°F'],
        correctIndex: 1,
        explanation: '−2 + (−5) = −7°F.',
        steps: ['Start: −2°F', 'Drop 5 more degrees: −2 + (−5)', 'Both negative: −2 − 5 = −7', 'Answer: −7°F']
      },
      {
        question: 'What is −12 − (−7)?',
        options: ['−19', '19', '−5', '5'],
        correctIndex: 2,
        explanation: '−12 − (−7) = −12 + 7 = −5.',
        steps: ['Change subtraction of a negative to addition: −12 − (−7) = −12 + 7', 'Signs are different; subtract: 12 − 7 = 5', 'The number with greater absolute value (12) is negative', 'Answer: −5']
      },
      {
        question: 'What is 3 + (−10) + 6?',
        options: ['−1', '1', '−19', '19'],
        correctIndex: 0,
        explanation: '3 + (−10) = −7. Then −7 + 6 = −1.',
        steps: ['Work left to right: 3 + (−10)', '3 + (−10) = −7 (signs differ, 10 − 3 = 7, negative wins)', 'Then: −7 + 6 = −1', 'Answer: −1']
      },
      {
        question: 'A deep-sea fish swims at −120 feet. It swims up 45 feet. What is its new depth?',
        options: ['−165 feet', '−75 feet', '75 feet', '165 feet'],
        correctIndex: 1,
        explanation: '−120 + 45 = −75 feet.',
        steps: ['Start: −120 feet', 'Swim up = add positive: −120 + 45', 'Signs differ: 120 − 45 = 75, negative sign wins', 'Answer: −75 feet']
      },
      {
        question: 'What is −4 − 9?',
        options: ['5', '−5', '13', '−13'],
        correctIndex: 3,
        explanation: '−4 − 9 = −4 + (−9) = −13.',
        steps: ['Rewrite: −4 − 9 = −4 + (−9)', 'Both are negative: add absolute values: 4 + 9 = 13', 'Keep the negative sign', 'Answer: −13']
      }
    ]
  },
  {
    id: 'algebraic-expressions',
    title: 'Writing and Evaluating Expressions',
    coverEmoji: '🔡',
    coverColor: '#7c3aed',
    topic: 'algebra',
    grades: [6, 7, 8],
    questions: [
      {
        question: 'Evaluate 3x + 5 when x = 4.',
        options: ['12', '27', '17', '32'],
        correctIndex: 2,
        explanation: 'Replace x with 4: 3(4) + 5 = 12 + 5 = 17.',
        steps: ['Substitute x = 4 into the expression', '3(4) + 5', 'Multiply first: 3 × 4 = 12', 'Add: 12 + 5 = 17']
      },
      {
        question: 'Which expression represents "7 more than twice a number n"?',
        options: ['7n + 2', '2n − 7', '2n + 7', '7(n + 2)'],
        correctIndex: 2,
        explanation: '"Twice a number n" is 2n. "7 more than" means add 7: 2n + 7.',
        steps: ['"Twice a number n" → 2n', '"7 more than" means add 7', 'Combine: 2n + 7', 'Answer: 2n + 7']
      },
      {
        question: 'Evaluate 4a − 2b when a = 5 and b = 3.',
        options: ['14', '26', '34', '16'],
        correctIndex: 0,
        explanation: '4(5) − 2(3) = 20 − 6 = 14.',
        steps: ['Substitute: a = 5, b = 3', '4(5) − 2(3)', 'Multiply: 20 − 6', 'Subtract: 14']
      },
      {
        question: 'A Florida lifeguard earns $h per hour. She works 6 hours on Saturday and 4 hours on Sunday. Which expression shows total earnings?',
        options: ['6h + 4h', 'h × (6 + 4)', '10h', 'All of the above are equivalent'],
        correctIndex: 3,
        explanation: '6h + 4h = 10h and h × (6+4) = h × 10 = 10h. All three expressions are equivalent.',
        steps: ['Saturday: 6h, Sunday: 4h', 'Total: 6h + 4h = 10h', 'Also: h × (6+4) = h × 10 = 10h', 'All three are equivalent expressions']
      },
      {
        question: 'Simplify: 5x + 3 + 2x − 1.',
        options: ['10x + 2', '7x + 4', '7x + 2', '10x − 4'],
        correctIndex: 2,
        explanation: 'Combine like terms: 5x + 2x = 7x, and 3 − 1 = 2. Answer: 7x + 2.',
        steps: ['Identify like terms: 5x and 2x; 3 and −1', 'Combine x terms: 5x + 2x = 7x', 'Combine constants: 3 − 1 = 2', 'Answer: 7x + 2']
      },
      {
        question: 'What is the value of 6² − 3x when x = 4?',
        options: ['24', '48', '12', '18'],
        correctIndex: 0,
        explanation: '6² = 36. 3(4) = 12. 36 − 12 = 24.',
        steps: ['Evaluate the exponent first: 6² = 36', 'Substitute x = 4: 3(4) = 12', 'Subtract: 36 − 12 = 24', 'Answer: 24']
      },
      {
        question: 'Write an expression for the total cost if oranges cost $0.50 each and you buy n oranges plus pay a $2 bag fee.',
        options: ['2n + 0.50', '0.50 + 2n', '0.50n + 2', '2.50n'],
        correctIndex: 2,
        explanation: 'Each orange costs $0.50, so n oranges cost 0.50n. Add the $2 bag fee: 0.50n + 2.',
        steps: ['Cost per orange: $0.50', 'n oranges cost: 0.50 × n = 0.50n', 'Add the flat bag fee: + 2', 'Expression: 0.50n + 2']
      },
      {
        question: 'If n = 6, what is the value of n² + 2n − 5?',
        options: ['43', '55', '31', '35'],
        correctIndex: 0,
        explanation: 'n² = 36, 2n = 12. 36 + 12 − 5 = 43.',
        steps: ['Substitute n = 6', 'n² = 6² = 36', '2n = 2(6) = 12', '36 + 12 − 5 = 43']
      }
    ]
  },
  {
    id: 'equations-grade6',
    title: 'Solving One-Step Equations',
    coverEmoji: '⚡',
    coverColor: '#f97316',
    topic: 'algebra',
    grades: [6, 7],
    questions: [
      {
        question: 'Solve: x + 9 = 15.',
        options: ['x = 24', 'x = 6', 'x = 7', 'x = 5'],
        correctIndex: 1,
        explanation: 'Subtract 9 from both sides: x + 9 − 9 = 15 − 9 → x = 6.',
        steps: ['Goal: get x by itself', 'Subtract 9 from both sides', 'x + 9 − 9 = 15 − 9', 'x = 6']
      },
      {
        question: 'Solve: 4m = 36.',
        options: ['m = 32', 'm = 40', 'm = 9', 'm = 144'],
        correctIndex: 2,
        explanation: 'Divide both sides by 4: 4m ÷ 4 = 36 ÷ 4 → m = 9.',
        steps: ['4m means 4 times m', 'To undo multiplication, divide both sides by 4', '4m ÷ 4 = 36 ÷ 4', 'm = 9']
      },
      {
        question: 'Solve: y − 7 = 13.',
        options: ['y = 6', 'y = 20', 'y = 91', 'y = 7'],
        correctIndex: 1,
        explanation: 'Add 7 to both sides: y − 7 + 7 = 13 + 7 → y = 20.',
        steps: ['To undo subtraction, add 7 to both sides', 'y − 7 + 7 = 13 + 7', 'Simplify: y = 20', 'Check: 20 − 7 = 13 ✓']
      },
      {
        question: 'A Florida snorkeling tour charges $n per person. 5 friends paid a total of $95. Solve 5n = 95 to find the cost per person.',
        options: ['$15', '$25', '$19', '$20'],
        correctIndex: 2,
        explanation: 'Divide both sides by 5: 5n ÷ 5 = 95 ÷ 5 → n = $19.',
        steps: ['Equation: 5n = 95', 'Divide both sides by 5', '5n ÷ 5 = 95 ÷ 5', 'n = 19, so each person paid $19']
      },
      {
        question: 'Solve: n/6 = 8.',
        options: ['n = 2', 'n = 14', 'n = 48', 'n = 1.33'],
        correctIndex: 2,
        explanation: 'Multiply both sides by 6: n/6 × 6 = 8 × 6 → n = 48.',
        steps: ['n/6 means n divided by 6', 'To undo division, multiply both sides by 6', 'n/6 × 6 = 8 × 6', 'n = 48']
      },
      {
        question: 'Solve: z + (−4) = 11.',
        options: ['z = 7', 'z = −7', 'z = 44', 'z = 15'],
        correctIndex: 3,
        explanation: 'z + (−4) = z − 4 = 11. Add 4 to both sides: z = 15.',
        steps: ['Rewrite: z + (−4) = z − 4 = 11', 'Add 4 to both sides: z − 4 + 4 = 11 + 4', 'z = 15', 'Check: 15 − 4 = 11 ✓']
      },
      {
        question: 'Solve: 3/4 × w = 12.',
        options: ['w = 9', 'w = 16', 'w = 48', 'w = 4'],
        correctIndex: 1,
        explanation: 'Multiply both sides by the reciprocal of 3/4, which is 4/3: w = 12 × 4/3 = 48/3 = 16.',
        steps: ['To undo multiplication by 3/4, multiply both sides by 4/3', 'w = 12 × 4/3', 'w = 48/3', 'w = 16']
      },
      {
        question: 'A manatee travels d miles in one day. Over 7 days it traveled 56 miles. Solve d × 7 = 56.',
        options: ['d = 8 miles', 'd = 49 miles', 'd = 7 miles', 'd = 63 miles'],
        correctIndex: 0,
        explanation: 'Divide both sides by 7: d = 56 ÷ 7 = 8 miles per day.',
        steps: ['Equation: 7d = 56', 'Divide both sides by 7', '7d ÷ 7 = 56 ÷ 7', 'd = 8 miles per day']
      }
    ]
  },
  {
    id: 'area-complex-shapes',
    title: 'Area of Triangles and Composite Figures',
    coverEmoji: '📐',
    coverColor: '#059669',
    topic: 'geometry',
    grades: [6, 7],
    questions: [
      {
        question: 'What is the area of a triangle with base 10 cm and height 6 cm?',
        options: ['60 cm²', '16 cm²', '30 cm²', '120 cm²'],
        correctIndex: 2,
        explanation: 'Area of triangle = 1/2 × base × height = 1/2 × 10 × 6 = 30 cm².',
        steps: ['Formula: A = 1/2 × b × h', 'Plug in: A = 1/2 × 10 × 6', 'Multiply: 10 × 6 = 60', 'Then: 60 × 1/2 = 30 cm²']
      },
      {
        question: 'A Florida beach flag is shaped like a right triangle with legs 8 ft and 5 ft. What is its area?',
        options: ['13 ft²', '40 ft²', '20 ft²', '80 ft²'],
        correctIndex: 2,
        explanation: 'For a right triangle, the legs are the base and height: A = 1/2 × 8 × 5 = 20 ft².',
        steps: ['The two legs of a right triangle are its base and height', 'A = 1/2 × 8 × 5', 'Multiply: 8 × 5 = 40', '40 × 1/2 = 20 ft²']
      },
      {
        question: 'A composite figure is made of a rectangle (8 × 4) and a triangle on top with base 8 and height 3. What is the total area?',
        options: ['32 sq units', '44 sq units', '56 sq units', '64 sq units'],
        correctIndex: 1,
        explanation: 'Rectangle: 8 × 4 = 32. Triangle: 1/2 × 8 × 3 = 12. Total: 32 + 12 = 44.',
        steps: ['Area of rectangle: 8 × 4 = 32', 'Area of triangle: 1/2 × 8 × 3 = 12', 'Add both: 32 + 12 = 44', 'Answer: 44 sq units']
      },
      {
        question: 'What is the area of a parallelogram with base 9 m and height 5 m?',
        options: ['14 m²', '22.5 m²', '45 m²', '90 m²'],
        correctIndex: 2,
        explanation: 'Area of parallelogram = base × height = 9 × 5 = 45 m².',
        steps: ['Formula: A = b × h', 'A = 9 × 5', 'Answer: 45 m²', 'Note: the slant side is not used for area']
      },
      {
        question: 'A figure is made up of a square with side 6 cm and a right triangle with legs 6 cm and 4 cm attached to one side. What is the total area?',
        options: ['48 cm²', '60 cm²', '36 cm²', '12 cm²'],
        correctIndex: 0,
        explanation: 'Square: 6² = 36 cm². Triangle: 1/2 × 6 × 4 = 12 cm². Total: 36 + 12 = 48 cm².',
        steps: ['Area of square: 6 × 6 = 36 cm²', 'Area of triangle: 1/2 × 6 × 4 = 12 cm²', 'Add areas: 36 + 12 = 48', 'Answer: 48 cm²']
      },
      {
        question: 'What is the area of a triangle with base 14 inches and height 9 inches?',
        options: ['126 in²', '63 in²', '23 in²', '46 in²'],
        correctIndex: 1,
        explanation: 'A = 1/2 × 14 × 9 = 1/2 × 126 = 63 in².',
        steps: ['Formula: A = 1/2 × b × h', 'A = 1/2 × 14 × 9', '14 × 9 = 126', '126 × 1/2 = 63 in²']
      },
      {
        question: 'A composite shape is made of two rectangles: one is 10 × 3 and the other is 4 × 5. What is the total area?',
        options: ['44 sq units', '50 sq units', '30 sq units', '60 sq units'],
        correctIndex: 1,
        explanation: 'Rectangle 1: 10 × 3 = 30. Rectangle 2: 4 × 5 = 20. Total: 30 + 20 = 50 sq units.',
        steps: ['Area of first rectangle: 10 × 3 = 30', 'Area of second rectangle: 4 × 5 = 20', 'Add: 30 + 20 = 50', 'Answer: 50 sq units']
      },
      {
        question: 'A garden in the shape of a trapezoid has parallel sides of 10 m and 6 m, and a height of 4 m. What is its area?',
        options: ['24 m²', '32 m²', '40 m²', '64 m²'],
        correctIndex: 1,
        explanation: 'Area of trapezoid = 1/2 × (b₁ + b₂) × h = 1/2 × (10 + 6) × 4 = 1/2 × 16 × 4 = 32 m².',
        steps: ['Formula: A = 1/2 × (b₁ + b₂) × h', 'Add the parallel sides: 10 + 6 = 16', 'Multiply: 1/2 × 16 × 4 = 32', 'Answer: 32 m²']
      }
    ]
  },
  {
    id: 'surface-area',
    title: 'Surface Area of 3D Figures',
    coverEmoji: '🧊',
    coverColor: '#0284c7',
    topic: 'geometry',
    grades: [6, 7],
    questions: [
      {
        question: 'What is the surface area of a cube with side length 4 cm?',
        options: ['16 cm²', '64 cm²', '96 cm²', '24 cm²'],
        correctIndex: 2,
        explanation: 'A cube has 6 equal faces. Each face = 4 × 4 = 16 cm². SA = 6 × 16 = 96 cm².',
        steps: ['A cube has 6 identical square faces', 'Area of one face: 4 × 4 = 16 cm²', 'Surface area: 6 × 16 = 96', 'Answer: 96 cm²']
      },
      {
        question: 'A rectangular box is 5 cm long, 3 cm wide, and 2 cm tall. What is its surface area?',
        options: ['62 cm²', '30 cm²', '31 cm²', '60 cm²'],
        correctIndex: 0,
        explanation: 'SA = 2(lw + lh + wh) = 2(5×3 + 5×2 + 3×2) = 2(15 + 10 + 6) = 2(31) = 62 cm².',
        steps: ['SA = 2(lw + lh + wh)', 'Calculate each pair: 5×3=15, 5×2=10, 3×2=6', 'Sum: 15+10+6 = 31', 'Multiply by 2: 62 cm²']
      },
      {
        question: 'A flat net of a rectangular prism unfolds into 6 rectangles. The prism is 8 × 6 × 4 cm. What is its surface area?',
        options: ['208 cm²', '192 cm²', '48 cm²', '288 cm²'],
        correctIndex: 0,
        explanation: 'SA = 2(8×6 + 8×4 + 6×4) = 2(48 + 32 + 24) = 2(104) = 208 cm².',
        steps: ['SA = 2(lw + lh + wh)', '8×6=48, 8×4=32, 6×4=24', 'Sum: 48+32+24=104', '2 × 104 = 208 cm²']
      },
      {
        question: 'A cereal box is 30 cm tall, 20 cm wide, and 6 cm deep. How much cardboard is needed for the surface area?',
        options: ['3,600 cm²', '1,800 cm²', '2,040 cm²', '1,560 cm²'],
        correctIndex: 1,
        explanation: 'SA = 2(30×20 + 30×6 + 20×6) = 2(600 + 180 + 120) = 2(900) = 1,800 cm².',
        steps: ['SA = 2(lw + lh + wh)', '30×20=600, 30×6=180, 20×6=120', 'Sum: 600+180+120=900', '2 × 900 = 1,800 cm²']
      },
      {
        question: 'A triangular prism has two triangular faces each with area 12 cm² and three rectangular faces with areas 20, 15, and 18 cm². What is the surface area?',
        options: ['65 cm²', '77 cm²', '53 cm²', '24 cm²'],
        correctIndex: 1,
        explanation: 'SA = 2(12) + 20 + 15 + 18 = 24 + 53 = 77 cm².',
        steps: ['Two triangular faces: 2 × 12 = 24 cm²', 'Three rectangular faces: 20 + 15 + 18 = 53 cm²', 'Add: 24 + 53 = 77', 'Answer: 77 cm²']
      },
      {
        question: 'What is the surface area of a cube with side length 3 m?',
        options: ['9 m²', '27 m²', '54 m²', '18 m²'],
        correctIndex: 2,
        explanation: 'SA = 6 × (3²) = 6 × 9 = 54 m².',
        steps: ['6 equal square faces', 'Area of one face: 3² = 9 m²', '6 × 9 = 54', 'Answer: 54 m²']
      },
      {
        question: 'A gift box is 12 in × 8 in × 5 in. How much wrapping paper is needed to cover all sides?',
        options: ['232 in²', '392 in²', '176 in²', '480 in²'],
        correctIndex: 1,
        explanation: 'SA = 2(12×8 + 12×5 + 8×5) = 2(96 + 60 + 40) = 2(196) = 392 in².',
        steps: ['SA = 2(lw + lh + wh)', '12×8=96, 12×5=60, 8×5=40', 'Sum: 96+60+40=196', '2×196=392 in²']
      },
      {
        question: 'A rectangular prism has SA = 2(5×4 + 5×h + 4×h) = 94 cm². What is h?',
        options: ['h = 3 cm', 'h = 5 cm', 'h = 7 cm', 'h = 4 cm'],
        correctIndex: 0,
        explanation: '94 = 2(20 + 5h + 4h) = 2(20 + 9h) = 40 + 18h → 54 = 18h → h = 3.',
        steps: ['SA = 2(lw + lh + wh): 94 = 2(5×4 + 5h + 4h)', 'Simplify: 94 = 2(20 + 9h)', 'Divide by 2: 47 = 20 + 9h', '27 = 9h → h = 3 cm']
      }
    ]
  },
  {
    id: 'statistics-grade6',
    title: 'Mean, Median, Mode, Range',
    coverEmoji: '📈',
    coverColor: '#16a34a',
    topic: 'data',
    grades: [6, 7, 8],
    questions: [
      {
        question: 'Find the mean of: 4, 8, 6, 10, 2.',
        options: ['8', '6', '10', '5'],
        correctIndex: 1,
        explanation: 'Mean = sum ÷ count = (4+8+6+10+2) ÷ 5 = 30 ÷ 5 = 6.',
        steps: ['Add all values: 4+8+6+10+2 = 30', 'Count the values: 5', 'Divide: 30 ÷ 5 = 6', 'Answer: mean = 6']
      },
      {
        question: 'Find the median of: 3, 7, 2, 9, 5.',
        options: ['5', '9', '7', '4'],
        correctIndex: 0,
        explanation: 'Order the data: 2, 3, 5, 7, 9. The middle value is 5.',
        steps: ['Order the data from least to greatest: 2, 3, 5, 7, 9', 'Find the middle value (there are 5 values)', 'Middle position: 3rd value = 5', 'Answer: median = 5']
      },
      {
        question: 'The high temperatures (°F) for a week in Florida: 88, 91, 88, 95, 91, 88, 93. What is the mode?',
        options: ['91°F', '95°F', '93°F', '88°F'],
        correctIndex: 3,
        explanation: '88 appears 3 times (most frequent), so the mode is 88°F.',
        steps: ['Count each value: 88→3 times, 91→2 times, 95→1 time, 93→1 time', 'The mode is the most frequent value', '88 appears most (3 times)', 'Answer: mode = 88°F']
      },
      {
        question: 'Find the range of: 14, 27, 8, 33, 19.',
        options: ['19', '25', '8', '27'],
        correctIndex: 1,
        explanation: 'Range = maximum − minimum = 33 − 8 = 25.',
        steps: ['Identify the maximum: 33', 'Identify the minimum: 8', 'Subtract: 33 − 8 = 25', 'Answer: range = 25']
      },
      {
        question: 'The median of five test scores is 78. Four scores are: 72, 78, 84, 90. What must the fifth score be to keep the median at 78?',
        options: ['78', 'Any value ≤ 78', '74', '80'],
        correctIndex: 0,
        explanation: 'With 5 scores, the median is the 3rd value when sorted. If the 5th score is 78, sorted order is 72, 78, 78, 84, 90 → median = 78.',
        steps: ['Median of 5 values = 3rd value when sorted', 'Current 4 values sorted: 72, 78, 84, 90', 'To keep median = 78, the 3rd value must be 78', 'Insert 78: 72, 78, 78, 84, 90 → 3rd value = 78 ✓']
      },
      {
        question: 'Students\' quiz scores: 6, 8, 7, 9, 5, 8, 10, 7. What is the mean?',
        options: ['7', '7.5', '8', '7.8'],
        correctIndex: 1,
        explanation: 'Sum = 6+8+7+9+5+8+10+7 = 60. Mean = 60 ÷ 8 = 7.5.',
        steps: ['Add all scores: 6+8+7+9+5+8+10+7 = 60', 'Count the scores: 8', 'Divide: 60 ÷ 8 = 7.5', 'Answer: mean = 7.5']
      },
      {
        question: 'A data set has values: 12, 15, 12, 18, 20. What is the median?',
        options: ['12', '15', '18', '14'],
        correctIndex: 1,
        explanation: 'Ordered: 12, 12, 15, 18, 20. Middle value (3rd) = 15.',
        steps: ['Order from least to greatest: 12, 12, 15, 18, 20', 'There are 5 values; middle is the 3rd', '3rd value = 15', 'Answer: median = 15']
      },
      {
        question: 'A set of 6 values has a mean of 10. One value is removed and the new mean is 11. What value was removed?',
        options: ['1', '5', '6', '9'],
        correctIndex: 1,
        explanation: 'Original sum = 6 × 10 = 60. New sum (5 values) = 5 × 11 = 55. Removed value = 60 − 55 = 5.',
        steps: ['Original sum: 6 × 10 = 60', 'New sum after removal: 5 × 11 = 55', 'Value removed = 60 − 55 = 5', 'Answer: 5 was removed']
      }
    ]
  },
  {
    id: 'unit-rate',
    title: 'Unit Rate and Proportional Reasoning',
    coverEmoji: '🏃',
    coverColor: '#b45309',
    topic: 'ratios',
    grades: [6, 7],
    questions: [
      {
        question: 'A runner completes 5 miles in 40 minutes. What is her unit rate in miles per minute?',
        options: ['8 min/mile', '0.125 miles/min', '200 miles/min', '35 min/mile'],
        correctIndex: 1,
        explanation: 'Unit rate = 5 miles ÷ 40 minutes = 0.125 miles per minute.',
        steps: ['Divide miles by minutes: 5 ÷ 40', '5 ÷ 40 = 0.125', 'Unit rate: 0.125 miles per minute', 'Or equivalently: 1/8 mile per minute']
      },
      {
        question: 'A grocery store sells 3 pounds of Florida oranges for $4.50. What is the unit price per pound?',
        options: ['$0.50/lb', '$1.00/lb', '$1.50/lb', '$2.00/lb'],
        correctIndex: 2,
        explanation: '$4.50 ÷ 3 = $1.50 per pound.',
        steps: ['Unit price = total cost ÷ number of pounds', '$4.50 ÷ 3 = $1.50', 'Unit price: $1.50 per pound', 'Check: 3 × $1.50 = $4.50 ✓']
      },
      {
        question: 'Which is the better deal: 8 oz of juice for $2.40 or 12 oz of juice for $3.00?',
        options: ['8 oz for $2.40', '12 oz for $3.00', 'They cost the same', 'Cannot be determined'],
        correctIndex: 1,
        explanation: '8 oz: $2.40 ÷ 8 = $0.30/oz. 12 oz: $3.00 ÷ 12 = $0.25/oz. The 12 oz is cheaper per ounce.',
        steps: ['Find unit rate for 8 oz: $2.40 ÷ 8 = $0.30 per oz', 'Find unit rate for 12 oz: $3.00 ÷ 12 = $0.25 per oz', 'Compare: $0.25 < $0.30', 'Better deal: 12 oz for $3.00']
      },
      {
        question: 'A printer prints 120 pages in 8 minutes. At this rate, how many pages does it print in 5 minutes?',
        options: ['100 pages', '75 pages', '48 pages', '60 pages'],
        correctIndex: 1,
        explanation: 'Unit rate: 120 ÷ 8 = 15 pages/min. In 5 minutes: 15 × 5 = 75 pages.',
        steps: ['Find unit rate: 120 ÷ 8 = 15 pages per minute', 'Multiply by new time: 15 × 5 = 75', 'Answer: 75 pages', 'Check: 120/8 = 75/5 → 15 = 15 ✓']
      },
      {
        question: 'A Florida manatee eats 100 pounds of sea grass in 4 days. At this rate, how much does it eat in 7 days?',
        options: ['25 pounds', '700 pounds', '175 pounds', '400 pounds'],
        correctIndex: 2,
        explanation: 'Unit rate: 100 ÷ 4 = 25 lb/day. In 7 days: 25 × 7 = 175 lb.',
        steps: ['Unit rate: 100 ÷ 4 = 25 pounds per day', 'Multiply by 7 days: 25 × 7 = 175', 'Answer: 175 pounds', 'Check: 100/4 = 175/7 → 25 = 25 ✓']
      },
      {
        question: 'A cyclist rides at a constant speed. She rides 36 miles in 3 hours. Does this represent a proportional relationship?',
        options: ['No, because the numbers are large', 'Yes, unit rate is 12 miles per hour and it is constant', 'Yes, but only if she starts from 0', 'No, distance and time are different units'],
        correctIndex: 1,
        explanation: 'A proportional relationship has a constant unit rate. 36 ÷ 3 = 12 mph — constant, passing through origin. Yes, it is proportional.',
        steps: ['Find the unit rate: 36 ÷ 3 = 12 mph', 'A constant rate means proportional relationship', 'The ratio miles:hours is always 12:1', 'Answer: Yes, proportional with unit rate 12 mph']
      },
      {
        question: 'A car uses 2 gallons of gas every 50 miles. How many gallons are needed for 175 miles?',
        options: ['6 gallons', '7 gallons', '8.75 gallons', '3.5 gallons'],
        correctIndex: 1,
        explanation: 'Unit rate: 2/50 = 0.04 gallons/mile. 0.04 × 175 = 7 gallons.',
        steps: ['Find unit rate: 2 ÷ 50 = 0.04 gallons per mile', 'Multiply: 0.04 × 175 = 7', 'Or set up proportion: 2/50 = g/175 → g = 7', 'Answer: 7 gallons']
      },
      {
        question: 'A recipe calls for 3 cups of strawberries for every 2 cups of blueberries. If you use 9 cups of strawberries, how many cups of blueberries do you need?',
        options: ['4 cups', '6 cups', '3 cups', '12 cups'],
        correctIndex: 1,
        explanation: 'Scale factor: 9 ÷ 3 = 3. Blueberries: 2 × 3 = 6 cups.',
        steps: ['Ratio: 3 strawberries : 2 blueberries', 'Scale factor: 9 ÷ 3 = 3', 'Blueberries: 2 × 3 = 6', 'Answer: 6 cups of blueberries']
      }
    ]
  },

{
    id: 'proportional-relationships',
    title: 'Proportional Relationships',
    coverEmoji: '📊',
    coverColor: '#7c3aed',
    topic: 'algebra',
    grades: [7, 8],
    questions: [
      {
        question: 'If y is proportional to x and y = 12 when x = 3, what is y when x = 7?',
        options: ['28', '21', '24', '14'],
        correctIndex: 0,
        explanation: 'Find the constant of proportionality: k = y/x = 12/3 = 4. Then y = 4 × 7 = 28.',
        steps: [
          'Find k: k = y ÷ x = 12 ÷ 3 = 4',
          'Use y = kx',
          'Substitute: y = 4 × 7 = 28'
        ]
      },
      {
        question: 'A car travels 150 miles in 3 hours at a constant speed. How far does it travel in 5 hours?',
        options: ['200 miles', '250 miles', '300 miles', '225 miles'],
        correctIndex: 1,
        explanation: 'Speed = 150 ÷ 3 = 50 mph. Distance = 50 × 5 = 250 miles.',
        steps: [
          'Find unit rate: 150 ÷ 3 = 50 miles per hour',
          'Multiply: 50 × 5 = 250 miles'
        ]
      },
      {
        question: 'The table shows proportional values: x = 4, y = 10; x = 8, y = 20. What is y when x = 14?',
        options: ['28', '35', '32', '40'],
        correctIndex: 1,
        explanation: 'k = 10/4 = 2.5. y = 2.5 × 14 = 35.',
        steps: [
          'Find k: 10 ÷ 4 = 2.5',
          'Verify: 20 ÷ 8 = 2.5 ✓',
          'y = 2.5 × 14 = 35'
        ]
      },
      {
        question: 'Which equation represents a proportional relationship?',
        options: ['y = 3x + 2', 'y = 5x', 'y = x² + 1', 'y = 4/x'],
        correctIndex: 1,
        explanation: 'A proportional relationship has the form y = kx (through the origin, no added constant). y = 5x fits this form.',
        steps: [
          'Proportional form: y = kx (no added constant)',
          'y = 3x + 2 has +2, so NOT proportional',
          'y = 5x passes through origin → proportional'
        ]
      },
      {
        question: 'If 5 notebooks cost $8.75, how much do 8 notebooks cost?',
        options: ['$13.00', '$14.00', '$12.25', '$10.50'],
        correctIndex: 1,
        explanation: 'Unit price = $8.75 ÷ 5 = $1.75 each. 8 × $1.75 = $14.00.',
        steps: [
          'Unit price: $8.75 ÷ 5 = $1.75 per notebook',
          'Cost for 8: $1.75 × 8 = $14.00'
        ]
      },
      {
        question: 'A recipe uses 2.5 cups of flour for every 12 cookies. How much flour is needed for 36 cookies?',
        options: ['7 cups', '6.5 cups', '7.5 cups', '8 cups'],
        correctIndex: 2,
        explanation: '36 cookies is 3 batches of 12. 2.5 × 3 = 7.5 cups.',
        steps: [
          'Find ratio: 2.5 cups per 12 cookies',
          'Scaling factor: 36 ÷ 12 = 3',
          '2.5 × 3 = 7.5 cups'
        ]
      },
      {
        question: 'On a graph of a proportional relationship, the line passes through (0,0) and (4, 6). What is the constant of proportionality?',
        options: ['2', '1.5', '0.67', '4'],
        correctIndex: 1,
        explanation: 'k = y/x = 6/4 = 1.5.',
        steps: [
          'Use any point (other than origin): (4, 6)',
          'k = y ÷ x = 6 ÷ 4 = 1.5'
        ]
      },
      {
        question: 'A worker earns $63 in 7 hours. At this rate, how many hours does it take to earn $108?',
        options: ['10 hours', '11 hours', '9 hours', '12 hours'],
        correctIndex: 3,
        explanation: 'Hourly rate = $63 ÷ 7 = $9/hr. Hours = $108 ÷ $9 = 12 hours.',
        steps: [
          'Hourly rate: $63 ÷ 7 = $9 per hour',
          'Hours needed: $108 ÷ $9 = 12 hours'
        ]
      }
    ]
  },
  {
    id: 'percent-problems',
    title: 'Percent: Discount, Tax, Tip, Increase/Decrease',
    coverEmoji: '💰',
    coverColor: '#0891b2',
    topic: 'algebra',
    grades: [7, 8],
    questions: [
      {
        question: 'A jacket costs $80. It is on sale for 25% off. What is the sale price?',
        options: ['$55', '$65', '$60', '$70'],
        correctIndex: 2,
        explanation: 'Discount = 25% × $80 = $20. Sale price = $80 − $20 = $60.',
        steps: [
          'Find discount: 0.25 × $80 = $20',
          'Sale price: $80 − $20 = $60'
        ]
      },
      {
        question: 'A meal costs $45. If the tip is 18%, what is the total amount paid?',
        options: ['$53.10', '$54.10', '$51.30', '$52.10'],
        correctIndex: 0,
        explanation: 'Tip = 0.18 × $45 = $8.10. Total = $45 + $8.10 = $53.10.',
        steps: [
          'Calculate tip: 0.18 × $45 = $8.10',
          'Total: $45 + $8.10 = $53.10'
        ]
      },
      {
        question: 'A store sells a TV for $320. Sales tax is 7%. What is the final price?',
        options: ['$341.40', '$342.40', '$344.40', '$340.40'],
        correctIndex: 1,
        explanation: 'Tax = 0.07 × $320 = $22.40. Final = $320 + $22.40 = $342.40.',
        steps: [
          'Tax amount: 0.07 × $320 = $22.40',
          'Final price: $320 + $22.40 = $342.40'
        ]
      },
      {
        question: 'A school had 400 students last year. This year there are 460. What is the percent increase?',
        options: ['13%', '60%', '15%', '12%'],
        correctIndex: 2,
        explanation: 'Increase = 60. Percent increase = (60/400) × 100 = 15%.',
        steps: [
          'Change: 460 − 400 = 60',
          'Percent increase: (60 ÷ 400) × 100 = 15%'
        ]
      },
      {
        question: 'A bike originally costs $250. After a price drop, it now costs $200. What is the percent decrease?',
        options: ['25%', '80%', '50%', '20%'],
        correctIndex: 3,
        explanation: 'Decrease = $50. Percent decrease = (50/250) × 100 = 20%.',
        steps: [
          'Change: $250 − $200 = $50',
          'Percent decrease: (50 ÷ 250) × 100 = 20%'
        ]
      },
      {
        question: 'A shirt is marked up 40% from its wholesale cost of $25. What is the retail price?',
        options: ['$35.00', '$65.00', '$10.00', '$30.00'],
        correctIndex: 0,
        explanation: 'Markup = 0.40 × $25 = $10. Retail = $25 + $10 = $35.',
        steps: [
          'Markup: 0.40 × $25 = $10',
          'Retail price: $25 + $10 = $35'
        ]
      },
      {
        question: 'After a 30% discount, a pair of shoes costs $56. What was the original price?',
        options: ['$72.80', '$86.00', '$80.00', '$73.50'],
        correctIndex: 2,
        explanation: 'The discounted price is 70% of original. $56 ÷ 0.70 = $80.',
        steps: [
          '30% off means 70% remains',
          'Original × 0.70 = $56',
          'Original = $56 ÷ 0.70 = $80'
        ]
      },
      {
        question: 'A phone plan costs $60/month. The company raises prices by 5%. What is the new monthly cost?',
        options: ['$65.00', '$63.00', '$62.00', '$67.00'],
        correctIndex: 1,
        explanation: 'Increase = 0.05 × $60 = $3. New cost = $60 + $3 = $63.',
        steps: [
          'Increase: 0.05 × $60 = $3',
          'New cost: $60 + $3 = $63'
        ]
      }
    ]
  },
  {
    id: 'rational-numbers',
    title: 'Operations with Rational Numbers',
    coverEmoji: '🔢',
    coverColor: '#b45309',
    topic: 'number-sense',
    grades: [7, 8],
    questions: [
      {
        question: 'What is −3.5 + (−2.8)?',
        options: ['−0.7', '6.3', '−6.3', '0.7'],
        correctIndex: 2,
        explanation: 'Adding two negatives: −3.5 + (−2.8) = −6.3.',
        steps: [
          'Both numbers are negative',
          'Add absolute values: 3.5 + 2.8 = 6.3',
          'Keep negative sign: −6.3'
        ]
      },
      {
        question: 'Calculate: −4 × (−3/4)',
        options: ['3', '−3', '−16/3', '16/3'],
        correctIndex: 0,
        explanation: '−4 × (−3/4) = 12/4 = 3. Negative × negative = positive.',
        steps: [
          'Multiply: 4 × 3/4 = 12/4 = 3',
          'Negative × negative = positive',
          'Answer: 3'
        ]
      },
      {
        question: 'What is 5/6 − 3/4?',
        options: ['2/2', '1/12', '1/6', '2/12'],
        correctIndex: 1,
        explanation: 'LCD = 12. 10/12 − 9/12 = 1/12.',
        steps: [
          'Find LCD: 12',
          '5/6 = 10/12, 3/4 = 9/12',
          '10/12 − 9/12 = 1/12'
        ]
      },
      {
        question: 'Evaluate: −18 ÷ (2/3)',
        options: ['−12', '−27', '−9', '27'],
        correctIndex: 1,
        explanation: 'Dividing by a fraction = multiplying by its reciprocal. −18 × 3/2 = −54/2 = −27.',
        steps: [
          'Flip the divisor: 2/3 → 3/2',
          'Multiply: −18 × 3/2 = −54/2',
          '−54/2 = −27'
        ]
      },
      {
        question: 'The temperature was −8°F. It dropped 5.5 degrees. What is the new temperature?',
        options: ['−2.5°F', '−13.5°F', '13.5°F', '−3°F'],
        correctIndex: 1,
        explanation: '−8 + (−5.5) = −13.5°F.',
        steps: [
          'Dropping = subtracting (adding a negative)',
          '−8 + (−5.5) = −13.5°F'
        ]
      },
      {
        question: 'What is (−2/5) × (−5/8)?',
        options: ['−1/4', '1/4', '−4', '4'],
        correctIndex: 1,
        explanation: '(−2/5) × (−5/8) = 10/40 = 1/4. Negative × negative = positive.',
        steps: [
          'Multiply numerators: 2 × 5 = 10',
          'Multiply denominators: 5 × 8 = 40',
          'Simplify: 10/40 = 1/4; negatives cancel'
        ]
      },
      {
        question: 'Order from least to greatest: −1.2, 3/4, −7/4, 0.5',
        options: [
          '−1.2, −7/4, 0.5, 3/4',
          '−7/4, −1.2, 0.5, 3/4',
          '−7/4, 0.5, −1.2, 3/4',
          '−1.2, 0.5, −7/4, 3/4'
        ],
        correctIndex: 1,
        explanation: '−7/4 = −1.75. Order: −1.75, −1.2, 0.5, 0.75.',
        steps: [
          'Convert to decimals: −1.2, 0.75, −1.75, 0.5',
          'Order: −1.75, −1.2, 0.5, 0.75',
          'Answer: −7/4, −1.2, 0.5, 3/4'
        ]
      },
      {
        question: 'What is −5 − (−9)?',
        options: ['−14', '−4', '14', '4'],
        correctIndex: 3,
        explanation: 'Subtracting a negative is adding: −5 − (−9) = −5 + 9 = 4.',
        steps: [
          'Subtracting a negative = adding',
          '−5 − (−9) = −5 + 9',
          '−5 + 9 = 4'
        ]
      }
    ]
  },
  {
    id: 'expressions-equations-g7',
    title: 'Writing and Solving Equations',
    coverEmoji: '✏️',
    coverColor: '#065f46',
    topic: 'algebra',
    grades: [7, 8],
    questions: [
      {
        question: 'Solve: 3x − 7 = 14',
        options: ['x = 7', 'x = 9', 'x = 2.33', 'x = 3'],
        correctIndex: 0,
        explanation: '3x = 21, x = 7.',
        steps: [
          'Add 7 to both sides: 3x = 21',
          'Divide by 3: x = 7'
        ]
      },
      {
        question: 'Marcus has $5 more than twice the amount Jordan has. Together they have $47. Which equation represents this?',
        options: [
          '2j + 5 = 47',
          'j + (2j + 5) = 47',
          '2(j + 5) = 47',
          'j + 2j = 47 + 5'
        ],
        correctIndex: 1,
        explanation: 'Let j = Jordan\'s amount. Marcus = 2j + 5. Together: j + (2j + 5) = 47.',
        steps: [
          'Let j = Jordan\'s money',
          'Marcus = 2j + 5',
          'Total: j + (2j + 5) = 47'
        ]
      },
      {
        question: 'Solve: x/4 + 3 = 9',
        options: ['x = 1.5', 'x = 48', 'x = 3', 'x = 24'],
        correctIndex: 3,
        explanation: 'x/4 = 6, x = 24.',
        steps: [
          'Subtract 3: x/4 = 6',
          'Multiply by 4: x = 24'
        ]
      },
      {
        question: 'A number decreased by 11 equals −4. What is the number?',
        options: ['7', '−15', '−7', '15'],
        correctIndex: 0,
        explanation: 'n − 11 = −4 → n = −4 + 11 = 7.',
        steps: [
          'Write equation: n − 11 = −4',
          'Add 11 to both sides: n = 7'
        ]
      },
      {
        question: 'Solve for y: 5(y − 2) = 25',
        options: ['y = 3', 'y = 7', 'y = 4.5', 'y = 5'],
        correctIndex: 1,
        explanation: 'y − 2 = 5, y = 7.',
        steps: [
          'Divide both sides by 5: y − 2 = 5',
          'Add 2: y = 7'
        ]
      },
      {
        question: 'The perimeter of a rectangle is 54 cm. The length is 3 more than twice the width. What is the width?',
        options: ['8 cm', '9 cm', '10 cm', '7.5 cm'],
        correctIndex: 1,
        explanation: 'P = 2(l + w). l = 2w + 3. 2(2w + 3 + w) = 54 → 6w + 6 = 54 → w = 8. Wait: 6w = 48, w = 8. Recheck: 2(3×8+3)=2(27)=54 ✓. w = 8.',
        steps: [
          'Let w = width; l = 2w + 3',
          '2(w + l) = 54 → w + l = 27',
          'w + 2w + 3 = 27 → 3w = 24 → w = 8'
        ]
      },
      {
        question: 'Solve: −3x + 12 = −6',
        options: ['x = −6', 'x = 2', 'x = 6', 'x = −2'],
        correctIndex: 2,
        explanation: '−3x = −18, x = 6.',
        steps: [
          'Subtract 12: −3x = −18',
          'Divide by −3: x = 6'
        ]
      },
      {
        question: 'Which value of x satisfies 4x + 2 = 3x − 5?',
        options: ['x = 7', 'x = −7', 'x = 3', 'x = −3'],
        correctIndex: 1,
        explanation: '4x − 3x = −5 − 2 → x = −7.',
        steps: [
          'Subtract 3x from both sides: x + 2 = −5',
          'Subtract 2: x = −7'
        ]
      }
    ]
  },
  {
    id: 'inequalities-grade7',
    title: 'Inequalities',
    coverEmoji: '⚖️',
    coverColor: '#9d174d',
    topic: 'algebra',
    grades: [7, 8],
    questions: [
      {
        question: 'Solve and graph: 2x + 3 > 11',
        options: ['x > 4', 'x < 4', 'x > 7', 'x < 7'],
        correctIndex: 0,
        explanation: '2x > 8, x > 4.',
        steps: [
          'Subtract 3: 2x > 8',
          'Divide by 2: x > 4'
        ]
      },
      {
        question: 'Which inequality has the solution set shown: all numbers less than or equal to −2?',
        options: ['x > −2', 'x < −2', 'x ≥ −2', 'x ≤ −2'],
        correctIndex: 3,
        explanation: '"Less than or equal to −2" is written x ≤ −2.',
        steps: [
          '"Less than or equal to" uses ≤',
          'The boundary value is −2',
          'Answer: x ≤ −2'
        ]
      },
      {
        question: 'Solve: −4x ≤ 20',
        options: ['x ≤ −5', 'x ≥ −5', 'x ≤ 5', 'x ≥ 5'],
        correctIndex: 1,
        explanation: 'Divide by −4 and flip the inequality: x ≥ −5.',
        steps: [
          'Divide both sides by −4',
          'Flip inequality when dividing by negative',
          'x ≥ −5'
        ]
      },
      {
        question: 'A store requires a minimum purchase of $25 for free shipping. If you have $18 in your cart, how much MORE must you add?',
        options: ['At least $6', 'At least $7', 'More than $7', 'More than $6'],
        correctIndex: 1,
        explanation: '18 + a ≥ 25 → a ≥ 7. You must add at least $7.',
        steps: [
          'Write: 18 + a ≥ 25',
          'Subtract 18: a ≥ 7',
          'Must add at least $7'
        ]
      },
      {
        question: 'Solve: 3(x − 2) < 9',
        options: ['x < 1', 'x < 5', 'x > 5', 'x < 3'],
        correctIndex: 1,
        explanation: 'x − 2 < 3, x < 5.',
        steps: [
          'Divide by 3: x − 2 < 3',
          'Add 2: x < 5'
        ]
      },
      {
        question: 'Which of these values is NOT a solution to 5x − 1 ≥ 14?',
        options: ['x = 3', 'x = 4', 'x = 2', 'x = 5'],
        correctIndex: 2,
        explanation: '5(2) − 1 = 9, which is NOT ≥ 14. So x = 2 is not a solution.',
        steps: [
          'Solve: 5x ≥ 15 → x ≥ 3',
          'x = 3: 5(3)−1 = 14 ✓',
          'x = 2: 5(2)−1 = 9, NOT ≥ 14'
        ]
      },
      {
        question: 'A roller coaster requires riders to be at least 48 inches tall. Leo is 45 inches. By how many inches must he grow?',
        options: ['More than 3 inches', 'At least 2 inches', 'More than 2 inches', 'At least 3 inches'],
        correctIndex: 3,
        explanation: '45 + g ≥ 48 → g ≥ 3. He must grow at least 3 inches.',
        steps: [
          'Write: 45 + g ≥ 48',
          'Subtract 45: g ≥ 3',
          'He needs at least 3 more inches'
        ]
      },
      {
        question: 'Solve: x/3 + 5 ≤ 8',
        options: ['x ≤ 9', 'x ≥ 9', 'x ≤ 39', 'x ≤ 3'],
        correctIndex: 0,
        explanation: 'x/3 ≤ 3, x ≤ 9.',
        steps: [
          'Subtract 5: x/3 ≤ 3',
          'Multiply by 3: x ≤ 9'
        ]
      }
    ]
  },
  {
    id: 'scale-drawings',
    title: 'Scale Drawings and Maps',
    coverEmoji: '🗺️',
    coverColor: '#1d4ed8',
    topic: 'geometry',
    grades: [7, 8],
    questions: [
      {
        question: 'A map uses a scale of 1 inch = 50 miles. Two cities are 3.5 inches apart on the map. What is the actual distance?',
        options: ['53.5 miles', '175 miles', '150 miles', '200 miles'],
        correctIndex: 1,
        explanation: '3.5 × 50 = 175 miles.',
        steps: [
          'Scale: 1 inch = 50 miles',
          'Actual distance: 3.5 × 50 = 175 miles'
        ]
      },
      {
        question: 'A blueprint has a scale of 1:20. A room on the blueprint is 8 cm long. What is the actual length?',
        options: ['28 cm', '160 cm', '40 cm', '80 cm'],
        correctIndex: 1,
        explanation: '8 × 20 = 160 cm.',
        steps: [
          'Scale factor: 1:20 (multiply by 20)',
          'Actual: 8 × 20 = 160 cm'
        ]
      },
      {
        question: 'Two towns are 240 miles apart. On a map, the scale is 1 cm = 60 miles. How far apart are the towns on the map?',
        options: ['3 cm', '5 cm', '4 cm', '2 cm'],
        correctIndex: 2,
        explanation: '240 ÷ 60 = 4 cm.',
        steps: [
          'Scale: 1 cm = 60 miles',
          'Map distance: 240 ÷ 60 = 4 cm'
        ]
      },
      {
        question: 'A scale drawing of a park has scale 1 inch = 15 feet. The park is 6 inches long and 4 inches wide in the drawing. What is the actual area?',
        options: ['360 sq ft', '5,400 sq ft', '24 sq ft', '3,600 sq ft'],
        correctIndex: 1,
        explanation: 'Actual: 90 ft × 60 ft = 5,400 sq ft.',
        steps: [
          'Actual length: 6 × 15 = 90 ft',
          'Actual width: 4 × 15 = 60 ft',
          'Area: 90 × 60 = 5,400 sq ft'
        ]
      },
      {
        question: 'The actual length of a car is 4.5 meters. In a scale drawing, the car is 9 cm long. What is the scale?',
        options: ['1 cm = 0.5 m', '1 cm = 2 m', '1 cm = 50 m', '1 cm = 5 m'],
        correctIndex: 0,
        explanation: 'Scale = actual ÷ drawing = 4.5 m ÷ 9 cm = 0.5 m per cm.',
        steps: [
          'Scale = actual ÷ drawing length',
          '4.5 m ÷ 9 cm = 0.5 m per cm',
          '1 cm = 0.5 m'
        ]
      },
      {
        question: 'On a map scaled 1:500,000, two cities are 4 cm apart. What is the real distance in km?',
        options: ['2 km', '20 km', '200 km', '2,000 km'],
        correctIndex: 1,
        explanation: '4 × 500,000 = 2,000,000 cm = 20 km.',
        steps: [
          'Multiply: 4 × 500,000 = 2,000,000 cm',
          'Convert: 2,000,000 cm ÷ 100,000 = 20 km'
        ]
      },
      {
        question: 'A model ship is built at a scale of 1:75. The model is 12 inches long. How long is the real ship in feet?',
        options: ['900 ft', '75 ft', '63 ft', '7.5 ft'],
        correctIndex: 1,
        explanation: '12 × 75 = 900 inches = 75 feet.',
        steps: [
          'Real length in inches: 12 × 75 = 900 in',
          'Convert: 900 ÷ 12 = 75 feet'
        ]
      },
      {
        question: 'On a floor plan (scale 1 inch = 8 feet), a hallway is drawn 2.5 inches long. How long is the actual hallway?',
        options: ['10.5 feet', '16 feet', '3.2 feet', '20 feet'],
        correctIndex: 3,
        explanation: '2.5 × 8 = 20 feet.',
        steps: [
          'Scale: 1 inch = 8 feet',
          'Actual: 2.5 × 8 = 20 feet'
        ]
      }
    ]
  },
  {
    id: 'circles',
    title: 'Circumference and Area of Circles',
    coverEmoji: '⭕',
    coverColor: '#b91c1c',
    topic: 'geometry',
    grades: [7, 8],
    questions: [
      {
        question: 'What is the circumference of a circle with diameter 10 cm? (Use π ≈ 3.14)',
        options: ['31.4 cm', '78.5 cm', '62.8 cm', '15.7 cm'],
        correctIndex: 0,
        explanation: 'C = πd = 3.14 × 10 = 31.4 cm.',
        steps: [
          'Formula: C = πd',
          'C = 3.14 × 10 = 31.4 cm'
        ]
      },
      {
        question: 'Find the area of a circle with radius 7 m. (Use π ≈ 3.14)',
        options: ['21.98 m²', '43.96 m²', '153.86 m²', '49 m²'],
        correctIndex: 2,
        explanation: 'A = πr² = 3.14 × 49 = 153.86 m².',
        steps: [
          'Formula: A = πr²',
          'r² = 7² = 49',
          'A = 3.14 × 49 = 153.86 m²'
        ]
      },
      {
        question: 'A circle has circumference 25.12 cm. What is its radius? (Use π ≈ 3.14)',
        options: ['2 cm', '4 cm', '8 cm', '12.56 cm'],
        correctIndex: 1,
        explanation: 'C = 2πr → r = 25.12 ÷ (2 × 3.14) = 25.12 ÷ 6.28 = 4 cm.',
        steps: [
          'C = 2πr',
          'r = C ÷ (2π) = 25.12 ÷ 6.28',
          'r = 4 cm'
        ]
      },
      {
        question: 'What is the area of a circle with diameter 12 ft? (Use π ≈ 3.14)',
        options: ['37.68 ft²', '113.04 ft²', '144 ft²', '452.16 ft²'],
        correctIndex: 1,
        explanation: 'r = 6, A = 3.14 × 36 = 113.04 ft².',
        steps: [
          'Radius = diameter ÷ 2 = 6 ft',
          'A = πr² = 3.14 × 6² = 3.14 × 36',
          'A = 113.04 ft²'
        ]
      },
      {
        question: 'A circular pizza has a radius of 9 inches. What is its circumference? (Use π ≈ 3.14)',
        options: ['28.26 in', '56.52 in', '254.34 in', '18 in'],
        correctIndex: 1,
        explanation: 'C = 2πr = 2 × 3.14 × 9 = 56.52 in.',
        steps: [
          'Formula: C = 2πr',
          'C = 2 × 3.14 × 9 = 56.52 in'
        ]
      },
      {
        question: 'A sprinkler waters a circular region. If the radius is 5 m, what area is watered? (Use π ≈ 3.14)',
        options: ['15.7 m²', '78.5 m²', '31.4 m²', '25 m²'],
        correctIndex: 1,
        explanation: 'A = 3.14 × 25 = 78.5 m².',
        steps: [
          'A = πr² = 3.14 × 5²',
          '5² = 25',
          'A = 3.14 × 25 = 78.5 m²'
        ]
      },
      {
        question: 'Which formula correctly finds the circumference of a circle with radius r?',
        options: ['C = πr²', 'C = 2πr', 'C = πd²', 'C = r²π'],
        correctIndex: 1,
        explanation: 'Circumference = 2πr (or πd). Area = πr².',
        steps: [
          'Circumference uses the radius linearly',
          'C = 2πr (not squared)',
          'Area = πr² uses radius squared'
        ]
      },
      {
        question: 'Two circles: Circle A has radius 3, Circle B has radius 6. How many times larger is the area of B than A?',
        options: ['2 times', '3 times', '6 times', '4 times'],
        correctIndex: 3,
        explanation: 'A_A = 9π, A_B = 36π. Ratio = 36π/9π = 4.',
        steps: [
          'Area A: π × 3² = 9π',
          'Area B: π × 6² = 36π',
          'Ratio: 36π ÷ 9π = 4'
        ]
      }
    ]
  },
  {
    id: 'probability',
    title: 'Probability and Sample Space',
    coverEmoji: '🎲',
    coverColor: '#0f766e',
    topic: 'data',
    grades: [7, 8],
    questions: [
      {
        question: 'A bag has 4 red, 3 blue, and 5 green marbles. What is the probability of drawing a blue marble?',
        options: ['3/5', '1/4', '3/4', '1/3'],
        correctIndex: 1,
        explanation: 'P(blue) = 3/12 = 1/4.',
        steps: [
          'Total marbles: 4 + 3 + 5 = 12',
          'P(blue) = 3/12',
          'Simplify: 1/4'
        ]
      },
      {
        question: 'You flip a coin and roll a 6-sided die. How many outcomes are in the sample space?',
        options: ['8', '12', '6', '10'],
        correctIndex: 1,
        explanation: '2 coin × 6 die = 12 outcomes.',
        steps: [
          'Coin outcomes: 2 (H or T)',
          'Die outcomes: 6',
          'Total: 2 × 6 = 12'
        ]
      },
      {
        question: 'A spinner has 8 equal sections numbered 1–8. What is the probability of spinning an even number?',
        options: ['3/8', '5/8', '1/4', '1/2'],
        correctIndex: 3,
        explanation: 'Even numbers: 2, 4, 6, 8 → 4 out of 8 = 1/2.',
        steps: [
          'Even numbers 1–8: {2, 4, 6, 8} = 4 numbers',
          'P(even) = 4/8 = 1/2'
        ]
      },
      {
        question: 'The probability that it rains is 0.35. What is the probability it does NOT rain?',
        options: ['0.35', '0.75', '0.65', '0.55'],
        correctIndex: 2,
        explanation: 'P(not rain) = 1 − 0.35 = 0.65.',
        steps: [
          'Complement rule: P(A\') = 1 − P(A)',
          'P(not rain) = 1 − 0.35 = 0.65'
        ]
      },
      {
        question: 'In a class of 30 students, 12 play sports, 10 play an instrument, and 5 do both. What is the probability a randomly chosen student plays sports OR an instrument?',
        options: ['22/30', '17/30', '27/30', '12/30'],
        correctIndex: 1,
        explanation: '|S ∪ I| = 12 + 10 − 5 = 17. P = 17/30.',
        steps: [
          'Use inclusion-exclusion: 12 + 10 − 5 = 17',
          'P(sports or instrument) = 17/30'
        ]
      },
      {
        question: 'You draw a card from a standard 52-card deck. What is the probability of drawing a heart?',
        options: ['4/52', '13/52', '1/2', '1/26'],
        correctIndex: 1,
        explanation: 'There are 13 hearts in 52 cards. P = 13/52 = 1/4.',
        steps: [
          '13 hearts in a standard deck',
          'P(heart) = 13/52',
          'Simplify: 1/4 (also written 13/52)'
        ]
      },
      {
        question: 'A bag has 5 yellow and 3 purple candies. You pick one, eat it, then pick another. What is P(yellow, then purple)?',
        options: ['15/56', '15/64', '8/64', '5/16'],
        correctIndex: 0,
        explanation: 'P = (5/8) × (3/7) = 15/56.',
        steps: [
          'P(yellow first) = 5/8',
          'P(purple second, no replacement) = 3/7',
          'P(both) = 5/8 × 3/7 = 15/56'
        ]
      },
      {
        question: 'Out of 200 surveys, 80 people prefer basketball. Based on this, what is the experimental probability of preferring basketball?',
        options: ['0.4', '80', '0.8', '0.2'],
        correctIndex: 0,
        explanation: '80/200 = 0.4.',
        steps: [
          'Experimental probability = favorable ÷ total',
          '80 ÷ 200 = 0.4'
        ]
      }
    ]
  },
  {
    id: 'statistics-grade7',
    title: 'Comparing Data Sets',
    coverEmoji: '📈',
    coverColor: '#92400e',
    topic: 'data',
    grades: [7, 8],
    questions: [
      {
        question: 'Data set: 4, 7, 9, 5, 3, 8, 6. What is the mean?',
        options: ['6', '7', '5.5', '6.5'],
        correctIndex: 0,
        explanation: 'Sum = 42, mean = 42 ÷ 7 = 6.',
        steps: [
          'Sum: 4+7+9+5+3+8+6 = 42',
          'Mean: 42 ÷ 7 = 6'
        ]
      },
      {
        question: 'Data set: 2, 5, 5, 7, 8, 10, 13. What is the median?',
        options: ['8', '5', '7', '6'],
        correctIndex: 2,
        explanation: 'Middle value (7 data points, position 4) = 7.',
        steps: [
          'Data is already ordered: 2, 5, 5, 7, 8, 10, 13',
          '7 values → middle is position 4',
          'Median = 7'
        ]
      },
      {
        question: 'Class A test scores have mean 78 and MAD 4. Class B has mean 78 and MAD 10. Which class has more consistent scores?',
        options: ['Class B', 'They are the same', 'Class A', 'Cannot determine'],
        correctIndex: 2,
        explanation: 'Lower MAD means data is closer to the mean (more consistent). Class A has MAD = 4.',
        steps: [
          'MAD = Mean Absolute Deviation',
          'Lower MAD = scores closer to mean = more consistent',
          'Class A (MAD=4) is more consistent'
        ]
      },
      {
        question: 'What is the IQR (Interquartile Range) of: 3, 5, 7, 9, 11, 13, 15?',
        options: ['4', '6', '8', '12'],
        correctIndex: 2,
        explanation: 'Q1 = 5, Q3 = 13, IQR = 13 − 5 = 8.',
        steps: [
          'Median = 9 (position 4)',
          'Lower half: 3, 5, 7 → Q1 = 5',
          'Upper half: 11, 13, 15 → Q3 = 13',
          'IQR = 13 − 5 = 8'
        ]
      },
      {
        question: 'A data set has values: 10, 12, 14, 12, 16, 18. What is the mode?',
        options: ['14', '16', '13.67', '12'],
        correctIndex: 3,
        explanation: '12 appears twice; all others appear once. Mode = 12.',
        steps: [
          'Count frequency of each value',
          '12 appears 2 times',
          'Mode = 12'
        ]
      },
      {
        question: 'Two teams\' scores: Team A mean = 85, median = 82; Team B mean = 85, median = 90. What does this suggest about Team B?',
        options: [
          'Team B has a few very high scores pulling the median up',
          'Team B has a few very high scores pulling the mean up',
          'Team B has a few very low scores pulling the mean down',
          'Both teams performed identically'
        ],
        correctIndex: 2,
        explanation: 'Team B: mean (85) < median (90). When mean < median, a few unusually LOW scores drag the mean below the median.',
        steps: [
          'When mean < median → skewed left (low outliers)',
          'Team B: mean 85 < median 90',
          'A few very low scores pull the mean below the median'
        ]
      },
      {
        question: 'The range of a data set is 24 and the minimum value is 11. What is the maximum value?',
        options: ['13', '35', '24', '2.18'],
        correctIndex: 1,
        explanation: 'Range = max − min → max = range + min = 24 + 11 = 35.',
        steps: [
          'Range = maximum − minimum',
          'Maximum = range + minimum',
          'Maximum = 24 + 11 = 35'
        ]
      },
      {
        question: 'Which measure of center best represents a data set with an outlier?',
        options: ['Mean', 'Median', 'Mode', 'Range'],
        correctIndex: 1,
        explanation: 'The median is resistant to outliers. The mean gets pulled toward extreme values.',
        steps: [
          'Outliers significantly affect the mean',
          'Median uses middle value — not affected by extremes',
          'Best choice with outliers: median'
        ]
      }
    ]
  },
  {
    id: 'two-step-equations',
    title: 'Two-Step Equations and Multi-Step Problems',
    coverEmoji: '🔗',
    coverColor: '#4338ca',
    topic: 'algebra',
    grades: [7, 8],
    questions: [
      {
        question: 'Solve: 2x + 5 = 17',
        options: ['x = 11', 'x = 7', 'x = 6', 'x = 4'],
        correctIndex: 2,
        explanation: '2x = 12, x = 6.',
        steps: [
          'Subtract 5: 2x = 12',
          'Divide by 2: x = 6'
        ]
      },
      {
        question: 'Ana bought 3 pens and a $2 eraser for $11. What did each pen cost?',
        options: ['$2', '$3.67', '$3', '$4'],
        correctIndex: 2,
        explanation: '3p + 2 = 11 → 3p = 9 → p = 3.',
        steps: [
          'Write equation: 3p + 2 = 11',
          'Subtract 2: 3p = 9',
          'Divide by 3: p = $3'
        ]
      },
      {
        question: 'Solve: (x/5) − 3 = 4',
        options: ['x = 7', 'x = 5', 'x = 35', 'x = 7/5'],
        correctIndex: 2,
        explanation: 'x/5 = 7, x = 35.',
        steps: [
          'Add 3: x/5 = 7',
          'Multiply by 5: x = 35'
        ]
      },
      {
        question: 'The sum of three consecutive integers is 72. What are the integers?',
        options: ['22, 23, 24', '24, 25, 26', '23, 24, 25', '21, 22, 23'],
        correctIndex: 2,
        explanation: 'n + (n+1) + (n+2) = 72 → 3n + 3 = 72 → n = 23.',
        steps: [
          'Let n, n+1, n+2 be consecutive integers',
          '3n + 3 = 72 → 3n = 69',
          'n = 23 → 23, 24, 25'
        ]
      },
      {
        question: 'Solve for x: 4x − 9 = 2x + 5',
        options: ['x = 14', 'x = 2', 'x = −2', 'x = 7'],
        correctIndex: 3,
        explanation: '2x = 14, x = 7.',
        steps: [
          'Subtract 2x: 2x − 9 = 5',
          'Add 9: 2x = 14',
          'Divide by 2: x = 7'
        ]
      },
      {
        question: 'A taxi charges $3 plus $1.50 per mile. How many miles can you travel for $12?',
        options: ['5 miles', '6 miles', '8 miles', '9 miles'],
        correctIndex: 1,
        explanation: '3 + 1.5m = 12 → 1.5m = 9 → m = 6.',
        steps: [
          'Equation: 3 + 1.5m = 12',
          'Subtract 3: 1.5m = 9',
          'Divide by 1.5: m = 6 miles'
        ]
      },
      {
        question: 'Solve: 7 − 3x = −8',
        options: ['x = 5', 'x = −1/3', 'x = −5', 'x = 1/3'],
        correctIndex: 0,
        explanation: '−3x = −15, x = 5.',
        steps: [
          'Subtract 7: −3x = −15',
          'Divide by −3: x = 5'
        ]
      },
      {
        question: 'Jamie earns $2 more per hour than Alex. Together they earn $30 per hour. What does Jamie earn?',
        options: ['$14/hr', '$16/hr', '$15/hr', '$17/hr'],
        correctIndex: 1,
        explanation: 'a + (a+2) = 30 → 2a = 28 → a = 14. Jamie = $16/hr.',
        steps: [
          'Let a = Alex\'s wage; Jamie = a + 2',
          'a + a + 2 = 30 → 2a = 28 → a = 14',
          'Jamie = 14 + 2 = $16/hr'
        ]
      }
    ]
  },
  {
    id: 'linear-equations-g8',
    title: 'Linear Equations (One and Two Variables)',
    coverEmoji: '📉',
    coverColor: '#0369a1',
    topic: 'algebra',
    grades: [8],
    questions: [
      {
        question: 'Solve: 5(2x − 3) = 25',
        options: ['x = 2', 'x = 4', 'x = 5.5', 'x = 1'],
        correctIndex: 1,
        explanation: '10x − 15 = 25 → 10x = 40 → x = 4.',
        steps: [
          'Distribute: 10x − 15 = 25',
          'Add 15: 10x = 40',
          'Divide by 10: x = 4'
        ]
      },
      {
        question: 'Solve for y in terms of x: 3x + 2y = 12',
        options: ['y = 12 − 3x', 'y = (12 − 3x)/2', 'y = 6 − x', 'y = 3x − 6'],
        correctIndex: 1,
        explanation: '2y = 12 − 3x → y = (12 − 3x)/2.',
        steps: [
          'Subtract 3x: 2y = 12 − 3x',
          'Divide by 2: y = (12 − 3x) / 2'
        ]
      },
      {
        question: 'Which value of x makes 6x − 4 = 4x + 10 true?',
        options: ['x = 6', 'x = 1', 'x = 7', 'x = 3'],
        correctIndex: 2,
        explanation: '6x − 4x = 10 + 4 → 2x = 14 → x = 7. Check: 6(7)−4 = 38 = 4(7)+10 ✓.',
        steps: [
          'Subtract 4x from both sides: 2x − 4 = 10',
          'Add 4: 2x = 14',
          'Divide by 2: x = 7'
        ]
      },
      {
        question: 'An equation has infinitely many solutions. Which could it be?',
        options: ['2(x + 4) = 2x + 8', '2x + 3 = 2x + 5', '3x = 9', '5x + 1 = 5x − 1'],
        correctIndex: 0,
        explanation: '2x + 8 = 2x + 8 is always true → infinite solutions.',
        steps: [
          'Distribute: 2x + 8 = 2x + 8',
          'Subtract 2x: 8 = 8 (always true)',
          'Infinite solutions'
        ]
      },
      {
        question: 'Solve: (3/4)x = 9',
        options: ['x = 6.75', 'x = 12', 'x = 3', 'x = 36/4'],
        correctIndex: 1,
        explanation: 'x = 9 ÷ (3/4) = 9 × (4/3) = 12.',
        steps: [
          'Multiply both sides by 4/3 (reciprocal)',
          'x = 9 × (4/3) = 36/3 = 12'
        ]
      },
      {
        question: 'Solve: 0.4x + 1.2 = 3.6',
        options: ['x = 12', 'x = 6', 'x = 4', 'x = 2.4'],
        correctIndex: 1,
        explanation: '0.4x = 2.4, x = 6.',
        steps: [
          'Subtract 1.2: 0.4x = 2.4',
          'Divide by 0.4: x = 6'
        ]
      },
      {
        question: 'For what value of x does the equation have NO solution: 3x + 5 = 3x + k?',
        options: ['k = 5', 'k = 0', 'k = 3', 'Any k ≠ 5'],
        correctIndex: 3,
        explanation: '3x + 5 = 3x + k → 5 = k. If k ≠ 5, no solution.',
        steps: [
          'Subtract 3x: 5 = k',
          'If k ≠ 5, you get a false statement',
          'No solution when k ≠ 5'
        ]
      },
      {
        question: 'A number is tripled, then 7 is subtracted, giving 20. What is the number?',
        options: ['4.33', '9', '6', 'none of the above'],
        correctIndex: 1,
        explanation: '3n − 7 = 20 → 3n = 27 → n = 9.',
        steps: [
          'Write: 3n − 7 = 20',
          'Add 7: 3n = 27',
          'Divide by 3: n = 9'
        ]
      }
    ]
  },
  {
    id: 'systems-equations',
    title: 'Systems of Equations',
    coverEmoji: '🔀',
    coverColor: '#6d28d9',
    topic: 'algebra',
    grades: [8],
    questions: [
      {
        question: 'Solve the system: y = 2x + 1 and y = x + 4',
        options: ['(2, 5)', '(3, 7)', '(1, 3)', '(4, 9)'],
        correctIndex: 1,
        explanation: 'Set equal: 2x + 1 = x + 4 → x = 3. y = 7.',
        steps: [
          'Set equal: 2x + 1 = x + 4',
          'Subtract x: x + 1 = 4 → x = 3',
          'y = 2(3) + 1 = 7 → (3, 7)'
        ]
      },
      {
        question: 'Solve: x + y = 10 and x − y = 4',
        options: ['(3, 7)', '(6, 4)', '(7, 3)', '(4, 6)'],
        correctIndex: 2,
        explanation: 'Add: 2x = 14 → x = 7. y = 3.',
        steps: [
          'Add equations: 2x = 14 → x = 7',
          'Substitute: 7 + y = 10 → y = 3',
          'Solution: (7, 3)'
        ]
      },
      {
        question: 'Two numbers sum to 18 and their difference is 4. What is the larger number?',
        options: ['11', '10', '7', '14'],
        correctIndex: 0,
        explanation: 'x + y = 18, x − y = 4. Adding: 2x = 22 → x = 11.',
        steps: [
          'System: x+y=18 and x−y=4',
          'Add: 2x = 22 → x = 11',
          'y = 18 − 11 = 7'
        ]
      },
      {
        question: 'Solve by substitution: y = 3x and 2x + y = 15',
        options: ['(3, 9)', '(5, 15)', '(4, 12)', '(2, 6)'],
        correctIndex: 0,
        explanation: 'Substitute: 2x + 3x = 15 → 5x = 15 → x = 3. y = 9.',
        steps: [
          'Substitute y = 3x into 2x + y = 15',
          '2x + 3x = 15 → 5x = 15 → x = 3',
          'y = 3(3) = 9 → (3, 9)'
        ]
      },
      {
        question: 'A system has lines y = 2x + 3 and y = 2x − 5. How many solutions does it have?',
        options: ['Infinite solutions', 'Exactly one solution', 'Two solutions', 'No solution'],
        correctIndex: 3,
        explanation: 'Parallel lines (same slope, different y-intercepts) never intersect. No solution.',
        steps: [
          'Both lines have slope = 2',
          'Different y-intercepts: +3 and −5',
          'Parallel lines → no solution'
        ]
      },
      {
        question: 'Solve: 2x + 3y = 12 and x = 6 − y',
        options: ['(3, 2)', '(2, 3)', '(6, 0)', '(4, 2)'],
        correctIndex: 2,
        explanation: 'Substitute x = 6−y: 2(6−y)+3y = 12 → 12+y = 12 → y = 0. Then x = 6.',
        steps: [
          'Substitute x = 6−y into 2x+3y=12',
          '12 − 2y + 3y = 12 → y = 0',
          'x = 6 − 0 = 6 → (6, 0)'
        ]
      },
      {
        question: 'Tickets cost $5 for students and $8 for adults. 200 tickets were sold for $1,300. How many student tickets were sold?',
        options: ['80', '100', '120', '50'],
        correctIndex: 1,
        explanation: 's+a=200 and 5s+8a=1300. From first: a=200−s. 5s+8(200−s)=1300 → 1600−3s=1300 → s=100.',
        steps: [
          's + a = 200 → a = 200 − s',
          '5s + 8(200−s) = 1300',
          '1600 − 3s = 1300 → s = 100'
        ]
      },
      {
        question: 'Which ordered pair is a solution to BOTH y > x + 1 and y < 3x − 2?',
        options: ['(0, 0)', '(4, 6)', '(3, 5)', '(2, 4)'],
        correctIndex: 1,
        explanation: 'Test (4,6): 6 > 5 ✓ and 6 < 10 ✓.',
        steps: [
          'Test (4, 6): y > x+1 → 6 > 5 ✓',
          'y < 3x−2 → 6 < 10 ✓',
          '(4, 6) satisfies both'
        ]
      }
    ]
  },
  {
    id: 'exponents-roots',
    title: 'Exponents and Square Roots',
    coverEmoji: '🔋',
    coverColor: '#be185d',
    topic: 'number-sense',
    grades: [7, 8],
    questions: [
      {
        question: 'Simplify: 2³ × 2⁴',
        options: ['2⁷', '2¹²', '4⁷', '2¹'],
        correctIndex: 0,
        explanation: 'Product rule: 2³ × 2⁴ = 2^(3+4) = 2⁷.',
        steps: [
          'Same base → add exponents',
          '2³ × 2⁴ = 2^(3+4) = 2⁷'
        ]
      },
      {
        question: 'What is √144?',
        options: ['11', '14', '12', '13'],
        correctIndex: 2,
        explanation: '12 × 12 = 144, so √144 = 12.',
        steps: [
          'Find a number that multiplied by itself = 144',
          '12 × 12 = 144',
          '√144 = 12'
        ]
      },
      {
        question: 'Simplify: (3²)³',
        options: ['3⁵', '9³', '3⁶', '27²'],
        correctIndex: 2,
        explanation: 'Power of a power: (3²)³ = 3^(2×3) = 3⁶.',
        steps: [
          'Power rule: (aᵐ)ⁿ = a^(m×n)',
          '(3²)³ = 3^(2×3) = 3⁶'
        ]
      },
      {
        question: 'Between which two consecutive integers does √50 lie?',
        options: ['6 and 7', '5 and 6', '7 and 8', '24 and 26'],
        correctIndex: 2,
        explanation: '7² = 49 and 8² = 64. Since 49 < 50 < 64, √50 is between 7 and 8.',
        steps: [
          '7² = 49, 8² = 64',
          '49 < 50 < 64',
          '√50 is between 7 and 8'
        ]
      },
      {
        question: 'Simplify: 5⁰',
        options: ['0', '5', '∞', '1'],
        correctIndex: 3,
        explanation: 'Any non-zero number raised to the power 0 equals 1.',
        steps: [
          'Zero exponent rule: a⁰ = 1 for any a ≠ 0',
          '5⁰ = 1'
        ]
      },
      {
        question: 'Simplify: 3⁵ ÷ 3²',
        options: ['3¹⁰', '3³', '1³', '9³'],
        correctIndex: 1,
        explanation: 'Quotient rule: 3⁵ ÷ 3² = 3^(5−2) = 3³.',
        steps: [
          'Same base → subtract exponents',
          '3⁵ ÷ 3² = 3^(5−2) = 3³'
        ]
      },
      {
        question: 'What is 2⁻³?',
        options: ['−8', '−6', '1/8', '6'],
        correctIndex: 2,
        explanation: '2⁻³ = 1/2³ = 1/8.',
        steps: [
          'Negative exponent: a⁻ⁿ = 1/aⁿ',
          '2⁻³ = 1/2³ = 1/8'
        ]
      },
      {
        question: 'Evaluate: √(9 × 16)',
        options: ['25', '13', '12', '7'],
        correctIndex: 2,
        explanation: '9 × 16 = 144, √144 = 12. Or √9 × √16 = 3 × 4 = 12.',
        steps: [
          'Method 1: 9 × 16 = 144, √144 = 12',
          'Method 2: √9 × √16 = 3 × 4 = 12'
        ]
      }
    ]
  },
  {
    id: 'scientific-notation',
    title: 'Scientific Notation',
    coverEmoji: '🔬',
    coverColor: '#1e3a8a',
    topic: 'number-sense',
    grades: [8],
    questions: [
      {
        question: 'Write 0.000047 in scientific notation.',
        options: ['4.7 × 10⁻⁵', '4.7 × 10⁵', '47 × 10⁻⁶', '0.47 × 10⁻⁴'],
        correctIndex: 0,
        explanation: 'Move decimal 5 places right → 4.7 × 10⁻⁵.',
        steps: [
          'Move decimal right until 1 ≤ n < 10',
          '0.000047 → 4.7 (moved 5 places right)',
          'Negative exponent: 4.7 × 10⁻⁵'
        ]
      },
      {
        question: 'Write 3.8 × 10⁶ in standard form.',
        options: ['38,000', '3,800,000', '0.0000038', '380,000'],
        correctIndex: 1,
        explanation: 'Move decimal 6 places right: 3,800,000.',
        steps: [
          'Positive exponent → move decimal right',
          '3.8 × 10⁶ → move 6 places right',
          '3,800,000'
        ]
      },
      {
        question: 'Multiply: (2 × 10³) × (4 × 10⁵)',
        options: ['6 × 10⁸', '8 × 10¹⁵', '8 × 10⁸', '8 × 10²'],
        correctIndex: 2,
        explanation: '2 × 4 = 8; 10³ × 10⁵ = 10⁸. Answer: 8 × 10⁸.',
        steps: [
          'Multiply coefficients: 2 × 4 = 8',
          'Add exponents: 10³ × 10⁵ = 10⁸',
          'Result: 8 × 10⁸'
        ]
      },
      {
        question: 'The Earth is 1.5 × 10⁸ km from the Sun. Light travels at 3 × 10⁵ km/s. How long (in seconds) does sunlight take to reach Earth?',
        options: ['5 × 10² s', '5 × 10³ s', '4.5 × 10¹³ s', '5 × 10¹² s'],
        correctIndex: 0,
        explanation: 'Time = distance ÷ speed = (1.5 × 10⁸) ÷ (3 × 10⁵) = 0.5 × 10³ = 5 × 10² s.',
        steps: [
          'Time = distance ÷ speed',
          '(1.5 × 10⁸) ÷ (3 × 10⁵) = (1.5÷3) × 10^(8−5)',
          '0.5 × 10³ = 5 × 10² seconds'
        ]
      },
      {
        question: 'Which is the LARGEST number?',
        options: ['9.1 × 10⁴', '8.8 × 10⁴', '1.1 × 10⁵', '3.2 × 10⁵'],
        correctIndex: 3,
        explanation: '3.2 × 10⁵ = 320,000 > all others.',
        steps: [
          'Compare exponents first: 10⁵ > 10⁴',
          'Both 3.2×10⁵ and 1.1×10⁵ have same exponent',
          '3.2 > 1.1 → 3.2×10⁵ is largest'
        ]
      },
      {
        question: 'Divide: (9 × 10⁷) ÷ (3 × 10²)',
        options: ['3 × 10⁵', '3 × 10⁹', '6 × 10⁵', '27 × 10⁵'],
        correctIndex: 0,
        explanation: '9÷3 = 3; 10⁷÷10² = 10⁵. Answer: 3 × 10⁵.',
        steps: [
          'Divide coefficients: 9 ÷ 3 = 3',
          'Subtract exponents: 10⁷ ÷ 10² = 10⁵',
          '3 × 10⁵'
        ]
      },
      {
        question: 'A cell is 0.000003 m wide. A bacterium is 0.0000009 m wide. How many times wider is the cell?',
        options: ['3 times', '3.3 times', 'about 27 times', 'about 2.7 times'],
        correctIndex: 1,
        explanation: '3 × 10⁻⁶ ÷ 9 × 10⁻⁷ = (3÷9) × 10^(−6−(−7)) = (1/3) × 10¹ ≈ 3.3.',
        steps: [
          '0.000003 = 3 × 10⁻⁶; 0.0000009 = 9 × 10⁻⁷',
          '(3 × 10⁻⁶) ÷ (9 × 10⁻⁷) = (3/9) × 10¹',
          '= (1/3) × 10 ≈ 3.3 times wider'
        ]
      },
      {
        question: 'Add: (5.2 × 10⁴) + (3.0 × 10³)',
        options: ['8.2 × 10⁷', '5.5 × 10⁴', '8.2 × 10⁴', '5.5 × 10³'],
        correctIndex: 1,
        explanation: 'Convert: 5.2 × 10⁴ = 52,000; 3 × 10³ = 3,000. Sum = 55,000 = 5.5 × 10⁴.',
        steps: [
          'Same exponent needed: 3.0 × 10³ = 0.30 × 10⁴',
          '5.20 × 10⁴ + 0.30 × 10⁴ = 5.50 × 10⁴',
          '= 5.5 × 10⁴'
        ]
      }
    ]
  },
  {
    id: 'pythagorean-theorem',
    title: 'Pythagorean Theorem',
    coverEmoji: '📐',
    coverColor: '#15803d',
    topic: 'geometry',
    grades: [8],
    questions: [
      {
        question: 'A right triangle has legs 3 and 4. What is the hypotenuse?',
        options: ['5', '6', '7', '√7'],
        correctIndex: 0,
        explanation: 'c² = 3² + 4² = 9 + 16 = 25. c = 5.',
        steps: [
          'a² + b² = c²',
          '9 + 16 = 25',
          'c = √25 = 5'
        ]
      },
      {
        question: 'A right triangle has hypotenuse 13 and one leg 5. What is the other leg?',
        options: ['8', '10', '12', '√194'],
        correctIndex: 2,
        explanation: 'b² = 13² − 5² = 169 − 25 = 144. b = 12.',
        steps: [
          'b² = c² − a²',
          'b² = 169 − 25 = 144',
          'b = √144 = 12'
        ]
      },
      {
        question: 'Is a triangle with sides 7, 24, and 25 a right triangle?',
        options: [
          'Yes, because 7 + 24 = 25',
          'No, because 7² + 24² ≠ 25²',
          'Yes, because 7² + 24² = 25²',
          'Cannot be determined'
        ],
        correctIndex: 2,
        explanation: '49 + 576 = 625 = 25². Yes, it is a right triangle.',
        steps: [
          '7² = 49, 24² = 576, 25² = 625',
          '49 + 576 = 625 ✓',
          'It IS a right triangle'
        ]
      },
      {
        question: 'A ladder 10 ft long leans against a wall. The base is 6 ft from the wall. How high up the wall does it reach?',
        options: ['4 ft', '6 ft', '8 ft', '√164 ft'],
        correctIndex: 2,
        explanation: 'h² = 10² − 6² = 100 − 36 = 64. h = 8 ft.',
        steps: [
          'h² + 6² = 10²',
          'h² = 100 − 36 = 64',
          'h = 8 ft'
        ]
      },
      {
        question: 'Find the distance between points (1, 2) and (4, 6).',
        options: ['4', '5', '7', '3'],
        correctIndex: 1,
        explanation: 'd = √((4−1)² + (6−2)²) = √(9+16) = √25 = 5.',
        steps: [
          'Δx = 4−1 = 3, Δy = 6−2 = 4',
          'd = √(3² + 4²) = √(9+16) = √25',
          'd = 5'
        ]
      },
      {
        question: 'A rectangular field is 40 m long and 30 m wide. What is the length of the diagonal?',
        options: ['70 m', '35 m', '√700 m', '50 m'],
        correctIndex: 3,
        explanation: 'd² = 40² + 30² = 1600 + 900 = 2500. d = 50.',
        steps: [
          'd² = 40² + 30²',
          '= 1600 + 900 = 2500',
          'd = √2500 = 50 m'
        ]
      },
      {
        question: 'Which set of numbers is a Pythagorean triple?',
        options: ['5, 10, 13', '6, 8, 10', '4, 6, 8', '3, 6, 9'],
        correctIndex: 1,
        explanation: '6² + 8² = 36 + 64 = 100 = 10². This is a Pythagorean triple.',
        steps: [
          'Check: a² + b² = c²',
          '6² + 8² = 36 + 64 = 100',
          '10² = 100 ✓ → (6, 8, 10) is a triple'
        ]
      },
      {
        question: 'A right triangle has legs of length x and x + 2, and hypotenuse 10. What is x?',
        options: ['6', '8', '5', '7'],
        correctIndex: 0,
        explanation: 'x² + (x+2)² = 100 → 2x² + 4x + 4 = 100 → 2x² + 4x − 96 = 0 → x² + 2x − 48 = 0 → (x+8)(x−6)=0 → x=6.',
        steps: [
          'x² + (x+2)² = 10²',
          '2x² + 4x + 4 = 100 → x² + 2x − 48 = 0',
          '(x+8)(x−6) = 0 → x = 6'
        ]
      }
    ]
  },
  {
    id: 'functions-grade8',
    title: 'Functions and Representations',
    coverEmoji: '🔁',
    coverColor: '#c2410c',
    topic: 'algebra',
    grades: [8],
    questions: [
      {
        question: 'Which set of ordered pairs represents a function?',
        options: [
          '{(1,2), (1,3), (2,4)}',
          '{(2,5), (3,5), (4,5)}',
          '{(0,1), (0,2), (1,3)}',
          '{(3,4), (3,5), (3,6)}'
        ],
        correctIndex: 1,
        explanation: 'A function has each x value mapped to exactly one y. {(2,5),(3,5),(4,5)} — each x is unique.',
        steps: [
          'A function: each input (x) → exactly one output (y)',
          'Options A, C, D all repeat an x value',
          'Option B: x = 2, 3, 4 (each unique) → function'
        ]
      },
      {
        question: 'Given f(x) = 3x − 5, what is f(4)?',
        options: ['2', '7', '9', '17'],
        correctIndex: 1,
        explanation: 'f(4) = 3(4) − 5 = 12 − 5 = 7.',
        steps: [
          'Substitute x = 4',
          'f(4) = 3(4) − 5 = 12 − 5 = 7'
        ]
      },
      {
        question: 'Which graph represents a function?',
        options: [
          'A vertical line',
          'A circle',
          'A diagonal line',
          'A sideways parabola opening right'
        ],
        correctIndex: 2,
        explanation: 'A diagonal line passes the vertical line test — every x has one y. Circles, vertical lines, and sideways parabolas do not.',
        steps: [
          'Vertical line test: draw a vertical line anywhere',
          'If it hits the graph more than once → not a function',
          'A diagonal line passes this test'
        ]
      },
      {
        question: 'A function is described by the table: x: 1,2,3,4 and y: 3,5,7,9. What is the rule?',
        options: ['y = 2x + 1', 'y = x + 2', 'y = 3x', 'y = 2x'],
        correctIndex: 0,
        explanation: 'Check pattern: each y increases by 2 as x increases by 1. y = 2(1)+1=3 ✓.',
        steps: [
          'Rate of change: (5−3)/(2−1) = 2',
          'y-intercept: 3 = 2(1) + b → b = 1',
          'Rule: y = 2x + 1'
        ]
      },
      {
        question: 'For f(x) = x² − 2, what is f(−3)?',
        options: ['−11', '11', '7', '−7'],
        correctIndex: 2,
        explanation: 'f(−3) = (−3)² − 2 = 9 − 2 = 7.',
        steps: [
          'Substitute x = −3',
          '(−3)² = 9',
          'f(−3) = 9 − 2 = 7'
        ]
      },
      {
        question: 'Which input-output mapping is NOT a function?',
        options: [
          'Each student → their grade',
          'Each month → its number of days',
          'Each person → their birthday',
          'Each birthday → the person who has it'
        ],
        correctIndex: 3,
        explanation: 'Multiple people can share a birthday → one input maps to multiple outputs → not a function.',
        steps: [
          'A function: one input → exactly one output',
          'Multiple people can share a birthday',
          'Birthday → person can give multiple people → not a function'
        ]
      },
      {
        question: 'Given f(x) = −2x + 6, for what value of x does f(x) = 0?',
        options: ['x = 0', 'x = 3', 'x = −3', 'x = 6'],
        correctIndex: 1,
        explanation: '0 = −2x + 6 → 2x = 6 → x = 3.',
        steps: [
          'Set f(x) = 0: −2x + 6 = 0',
          '−2x = −6',
          'x = 3'
        ]
      },
      {
        question: 'A function triples its input then subtracts 4. What is the output when the input is 5?',
        options: ['11', '19', '7', '3'],
        correctIndex: 0,
        explanation: 'f(5) = 3(5) − 4 = 15 − 4 = 11.',
        steps: [
          'Write the function: f(x) = 3x − 4',
          'f(5) = 3(5) − 4 = 15 − 4 = 11'
        ]
      }
    ]
  },
  {
    id: 'slope-intercept',
    title: 'Slope and Linear Relationships',
    coverEmoji: '📏',
    coverColor: '#0f766e',
    topic: 'algebra',
    grades: [8],
    questions: [
      {
        question: 'What is the slope of a line that passes through (2, 3) and (6, 11)?',
        options: ['1', '2', '0.5', '4'],
        correctIndex: 1,
        explanation: 'm = (11−3)/(6−2) = 8/4 = 2.',
        steps: [
          'Slope formula: m = (y₂−y₁)/(x₂−x₁)',
          'm = (11−3)/(6−2) = 8/4',
          'm = 2'
        ]
      },
      {
        question: 'Write the slope-intercept form of the line with slope −3 and y-intercept 5.',
        options: ['y = 5x − 3', 'y = −3x + 5', 'y = 3x − 5', 'y = −5x + 3'],
        correctIndex: 1,
        explanation: 'y = mx + b = −3x + 5.',
        steps: [
          'Slope-intercept form: y = mx + b',
          'm = −3, b = 5',
          'y = −3x + 5'
        ]
      },
      {
        question: 'What is the slope of a horizontal line?',
        options: ['Undefined', '1', '0', '∞'],
        correctIndex: 2,
        explanation: 'Horizontal lines have no vertical change. Slope = 0.',
        steps: [
          'Horizontal lines: y is constant',
          'Rise = 0, Run ≠ 0',
          'Slope = 0/run = 0'
        ]
      },
      {
        question: 'What is the y-intercept of the line y = 4x − 7?',
        options: ['4', '7', '−7', '−4'],
        correctIndex: 2,
        explanation: 'In y = mx + b, b is the y-intercept. b = −7.',
        steps: [
          'y = mx + b form',
          'y = 4x − 7 → m = 4, b = −7',
          'y-intercept = −7'
        ]
      },
      {
        question: 'A line has equation y = (2/3)x + 1. What is its slope?',
        options: ['1', '3/2', '2', '2/3'],
        correctIndex: 3,
        explanation: 'In y = mx + b, m is the slope. m = 2/3.',
        steps: [
          'y = mx + b',
          'm = 2/3, b = 1',
          'Slope = 2/3'
        ]
      },
      {
        question: 'What is the slope of a line perpendicular to y = 3x + 2?',
        options: ['3', '−3', '1/3', '−1/3'],
        correctIndex: 3,
        explanation: 'Perpendicular slopes are negative reciprocals. Reciprocal of 3 is 1/3; negative = −1/3.',
        steps: [
          'Original slope: 3',
          'Perpendicular slope: −(1/3)',
          '= −1/3'
        ]
      },
      {
        question: 'A line passes through (0, −2) and (4, 6). What is the equation in slope-intercept form?',
        options: ['y = 2x − 2', 'y = −2x + 2', 'y = 4x − 2', 'y = 2x + 6'],
        correctIndex: 0,
        explanation: 'm = (6−(−2))/(4−0) = 8/4 = 2. b = −2. y = 2x − 2.',
        steps: [
          'm = (6−(−2))/(4−0) = 8/4 = 2',
          'y-intercept: (0, −2) → b = −2',
          'y = 2x − 2'
        ]
      },
      {
        question: 'Which graph has a steeper slope: y = 4x + 1 or y = (1/2)x − 3?',
        options: ['y = (1/2)x − 3', 'They are equal', 'y = 4x + 1', 'Cannot determine'],
        correctIndex: 2,
        explanation: '|4| > |1/2|, so y = 4x + 1 is steeper.',
        steps: [
          'Compare absolute values of slopes',
          '|4| = 4 and |1/2| = 0.5',
          '4 > 0.5 → y = 4x + 1 is steeper'
        ]
      }
    ]
  },
  {
    id: 'transformations',
    title: 'Translations, Reflections, Rotations, Dilations',
    coverEmoji: '🔄',
    coverColor: '#7e22ce',
    topic: 'geometry',
    grades: [8],
    questions: [
      {
        question: 'Point A is at (3, −2). It is translated 4 units right and 5 units up. Where is A\'?',
        options: ['(7, 3)', '(−1, 3)', '(7, −7)', '(3, 3)'],
        correctIndex: 0,
        explanation: '(3+4, −2+5) = (7, 3).',
        steps: [
          'Right (+4): 3 + 4 = 7',
          'Up (+5): −2 + 5 = 3',
          "A' = (7, 3)"
        ]
      },
      {
        question: 'What are the coordinates of (5, 3) reflected over the x-axis?',
        options: ['(−5, 3)', '(5, −3)', '(−5, −3)', '(3, 5)'],
        correctIndex: 1,
        explanation: 'Reflecting over x-axis negates y: (5, 3) → (5, −3).',
        steps: [
          'Reflection over x-axis: (x, y) → (x, −y)',
          '(5, 3) → (5, −3)'
        ]
      },
      {
        question: 'Triangle ABC is rotated 90° counterclockwise about the origin. Point B is at (4, 1). Where is B\'?',
        options: ['(1, −4)', '(−1, 4)', '(−4, −1)', '(4, −1)'],
        correctIndex: 1,
        explanation: '90° CCW: (x, y) → (−y, x) = (−1, 4).',
        steps: [
          '90° CCW rule: (x, y) → (−y, x)',
          '(4, 1) → (−1, 4)'
        ]
      },
      {
        question: 'A figure is dilated with center at origin and scale factor 3. Point C is at (2, −4). Where is C\'?',
        options: ['(5, −7)', '(6, −12)', '(2/3, −4/3)', '(−6, 12)'],
        correctIndex: 1,
        explanation: 'Dilation by 3: (2×3, −4×3) = (6, −12).',
        steps: [
          'Dilation: multiply each coordinate by scale factor',
          '(2 × 3, −4 × 3) = (6, −12)'
        ]
      },
      {
        question: 'Which transformation produces a congruent (same size) figure?',
        options: ['Dilation by factor 2', 'Dilation by factor 0.5', 'Rotation 180°', 'Dilation by factor 3'],
        correctIndex: 2,
        explanation: 'Rotations are rigid transformations — they preserve size and shape. Dilations change size.',
        steps: [
          'Rigid transformations preserve size: translation, reflection, rotation',
          'Dilations change size',
          'Rotation 180° is a rigid transformation → congruent'
        ]
      },
      {
        question: 'Point P at (−3, 7) is reflected over the y-axis. What are the new coordinates?',
        options: ['(3, 7)', '(−3, −7)', '(7, −3)', '(−7, 3)'],
        correctIndex: 0,
        explanation: 'Reflection over y-axis negates x: (−3, 7) → (3, 7).',
        steps: [
          'Reflection over y-axis: (x, y) → (−x, y)',
          '(−3, 7) → (3, 7)'
        ]
      },
      {
        question: 'A triangle has area 12 sq units. It is dilated by a scale factor of 2. What is the area of the new triangle?',
        options: ['24 sq units', '14 sq units', '6 sq units', '48 sq units'],
        correctIndex: 3,
        explanation: 'Area scales by (scale factor)² = 4. New area = 12 × 4 = 48.',
        steps: [
          'Length scale factor: 2',
          'Area scale factor: 2² = 4',
          'New area: 12 × 4 = 48 sq units'
        ]
      },
      {
        question: 'Point Q is at (−2, −5). After a 180° rotation about the origin, where is Q\'?',
        options: ['(2, 5)', '(5, 2)', '(−2, 5)', '(2, −5)'],
        correctIndex: 0,
        explanation: '180° rotation: (x, y) → (−x, −y). (−2, −5) → (2, 5).',
        steps: [
          '180° rotation rule: (x, y) → (−x, −y)',
          '(−2, −5) → (2, 5)'
        ]
      }
    ]
  },
  {
    id: 'bivariate-data',
    title: 'Scatter Plots and Lines of Best Fit',
    coverEmoji: '🔭',
    coverColor: '#1e40af',
    topic: 'data',
    grades: [8],
    questions: [
      {
        question: 'A scatter plot shows that as hours studied increase, test scores increase. This is a _______ association.',
        options: ['negative linear', 'no', 'positive linear', 'nonlinear'],
        correctIndex: 2,
        explanation: 'When both variables increase together, the association is positive.',
        steps: [
          'As x increases, y increases → positive',
          'The pattern appears linear',
          'Positive linear association'
        ]
      },
      {
        question: 'The line of best fit for a data set is y = 3x + 5. Predict y when x = 8.',
        options: ['24', '29', '11', '40'],
        correctIndex: 1,
        explanation: 'y = 3(8) + 5 = 24 + 5 = 29.',
        steps: [
          'Substitute x = 8 into y = 3x + 5',
          'y = 3(8) + 5 = 24 + 5 = 29'
        ]
      },
      {
        question: 'A scatter plot shows temperature (x) and ice cream sales (y). As temperature rises, sales rise. Which correlation coefficient is most likely?',
        options: ['−0.9', '0.1', '−0.3', '0.85'],
        correctIndex: 3,
        explanation: 'A strong positive association has r close to +1. r = 0.85 fits.',
        steps: [
          'Positive association → positive r',
          'Strong association → r close to 1',
          'r ≈ 0.85 is strong positive'
        ]
      },
      {
        question: 'Which describes a negative association in a scatter plot?',
        options: [
          'Points cluster near a line going up-right',
          'Points are scattered with no pattern',
          'Points cluster near a line going down-right',
          'Points form a U-shape'
        ],
        correctIndex: 2,
        explanation: 'Negative association: as x increases, y decreases — a downward-sloping pattern.',
        steps: [
          'Negative: as x ↑, y ↓',
          'Pattern slopes downward from left to right',
          'Points cluster near a down-right line'
        ]
      },
      {
        question: 'A line of best fit is y = −2x + 50. What does the slope −2 mean in context (x = hours of TV, y = quiz score)?',
        options: [
          'Quiz score increases 2 points per hour of TV',
          'Starting score is −2',
          'Quiz score decreases 2 points per hour of TV',
          'Students watch TV for 2 hours'
        ],
        correctIndex: 2,
        explanation: 'Slope = −2 means for each additional hour of TV, quiz score decreases by 2 points.',
        steps: [
          'Slope = rate of change',
          'Slope = −2: y decreases 2 for each x increase of 1',
          'Score drops 2 points per TV hour'
        ]
      },
      {
        question: 'Data: (1,3), (2,5), (3,8), (4,9), (5,11). A line of best fit is y = 2x + 1. What is the residual for the point (3,8)?',
        options: ['1', '0', '7', '−1'],
        correctIndex: 0,
        explanation: 'Predicted: y = 2(3)+1 = 7. Residual = actual − predicted = 8 − 7 = 1.',
        steps: [
          'Predicted y: 2(3) + 1 = 7',
          'Residual = actual − predicted',
          '8 − 7 = 1'
        ]
      },
      {
        question: 'Which scatter plot has the STRONGEST linear association?',
        options: [
          'Points spread widely with no clear pattern',
          'Points loosely follow an upward line',
          'Points tightly cluster along a downward line',
          'Points form a curved arc'
        ],
        correctIndex: 2,
        explanation: 'Strongest linear association = points very close to a straight line. Tight clustering along any line is strongest.',
        steps: [
          'Strength = how closely points follow the line',
          '"Tightly cluster along a line" = strong association',
          'Direction (up or down) does not affect strength'
        ]
      },
      {
        question: 'Using the line y = 1.5x + 4, predict the value of y when x = 10.',
        options: ['14', '15', '19', '25'],
        correctIndex: 2,
        explanation: 'y = 1.5(10) + 4 = 15 + 4 = 19.',
        steps: [
          'Substitute x = 10',
          'y = 1.5(10) + 4 = 15 + 4',
          'y = 19'
        ]
      }
    ]
  },
  {
    id: 'volume-grade8',
    title: 'Volume of Cylinders, Cones, and Spheres',
    coverEmoji: '🥫',
    coverColor: '#92400e',
    topic: 'geometry',
    grades: [7, 8],
    questions: [
      {
        question: 'What is the volume of a cylinder with radius 4 cm and height 10 cm? (Use π ≈ 3.14)',
        options: ['125.6 cm³', '502.4 cm³', '160 cm³', '251.2 cm³'],
        correctIndex: 1,
        explanation: 'V = πr²h = 3.14 × 16 × 10 = 502.4 cm³.',
        steps: [
          'Formula: V = πr²h',
          'r² = 16',
          'V = 3.14 × 16 × 10 = 502.4 cm³'
        ]
      },
      {
        question: 'A cone has radius 3 m and height 9 m. Find its volume. (Use π ≈ 3.14)',
        options: ['84.78 m³', '254.34 m³', '28.26 m³', '113 m³'],
        correctIndex: 0,
        explanation: 'V = (1/3)πr²h = (1/3)(3.14)(9)(9) = 84.78 m³.',
        steps: [
          'Formula: V = (1/3)πr²h',
          'V = (1/3)(3.14)(3²)(9)',
          '= (1/3)(3.14)(9)(9) = 84.78 m³'
        ]
      },
      {
        question: 'Find the volume of a sphere with radius 6 ft. (Use π ≈ 3.14)',
        options: ['904.32 ft³', '452.16 ft³', '301.44 ft³', '113.04 ft³'],
        correctIndex: 0,
        explanation: 'V = (4/3)πr³ = (4/3)(3.14)(216) = 904.32 ft³.',
        steps: [
          'Formula: V = (4/3)πr³',
          'r³ = 6³ = 216',
          'V = (4/3)(3.14)(216) = 904.32 ft³'
        ]
      },
      {
        question: 'A cylinder has the same base radius and height as a cone (r = 5, h = 12). How does the cone\'s volume compare to the cylinder\'s?',
        options: [
          'Same volume',
          'One-half the cylinder',
          'Twice the cylinder',
          'One-third the cylinder'
        ],
        correctIndex: 3,
        explanation: 'V_cone = (1/3) × V_cylinder. A cone is always 1/3 the volume of a cylinder with the same r and h.',
        steps: [
          'V_cylinder = πr²h',
          'V_cone = (1/3)πr²h',
          'Cone = (1/3) × cylinder'
        ]
      },
      {
        question: 'A soup can (cylinder) has radius 3.5 cm and height 12 cm. What is its volume? (Use π ≈ 3.14)',
        options: ['131.88 cm³', '263.76 cm³', '461.58 cm³', '923.16 cm³'],
        correctIndex: 2,
        explanation: 'V = 3.14 × (3.5)² × 12 = 3.14 × 12.25 × 12 = 461.58 cm³.',
        steps: [
          'r² = 3.5² = 12.25',
          'V = 3.14 × 12.25 × 12',
          '= 461.58 cm³'
        ]
      },
      {
        question: 'A cone-shaped funnel has radius 8 cm and height 15 cm. What is its volume? (Use π ≈ 3.14)',
        options: ['251.2 cm³', '1004.8 cm³', '3014.4 cm³', '1005 cm³'],
        correctIndex: 1,
        explanation: 'V = (1/3)(3.14)(64)(15) = (1/3)(3014.4) = 1004.8 cm³.',
        steps: [
          'V = (1/3)πr²h',
          '= (1/3)(3.14)(64)(15)',
          '= 3014.4/3 = 1004.8 cm³'
        ]
      },
      {
        question: 'A basketball has diameter 24 cm. What is its volume? (Use π ≈ 3.14)',
        options: ['7234.56 cm³', '1808.64 cm³', '904.32 cm³', '3619.32 cm³'],
        correctIndex: 0,
        explanation: 'r = 12. V = (4/3)(3.14)(12³) = (4/3)(3.14)(1728) = 7234.56 cm³.',
        steps: [
          'r = diameter/2 = 12 cm',
          'V = (4/3)πr³ = (4/3)(3.14)(1728)',
          '= 7234.56 cm³'
        ]
      },
      {
        question: 'A cylinder has volume 628 cm³ and height 8 cm. What is its radius? (Use π ≈ 3.14)',
        options: ['2.5 cm', '10 cm', '5 cm', '25 cm'],
        correctIndex: 2,
        explanation: '628 = 3.14 × r² × 8 = 25.12r². r² = 25, r = 5 cm.',
        steps: [
          'V = πr²h → 628 = 3.14 × r² × 8',
          '628 = 25.12r² → r² = 25',
          'r = √25 = 5 cm'
        ]
      }
    ]
  },


];
