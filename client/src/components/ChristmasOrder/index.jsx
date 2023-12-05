import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CHRISTMAS_ORDER } from "../../utils/mutations";
import { Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "./style.scss";



const ChristmasOrder = () => {
    const [formState, setFormState] = useState({
      serviceName: "",
      description: "",
    });
  
    
  
    const [ChristmasOrder, { error, data }] = useMutation(CREATE_CHRISTMAS_ORDER );
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await ChristmasOrder({
          variables: {
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            phoneNumber: parseInt(formState.phoneNumber),  
        numberOfBoxes: parseInt(formState.numberOfBoxes),
            specialMessage: formState.specialMessage,
          },
        });
  
        console.log("Order Created:", data.ChristmasOrder);
  
        setFormState({
            firstName: "", 
            lastName: "",
            email: "",
            phoneNumber: "",
            numberOfBoxes: "",
            specialMessage: "",
        });
  
        toast.success("Your Order has been created!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
          onClose: () => {
            window.location.reload();
          },
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
                          name="FirstName"
                          type="text"
                          value={formState.firstName}
                          onChange={handleChange}
                        />
                        <textarea
                          id="LastName"
                          className="form-input"
                          placeholder="LastName"
                          name="Last Name"
                          value={formState.lastName}
                          onChange={handleChange}
                        />
                        <textarea
                          id="Email"
                          className="form-input"
                          placeholder="jonDoe@email.com"
                          name="Email"
                          value={formState.lastName}
                          onChange={handleChange}
                        />
                        <textarea
                          id="Number"
                          className="form-input"
                          placeholder="813-546-1253"
                          name="Number"
                          value={formState.lastName}
                          onChange={handleChange}
                        />
                        <textarea
                          id="Boxes"
                          className="form-input"
                          placeholder="# of Boxes"
                          name="Boxes"
                          value={formState.lastName}
                          onChange={handleChange}
                        />
                        <textarea
                          id="SpecialMessage"
                          className="form-input"
                          placeholder="Add Comment"
                          name="SpecialMessage"
                          value={formState.lastName}
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
