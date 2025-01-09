import React from "react";
import { Users, User, Twitter, Facebook, Instagram } from "lucide-react";

interface SocialLinks {
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

interface TeamMember {
  name: string;
  role: string;
  category: "board" | "management" | "staff";
  image: string;
  social?: SocialLinks;
}

export function Team() {
  const team: TeamMember[] = [
    {
      name: "Nana Yaw Sarpong Siriboe I",
      role: "Executive Director, Akyempemhene of the Juaben Traditional Area",
      category: "management",
      image: "/images/managementTeam/NANASIRIBOE.jpg",
      social: {
        twitter: "https://twitter.com/nanayaw",
        facebook: "https://facebook.com/nanayaw",
        instagram: "https://instagram.com/nanayaw",
      },
    },
    {
      name: "Dr. Emmanuel O. Agyenim-Boateng",
      role: "Director of Administration",
      category: "management",
      image: "/images/managementTeam/Dr.Agyenim.webp",
      social: {
        twitter: "https://twitter.com/emmanuel",
        facebook: "https://facebook.com/emmanuel",
      },
    },
    {
      name: "Augustine Tetteh Opare",
      role: "Administrator/Hub Manager",
      category: "management",
      image: "/images/managementTeam/Augustine.jpg",
      social: {
        facebook: "https://facebook.com/augustine",
        instagram: "https://instagram.com/augustine",
      },
    },
    {
      name: "Olivia Ofori",
      role: "Administrative Secretary",
      category: "management",
      image: "/images/managementTeam/Olivia.jpeg",
      social: {
        twitter: "https://twitter.com/olivia",
        instagram: "https://instagram.com/olivia",
      },
    },
    {
      name: "Ebenezer Nyamekye",
      role: "General Farm Manager",
      category: "staff",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      social: {
        facebook: "https://facebook.com/ebenezer",
      },
    },
    {
      name: "James Kwadwo Bayele",
      role: "Farm Manager (Animal Husbandry)",
      category: "staff",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      social: {
        facebook: "https://facebook.com/james",
        instagram: "https://instagram.com/james",
      },
    },
    {
      name: "Barima Okyere Ampadu",
      role: "Farm Manager (Crops)",
      category: "staff",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      social: {
        twitter: "https://twitter.com/barima",
      },
    },
    {
      name: "Nana Asafo Adjei",
      role: "Liaison Officer",
      category: "staff",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      social: {
        facebook: "https://facebook.com/nanaasafo",
      },
    },
    {
      name: "Adu Asuming Francis",
      role: "Accountant",
      category: "staff",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      social: {
        twitter: "https://twitter.com/adu",
        facebook: "https://facebook.com/adu",
      },
    },
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2">
            <Users className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl montserrat-bold text-gray-900">Our Team</h2>
          </div>
          <p className="mt-4 max-w-2xl text-xl montserrat-semibold text-gray-500 mx-auto">
            Meet the dedicated professionals behind SIASD
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-16">
            {["management", "staff"].map((category) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 capitalize flex items-center">
                  <User className="h-6 w-6 text-green-600 mr-2 montserrat-bold" />
                  {category === "management" ? "Management Team" : "Staff"}
                </h3>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {team
                    .filter((member) => member.category === category)
                    .map((member) => (
                      <div
                        key={member.name}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="relative h-48">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <div className="p-6">
                          <h4 className="text-lg montserrat-semibold text-gray-900 mb-1">
                            {member.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-4 montserrat-regular">
                            {member.role}
                          </p>
                          {member.social && (
                            <div className="flex space-x-4">
                              {member.social.twitter && (
                                <a
                                  href={member.social.twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                  <Twitter className="h-5 w-5" />
                                </a>
                              )}
                              {member.social.facebook && (
                                <a
                                  href={member.social.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 hover:text-blue-600 transition-colors"
                                >
                                  <Facebook className="h-5 w-5" />
                                </a>
                              )}
                              {member.social.instagram && (
                                <a
                                  href={member.social.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 hover:text-pink-600 transition-colors"
                                >
                                  <Instagram className="h-5 w-5" />
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
