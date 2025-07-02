"use client";
import React, { useEffect, useMemo, useState } from "react";
import "./userprofile.scss";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../../firebase/firebase";
import { getAuth, updatePassword } from "firebase/auth";
import { useFormik, validateYupSchema } from "formik";
import { validateHeaderName } from "http";
import { registerSchemas } from "@/app/pages/registerRockie/components/organism/registerContent/schemas";
import { register } from "module";

type UserProfileProps = {
  uid: string;
};
const UserProfile = ({ uid }: UserProfileProps) => {

  const [profile, setProfile] = useState({
    nickname: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    uid: "",
  });
  const initialValues = useMemo(() => ({
    nickname: profile.nickname || "",
    email: profile.email || "",
    country: profile.country || "",
    phone: profile.phone || "",
    password: profile.password || "",
    confirmPassword: profile.password || ""

  }), [profile]);



  const { values, errors, handleSubmit, handleBlur, handleChange } = useFormik({

    enableReinitialize: true,
    initialValues,
    validationSchema: registerSchemas,
    onSubmit: async (values) => {
      console.log("egemen");
      setError(null);
      if (!uid) return;
      try {
        const docRef = doc(db, "crypto-users", uid);
        await updateDoc(docRef, {
          nickname: values.nickname,
          email: values.email,
          country: values.country,
          phone: values.phone,
          password: values.password,
          uid: uid,
        });

        const auth = getAuth();
        const user = auth.currentUser;
        if (user && values.password) {
          try {
            await updatePassword(user, values.password);
          } catch (err: any) {
            setError("Password update failed: " + (err.message || ""));
            return;
          }
        }
        alert("Profile updated!");
      } catch (err: any) {
        setError("Profile update failed: " + (err.message || ""));
      }
    }
  })
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProfile = async () => {
      if (!uid) return;
      try {
        const docRef = doc(db, "crypto-users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProfile({
            nickname: data?.nickname || "",
            email: data?.email || "",
            country: data?.country || "",
            phone: data?.phone || "",
            password: data?.password || "",
            uid: data?.uid || "",
          });
        }
      } catch (err: any) {
        setError("Failed to fetch profile.");
      }
      setLoading(false);
    };
    fetchProfile();
  }, [uid]);




  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-12 col-sm-12 col-md-4 ">
          <div className="d-flex flex-column align-items-center">
            <div className="profile-img"></div>
            <h5 className="mt-3 fw-bold">{values.nickname}</h5>
            <h6 className="small text-body-tertiary mb-5">{values.email}</h6>
            <div className="d-flex flex-column ">
              <div className="options d-flex ">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2766 12.854C10.2994 12.854 10.3221 12.854 10.3495 12.854C10.3586 12.854 10.3677 12.854 10.3768 12.854C10.3905 12.854 10.4087 12.854 10.4224 12.854C11.7572 12.8312 12.8369 12.362 13.6342 11.4645C15.3881 9.48733 15.0966 6.09787 15.0647 5.77441C14.9508 3.3462 13.8027 2.18449 12.8551 1.64236C12.149 1.2369 11.3244 1.01822 10.4041 1H10.3723C10.3677 1 10.3586 1 10.354 1H10.3267C9.82101 1 8.82786 1.082 7.87571 1.62414C6.91901 2.16627 5.75274 3.32798 5.63885 5.77441C5.60696 6.09787 5.31539 9.48733 7.06935 11.4645C7.86205 12.362 8.94176 12.8312 10.2766 12.854ZM6.85523 5.8883C6.85523 5.87464 6.85978 5.86097 6.85978 5.85186C7.01012 2.5854 9.32899 2.2346 10.3221 2.2346H10.3404C10.3495 2.2346 10.3631 2.2346 10.3768 2.2346C11.6069 2.26194 13.6979 2.76307 13.8392 5.85186C13.8392 5.86552 13.8392 5.87919 13.8437 5.8883C13.8483 5.92019 14.1672 9.01809 12.7185 10.649C12.1444 11.296 11.3791 11.6149 10.3723 11.624C10.3631 11.624 10.3586 11.624 10.3495 11.624C10.3404 11.624 10.3358 11.624 10.3267 11.624C9.32444 11.6149 8.55452 11.296 7.98505 10.649C6.54088 9.02721 6.85067 5.91564 6.85523 5.8883Z" fill="#3772FF" stroke="#3772FF" stroke-width="0.4" />
                  <path d="M19.7116 18.4778C19.7116 18.4733 19.7116 18.4687 19.7116 18.4642C19.7116 18.4277 19.7071 18.3913 19.7071 18.3503C19.6797 17.4482 19.6205 15.3389 17.6433 14.6647C17.6297 14.6601 17.6114 14.6556 17.5978 14.651C15.5431 14.1271 13.8347 12.9426 13.8165 12.9289C13.5386 12.733 13.1559 12.8014 12.96 13.0793C12.7641 13.3572 12.8325 13.7399 13.1104 13.9358C13.1878 13.9904 15.001 15.2524 17.2697 15.8355C18.3312 16.2136 18.4497 17.348 18.4816 18.3867C18.4816 18.4277 18.4816 18.4642 18.4861 18.5006C18.4907 18.9106 18.4633 19.5439 18.3905 19.9083C17.6524 20.3274 14.7595 21.7762 10.3587 21.7762C5.9761 21.7762 3.06499 20.3229 2.3224 19.9038C2.24951 19.5393 2.21762 18.9061 2.22673 18.496C2.22673 18.4596 2.23129 18.4232 2.23129 18.3822C2.26318 17.3434 2.38163 16.2091 3.44311 15.8309C5.71186 15.2478 7.52504 13.9813 7.60249 13.9312C7.88039 13.7353 7.94873 13.3526 7.75283 13.0747C7.55693 12.7968 7.17425 12.7285 6.89635 12.9244C6.87813 12.9381 5.17884 14.1225 3.1151 14.6464C3.09688 14.651 3.08321 14.6556 3.06954 14.6601C1.09235 15.3389 1.03313 17.4482 1.0058 18.3457C1.0058 18.3867 1.0058 18.4232 1.00124 18.4596C1.00124 18.4642 1.00124 18.4687 1.00124 18.4733C0.996684 18.7102 0.992129 19.9265 1.23358 20.537C1.27914 20.6555 1.36114 20.7557 1.47048 20.824C1.60715 20.9151 4.88272 23.0017 10.3633 23.0017C15.8438 23.0017 19.1194 20.9106 19.256 20.824C19.3608 20.7557 19.4474 20.6555 19.4929 20.537C19.7207 19.9311 19.7162 18.7147 19.7116 18.4778Z" fill="#3772FF" stroke="#3772FF" stroke-width="0.4" />
                </svg>
                <button className="btn btn-outline-primary border-0 rounded-pill active mx-2 fw-bold">User Profile</button>
              </div>
              <div className="options d-flex mt-2 ">
                <img src="/assets/header/referrals.svg" alt="refferals" />
                <button className="btn btn-outline-primary border-0 rounded-pill mx-2 fw-bold fw-bold">Referrals</button>
              </div>
              <div className="options d-flex mt-2 ">
                <img src="/assets/header/apikeys.svg" alt="apikeys" />
                <button className="btn btn-outline-primary border-0 rounded-pill mx-2 fw-bold">API keys</button>
              </div>
              <div className="options d-flex mt-2 ">
                <img src="/assets/header/loginhistory.svg" alt="history" />
                <button className="btn btn-outline-primary border-0 rounded-pill mx-2 fw-bold">
                  Login history
                </button>
              </div>
              <div className="options d-flex mt-2 ">
                <img src="/assets/header/2fa.svg" alt="2fa" />
                <button className="btn btn-outline-primary border-0 rounded-pill mx-2 fw-bold">2FA</button>
              </div>
              <div className="options d-flex ">
                <img src="/assets/header/password.svg" alt="password" />
                <button className="btn btn-outline-primary border-0 rounded-pill mx-2 fw-bold">
                  Change password
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className="col-12 col-sm-12 col-md-8">
          <div className="mt-5">
            <h2 className="fw-bold">User Profile</h2>
            <h5 className="fw-bold mt-3 mb-5">Information</h5>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <form
            className="row g-3"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="col-md-6">
              <label htmlFor="nickname" className="form-label fw-bold">
                Nickname
              </label>
              <input
                type="text"
                className="form-control"
                id="nickname"
                value={values.nickname}
                onChange={handleChange}

              />
              {errors.nickname && <p className="text-danger fw-bold">{errors.nickname}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label fw-bold">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={values.email}
                onChange={handleChange}

              />
              {errors.email && <p className="text-danger fw-bold">{errors.email}</p>}

            </div>
            <div className="col-md-6">
              <label htmlFor="country" className="form-label fw-bold">
                Country
              </label>
              <select
                className="form-select"
                id="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select country...</option>
                <option value="UK">South Korea (+82)</option>
                <option value="CA">Canada (+1)</option>
                <option value="AU">Australia (+61)</option>
                <option value="TR">Turkey (+90)</option>
                <option value="DE">Germany (+49)</option>
                <option value="FR">France (+33)</option>
                <option value="JP">Japan (+81)</option>
                <option value="CN">China (+86)</option>
                <option value="IN">India (+91)</option>
              </select>
              {errors.country && <p className="text-danger fw-bold">{errors.country}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label fw-bold">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={values.phone}
                onChange={handleChange}

              />
              {errors.phone && <p className="text-danger fw-bold">{errors.phone}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label fw-bold">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                value={values.password}
                onChange={handleChange}

              />
              {errors.password && <p className="text-danger fw-bold">{errors.password}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label fw-bold">
                Re-Enter Password
              </label>
              <input
                placeholder="Please re-enter your password"
                type="text"
                className="form-control"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}

              />
              {errors.confirmPassword && <p className="text-danger fw-bold">{errors.confirmPassword}</p>}

            </div>
            <div className="col-12  mt-5">
              <button className="btn btn-primary rounded-pill" type="submit">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
