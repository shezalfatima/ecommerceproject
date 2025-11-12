const About = () => {
    return (
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">About ModeMuse</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2025, ModeMuse was born from a passion for empowering women through fashion. We believe that what you wear is a form of self-expression, and our mission is to provide you with curated, high-quality pieces that make you feel confident, stylish, and unstoppable.
            </p>
            <p className="text-muted-foreground">
              Our collections are thoughtfully designed in-house, blending timeless elegance with contemporary trends. We are committed to sustainable practices and ethical sourcing, ensuring that our fashion not only looks good but does good too. Join us on our journey to redefine modern style.
            </p>
          </div>
          <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1552664199-fd31f7405233?q=80&w=1974&auto=format&fit=crop"
              alt="ModeMuse Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
