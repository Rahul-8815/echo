# ECHO - Open-Access Mental Health & Community Support Platform

[![Next.js](https://img.shields.io/badge/Next.js-16+-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=flat&logo=mongodb)](https://www.mongodb.com/)
[![Upstash Redis](https://img.shields.io/badge/Upstash%20Redis-Ultra--Fast-red?style=flat&logo=redis)](https://upstash.com/)
[![Vercel Blob](https://img.shields.io/badge/Vercel%20Blob-Media%20Storage-black?style=flat&logo=vercel)](https://vercel.com/blob)
[![Gemini AI](https://img.shields.io/badge/Google%20Gemini-Flash-blue?style=flat&logo=google)](https://deepmind.google/technologies/gemini/)
[![Tavily Search](https://img.shields.io/badge/Tavily-AI%20Grounding-purple?style=flat)](https://tavily.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Live Demo**: [https://echo-liart-theta.vercel.app/](https://echo-liart-theta.vercel.app/)

ECHO is a modern, open-access mental health sanctuary engineered to provide a compassionate, secure space for individuals seeking clinical guidance, peer support, and digital relaxation. ECHO combines high-end emotional wellness tools, multi-layer AI safety moderation, real-time presence tracking, and media streaming at zero cost to users.

---

## 🌟 Key Features

### 🛡️ AI Message Moderation & 3-Strike Safety Policy
- **Multi-Layer Moderation Engine**: Screens helper (volunteer/doctor) messages in real time using:
  1. **Instant Lexical & Semantic Malice Rules (`<1ms`)**: Detects explicit profanity, slurs, fatal disease/cancer wishes, and existential demoralization (e.g., *"your life is a curse"*, *"you are a burden"*, *"teri zindagi ek shraap hai"*).
  2. **Google Gemini Flash**: Deep intent and subtext analysis against clinical and emotional safety guidelines.
  3. **Tavily AI Search Grounding**: Verifies hazardous medical claims or ambiguous toxic phrases against live medical consensus.
- **Automated 3-Strike Enforcement**:
  - **1st Strike**: Message blocked + 1st warning issued.
  - **2nd Strike**: Message blocked + 2nd warning issued.
  - **3rd Strike**: Message blocked + Helper account automatically suspended (`isBanned: true`).
- **Appeals Workflow**: Suspended users can submit review requests directly through `/api/appeals`.

### ⚡ Upstash Redis High-Performance Engine
- **Sub-10ms Micro-Caching**: Accelerated response times across volunteer directories, user profiles, community posts, leaderboards, mood history, and daily tasks.
- **Live Presence Heartbeats**: Redis Sorted Sets (`presence:online_users`) power real-time online/offline presence tracking for doctors and peer supporters.
- **Instant Directory Filtering**: Filter peer supporters and doctors by All, 🟢 Online, ⚪ Offline, or ⭐ Saved with live name/bio search.

### 📸 Vercel Blob Storage & Community Media Streamer
- **Private Media Storage**: High-speed, secure uploads for community photos (up to 15MB) and videos (up to 50MB) via Vercel Blob.
- **Byte-Range Streaming (`HTTP 206 Partial Content`)**: Smooth video playback with instant scrubbing, seeking, and responsive buffering.
- **Auto-Purge Cleanup**: Media attachments are automatically deleted from Vercel Blob storage whenever a post is deleted.

### 🩺 Professional Handshake & Peer Support
- **WhatsApp Handshake**: Secure request-and-accept workflow connecting patients with licensed medical practitioners while maintaining strict privacy boundaries.
- **Verified Peer Counseling**: Direct one-on-one messaging with approved peer supporters for everyday mental health guidance.
- **Application Portal**: Multilingual international application forms (`/apply/volunteer`, `/apply/doctor`) with country code search and status verification (`/apply/status`).

### 🤖 24/7 AI Companion & Wellness Suite
- **Empathetic AI Friend**: Powered by Google Gemini for active listening, validation, and therapeutic grounding.
- **AI Exercise Trainer**: Tailored workouts, stretching routines, and mindfulness sessions generated via Groq (Llama 3.3).
- **AI Facial Mood Scanner**: In-browser facial emotion detection (Happy, Sad, Depressed, Tired) using `@vladmandic/face-api` via webcam or photo uploads.
- **Sensory Games & Relaxation Sanctuary**:
  - Interactive calming mini-games: Star Gazer, Breathing Guide, and Bubble Pop.
  - Relaxation audio soundscapes (white/pink noise, binaural beats) and digital books library.

### 🌌 Dynamic Room Themes
- 5 interactive mood aesthetics with fluid glassmorphic styling:
  - 🌌 **Celestial Twilight**
  - 🌲 **Deep Forest Sanctuary**
  - 🌅 **Amber Serenity**
  - 🌊 **Deep Ocean Calm**
  - ✨ **Northern Lights**

---

## 🏗️ Project Structure

```text
echo/
├── app/                        # Next.js App Router (46 routes)
│   ├── (auth)/                 # Clerk authentication (sign-in / sign-up)
│   ├── api/                    # Backend API Endpoints
│   │   ├── admin/              # User management & metrics
│   │   ├── ai-companion/       # Gemini AI conversational agent
│   │   ├── appeals/            # Strike ban appeals
│   │   ├── apply/              # Volunteer and doctor applications
│   │   ├── blob/               # Vercel Blob upload & streaming proxy
│   │   ├── chat/               # Real-time chat & notifications with 3-strike moderation
│   │   ├── connections/        # Professional WhatsApp handshake
│   │   ├── exercise-trainer/   # Groq-powered workout recommendations
│   │   ├── leaderboard/        # Community impact rankings
│   │   ├── mood/               # Daily mood entries & analytics
│   │   ├── posts/              # Community posts (Redis cached + Blob media)
│   │   ├── tasks/              # Daily wellness tasks
│   │   ├── users/              # Presence heartbeats & profiles
│   │   └── volunteers/         # Helper directory with live presence
│   ├── apply/                  # Volunteer and Doctor application forms
│   ├── charity/                # Mental health initiatives & transparency
│   ├── chat/                   # Real-time messaging interface
│   ├── community/              # Community feed with photo/video playback
│   ├── companion/              # 24/7 AI companion interface
│   ├── dashboard/              # Role-based dashboards (User, Doctor, Volunteer, Admin)
│   ├── doctors/                # Clinical directory with WhatsApp connection
│   ├── games/                  # Sensory relaxation mini-games
│   ├── leaderboard/            # Community leaderboard
│   ├── mood-tracker/           # Mood tracker, camera AI detection, and history
│   ├── relaxation/             # Soundscapes, meditations, and book library
│   ├── role-selection/         # Role onboarding
│   ├── roles-overview/         # Platform permissions overview
│   └── volunteers/             # Peer supporter directory
├── components/                 # Reusable React & UI Components
│   ├── games/                  # StarGazer, Breathing, BubblePop
│   ├── mood/                   # FaceMoodDetector (@vladmandic/face-api)
│   ├── ui/                     # Shadcn / Radix UI design primitives
│   ├── Navbar.tsx              # Universal navigation bar
│   ├── PhoneInput.tsx          # Country code selector with flags
│   ├── BanAppealBanner.tsx     # Account suspension & appeal modal
│   └── ThemeToggle.tsx         # Theme switcher
├── hooks/                      # Custom React hooks (useMobile, useVoice)
├── lib/                        # Core Utilities & Services
│   ├── blob.ts                 # Vercel Blob upload, delete & streaming helpers
│   ├── redis.ts                # Upstash Redis caching & presence engine
│   ├── moderation.ts           # Multi-layer safety engine (Regex + Gemini + Tavily)
│   ├── mongodb.ts              # MongoDB Atlas connection manager (cached)
│   ├── countries.ts            # Global dial codes & country flags dataset
│   └── models/                 # Mongoose Schemas (User, Post, Chat, Appeal, MoodLog, Task)
├── proxy.ts                    # Clerk authentication proxy middleware
├── eslint.config.mjs           # ESLint 9 Flat Config
└── next.config.ts              # Next.js configuration
```

---

## 🛠️ Technology Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16+ (Turbopack, App Router)](https://nextjs.org/) |
| **Language & Types** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism Tokens |
| **Component Library** | [Radix UI](https://www.radix-ui.com/) / [shadcn/ui](https://ui.shadcn.com/) |
| **Authentication** | [Clerk](https://clerk.com/) (`@clerk/nextjs`) |
| **Database** | [MongoDB Atlas](https://www.mongodb.com/) via [Mongoose 9](https://mongoosejs.com/) |
| **Caching & Real-Time Presence** | [Upstash Redis](https://upstash.com/) (`@upstash/redis`) |
| **Media Storage** | [Vercel Blob](https://vercel.com/blob) (`@vercel/blob`) |
| **AI Safety & Companion** | [Google Gemini Flash](https://deepmind.google/technologies/gemini/) (`@google/generative-ai`) |
| **AI Search & Verification** | [Tavily Search API](https://tavily.com/) (`@tavily/core`) |
| **AI Exercise Coaching** | [Groq](https://groq.com/) (Llama 3.3 70B) |
| **Facial Emotion Recognition** | [@vladmandic/face-api](https://github.com/vladmandic/face-api) (TensorFlow.js) |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Rahul-8815/echo.git
cd echo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Database (MongoDB Atlas)
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?appName=Cluster0
MONODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?appName=Cluster0

# Upstash Redis (Caching & Real-Time Presence)
UPSTASH_REDIS_REST_URL="https://your-redis-instance.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your_upstash_redis_token"
REDIS_URL="rediss://default:your_token@your-redis-instance.upstash.io:6379"

# Vercel Blob Storage (Community Photos & Videos)
BLOB_STORE_ID="store_..."
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_..."

# AI APIs
GEMINI_API_KEY=AIzaSy...
TAVILYSEARCH_API_KEY=tvly-dev-...
GROQ_API_KEY=gsk_...
OPENAI_API_KEY=sk-proj-...

# Admin Security
ADMIN_TOKEN=your_secure_admin_secret
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the platform.

### 5. Build for Production
```bash
npm run build
```

---

## 🛡️ Safety & Clinical Privacy

ECHO operates under strict ethical guidelines for mental health and peer support:
- **Zero-Tolerance for Hostility**: AI moderation proactively catches and halts toxic content, slurs, cancer/illness wishes, and demoralizing phrases (*"your life is a curse"*) before delivery.
- **Escalated Accountability**: Helpers who violate guidelines receive automated warnings with immediate suspension upon a 3rd strike.
- **Clinical Boundaries**: WhatsApp professional connections adhere to an explicit **Request-Accept-Connect** handshake to ensure patient safety and practitioner boundaries.

---

## 🤝 Contributing

Contributions, feature suggestions, and issues are welcome! Feel free to open a PR or submit an issue on GitHub.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).

