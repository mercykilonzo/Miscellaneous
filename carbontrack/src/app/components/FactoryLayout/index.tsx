import FactorySidebar from "../../sharedComponents/FactorySidebar"

export default function FactoryLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body>
        <div className="flex">
          <FactorySidebar/>
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
