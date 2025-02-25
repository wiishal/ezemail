# 🚀 Next.js Project  

Platform for Generating and Learning email writing built using Next.js, designed to help users compose emails efficiently with AI assistance.

## 🌟 Features  
- ⚡ Fast and optimized performance  
- 🎭 Server-side rendering (SSR) and static site generation (SSG)  
- 🔒 Authentication support (OAuth)  

## 🛠 Tech Stack  
- **Frontend:** Next.js 
- **Styling:** Tailwind CSS  

## 📌 Installation  
1. Clone the repository:  
   ```sh
   git clone https://github.com/wiishal/ezemail.git
   cd your-repo
   ```
2. Install dependencies:  
   ```sh
   npm install
   # or
   yarn install
   ```
3. Set up environment variables:  
   - Create a `.env.local` file in the root directory  
   - Add required variables:  
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:3000
     AUTH0_SECRET=your_secret_key
     ```
4. Run the development server:  
   ```sh
   npm run dev
   # or
   yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📡 API Routes  
This project includes API routes under `/api`. Example:  
- **`GET /api/hello`** – Returns a simple JSON response.  

## 🏗️ Project Structure  
```
/api          # API routes directory 
/components   # Reusable UI components 
/generate     # generate page
/learn        # learn page 
/type         # types
/services     # handle data fetching, API interactions
/util         # Helper functions  
```

## 🚀 Deployment  
1. Build the project:  
   ```sh
   npm run build
   ```
2. Start the production server:  
   ```sh
   npm start
   ```
3. Deploy on **Vercel**, **Netlify**, or any hosting provider.



