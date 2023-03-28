/* eslint-disable */
import { Button } from "../Compnents/Button";
import { Icon } from "../Compnents/Icon";
import { InputButton } from "../Compnents/Input";

const getemail = (event) => {
  console.log(event.target.value);
};
const getpassword = (event) => {
  console.log(event.target.value);
};
const Register = (props) => {
  const iconcss = {
    background:
      "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat",
    WebkitBackgroundClip: " text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
  };
  const radiuscss = {
    padding: "15px 220px 15px 220px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    borderRadius: "50px",
    fontWeight: "600",

    color: "#fff",
    fontSize: "15px",
  };
  const inputcss = {
    padding: "15px 20px 15px 30px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    borderRadius: "50px",
    fontWeight: "600",
    color: "#4285F4",
    fontSize: "15px",
  };

  return (
    <>
      <div className="login ">
        <div className="row">
          <div className="col" style={{ margin: "20px" }}>
            <div className="heading-Area col">
              <h3 style={{ fontWeight: "700" }} className="text-center">Registration</h3>
            </div>
            <div
              className="social-Login col"
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <div className="row justify-content-center">
                <div
                  className="col col col-md-8"
                  id="google-Icon"
                  style={{
                    padding: "15px 70px 15px 70px",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    borderRadius: "50px",
                    fontWeight: "600",
                    color: "#4285F4",
                    fontSize: "15px",
                  }}
                >
                  <Icon
                    class="fab fa-google"
                    innertext=" "
                    style={iconcss}
                  ></Icon>
                  <span style={{ paddingLeft: "10px" }}>
                    Sign in with Google
                  </span>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col">
                  <hr />
                </div>
                <div className="col">
                  <span> or Sign in with Email</span>
                </div>
                <div className="col">
                  <hr />
                </div>
              </div>
            </div>
            <div className="inner-body col" style={{ textAlign: "center" }}>
              <div
                className="col"
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                <InputButton
                  type="text"
                  press={getemail}
                  class="form-control"
                  placeholder="Enter Email"
                  style={inputcss}
                />
              </div>
              <div
                className="col"
                style={{ marginBottom: "20px", marginTop: "10px" }}
              >
                <InputButton
                  type="text"
                  press={getpassword}
                  class="form-control"
                  placeholder="Enter Password"
                  style={inputcss}
                />
              </div>
              <div
                className="col"
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                <InputButton
                  type="text"
                  press={getemail}
                  class="form-control"
                  placeholder="Confirm Password"
                  style={inputcss}
                />
              </div>
              <div
                className="col"
                style={{
                  marginBottom: "20px",
                  marginTop: "10px",
                  paddingLeft: "10px",
                  textAlign: "start",
                }}
              >
                <div className="row">
                  <div className="col col-md-3">
                    <InputButton
                      name="gender"
                      type="radio"
                      press={getpassword}
                      value="Male"
                      placeholder="Enter Phone Number"
                      style={inputcss}
                    />
                    <span style={{ padding: "10px" }}>Male</span>
                  </div>
                  <div className="col col-md-3">
                    {" "}
                    <InputButton
                      name="gender"
                      type="radio"
                      press={getpassword}
                      value="Female"
                      placeholder="Enter Phone Number"
                      style={inputcss}
                    />
                    <span style={{ padding: "10px" }}>Female</span>
                  </div>
                </div>
              </div>

              <div
                className="col"
                style={{ marginBottom: "20px", marginTop: "10px" }}
              >
                <InputButton
                  type="text"
                  press={getpassword}
                  class="form-control"
                  placeholder="Enter Phone Number"
                  style={inputcss}
                />
              </div>
              <div
                className="col"
                style={{ marginBottom: "20px", marginTop: "10px" }}
              >
                <InputButton
                  type="text"
                  press={getpassword}
                  class="form-control"
                  placeholder="Enter Address"
                  style={inputcss}
                />
              </div>
              <div className="forgetLink">
                <div
                  className="row"
                  style={{
                    textAlign: "start",
                    fontWeight: "600",
                    padding: "10px",
                  }}
                >
                  <div className="col">
                    <InputButton type="checkbox" />{" "}
                    <sapn style={{ fontSize: "15px" }}>I agree to the </sapn>{" "}
                    <a href="">Terms & Conditions</a>
                  </div>
                </div>
              </div>
              <div
                className="col"
                style={{ margin: "5px", textAlign: "center" }}
              >
                <Button
                  class="btn btn-primary"
                  type="submit"
                  innertext="Sign Up"
                  style={radiuscss}
                />
              </div>
            </div>

            <div className="Links">
              <div
                className="row"
                style={{
                  textAlign: "start",
                  fontWeight: "600",
                  padding: "10px",
                }}
              >
                <div className="col">
                  <sapn>Already Have an Account</sapn>
                  <a href="" style={{ color: "#5138EE" }}>
                    {" "}
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
