interface User {
    id: string;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: 'inactive' | 'pending' | 'active' | 'blacklisted';
    fullName: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: number;
    typeOfResidence: string;
    socials: {
      twitter: string;
      facebook: string;
      instagram: string;
    };
    guarantor: {
      fullName: string;
      phoneNumber: string;
      email: string;
      relationship: string;
    };
    userTier: number;
  }
  
  interface UsersState {
    isLoading: boolean;
    data: User[];
    isError: boolean;
  }
  