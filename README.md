# A.E.R.O. 
**AWS Environment Resource Observer**

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![AWS](https://img.shields.io/badge/AWS-SDK_v3-232F3E?style=for-the-badge&logo=amazon-aws)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Status](https://img.shields.io/badge/Status-Active_Development-success?style=for-the-badge)

A.E.R.O. is a sleek, serverless cloud infrastructure monitor built to track and visualize AWS telemetry in real time. 

Drawing from hands-on experience in designing and optimizing cloud infrastructure, this dashboard acts as a lightweight, agile alternative to heavy enterprise monitoring tools. It securely fetches critical metrics—such as EC2 instance health, S3 bucket storage usage, and basic billing data—using a highly optimized serverless architecture.

*Note: This repository is a milestone build for my 2026 "12 Projects in 12 Months" engineering challenge.*

---

## Architecture & Tech Stack

A.E.R.O. completely bypasses the need for a traditional monolithic backend by leveraging Next.js server-side API routes to act as a secure proxy between the client and AWS. 

* **Frontend Framework:** Next.js (App Router)
* **UI & Data Visualization:** Tailwind CSS + Tremor
* **Cloud Integration:** AWS SDK for JavaScript (v3)
* **Authentication:** NextAuth.js
* **Deployment:** Vercel (Recommended)

---

## Key Features

* **Serverless Data Pipeline:** Utilizes server-side API routes to fetch and format raw CloudWatch and EC2 metrics before delivering clean JSON payloads to the frontend.
* **Strict Security Posture:** AWS IAM credentials are tightly scoped to Read-Only access and are never exposed to the client browser. All AWS SDK executions happen server-side.
* **Non-Blocking UI:** Implements React Suspense and asynchronous data fetching to ensure the dashboard shell loads instantly while infrastructure metrics populate in real time.
* **Protected Routes:** NextAuth integration ensures that sensitive infrastructure telemetry is strictly gated behind authorized user sessions.

---

## Getting Started

### Prerequisites
* Node.js 18.x or higher
* An AWS Account with an IAM User configured for programmatic access (Read-Only permissions for EC2, S3, and CloudWatch).

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/ayushedith/aero-monitor.git](https://github.com/ayushedith/aero-monitor.git)
   cd aero-monitor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory. Add your properly scoped AWS credentials and a NextAuth secret:
   ```env
   # AWS Configuration
   AWS_REGION=us-east-1
   AWS_ACCESS_KEY_ID=your_iam_access_key
   AWS_SECRET_ACCESS_KEY=your_iam_secret_key

   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=generate_a_strong_secret_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

---

## Author

**Ayush Kumar**
* Website: [ayushx.me](https://ayushx.me)
* GitHub: [@ayushedith](https://github.com/ayushedith/aero)

---
*If you find this project interesting or helpful, feel free to drop a ⭐ on the repository!*