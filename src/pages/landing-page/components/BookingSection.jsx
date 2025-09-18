import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import toast from "react-hot-toast";

const BookingSection = ({ onBookDemo }) => {
    const account = [
        {
            name: "Fitness With Gomzi",
            details: [{
                bank_name: "Axis bank",
                account_holder_name: "Gomzi Consulting Services and Private LTD",
                account_number: "923020001798197",
                ifsc_code: "UTIB0000566",
                account_type: "Current Account",
            }]
        },
        {
            name: "FGIIT",
            details: [{
                bank_name: "Axis bank",
                account_holder_name: "Gomzi Consulting Services and Private LTD",
                account_number: "923020001798197",
                ifsc_code: "UTIB0000566",
                account_type: "Current Account",
            }]
        },
        {
            name: "Gomzi Consulting Services",
            details: [{
                bank_name: "Axis bank",
                account_holder_name: "Gomzi Consulting Services and Private LTD",
                account_number: "923020001798197",
                ifsc_code: "UTIB0000566",
                account_type: "Current Account",
            }]
        },
        {
            name: "Gomzi life Science LLP",
            details: [{
                bank_name: "Axis bank",
                account_holder_name: "Gomzi life Science LLP",
                account_number: "924020043956068",
                ifsc_code: "UTIB0000566",
                account_type: "Current Account",
            }]
        },
        {
            name: "Gautam Jani",
            details: [{
                bank_name: "Punjab national bank",
                account_holder_name: "Gautam Jani",
                account_number: "9839000100018254",
                ifsc_code: "PUNB0983900",
                account_type: "Saving Account",
            }]
        },
        {
            name: "Jayna Jani",
            details: [{
                bank_name: "Indian Bank, Allahabad",
                account_holder_name: "Jayna Gautam Jani",
                account_number: "7739329219",
                ifsc_code: "IDIB000S800",
                account_type: "Saving Account",
            }]
        },
    ];
    return (
        <section
            id="demo-booking"
            className="py-20 bg-gradient-to-br from-primary/5 to-accent/5"
        >
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

                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
                            { account.map((acc, idx) => (
                                <div
                                    key={ idx }
                                    className="bg-white rounded-2xl p-6 shadow-cta border border-border"
                                >
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-text-primary mb-2">
                                            { acc.name }
                                        </h3>
                                    </div>

                                    {/* Bank Name */ }
                                    <div className="mb-4">
                                        <label className="text-sm font-medium text-text-secondary block mb-1">
                                            Bank Name
                                        </label>
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                                            <p className="font-mono text-lg font-semibold text-text-primary">
                                                { acc.details[0].bank_name }
                                            </p>
                                            <button
                                                onClick={ () => {
                                                    navigator.clipboard.writeText(acc.details[0].bank_name);
                                                    toast.success("Bank name copied!");
                                                } }
                                                className="text-primary hover:text-primary/80 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                                            >
                                                <Icon name="Copy" size={ 20 } />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Account Holder Name */ }
                                    <div className="mb-4">
                                        <label className="text-sm font-medium text-text-secondary block mb-1">
                                            Account Holder Name
                                        </label>
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                                            <p className="font-mono text-lg font-semibold text-text-primary">
                                                { acc.details[0].account_holder_name }
                                            </p>
                                            <button
                                                onClick={ () => {
                                                    navigator.clipboard.writeText(acc.details[0].account_holder_name);
                                                    toast.success("Account holder name copied!");
                                                } }
                                                className="text-primary hover:text-primary/80 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                                            >
                                                <Icon name="Copy" size={ 20 } />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Account Number */ }
                                    <div className="mb-4">
                                        <label className="text-sm font-medium text-text-secondary block mb-1">
                                            Account Number
                                        </label>
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                                            <p className="font-mono text-lg font-semibold text-text-primary">
                                                { acc.details[0].account_number }
                                            </p>
                                            <button
                                                onClick={ () => {
                                                    navigator.clipboard.writeText(acc.details[0].account_number);
                                                    toast.success("Account number copied!");
                                                } }
                                                className="text-primary hover:text-primary/80 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                                            >
                                                <Icon name="Copy" size={ 20 } />
                                            </button>
                                        </div>
                                    </div>

                                    {/* IFSC Code */ }
                                    <div className="mb-4">
                                        <label className="text-sm font-medium text-text-secondary block mb-1">
                                            IFSC Code
                                        </label>
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                                            <p className="font-mono text-lg font-semibold text-text-primary">
                                                { acc.details[0].ifsc_code }
                                            </p>
                                            <button
                                                onClick={ () => {
                                                    navigator.clipboard.writeText(acc.details[0].ifsc_code);
                                                    toast.success("IFSC code copied!");
                                                } }
                                                className="text-primary hover:text-primary/80 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                                            >
                                                <Icon name="Copy" size={ 20 } />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Account Type */ }
                                    <div className="mb-4">
                                        <label className="text-sm font-medium text-text-secondary block mb-1">
                                            Account Type
                                        </label>
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                                            <p className="font-mono text-lg font-semibold text-text-primary">
                                                { acc.details[0].account_type }
                                            </p>
                                            <button
                                                onClick={ () => {
                                                    navigator.clipboard.writeText(acc.details[0].account_type);
                                                    toast.success("Account type copied!");
                                                } }
                                                className="text-primary hover:text-primary/80 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                                            >
                                                <Icon name="Copy" size={ 20 } />
                                            </button>
                                        </div>
                                    </div>

                                    {/* SWIFT Code (Optional for Axis Bank) */ }
                                    { acc.details[0].bank_name.toLowerCase().includes("axis") && (
                                        <div className="mb-4">
                                            <label className="text-sm font-medium text-text-secondary block mb-1">
                                                SWIFT Code
                                            </label>
                                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-border">
                                                <p className="font-mono text-lg font-semibold text-text-primary">
                                                    AXISINBB566
                                                </p>
                                                <button
                                                    onClick={ () => {
                                                        navigator.clipboard.writeText("AXISINBB566");
                                                        toast.success("SWIFT code copied!");
                                                    } }
                                                    className="text-primary hover:text-primary/80 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                                                >
                                                    <Icon name="Copy" size={ 20 } />
                                                </button>
                                            </div>
                                        </div>
                                    ) }
                                </div>
                            )) }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
