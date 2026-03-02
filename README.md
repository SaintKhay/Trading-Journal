# TradeJournal - Design Specifications

## Overview

Mobile-first trading journal app optimized for iPhone 14 (390px width). Professional, analytical dark theme designed for low-light environments with high contrast for readability.

---

## 🎨 Color System

### Background Colors

```
Primary Background:   #0F172A (Deep Navy)
Card Background:      #1E293B (Slate)
Input Background:     #1E293B (Slate)
```

### Accent Colors

```
Primary Blue:         #3B82F6
Primary Blue Hover:   #2563EB
Success Green:        #22C55E
Error Red:            #EF4444
```

### Text Colors

```
Primary Text:         #E2E8F0
Secondary Text:       #94A3B8
Placeholder Text:     #94A3B8
```

### Border Colors

```
Primary Border:       #1E293B
Subtle Border:        #0F172A
Focus Border:         #3B82F6
```

---

## 📐 Layout & Grid

### Canvas

- **Width:** 390px (iPhone 14)
- **Min Height:** 844px
- **Background:** #0F172A

### Spacing System (Base 8px)

```
4px   - Micro spacing
8px   - Small spacing (gap between close elements)
12px  - Medium-small spacing
16px  - Medium spacing (default padding)
24px  - Large spacing
32px  - Extra large spacing
```

### Border Radius

```
8px   - Standard (rounded-lg)
9999px - Pills/Circles (rounded-full)
```

### Shadows

```
Card Shadow (md):
  - 0px 4px 6px -1px rgba(0, 0, 0, 0.1)
  - 0px 2px 4px -1px rgba(0, 0, 0, 0.06)

Card Shadow (lg):
  - 0px 10px 15px -3px rgba(0, 0, 0, 0.1)
  - 0px 4px 6px -2px rgba(0, 0, 0, 0.05)
```

---

## 📝 Typography

### Font Family

- **Default:** System font stack (San Francisco on iOS)

### Font Sizes & Weights

```
Extra Large (5xl):    48px / Bold
Large (2xl):          24px / Medium
Base:                 16px / Medium
Small (sm):           14px / Regular
Extra Small (xs):     12px / Regular
Micro (10px):         10px / Regular
```

### Line Heights

```
5xl:   1.2
2xl:   1.3
base:  1.5
sm:    1.5
xs:    1.5
10px:  1.4
```

---

## 🧩 Component Specifications

### Top Navigation Bar

```
Height:               56px (h-14)
Background:           #0F172A
Border Bottom:        1px solid #1E293B
Padding Horizontal:   16px
Padding Vertical:     0px

Content Layout:
  - App Name/Title (left aligned)
    - Font: 16px Medium
    - Color: #E2E8F0

  - User Icon (right aligned)
    - Size: 32px × 32px (w-8 h-8)
    - Border: 1px solid #1E293B
    - Border Radius: 50%
    - Icon Size: 16px (w-4 h-4)
    - Icon Color: #94A3B8
    - Hover Border: #3B82F6
```

### Bottom Navigation Bar

```
Height:               64px (h-16)
Position:             Fixed bottom
Width:                390px
Background:           #1E293B
Border Top:           1px solid #0F172A
Padding Horizontal:   8px
Shadow:               lg

Nav Items (4 regular):
  - Width: Auto (flex-1)
  - Padding Vertical: 8px
  - Layout: Flex column, centered
  - Gap: 4px

  Icon:
    - Size: 20px × 20px (w-5 h-5)
    - Color: #94A3B8

  Label:
    - Font: 10px Regular
    - Color: #94A3B8

Add Trade Button (center, emphasized):
  - Button Container:
    - Size: 48px × 48px (w-12 h-12)
    - Background: #3B82F6
    - Border Radius: 50%
    - Margin Top: -8px (elevated)
    - Hover Background: #2563EB
    - Shadow: lg

  - Icon:
    - Size: 24px × 24px (w-6 h-6)
    - Color: #FFFFFF

  - Label:
    - Font: 10px Regular
    - Color: #94A3B8
    - Margin Top: 4px
```

### Cards (Standard)

```
Background:           #1E293B
Border:               1px solid #1E293B
Border Radius:        8px
Padding:              16px
Shadow:               md
```

### Cards (Hero - Discipline Score)

```
Background:           #1E293B
Border:               1px solid #1E293B
Border Radius:        8px
Padding:              24px
Shadow:               lg

Content Structure:
  - Label:
    - Font: 14px Regular
    - Color: #94A3B8
    - Margin Bottom: 8px

  - Score:
    - Font: 48px Bold
    - Color: #E2E8F0
    - Margin Bottom: 8px

  - Subtext:
    - Font: 12px Regular
    - Color: #22C55E (positive) / #EF4444 (negative)
```

### Stats Grid Cards (2×2)

```
Grid:
  - Columns: 2
  - Gap: 16px

Individual Card:
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Padding: 16px
  - Shadow: md

Content:
  - Label:
    - Font: 12px Regular
    - Color: #94A3B8
    - Margin Bottom: 8px

  - Value:
    - Font: 24px Medium
    - Color: #E2E8F0
```

### Buttons

#### Primary Button

```
Width:                100% (or auto)
Height:               48px (py-4)
Background:           #3B82F6
Border:               none
Border Radius:        8px
Padding Horizontal:   16px
Font:                 14px Medium
Color:                #FFFFFF
Hover Background:     #2563EB
Transition:           all 200ms
```

#### Secondary Button (Outlined)

```
Width:                100% (or auto)
Height:               48px
Background:           #1E293B
Border:               1px solid #1E293B
Border Radius:        8px
Padding Horizontal:   16px
Font:                 14px Medium
Color:                #E2E8F0
Hover Border:         #3B82F6
Transition:           all 200ms
```

#### Toggle Button (Active)

```
Width:                Flex-1
Height:               48px (py-3)
Background:           #3B82F6
Border:               1px solid #3B82F6
Border Radius:        8px
Font:                 14px Medium
Color:                #FFFFFF
```

#### Toggle Button (Inactive)

```
Width:                Flex-1
Height:               48px
Background:           #1E293B
Border:               1px solid #1E293B
Border Radius:        8px
Font:                 14px Medium
Color:                #E2E8F0
Hover Border:         #3B82F6
```

#### Small Button (Filters)

```
Width:                Flex-1
Height:               32px (py-2)
Background:           #1E293B
Border:               1px solid #1E293B
Border Radius:        8px
Font:                 12px Medium
Color:                #E2E8F0
```

#### Danger Button

```
Width:                100%
Height:               48px
Background:           #0F172A
Border:               1px solid #EF4444
Border Radius:        8px
Font:                 14px Medium
Color:                #EF4444
Hover Background:     #EF4444
Hover Color:          #FFFFFF
```

### Form Inputs

#### Text Input

```
Width:                100%
Height:               48px
Background:           #1E293B
Border:               1px solid #1E293B
Border Radius:        8px
Padding Horizontal:   16px
Padding Vertical:     12px
Font:                 14px Regular
Color:                #E2E8F0
Placeholder Color:    #94A3B8
Focus Ring:           2px solid #3B82F6
Outline:              none
```

#### Select Dropdown

```
Width:                100%
Height:               48px
Background:           #1E293B
Border:               1px solid #1E293B
Border Radius:        8px
Padding Horizontal:   16px
Padding Vertical:     12px
Font:                 14px Regular
Color:                #E2E8F0
Appearance:           none (remove default arrow)
Focus Ring:           2px solid #3B82F6
```

#### Textarea

```
Width:                100%
Height:               Auto (4 rows)
Background:           #1E293B
Border:               1px solid #1E293B
Border Radius:        8px
Padding:              12px 16px
Font:                 14px Regular
Color:                #E2E8F0
Placeholder Color:    #94A3B8
Resize:               none
Focus Ring:           2px solid #3B82F6
```

#### Upload Area (Dashed Border)

```
Width:                100%
Height:               Auto
Background:           #1E293B
Border:               2px dashed #1E293B
Border Radius:        8px
Padding:              32px
Layout:               Flex column, centered
Gap:                  8px
Hover Border:         #3B82F6

Icon:
  - Size: 32px × 32px (w-8 h-8)
  - Color: #94A3B8

Text:
  - Font: 14px Regular
  - Color: #94A3B8
```

### Form Labels

```
Font:                 14px Regular
Color:                #E2E8F0
Margin Bottom:        8px
Display:              block
```

### Tags/Pills

```
Background:           #0F172A
Border:               1px solid #0F172A
Border Radius:        9999px (pill shape)
Padding:              4px 12px (py-1 px-3)
Font:                 10px Regular
Color:                #94A3B8
Display:              inline-block
```

### Range Slider

```
Track:
  - Width: 100%
  - Height: 8px
  - Background: #0F172A
  - Border Radius: 9999px

Thumb:
  - Size: 16px × 16px (w-4 h-4)
  - Background: #3B82F6
  - Border Radius: 50%
  - Appearance: none
```

### Toggle Switch

```
Container:
  - Width: 48px (w-12)
  - Height: 24px (h-6)
  - Background: #3B82F6 (on) / #1E293B (off)
  - Border Radius: 9999px
  - Position: relative

Thumb:
  - Size: 16px × 16px (w-4 h-4)
  - Background: #FFFFFF
  - Border Radius: 50%
  - Position: absolute
  - Top: 4px
  - Right: 4px (on) / Left: 4px (off)
  - Transition: transform 200ms
```

---

## 📱 Screen-by-Screen Specifications

## 1. Dashboard Screen

### Layout Structure

```
Container: 390px width
Background: #0F172A

Components (top to bottom):
1. Top Navigation (56px)
2. Main Content (scrollable, pb-80px for bottom nav)
3. Bottom Navigation (64px, fixed)
```

### Main Content Padding & Spacing

```
Container Padding:    16px (p-4)
Component Gap:        16px (space-y-4)
```

### Component Breakdown

**1. Top Nav**

- See "Top Navigation Bar" specs above

**2. Discipline Score Card**

```
Width:                358px (100% - 32px padding)
Height:               Auto
Background:           #1E293B
Border:               1px solid #1E293B
Border Radius:        8px
Padding:              24px
Shadow:               lg
Margin Bottom:        16px

Content:
  - Label: "Discipline Score"
    - Font: 14px Regular
    - Color: #94A3B8
    - Margin Bottom: 8px

  - Score: "78%"
    - Font: 48px Bold
    - Color: #E2E8F0
    - Margin Bottom: 8px

  - Change: "+5% from last week"
    - Font: 12px Regular
    - Color: #22C55E
```

**3. Stats Grid**

```
Grid Container:
  - Display: Grid
  - Columns: 2
  - Gap: 16px
  - Margin Bottom: 16px

Each Stat Card:
  - Width: 171px (50% - 8px gap)
  - Height: Auto
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Padding: 16px
  - Shadow: md

Card Content:
  - Label:
    - Font: 12px Regular
    - Color: #94A3B8
    - Margin Bottom: 8px

  - Value:
    - Font: 24px Medium
    - Color: #E2E8F0

Stats Data:
  1. Total Trades: 156
  2. Win Rate: 64%
  3. Current Streak: 5W
  4. Best Pair: EUR/USD
```

**4. Equity Curve Section**

```
Container:
  - Width: 358px
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Padding: 16px
  - Shadow: md
  - Margin Bottom: 16px

Header:
  - Text: "Equity Curve"
  - Font: 14px Regular
  - Color: #E2E8F0
  - Margin Bottom: 12px

Chart Placeholder:
  - Height: 160px (h-40)
  - Background: #0F172A
  - Border: 1px solid #0F172A
  - Border Radius: 8px
  - Content: "[Chart Placeholder]"
  - Font: 12px Regular
  - Color: #94A3B8
  - Centered
```

**5. Recent Trades Section**

```
Container:
  - Width: 358px
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Padding: 16px
  - Shadow: md

Header:
  - Text: "Recent Trades"
  - Font: 14px Regular
  - Color: #E2E8F0
  - Margin Bottom: 12px

Trade Cards List:
  - Gap: 8px (space-y-2)

Each Trade Card:
  - Width: 100%
  - Background: #0F172A
  - Border: 1px solid #0F172A
  - Border Radius: 8px
  - Padding: 12px
  - Layout: Flex row, space-between

  Left Content:
    - Pair Name:
      - Font: 14px Medium
      - Color: #E2E8F0
      - Margin Bottom: 4px

    - R-Multiple:
      - Font: 12px Regular
      - Color: #22C55E (win) / #EF4444 (loss)

  Right Content:
    - Date:
      - Font: 12px Regular
      - Color: #94A3B8

Trade Data:
  1. EUR/USD, +2.3R, Feb 20
  2. GBP/JPY, +1.8R, Feb 19
  3. USD/CAD, -1.0R, Feb 18
```

**6. Bottom Nav**

- See "Bottom Navigation Bar" specs above

---

## 2. Add Trade Screen

### Layout Structure

```
Container: 390px width
Background: #0F172A

Components:
1. Header Bar (56px, fixed top)
2. Form Content (scrollable, pb-96px)
3. Submit Button Bar (fixed bottom, 80px total height)
```

### Header Bar

```
Height:               56px
Background:           #0F172A
Border Bottom:        1px solid #1E293B
Padding:              0 16px
Layout:               Flex row, align center

Back Arrow:
  - Icon: ArrowLeft
  - Size: 20px × 20px (w-5 h-5)
  - Color: #E2E8F0
  - Margin Right: 12px

Title:
  - Text: "Add Trade"
  - Font: 16px Medium
  - Color: #E2E8F0
```

### Form Container

```
Padding:              16px (p-4)
Gap:                  16px (space-y-4)
Padding Bottom:       96px (for fixed button)
```

### Form Fields

**1. Pair Input**

```
Label:
  - Text: "Pair"
  - Font: 14px Regular
  - Color: #E2E8F0
  - Margin Bottom: 8px

Input:
  - Type: text
  - Placeholder: "e.g. EUR/USD"
  - Width: 100%
  - Height: 48px
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Padding: 12px 16px
  - Font: 14px Regular
  - Color: #E2E8F0
  - Placeholder Color: #94A3B8
```

**2. Direction Toggle**

```
Label:
  - Text: "Direction"
  - Font: 14px Regular
  - Color: #E2E8F0
  - Margin Bottom: 8px

Button Group:
  - Layout: Flex row
  - Gap: 8px

Buy Button (Active):
  - Width: 50%
  - Height: 48px
  - Background: #3B82F6
  - Border: 1px solid #3B82F6
  - Border Radius: 8px
  - Font: 14px Medium
  - Color: #FFFFFF

Sell Button (Inactive):
  - Width: 50%
  - Height: 48px
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Font: 14px Medium
  - Color: #E2E8F0
```

**3. Entry Input**

```
Label: "Entry"
Input: Same specs as Pair Input
Placeholder: "0.00000"
```

**4. Stop Loss Input**

```
Label: "Stop Loss"
Input: Same specs as Pair Input
Placeholder: "0.00000"
```

**5. Take Profit Input**

```
Label: "Take Profit"
Input: Same specs as Pair Input
Placeholder: "0.00000"
```

**6. Result Toggle (3 buttons)**

```
Label:
  - Text: "Result"
  - Font: 14px Regular
  - Color: #E2E8F0
  - Margin Bottom: 8px

Button Group:
  - Layout: Flex row
  - Gap: 8px

Win Button:
  - Width: 33.33%
  - Height: 48px
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Font: 14px Medium
  - Color: #E2E8F0
  - Hover Border: #22C55E
  - Hover Color: #22C55E

Loss Button:
  - Same as Win Button
  - Hover Border: #EF4444
  - Hover Color: #EF4444

BE Button:
  - Same as Win Button
  - Hover Border: #94A3B8
```

**7. Setup Type Dropdown**

```
Label: "Setup Type"
Select: Same specs as text input
Options:
  - Select setup type
  - Breakout
  - Support/Resistance
  - Trend Following
  - Reversal
```

**8. Emotion Before Dropdown**

```
Label: "Emotion Before"
Select: Same specs as text input
Options:
  - Select emotion
  - Confident
  - Neutral
  - Anxious
  - FOMO
```

**9. Emotion After Dropdown**

```
Label: "Emotion After"
Select: Same specs as text input
Options:
  - Select emotion
  - Satisfied
  - Neutral
  - Frustrated
  - Regretful
```

**10. Screenshot Upload**

```
Label: "Screenshot"

Upload Area:
  - Width: 100%
  - Height: Auto
  - Background: #1E293B
  - Border: 2px dashed #1E293B
  - Border Radius: 8px
  - Padding: 32px (p-8)
  - Layout: Flex column, centered
  - Gap: 8px

  Icon:
    - Upload icon
    - Size: 32px × 32px
    - Color: #94A3B8

  Text:
    - "Upload screenshot"
    - Font: 14px Regular
    - Color: #94A3B8
```

**11. Notes Textarea**

```
Label: "Notes"

Textarea:
  - Width: 100%
  - Rows: 4
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Padding: 12px 16px
  - Font: 14px Regular
  - Color: #E2E8F0
  - Placeholder: "Add any notes about this trade..."
  - Placeholder Color: #94A3B8
  - Resize: none
```

### Submit Button Bar

```
Position:             Fixed bottom
Width:                390px
Height:               80px (16px padding + 48px button + 16px padding)
Background:           #1E293B
Border Top:           1px solid #0F172A
Padding:              16px (p-4)
Shadow:               lg

Button:
  - Width: 100%
  - Height: 48px
  - Background: #3B82F6
  - Border Radius: 8px
  - Font: 14px Medium
  - Color: #FFFFFF
  - Text: "Save Trade"
  - Hover Background: #2563EB
```

---

## 3. History Screen

### Layout Structure

```
Container: 390px width
Background: #0F172A

Components:
1. Header Bar (56px)
2. Filter Section (Auto height, collapsible)
3. Trade Cards List (scrollable, pb-80px)
4. Bottom Navigation (64px, fixed)
```

### Header Bar

```
Height:               56px
Background:           #0F172A
Border Bottom:        1px solid #1E293B
Padding:              0 16px
Layout:               Flex row, space-between, align center

Title:
  - Text: "Trade History"
  - Font: 16px Medium
  - Color: #E2E8F0

Filter Icon:
  - Size: 20px × 20px (w-5 h-5)
  - Color: #94A3B8
  - In 32px × 32px button
```

### Filter Section

```
Background:           #0F172A
Border Bottom:        1px solid #1E293B
Padding:              16px (p-4)
Gap:                  12px (space-y-3)

1. Pair Dropdown:
  - Width: 100%
  - Height: 40px (py-2)
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Padding: 8px 16px
  - Font: 14px Regular
  - Color: #E2E8F0

2. Result Filter Buttons:
  - Layout: Flex row
  - Gap: 8px

  All Button (Active):
    - Width: 33.33%
    - Height: 32px
    - Background: #3B82F6
    - Border: 1px solid #3B82F6
    - Border Radius: 8px
    - Font: 12px Medium
    - Color: #FFFFFF

  Win/Loss Buttons (Inactive):
    - Same dimensions
    - Background: #1E293B
    - Border: 1px solid #1E293B
    - Color: #E2E8F0

3. Date Range Inputs:
  - Layout: Flex row
  - Gap: 8px

  Each Input:
    - Width: 50%
    - Height: 36px (py-2)
    - Background: #1E293B
    - Border: 1px solid #1E293B
    - Border Radius: 8px
    - Padding: 8px 12px
    - Font: 12px Regular
    - Color: #E2E8F0
    - Placeholder Color: #94A3B8
```

### Trade Cards List

```
Container Padding:    16px (p-4)
Gap:                  12px (space-y-3)
Padding Bottom:       80px
```

### Trade Card (Collapsed)

```
Width:                358px
Background:           #1E293B
Border:               1px solid #1E293B
Border Radius:        8px
Shadow:               md
Overflow:             hidden

Button (for expansion):
  - Width: 100%
  - Padding: 16px (p-4)
  - Text Align: left
  - Hover Background: #0F172A

Top Row:
  - Layout: Flex row, space-between
  - Margin Bottom: 8px

  Left Content:
    - Pair Name:
      - Font: 16px Medium
      - Color: #E2E8F0
      - Margin Bottom: 4px

    - Direction:
      - Font: 12px Regular
      - Color: #94A3B8

  Right Content (flex row, gap 8px):
    - Result:
      - Font: 16px Medium
      - Color: #22C55E (win) / #EF4444 (loss)

    - Chevron Icon:
      - Size: 16px × 16px (w-4 h-4)
      - Color: #94A3B8

Bottom Row:
  - Layout: Flex row, space-between, align center

  Setup Tag:
    - Background: #0F172A
    - Border: 1px solid #0F172A
    - Border Radius: 9999px
    - Padding: 4px 12px
    - Font: 10px Regular
    - Color: #94A3B8

  Date:
    - Font: 12px Regular
    - Color: #94A3B8
```

### Trade Card (Expanded)

```
Expanded Details Section:
  - Border Top: 1px solid #0F172A
  - Background: #0F172A
  - Padding: 16px (p-4)
  - Gap: 12px (space-y-3)

1. Entry Details Grid:
  - Display: Grid
  - Columns: 3
  - Gap: 12px

  Each Cell:
    - Label:
      - Font: 10px Regular
      - Color: #94A3B8
      - Margin Bottom: 4px

    - Value:
      - Font: 12px Medium
      - Color: #E2E8F0

  Fields: Entry, Stop Loss, Take Profit

2. Emotions Grid:
  - Display: Grid
  - Columns: 2
  - Gap: 12px

  Each Cell (same styling as Entry Details)
  Fields: Emotion Before, Emotion After

3. Screenshot Placeholder:
  - Label:
    - Font: 10px Regular
    - Color: #94A3B8
    - Margin Bottom: 4px

  - Placeholder:
    - Height: 128px
    - Background: #1E293B
    - Border: 1px solid #1E293B
    - Border Radius: 8px
    - Content: "[Chart Image]"
    - Font: 12px Regular
    - Color: #94A3B8
    - Centered

4. Notes Section:
  - Label:
    - Font: 10px Regular
    - Color: #94A3B8
    - Margin Bottom: 4px

  - Text:
    - Font: 12px Regular
    - Color: #E2E8F0
    - Line Height: 1.5
```

---

## 4. Analytics Screen

### Layout Structure

```
Container: 390px width
Background: #0F172A

Components:
1. Header Bar (56px)
2. Summary Stats Row (auto)
3. Chart Sections (scrollable, pb-80px)
4. Bottom Navigation (64px, fixed)
```

### Header Bar

```
Height:               56px
Background:           #0F172A
Border Bottom:        1px solid #1E293B
Padding:              0 16px
Layout:               Flex row, align center

Title:
  - Text: "Analytics"
  - Font: 16px Medium
  - Color: #E2E8F0
```

### Summary Stats Row

```
Container:
  - Padding: 16px (p-4)
  - Display: Grid
  - Columns: 3
  - Gap: 12px

Each Stat Card:
  - Width: 110px (33.33% - gap)
  - Height: Auto
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Padding: 12px (p-3)
  - Shadow: md

Card Content:
  - Label:
    - Font: 10px Regular
    - Color: #94A3B8
    - Margin Bottom: 4px

  - Value:
    - Font: 20px Medium
    - Color: #E2E8F0 (or #22C55E for Win Rate)

Stats:
  1. Total Trades: 127
  2. Win Rate: 64% (green)
  3. Average RR: 1.8
```

### Chart Sections (repeating pattern)

```
Container Padding:    0 16px 16px 16px
Each Section Margin:  0 0 16px 0

Chart Card:
  - Width: 358px
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Shadow: md
  - Overflow: hidden

Header:
  - Padding: 16px (p-4)
  - Border Bottom: 1px solid #0F172A

  - Title:
    - Font: 14px Medium
    - Color: #E2E8F0

Chart Content:
  - Padding: 16px (p-4)

  - Chart Placeholder:
    - Height: 192px (h-48)
    - Background: #0F172A
    - Border: 1px solid #0F172A
    - Border Radius: 8px
    - Content: "[Chart Type]"
    - Font: 12px Regular
    - Color: #94A3B8
    - Centered

Sections (in order):
  1. Equity Curve - [Line Chart]
  2. Win/Loss Distribution - [Pie Chart]
  3. Emotion Breakdown - [Bar Chart]
  4. Pair Performance - [Horizontal Bar Chart]
```

---

## 5. Settings Screen

### Layout Structure

```
Container: 390px width
Background: #0F172A

Components:
1. Header Bar (56px)
2. Settings Content (scrollable, pb-80px)
3. Bottom Navigation (64px, fixed)
```

### Header Bar

```
Height:               56px
Background:           #0F172A
Border Bottom:        1px solid #1E293B
Padding:              0 16px
Layout:               Flex row, align center

Title:
  - Text: "Settings"
  - Font: 16px Medium
  - Color: #E2E8F0
```

### Settings Content

```
Padding:              16px (p-4)
Padding Bottom:       80px
```

### User Profile Section

```
Container:
  - Width: 358px
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Padding: 16px (p-4)
  - Shadow: md
  - Margin Bottom: 16px

Profile Row:
  - Layout: Flex row
  - Gap: 12px
  - Margin Bottom: 16px

  Avatar:
    - Size: 64px × 64px (w-16 h-16)
    - Border: 2px solid #3B82F6
    - Border Radius: 50%
    - Background: #0F172A
    - Content: User icon
      - Size: 32px × 32px (w-8 h-8)
      - Color: #3B82F6

  User Info:
    - Name:
      - Font: 14px Medium
      - Color: #E2E8F0
      - Margin Bottom: 4px

    - Email:
      - Font: 12px Regular
      - Color: #94A3B8

Edit Profile Button:
  - Width: 100%
  - Height: 32px
  - Background: #0F172A
  - Border: 1px solid #3B82F6
  - Border Radius: 8px
  - Font: 12px Medium
  - Color: #E2E8F0
  - Hover Background: #3B82F6
  - Hover Color: #FFFFFF
```

### Settings Sections (repeating pattern)

```
Each Section:
  - Margin Bottom: 16px

Section Header:
  - Font: 12px Medium
  - Color: #94A3B8
  - Padding: 0 8px
  - Margin Bottom: 8px
  - Letter Spacing: 0.05em (tracking-wide)

Section Card:
  - Width: 358px
  - Background: #1E293B
  - Border: 1px solid #1E293B
  - Border Radius: 8px
  - Shadow: md
  - Overflow: hidden
```

### Settings Row (with chevron)

```
Button:
  - Width: 100%
  - Padding: 16px (p-4)
  - Border Bottom: 1px solid #0F172A (except last)
  - Layout: Flex row, space-between, align center
  - Text Align: left
  - Hover Background: #0F172A

Left Content:
  - Primary Text:
    - Font: 14px Regular
    - Color: #E2E8F0
    - Margin Bottom: 4px (if has secondary text)

  - Secondary Text (optional):
    - Font: 12px Regular
    - Color: #94A3B8

Right Content:
  - Chevron Icon:
    - Size: 16px × 16px (w-4 h-4)
    - Color: #94A3B8
```

### Range Slider Row

```
Container:
  - Padding: 16px (p-4)
  - Border Bottom: 1px solid #0F172A (except last)

Header Row:
  - Layout: Flex row, space-between, align center
  - Margin Bottom: 8px

  Label:
    - Font: 14px Regular
    - Color: #E2E8F0

  Value:
    - Font: 14px Medium
    - Color: #3B82F6

Slider:
  - Width: 100%
  - Height: 8px (track)
  - Track Background: #0F172A
  - Track Border Radius: 9999px
  - Thumb Size: 16px × 16px
  - Thumb Background: #3B82F6
  - Thumb Border Radius: 50%
```

### Toggle Row

```
Container:
  - Padding: 16px (p-4)
  - Border Bottom: 1px solid #0F172A (except last)
  - Layout: Flex row, space-between, align center

Label:
  - Font: 14px Regular
  - Color: #E2E8F0

Toggle Switch:
  - Width: 48px (w-12)
  - Height: 24px (h-6)
  - Background: #3B82F6 (on) / #1E293B (off)
  - Border Radius: 9999px
  - Position: relative

  Thumb:
    - Size: 16px × 16px (w-4 h-4)
    - Background: #FFFFFF
    - Border Radius: 50%
    - Position: absolute
    - Top: 4px
    - Right: 4px (on) / Left: 4px (off)
```

### Logout Button

```
Container Padding:    0 16px 16px 16px
Margin Top:           16px (pt-4 additional)

Button:
  - Width: 100%
  - Height: 48px (py-3)
  - Background: #0F172A
  - Border: 1px solid #EF4444
  - Border Radius: 8px
  - Font: 14px Medium
  - Color: #EF4444
  - Hover Background: #EF4444
  - Hover Color: #FFFFFF
  - Transition: all 200ms
```

### Settings Sections Content

**Account Section:**

- Subscription Plan → "Free Plan"
- Upgrade to Pro (text in #3B82F6)
- Change Password

**Trading Preferences Section:**

- Default Risk % (Slider: 0.5% - 5%, current: 1.5%)
- Default RR Ratio (Slider: 1:1 - 5:1, current: 2:1)

**App Settings Section:**

- Dark Mode (Toggle: ON)
- Notifications (Toggle: ON)

---

## 🎯 Interactive States

### Hover States

```
Buttons:              Transition 200ms
  - Primary: Background lightens to #2563EB
  - Secondary: Border changes to #3B82F6
  - Icons: Opacity reduces to 80%

Links/Cards:          Transition 200ms
  - Background: Changes to #0F172A
  - Opacity: Reduces to 80%
```

### Focus States

```
Inputs/Selects:
  - Outline: none
  - Ring: 2px solid #3B82F6
  - Transition: all 200ms
```

### Active States

```
Buttons:
  - Scale: 0.98
  - Transition: transform 100ms
```

### Disabled States

```
Opacity: 50%
Cursor: not-allowed
```

---

## 📏 Spacing Reference

### Component Spacing

```
Section to Section:   16px
Card to Card:         16px (horizontal), 12px (vertical lists)
Form Field to Field:  16px
Label to Input:       8px
Icon to Text:         8px-12px
Grid Gap:             16px (large), 12px (small), 8px (tight)
```

### Internal Padding

```
Cards:                16px (standard), 24px (hero)
Buttons:              12px vertical, 16px horizontal
Inputs:               12px vertical, 16px horizontal
Sections:             16px all sides
Chart Containers:     16px all sides
```

---

## 🖼️ Icon Specifications

### Icon Library

- **Source:** Lucide React
- **Style:** Outline/Stroke based
- **Stroke Width:** 2px

### Icon Sizes

```
Extra Large:          32px × 32px (w-8 h-8) - Upload areas
Large:                24px × 24px (w-6 h-6) - Emphasized nav button
Medium:               20px × 20px (w-5 h-5) - Regular nav items, header icons
Small:                16px × 16px (w-4 h-4) - Small icons, user avatar icon, chevrons
```

### Icon Colors

```
Primary:              #E2E8F0 (when on dark backgrounds)
Secondary:            #94A3B8 (subtle/inactive)
Active:               #FFFFFF (on colored backgrounds)
Accent:               #3B82F6 (user profile, emphasized)
Success:              #22C55E
Error:                #EF4444
```

### Icons Used

```
Navigation:
  - LayoutDashboard (Dashboard)
  - Plus (Add Trade)
  - History (History)
  - BarChart3 (Analytics)
  - Settings (Settings)

Actions:
  - ArrowLeft (Back navigation)
  - Upload (File upload)
  - Filter (Filters)
  - ChevronDown (Collapsed state)
  - ChevronUp (Expanded state)
  - ChevronRight (Navigation indicator)
  - User (Profile/Avatar)
```

---

## 📊 Data Display Guidelines

### Currency Pairs

```
Format:               EUR/USD, GBP/JPY, XAUUSD
Font:                 14px-16px Medium
Color:                #E2E8F0
```

### R-Multiples (Win/Loss)

```
Format:               +2.3R, -1.0R
Font:                 12px-16px Medium/Regular
Color:                #22C55E (positive), #EF4444 (negative)
Prefix:               Always show + or -
```

### Percentages

```
Format:               64%, +5%
Font:                 12px-48px (context dependent)
Color:                #22C55E (positive), #EF4444 (negative), #E2E8F0 (neutral)
```

### Dates

```
Format:               Feb 20, 2026 (short)
                      Feb 20 (shorter)
Font:                 12px Regular
Color:                #94A3B8
```

### Numbers (General)

```
Format:               127, 1.8, 156
Font:                 20px-48px Medium/Bold
Color:                #E2E8F0
```

---

## ✅ Figma Build Checklist

### Frame Setup

- [ ] Create iPhone 14 frame (390 × 844px)
- [ ] Set background to #0F172A
- [ ] Enable clipping content

### Color Styles

- [ ] Create color styles for all colors in palette
- [ ] Name with semantic names (e.g., "bg-primary", "text-primary")

### Text Styles

- [ ] Create text styles for each size/weight combination
- [ ] Name systematically (e.g., "body-sm-regular", "heading-base-medium")

### Component Creation

- [ ] Top Navigation component
- [ ] Bottom Navigation component
- [ ] Card components (standard, hero, stat)
- [ ] Button components (all variants)
- [ ] Input components (text, select, textarea)
- [ ] Toggle components (2-way, 3-way)
- [ ] Trade card component (collapsed/expanded states)
- [ ] Chart placeholder component

### Auto Layout

- [ ] Use Auto Layout for all flexible containers
- [ ] Set proper padding and gaps
- [ ] Configure resizing behaviors (Fixed, Fill, Hug)

### Constraints

- [ ] Set top navigation to fixed top
- [ ] Set bottom navigation to fixed bottom
- [ ] Set scrolling on main content areas

### Prototyping

- [ ] Link bottom nav buttons to respective screens
- [ ] Add back button interactions
- [ ] Add expand/collapse interactions for History cards
- [ ] Add button hover states
- [ ] Add input focus states
- [ ] Set initial frame (Dashboard)

### Export Settings

- [ ] Prepare 1x, 2x, 3x exports for production
- [ ] Set up slice exports for icons if needed

---

## 📝 Notes for Figma Implementation

### Using the 8px Grid

1. Enable 8px grid in Figma (View → Layout Grids)
2. Snap all elements to 8px increments
3. Use 4px for micro-adjustments only when necessary

### Shadows

1. Create layer styles for "shadow-md" and "shadow-lg"
2. Apply consistently to all cards and elevated elements
3. Shadows should be subtle (low opacity black)

### Typography

1. Use San Francisco font (iOS system font)
2. If not available, use Inter or SF Pro Display
3. Maintain consistent line-heights across all text

### Components

1. Create components for repeated elements
2. Use variants for different states (hover, active, disabled)
3. Name components clearly and organize in library

### Responsive Behavior

1. While fixed at 390px, use Auto Layout for flexibility
2. This will help if you later need to adapt for different sizes

### Accessibility

1. Ensure contrast ratios meet WCAG AA standards
2. Text on #0F172A background should be #E2E8F0 minimum
3. Test readability in low light conditions

---

## 🎨 Quick Reference Color Swatches

Copy these hex codes directly into Figma:

**Backgrounds:**

- #0F172A
- #1E293B

**Accents:**

- #3B82F6
- #2563EB (hover)
- #22C55E
- #EF4444

**Text:**

- #E2E8F0
- #94A3B8
- #FFFFFF

---

## 📐 Quick Reference Measurements

**Common Heights:**

- Top/Header Bar: 56px
- Bottom Nav: 64px
- Buttons: 48px (primary), 32px (small)
- Inputs: 48px
- Cards: Auto (hug content)

**Common Widths:**

- Container: 390px
- Full Width Elements: 358px (100% - 32px padding)
- Half Width (in grid): 171px

**Common Padding:**

- Screen Padding: 16px
- Card Padding: 16px (standard), 24px (hero)
- Button Padding: 12px vertical, 16px horizontal

**Common Gaps:**

- Section Gap: 16px
- Grid Gap: 16px (large), 12px (standard), 8px (tight)
- Button Group Gap: 8px

---

## 🚀 Getting Started in Figma

1. **Create a new file** named "TradeJournal Design System"

2. **Set up pages:**
   - Design System (components, colors, typography)
   - Screens (5 screens)
   - Prototypes

3. **Start with the Design System page:**
   - Create all color styles
   - Create all text styles
   - Build base components

4. **Build screens in this order:**
   - Dashboard (most representative)
   - Add Trade
   - History
   - Analytics
   - Settings

5. **Add prototyping:**
   - Connect bottom nav
   - Add interactions
   - Set up overlays if needed

6. **Test the prototype:**
   - Use Figma Mirror on iPhone
   - Check interactions
   - Verify measurements

7. **Export:**
   - Create shareable link
   - Export assets if needed
   - Document any special interactions

---

**End of Specifications**

Version 1.0 - Created March 2, 2026
