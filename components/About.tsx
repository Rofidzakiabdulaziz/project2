import Image from "next/image";
import React from "react";

const AboutPage = ({ type }: { type: string }) => {
  return (
    <div className="flex justify-center flex-col items-center p-4">
      {/* About Card Section */}
      <div className="rounded-2xl odd:bg-gray-100 even:bg-lamaYellow p-4 w-80 min-w-[600px]">
           

        <div className="text-sm text-gray-700 mt-4">
          <p className="mb-2">
            Welcome to our platform! We are a team of passionate individuals dedicated to providing the best
            services and solutions. Our mission is to help users by creating seamless and intuitive experiences
            that solve real-world problems.
          </p>
          <p className="mb-2">
            Founded in 2024, we believe in the power of technology to change lives. Our platform is designed to
            make tasks easier, more efficient, and fun to accomplish.
          </p>
          <p className="mb-2">
            We are always working towards improving our services, and we welcome feedback to help us grow and
            better serve you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
