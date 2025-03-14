import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  return {
    goToDashboard: () => navigate('/'),
    goToReports: () => navigate('/reports'),
    goToSettings: () => navigate('/settings'),
    goToAuth: () => navigate('/auth'),
    goBack: () => navigate(-1)
  };
};
