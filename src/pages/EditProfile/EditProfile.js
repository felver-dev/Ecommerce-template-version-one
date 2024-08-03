import React from "react";
import { Breadcrumb } from "../../components";

const EditProfile = () => {
  return (
    <div className="body-wrapper bg-color--gradient space-pt--70 space-pb--120">
      <Breadcrumb pageTitle="Edit Profile" prevUrl="/home" />
      <div className="edit-profile-body space-mt--30">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* edit profile form */}
              <div className="edit-profile-form">
                <form>
                  <div className="edit-profile-form__single-field space-mb--30">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="edit-profile-form__single-field space-mb--30">
                    <label htmlFor="userName">User Name</label>
                    <input
                      type="text"
                      name="userName"
                      id="userName"
                      placeholder="Enter User Name"
                    />
                  </div>
                  <div className="edit-profile-form__single-field space-mb--30">
                    <label htmlFor="phoneNo">Phone</label>
                    <input
                      type="text"
                      name="phoneNo"
                      id="phoneNo"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="edit-profile-form__single-field space-mb--30">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input
                      type="text"
                      name="emailAddress"
                      id="emailAddress"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="edit-profile-form__single-field space-mb--30">
                    <label htmlFor="shippingAddress">Shipping Address</label>
                    <textarea
                      name="shippingAddress"
                      id="shippingAddress"
                      cols={30}
                      rows={5}
                      placeholder="Enter Shipping Address"
                      defaultValue={""}
                    />
                  </div>
                  <button className="edit-profile-form__button">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
