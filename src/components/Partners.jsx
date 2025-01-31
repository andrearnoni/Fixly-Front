import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "Partner 1",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    },
    {
      name: "Partner 2",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    },
    {
      name: "Partner 3",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    },
    {
      name: "Partner 4",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    },
    {
      name: "Partner 5",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    },
    {
      name: "Partner 6",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    },
    {
      name: "Partner 7",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    },
    {
      name: "Partner 8",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600 text-center">
          Empresas que confiam em nossos serviços
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
