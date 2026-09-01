import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface DoctorFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phone: string;
  profilePhoto: File | null;

  // Professional Information
  specialization: string;
  subSpecialization: string;
  licenseNumber: string;
  licenseAuthority: string;
  experience: string;
  qualification: string;
  university: string;
  graduationYear: string;
  languages: string[];

  // Practice Information
  clinicName: string;
  consultationType: string;
  consultationFee: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  bio: string;

  // Availability
  availableDays: string[];
  startTime: string;
  endTime: string;

  // Documents
  medicalLicense: File | null;
  medicalDegree: File | null;
  governmentId: File | null;
  experienceCertificate: File | null;
  specialistCertificate: File | null;

  // Account
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

interface Errors {
  [key: string]: string;
}

const steps = [
  "Personal",
  "Professional",
  "Practice",
  "Availability",
  "Documents",
  "Account",
];

const specializations = [
  "General Medicine",
  "Cardiology",
  "Dermatology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Gynecology",
  "Psychiatry",
  "ENT",
  "Ophthalmology",
  "Dentistry",
  "Urology",
  "Gastroenterology",
  "Pulmonology",
  "Endocrinology",
  "Oncology",
  "Nephrology",
  "Other",
];

const genders = [
  "Male",
  "Female",
  "Other",
  "Prefer not to say",
];

const consultationTypes = [
  "In-person",
  "Online",
  "Both",
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const languages = [
  "English",
  "Hindi",
  "Telugu",
  "Tamil",
  "Kannada",
  "Malayalam",
  "Bengali",
  "Marathi",
  "Other",
];

function DoctorRegistration() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);

  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState<Errors>({});

  const [formData, setFormData] = useState<DoctorFormData>({
    // Personal
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    profilePhoto: null,

    // Professional
    specialization: "",
    subSpecialization: "",
    licenseNumber: "",
    licenseAuthority: "",
    experience: "",
    qualification: "",
    university: "",
    graduationYear: "",
    languages: [],

    // Practice
    clinicName: "",
    consultationType: "",
    consultationFee: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    bio: "",

    // Availability
    availableDays: [],
    startTime: "",
    endTime: "",

    // Documents
    medicalLicense: null,
    medicalDegree: null,
    governmentId: null,
    experienceCertificate: null,
    specialistCertificate: null,

    // Account
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  /*
   * Handle normal text/select inputs
   */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    clearError(name);
  };

  /*
   * Handle file uploads
   */
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, files } = e.target;

    if (!files || files.length === 0) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));

    clearError(name);
  };

  /*
   * Handle checkbox arrays
   * Example: availableDays and languages
   */
  const handleArrayChange = (
    name: "availableDays" | "languages",
    value: string
  ) => {
    setFormData((prev) => {
      const currentValues = prev[name];

      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [name]: updatedValues,
      };
    });

    clearError(name);
  };

  /*
   * Clear an individual error
   */
  const clearError = (name: string) => {
    if (errors[name]) {
      setErrors((prev) => {
        const updatedErrors = { ...prev };

        delete updatedErrors[name];

        return updatedErrors;
      });
    }
  };

  /*
   * Validate each step separately
   */
  const validateStep = () => {
    const newErrors: Errors = {};

    // STEP 1
    if (currentStep === 0) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }

      if (!formData.dateOfBirth) {
        newErrors.dateOfBirth = "Date of birth is required";
      }

      if (!formData.gender) {
        newErrors.gender = "Please select your gender";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ) {
        newErrors.email = "Enter a valid email address";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
        newErrors.phone = "Enter a valid phone number";
      }
    }

    // STEP 2
    if (currentStep === 1) {
      if (!formData.specialization) {
        newErrors.specialization =
          "Please select your specialization";
      }

      if (!formData.licenseNumber.trim()) {
        newErrors.licenseNumber =
          "Medical license number is required";
      }

      if (!formData.licenseAuthority.trim()) {
        newErrors.licenseAuthority =
          "License issuing authority is required";
      }

      if (!formData.experience) {
        newErrors.experience =
          "Years of experience is required";
      }

      if (!formData.qualification.trim()) {
        newErrors.qualification =
          "Medical qualification is required";
      }

      if (!formData.university.trim()) {
        newErrors.university =
          "University / institution is required";
      }

      if (!formData.graduationYear) {
        newErrors.graduationYear =
          "Graduation year is required";
      }

      if (formData.languages.length === 0) {
        newErrors.languages =
          "Select at least one language";
      }
    }

    // STEP 3
    if (currentStep === 2) {
      if (!formData.clinicName.trim()) {
        newErrors.clinicName =
          "Clinic / hospital name is required";
      }

      if (!formData.consultationType) {
        newErrors.consultationType =
          "Select consultation type";
      }

      if (!formData.consultationFee) {
        newErrors.consultationFee =
          "Consultation fee is required";
      }

      if (!formData.address.trim()) {
        newErrors.address = "Address is required";
      }

      if (!formData.city.trim()) {
        newErrors.city = "City is required";
      }

      if (!formData.state.trim()) {
        newErrors.state = "State is required";
      }

      if (!formData.pincode.trim()) {
        newErrors.pincode = "Pincode is required";
      }

      if (!formData.bio.trim()) {
        newErrors.bio = "Please provide a short professional bio";
      }
    }

    // STEP 4
    if (currentStep === 3) {
      if (formData.availableDays.length === 0) {
        newErrors.availableDays =
          "Select at least one available day";
      }

      if (!formData.startTime) {
        newErrors.startTime = "Start time is required";
      }

      if (!formData.endTime) {
        newErrors.endTime = "End time is required";
      }
    }

    // STEP 5
    if (currentStep === 4) {
      if (!formData.medicalLicense) {
        newErrors.medicalLicense =
          "Medical license document is required";
      }

      if (!formData.medicalDegree) {
        newErrors.medicalDegree =
          "Medical degree certificate is required";
      }

      if (!formData.governmentId) {
        newErrors.governmentId =
          "Government ID is required";
      }
    }

    // STEP 6
    if (currentStep === 5) {
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password =
          "Password must contain at least 8 characters";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword =
          "Please confirm your password";
      } else if (
        formData.password !== formData.confirmPassword
      ) {
        newErrors.confirmPassword =
          "Passwords do not match";
      }

      if (!formData.termsAccepted) {
        newErrors.termsAccepted =
          "You must accept the terms and conditions";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /*
   * Move to next step
   */
  const handleNext = () => {
    if (!validateStep()) {
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  /*
   * Move to previous step
   */
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  /*
   * Final submission
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep()) {
      return;
    }

    /*
     * For now this is frontend-only.
     * Later we'll send this data to our backend API.
     */
    const existingDoctors = JSON.parse(
      localStorage.getItem("doctors") || "[]"
    );

    const newDoctor = {
      ...formData,

      id: Date.now().toString(),

      registeredAt: new Date().toISOString(),

      /*
       * Files cannot be meaningfully persisted
       * to localStorage as File objects.
       * We'll upload them to the backend later.
       */
      profilePhotoName: formData.profilePhoto?.name || null,
      medicalLicenseName:
        formData.medicalLicense?.name || null,
      medicalDegreeName:
        formData.medicalDegree?.name || null,
      governmentIdName:
        formData.governmentId?.name || null,
      experienceCertificateName:
        formData.experienceCertificate?.name || null,
      specialistCertificateName:
        formData.specialistCertificate?.name || null,

      profilePhoto: undefined,
      medicalLicense: undefined,
      medicalDegree: undefined,
      governmentId: undefined,
      experienceCertificate: undefined,
      specialistCertificate: undefined,
    };

    existingDoctors.push(newDoctor);

    localStorage.setItem(
      "doctors",
      JSON.stringify(existingDoctors)
    );

    setSubmitted(true);
  };

  /*
   * Successful registration screen
   */
  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-xl">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
            ✓
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900">
            Registration Submitted!
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Your doctor registration has been submitted
            successfully. Our team will review your information
            and documents.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-8 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Back to Home
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 px-4 py-10">

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10 text-center">

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Doctor Registration
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Create your professional profile and connect with
            patients looking for trusted healthcare.
          </p>

        </div>

        {/* Progress */}
        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            {steps.map((step, index) => (
              <React.Fragment key={step}>

                <div className="flex flex-col items-center">

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ${index <= currentStep
                        ? "bg-blue-600 text-white"
                        : "bg-slate-200 text-slate-500"
                      }`}
                  >
                    {index < currentStep ? "✓" : index + 1}
                  </div>

                  <span
                    className={`mt-2 hidden text-xs font-medium sm:block ${index <= currentStep
                        ? "text-blue-600"
                        : "text-slate-500"
                      }`}
                  >
                    {step}
                  </span>

                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`mx-2 h-1 flex-1 rounded-full ${index < currentStep
                        ? "bg-blue-600"
                        : "bg-slate-200"
                      }`}
                  />
                )}

              </React.Fragment>
            ))}

          </div>

          <p className="mt-4 text-center text-sm text-slate-500 sm:hidden">
            Step {currentStep + 1} of {steps.length}:{" "}
            <span className="font-semibold text-blue-600">
              {steps[currentStep]}
            </span>
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 shadow-xl sm:p-10"
        >

          {/* ================= STEP 1 ================= */}
          {currentStep === 0 && (
            <div>

              <SectionHeader
                title="Personal Information"
                description="Tell us a little about yourself."
              />

              <div className="grid gap-6 sm:grid-cols-2">

                <FormInput
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  placeholder="John"
                  required
                />

                <FormInput
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  placeholder="Doe"
                  required
                />

                <FormInput
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  error={errors.dateOfBirth}
                  required
                />

                <FormSelect
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  error={errors.gender}
                  options={genders}
                  placeholder="Select gender"
                  required
                />

                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="doctor@example.com"
                  required
                />

                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="+91 9876543210"
                  required
                />

              </div>

              <FileInput
                label="Profile Photo"
                name="profilePhoto"
                onChange={handleFileChange}
                file={formData.profilePhoto}
                accept="image/png,image/jpeg"
                helpText="JPG or PNG. Recommended size: 400 × 400px."
              />

            </div>
          )}

          {/* ================= STEP 2 ================= */}
          {currentStep === 1 && (
            <div>

              <SectionHeader
                title="Professional Information"
                description="Provide your medical qualifications and professional details."
              />

              <div className="grid gap-6 sm:grid-cols-2">

                <FormSelect
                  label="Medical Specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  error={errors.specialization}
                  options={specializations}
                  placeholder="Select specialization"
                  required
                />

                <FormInput
                  label="Sub-specialization"
                  name="subSpecialization"
                  value={formData.subSpecialization}
                  onChange={handleChange}
                  placeholder="e.g. Interventional Cardiology"
                />

                <FormInput
                  label="Medical License Number"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  error={errors.licenseNumber}
                  placeholder="Enter license number"
                  required
                />

                <FormInput
                  label="License Issuing Authority"
                  name="licenseAuthority"
                  value={formData.licenseAuthority}
                  onChange={handleChange}
                  error={errors.licenseAuthority}
                  placeholder="e.g. State Medical Council"
                  required
                />

                <FormInput
                  label="Years of Experience"
                  name="experience"
                  type="number"
                  min="0"
                  value={formData.experience}
                  onChange={handleChange}
                  error={errors.experience}
                  placeholder="5"
                  required
                />

                <FormInput
                  label="Medical Qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  error={errors.qualification}
                  placeholder="MBBS, MD, MS..."
                  required
                />

                <FormInput
                  label="University / Institution"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  error={errors.university}
                  placeholder="University name"
                  required
                />

                <FormInput
                  label="Graduation Year"
                  name="graduationYear"
                  type="number"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  error={errors.graduationYear}
                  placeholder="2018"
                  required
                />

              </div>

              <CheckboxGroup
                title="Languages Spoken"
                options={languages}
                selected={formData.languages}
                onChange={(value) =>
                  handleArrayChange("languages", value)
                }
                error={errors.languages}
              />

            </div>
          )}

          {/* ================= STEP 3 ================= */}
          {currentStep === 2 && (
            <div>

              <SectionHeader
                title="Practice Information"
                description="Tell patients where and how you provide care."
              />

              <div className="grid gap-6 sm:grid-cols-2">

                <FormInput
                  label="Clinic / Hospital Name"
                  name="clinicName"
                  value={formData.clinicName}
                  onChange={handleChange}
                  error={errors.clinicName}
                  placeholder="City Care Hospital"
                  required
                />

                <FormSelect
                  label="Consultation Type"
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleChange}
                  error={errors.consultationType}
                  options={consultationTypes}
                  placeholder="Select consultation type"
                  required
                />

                <FormInput
                  label="Consultation Fee"
                  name="consultationFee"
                  type="number"
                  min="0"
                  value={formData.consultationFee}
                  onChange={handleChange}
                  error={errors.consultationFee}
                  placeholder="500"
                  required
                />

                <FormInput
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  error={errors.city}
                  placeholder="Hyderabad"
                  required
                />

                <FormInput
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  error={errors.state}
                  placeholder="Telangana"
                  required
                />

                <FormInput
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  error={errors.pincode}
                  placeholder="500001"
                  required
                />

              </div>

              <div className="mt-6">
                <FormTextArea
                  label="Clinic / Hospital Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  error={errors.address}
                  placeholder="Enter complete clinic or hospital address"
                  required
                />
              </div>

              <div className="mt-6">
                <FormTextArea
                  label="Professional Bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  error={errors.bio}
                  placeholder="Tell patients about your experience, approach to treatment, and areas of expertise..."
                  rows={5}
                  required
                />
              </div>

            </div>
          )}

          {/* ================= STEP 4 ================= */}
          {currentStep === 3 && (
            <div>

              <SectionHeader
                title="Availability"
                description="Set the days and hours when patients can book appointments."
              />

              <CheckboxGroup
                title="Available Days"
                options={days}
                selected={formData.availableDays}
                onChange={(value) =>
                  handleArrayChange("availableDays", value)
                }
                error={errors.availableDays}
              />

              <div className="mt-8 grid gap-6 sm:grid-cols-2">

                <FormInput
                  label="Start Time"
                  name="startTime"
                  type="time"
                  value={formData.startTime}
                  onChange={handleChange}
                  error={errors.startTime}
                  required
                />

                <FormInput
                  label="End Time"
                  name="endTime"
                  type="time"
                  value={formData.endTime}
                  onChange={handleChange}
                  error={errors.endTime}
                  required
                />

              </div>

              <div className="mt-8 rounded-2xl bg-blue-50 p-5">
                <p className="font-semibold text-blue-900">
                  💡 Availability tip
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-700">
                  You can change your availability later from your
                  doctor dashboard.
                </p>
              </div>

            </div>
          )}

          {/* ================= STEP 5 ================= */}
          {currentStep === 4 && (
            <div>

              <SectionHeader
                title="Verification Documents"
                description="Upload documents to verify your professional credentials."
              />

              <div className="space-y-6">

                <FileInput
                  label="Medical License / Registration Certificate"
                  name="medicalLicense"
                  onChange={handleFileChange}
                  file={formData.medicalLicense}
                  error={errors.medicalLicense}
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                  helpText="Required • PDF, JPG or PNG • Maximum 5MB"
                />

                <FileInput
                  label="Medical Degree Certificate"
                  name="medicalDegree"
                  onChange={handleFileChange}
                  file={formData.medicalDegree}
                  error={errors.medicalDegree}
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                  helpText="Required • PDF, JPG or PNG • Maximum 5MB"
                />

                <FileInput
                  label="Government ID"
                  name="governmentId"
                  onChange={handleFileChange}
                  file={formData.governmentId}
                  error={errors.governmentId}
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                  helpText="Required • Aadhaar, Passport, Driving License, etc."
                />

                <FileInput
                  label="Experience Certificate"
                  name="experienceCertificate"
                  onChange={handleFileChange}
                  file={formData.experienceCertificate}
                  accept=".pdf,.jpg,.jpeg,.png"
                  helpText="Optional • Useful for verifying professional experience"
                />

                <FileInput
                  label="Specialist / Board Certification"
                  name="specialistCertificate"
                  onChange={handleFileChange}
                  file={formData.specialistCertificate}
                  accept=".pdf,.jpg,.jpeg,.png"
                  helpText="Optional • Upload if applicable"
                />

              </div>

              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="font-semibold text-amber-900">
                  🔒 Your documents are confidential
                </p>

                <p className="mt-2 text-sm leading-6 text-amber-800">
                  These documents will only be used for doctor
                  verification. In our production application,
                  they will be securely uploaded to the backend.
                </p>
              </div>

            </div>
          )}

          {/* ================= STEP 6 ================= */}
          {currentStep === 5 && (
            <div>

              <SectionHeader
                title="Create Your Account"
                description="Set up your login credentials to access your doctor dashboard."
              />

              <div className="max-w-xl space-y-6">

                <FormInput
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  placeholder="Create a strong password"
                  required
                />

                <FormInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  placeholder="Re-enter your password"
                  required
                />

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-700">
                    Password requirements
                  </p>

                  <ul className="mt-3 space-y-2 text-sm text-slate-500">
                    <li>✓ At least 8 characters</li>
                    <li>✓ Use a combination of letters and numbers</li>
                    <li>✓ Avoid using easily guessed information</li>
                  </ul>
                </div>

                <label className="flex cursor-pointer items-start gap-3">

                  <input
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        termsAccepted: e.target.checked,
                      }));

                      clearError("termsAccepted");
                    }}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    I agree to the MediCare+{" "}
                    <a
                      href="#"
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>

                </label>

                {errors.termsAccepted && (
                  <p className="text-sm text-red-500">
                    {errors.termsAccepted}
                  </p>
                )}

              </div>

            </div>
          )}

          {/* ================= BUTTONS ================= */}
          <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">

            <button
              type="button"
              onClick={() => {
                if (currentStep === 0) {
                  navigate("/");
                } else {
                  handleBack();
                }
              }}
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              {currentStep === 0 ? "Cancel" : "Back"}
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
              >
                Submit Registration
              </button>
            )}

          </div>

        </form>

      </div>
    </div>
  );
}

/* ============================================================
   REUSABLE COMPONENTS
   ============================================================ */

interface SectionHeaderProps {
  title: string;
  description: string;
}

function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-slate-600">
        {description}
      </p>
    </div>
  );
}


interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  min?: string;
}

function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required = false,
  min,
}: FormInputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${error
            ? "border-red-400 focus:ring-2 focus:ring-red-100"
            : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          }`}
      />

      {error && (
        <p className="mt-1.5 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}


interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  options: string[];
  placeholder: string;
  error?: string;
  required?: boolean;
}

function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  error,
  required = false,
}: FormSelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition ${error
            ? "border-red-400"
            : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          }`}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1.5 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}


interface FormTextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  error?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}

function FormTextArea({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  rows = 4,
  required = false,
}: FormTextAreaProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition ${error
            ? "border-red-400 focus:ring-2 focus:ring-red-100"
            : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          }`}
      />

      {error && (
        <p className="mt-1.5 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}


interface CheckboxGroupProps {
  title: string;
  options: string[];
  selected: string[];
  onChange: (value: string) => void;
  error?: string;
}

function CheckboxGroup({
  title,
  options,
  selected,
  onChange,
  error,
}: CheckboxGroupProps) {
  return (
    <div className="mt-8">
      <label className="mb-3 block text-sm font-medium text-slate-700">
        {title}
      </label>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {options.map((option) => (
          <label
            key={option}
            className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${selected.includes(option)
                ? "border-blue-500 bg-blue-50"
                : "border-slate-200 hover:bg-slate-50"
              }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onChange(option)}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />

            <span className="text-sm text-slate-700">
              {option}
            </span>
          </label>
        ))}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}


interface FileInputProps {
  label: string;
  name: string;
  file: File | null;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  error?: string;
  accept?: string;
  helpText?: string;
  required?: boolean;
}

function FileInput({
  label,
  name,
  file,
  onChange,
  error,
  accept,
  helpText,
  required = false,
}: FileInputProps) {
  return (
    <div className="mt-6">

      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <label
        className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border-2 border-dashed p-5 transition ${error
            ? "border-red-300 bg-red-50"
            : file
              ? "border-green-300 bg-green-50"
              : "border-slate-300 bg-slate-50 hover:border-blue-400 hover:bg-blue-50"
          }`}
      >

        <div className="flex min-w-0 items-center gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
            {file ? "✓" : "📄"}
          </div>

          <div className="min-w-0">

            <p className="truncate text-sm font-semibold text-slate-800">
              {file ? file.name : "Choose a file"}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {file
                ? `${(file.size / 1024 / 1024).toFixed(2)} MB`
                : helpText || "Click to browse your files"}
            </p>

          </div>

        </div>

        <span className="shrink-0 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
          Browse
        </span>

        <input
          type="file"
          name={name}
          accept={accept}
          onChange={onChange}
          className="hidden"
        />

      </label>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}

export default DoctorRegistration;