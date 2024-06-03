# Marvel App

This project is a small web application using the Marvel API to list and show details of Marvel characters.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/marvel-app.git
   cd marvel-app
   ```

2. Check your node version is correct with nvm or by installing manually:

   ```bash
   nvm use
   ```

3. Install dependencies:

   ```bash
    yarn
   ```

4. Add the Marvel API keys to a `.env.local` file:

   ```bash
   echo "NEXT_PUBLIC_MARVEL_PUBLIC_KEY=yourpublickey" >> .env.local
   echo "NEXT_PUBLIC_MARVEL_PRIVATE_KEY=yourprivatekey" >> .env.local
   ```

5. Run the development server:
   ```bash
    yarn dev
   ```
