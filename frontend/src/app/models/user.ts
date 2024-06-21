interface User {
  id: string;
  organization: string;
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: 'active' | 'inactive' | 'pending' | 'blacklisted';
  bvn: string;
  gender: string;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed';
  children: number ;
  typeOfResidence: 'own' | 'rent' | 'living with parents' | 'other';
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: 'parent' | 'sibling' | 'friend' | 'colleague';
  };
  userTier: number;
  bankName: string;
  accountNumber: string;
  balance: number;
  additionalDetails: {
    educationLevel: 'High School' | "Bachelor's Degree" | "Master's Degree" | 'PhD';
    employmentStatus: 'Employed' | 'Unemployed' | 'Self-employed';
    employmentSector: 'Technology' | 'Finance' | 'Healthcare' | 'Education' | 'Government' | 'Other';
    employmentDuration: 'Less than 1 year' | '1-3 years' | '3-5 years' | '5+ years';
    officeMail: string;
    monthlyIncome: number;
    loanRepayment: number;
  };
}



  
  interface UsersState {
    isLoading: boolean;
    data: User[];
    isError: boolean;
  }
  