"use client"
import React ,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Testimonial = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: true    
        });
      }, []);
    
  const testimonials = [
    {
      id: 1,
      name: "Milos Vidic",
      title: "CEO @gloatmarketing",
      avatar: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
      content:
        "Thanks to Handmade, we experienced a significant boost in website traffic, conversion rate, and website loading time. We also increased our website accessibility score and decreased the bounce rate. The service provider delivered the project on time and was highly efficient and organized. Additionally, the branding and logo design were exceptional, perfectly capturing our company's identity and leaving a lasting impression on our audience.",
      platform: "Clutch",
      rating: 5.0,
    },
    {
      id: 2,
      name: "Rasesh Seth",
      title: "CEO @nextyn",
      avatar: "https://media.gettyimages.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg",
      content:
        "Vas was extremely easy to work with. He's a pro at Webflow and is always open to hearing you out and executing exactly the way you want. I'd definitely work with him again in the future.",
      platform: "Upwork",
      rating: 5.0,
    },
    {
      id: 3,
      name: "Goran Markovic",
      title: "Founder @vizya",
      avatar: "https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg",
      content:
        "Working with Handmade on our website design was an exceptional experience. As an architect, I needed a site that not only showcased our projects beautifully but also reflected our unique design philosophy. Handmade delivered on all fronts.",
      platform: "Clutch",
      rating: 5.0,
    },
    {
      id: 4,
      name: "Chris Hjort",
      title: "PM @host",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face&auto=format",
      content:
        "I highly recommend Vasilije. He is a hard working guy with great ideas for big or small projects. Very flexible and very fast. I'm very happy I found his profile and I’ll definitely hire him again for another project!",
      platform: "Clutch",
      rating: 5.0,
    },
    {
      id: 5,
      name: "Jasper Zhang",
      title: "CEO @hyperbolic",
      avatar: "https://static.vecteezy.com/system/resources/thumbnails/035/314/037/small/ai-generated-professional-man-in-suit-standing-confidently-in-office-generative-ai-free-photo.jpg",
      content:
        "Vasilije did an outstanding job designing our website. He's highly skilled, professional, and responsive.",
      platform: "Clutch",
      rating: 5.0,
    },
    {
      id: 6,
      name: "Borgar Erlendsson",
      title: "CEO @kozmoz",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5j97QoxcuKMJvjytEP_p8PW-p_xOVOyA5Mg&s",
      content:
        "True professional capable of delivering quality work within very tight time constraints. I enjoyed receiving constructive feedback and new ideas he brought up during the design phase of my product...",
      platform: "Clutch",
      rating: 5.0,
    },
  ];

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="text-yellow-400 text-sm">★</span>
    ));

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-yellow-600/20 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
            Read what our clients are <br /> saying about us
          </h2>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t,index) => (
            <div
            data-aos="fade-up"
            data-aos-delay={index * 150}
              key={t.id}
              className="break-inside-avoid bg-[#1c1c1e] rounded-2xl p-6 border border-[#2c2c2e] shadow-md hover:bg-[#2a2a2e] transition"
            >
              {/* Avatar and Info */}
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-white text-sm">
                    {t.name}
                  </h3>
                  <p className="text-gray-400 text-xs">{t.title}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm mb-6">
                “{t.content}”
              </p>

              {/* Platform and Rating */}
              <div className="flex items-center justify-between">
                <span className="text-white text-sm font-semibold">
                  {t.platform}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-white text-sm font-medium">{t.rating}</span>
                  {renderStars(t.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
