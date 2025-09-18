import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import toast from "react-hot-toast";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const account = [
    {
      name: "Fitness With Gomzi",
      details: [
        {
          bank_name: "Axis bank",
          account_holder_name: "Gomzi Consulting Services and Private LTD",
          account_number: "923020001798197",
          ifsc_code: "UTIB0000566",
          account_type: "Current Account",
        },
      ],
    },
    {
      name: "FGIIT",
      details: [
        {
          bank_name: "Axis bank",
          account_holder_name: "Gomzi Consulting Services and Private LTD",
          account_number: "923020001798197",
          ifsc_code: "UTIB0000566",
          account_type: "Current Account",
        },
      ],
    },
    {
      name: "Gomzi Consulting Services",
      details: [
        {
          bank_name: "Axis bank",
          account_holder_name: "Gomzi Consulting Services and Private LTD",
          account_number: "923020001798197",
          ifsc_code: "UTIB0000566",
          account_type: "Current Account",
        },
      ],
    },
    {
      name: "Gomzi life Science LLP",
      details: [
        {
          bank_name: "Axis bank",
          account_holder_name: "Gomzi life Science LLP",
          account_number: "924020043956068",
          ifsc_code: "UTIB0000566",
          account_type: "Current Account",
        },
      ],
    },
    {
      name: "Gautam Jani",
      details: [
        {
          bank_name: "Punjab national bank",
          account_holder_name: "Gautam Jani",
          account_number: "9839000100018254",
          ifsc_code: "PUNB0983900",
          account_type: "Saving Account",
        },
      ],
    },
    {
      name: "Jayna Jani",
      details: [
        {
          bank_name: "Indian Bank, Allahabad",
          account_holder_name: "Jayna Gautam Jani",
          account_number: "7739329219",
          ifsc_code: "IDIB000S800",
          account_type: "Saving Account",
        },
      ],
    },
  ];

  // 🔹 Helper function to share details on WhatsApp
  const shareOnWhatsApp = (acc) => {
    const details = acc.details[0];
    const message = `
🏦 *${acc.name} Bank Details*

Bank Name: ${details.bank_name}
Account Holder: ${details.account_holder_name}
Account Number: ${details.account_number}
IFSC Code: ${details.ifsc_code}
Account Type: ${details.account_type}
    `;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/?text=${encoded}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Bank Details Of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              All Branches
            </span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {account.map((acc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border shadow-cta hover:shadow-testimonial transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary pr-4">
                      {acc.name}
                    </h3>
                  </div>
                  <Icon
                    name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    color="#4A5568"
                    className="transition-transform duration-200"
                  />
                </button>

                {/* Smooth Expand */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === index
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-border pt-4 space-y-4">
                      {/* Existing details (bank name, holder, etc.) */}
                      <div>
                        <label className="text-sm font-medium text-text-secondary block mb-1">
                          Bank Name
                        </label>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                          <p className="font-mono text-lg font-semibold text-text-primary">
                            {acc.details[0].bank_name}
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-text-secondary block mb-1">
                          Account Holder Name
                        </label>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                          <p className="font-mono text-lg font-semibold text-text-primary">
                            {acc.details[0].account_holder_name}
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-text-secondary block mb-1">
                          Account Number
                        </label>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                          <p className="font-mono text-lg font-semibold text-text-primary">
                            {acc.details[0].account_number}
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-text-secondary block mb-1">
                          IFSC Code
                        </label>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                          <p className="font-mono text-lg font-semibold text-text-primary">
                            {acc.details[0].ifsc_code}
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-text-secondary block mb-1">
                          Account Type
                        </label>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                          <p className="font-mono text-lg font-semibold text-text-primary">
                            {acc.details[0].account_type}
                          </p>
                        </div>
                      </div>

                      {/* 🔹 New WhatsApp Share Button */}
                      <button
                        onClick={() => shareOnWhatsApp(acc)}
                        className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Share on WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
