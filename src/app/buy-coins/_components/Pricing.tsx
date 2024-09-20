"use client";
import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Button } from "@/components/ui/button";
import AppLoader from "@/components/custom/AppLoader";
import { useRouter } from "next/navigation";
import { db } from "@/config/db";
import { StoryData, Users } from "@/config/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { useUserContext } from "@/context/UserContext";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [paymentLoader, setpaymentLoader] = useState<boolean>(false);
  const router = useRouter();
  const { isLoaded, isSignedIn, user: authUser } = useUser();
  const { userInfo, setuserInfo } = useUserContext();

  const plans = [
    { id: "free", name: "Free Plan", price: 0 },
    { id: "basic", name: "Basic Plan", price: 10 },
    { id: "pro", name: "Pro Plan", price: 30 },
  ];

  const initialOptions = {
    "client-id": "test", // Replace with actual PayPal client ID
    currency: "USD", // Set to Indian Rupees
    intent: "capture",
  };

  const handleSubscribe = async () => {
    try {
      setpaymentLoader(true);
      // setpaymentLoader(false);
      const response = await db
        .update(Users)
        .set({
          credits: userInfo?.credits + 15,
        })
        .where(
          eq(Users.userEmail, authUser?.primaryEmailAddress?.emailAddress || "")
        )
        .returning({
          userImage: Users?.userImage,
          userEmail: Users?.userEmail,
          userName: Users?.userName,
          credits: Users?.credits,
        });
      setuserInfo(response[0]);
      if (response) {
        router.replace("/");
      }
      // console.log("The payment response is ", response[0]);
    } catch (error) {
      console.log("object");
    }
  };
  if (paymentLoader) {
    return <AppLoader />;
  }
  if (!isLoaded) {
    return <AppLoader />;
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <section className="py-20 max-w-6xl mx-auto">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-300">
              Choose Your Plan
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Create amazing AI stories with images in book form. Choose the
              plan that suits you!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg border ${
                  plan.id === selectedPlan
                    ? "border-6495ED"
                    : "border-gray-300 dark:border-gray-700"
                } flex flex-col`}
              >
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-4">
                    {plan.name}
                  </h3>
                  <div className="text-5xl font-bold text-6495ED mb-4">
                    {plan.price === 0 ? "Free" : `$${plan.price}`}
                  </div>
                  <ul className="text-left text-gray-600 dark:text-gray-400 mb-6 space-y-2">
                    {plan.id === "free" && (
                      <>
                        <li>✔️ Basic AI-generated stories</li>
                        <li>✔️ Up to 5 stories</li>
                        <li>✔️ Basic image generation</li>
                        <li>✔️ Access to community support</li>
                      </>
                    )}
                    {plan.id === "basic" && (
                      <>
                        <li>✔️ Advanced AI-generated stories</li>
                        <li>✔️ Up to 15 stories</li>
                        <li>✔️ Enhanced image generation</li>
                        <li>✔️ Export stories in PDF format</li>
                        <li>✔️ Priority customer support</li>
                      </>
                    )}
                    {plan.id === "pro" && (
                      <>
                        <li>✔️ Premium AI-generated stories</li>
                        <li>✔️ Up to 50 stories</li>
                        <li>✔️ High-quality image generation</li>
                        <li>✔️ Export stories in PDF and ePub formats</li>
                        <li>✔️ Customizable story templates</li>
                        <li>✔️ Dedicated customer support</li>
                        <li>✔️ Access to exclusive content and features</li>
                      </>
                    )}
                  </ul>
                </div>

                {/* PayPal Buttons - Rendered only for the selected plan */}
                {plan.id !== "free" && (
                  <div className="mt-4">
                    <PayPalButtons
                      style={{ layout: "horizontal" }}
                      fundingSource="paypal"
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: plan.price.toString(),
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={(data: any, actions: any) => {
                        return actions.order.capture().then((details: any) => {
                          alert(
                            `Transaction completed by ${details.payer.name.given_name}`
                          );
                        });
                      }}
                      onError={(err) => {
                        console.error("PayPal Checkout Error:", err);
                      }}
                    />
                  </div>
                )}
                {plan.id == "free" ? (
                  <Button className="w-ful bg-primary text-white" disabled>
                    GET STARTED
                  </Button>
                ) : (
                  <Button
                    className="w-full bg-primary text-white"
                    onClick={handleSubscribe}
                  >
                    GET STARTED
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PayPalScriptProvider>
  );
};

export default Pricing;
