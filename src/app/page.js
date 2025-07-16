import HomePageContent from "../components/HomePageContent.jsx";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-inter text-gray-900">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <HomePageContent />
      </main>
    </div>
  );
}
