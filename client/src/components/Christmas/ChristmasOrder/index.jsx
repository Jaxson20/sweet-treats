import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CHRISTMAS_ORDER } from "../../../utils/mutations";
import { Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import PhoneNumberInput from "../Christmas/PNinput"
import './style.scss'
import { sendOrderConfirmationEmail } from "../../SendGrid";




const ChristmasOrder = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    numberOfBoxes: 0,
    specialMessage: "",
  });

  const [ChristmasOrder, { error, data }] = useMutation(CREATE_CHRISTMAS_ORDER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleIncrement = () => {
    setFormState({
      ...formState,
      numberOfBoxes: formState.numberOfBoxes + 1,
    });
  };

  const handleDecrement = () => {
    if (formState.numberOfBoxes > 0) {
      setFormState({
        ...formState,
        numberOfBoxes: formState.numberOfBoxes - 1,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data } = await ChristmasOrder({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          numberOfBoxes: parseInt(formState.numberOfBoxes),
          specialMessage: formState.specialMessage,
        },
      });
  
      console.log("Order Created:", data.ChristmasOrder);
 
      await sendOrderConfirmationEmail(data.ChristmasOrder, formState.email);

      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        numberOfBoxes: 0,
        specialMessage: "",
      });
  
      toast.success("Your Order has been created!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
        onClose: () => {
          window.location.reload();
        },
        ClassName: 'toast-message',
      });
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <Card className="ChristmasOrderCard">
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <div className="card-body">
              <div className="box-container">
                <form onSubmit={handleFormSubmit}>
                  <div className="center-screen">
                    <div className="service-input-box">
                      <input
                        className="form-input"
                        placeholder="First Name"
                        name="firstName"
                        type="text"
                        value={formState.firstName}
                        onChange={handleChange}
                      />
                      <textarea
                        className="form-input"
                        placeholder="Last Name"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                      />
                      <textarea
                        className="form-input"
                        placeholder="Email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                     {/* <input
                        className="form-input"
                        placeholder="323-654-7896 Please dont put - or ( )"
                        name="phoneNumber"
                        value={formState.phoneNumber}
                        onChange={handleChange}
  /> 
                      <PhoneNumberInput
                        className="form-input"
                        value={formState.phoneNumber}
                        onChange={(formattedPhoneNumber) => handlePhoneNumberChange({ target: { value: formattedPhoneNumber } })}
                      />*/}
                      <div className="number-counter">
                        <input
                          className="form-input counter-input"
                          placeholder="# of Dozen"
                          name="numberOfBoxes"
                          type="number"
                          value={formState.numberOfBoxes}
                          onChange={handleChange}
                        />
                      </div>
                      <textarea
                        className="form-input"
                        placeholder="Special request/Phone number"
                        name="specialMessage"
                        value={formState.specialMessage}
                        onChange={handleChange}
                      />
                      <button
                        id="Button"
                        className="btn btn-block btn-info submit-btn"
                        type="submit"
                      >
                        Create Order
                      </button>
                    </div>
                  </div>
                </form>
                <div>
                  <ToastContainer theme="colored" pauseOnHover />
                </div>
              </div>
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Card>
  );
};

export default ChristmasOrder;

