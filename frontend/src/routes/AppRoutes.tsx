import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';
import { AuthPage } from '../pages/AuthPage';
import DashboardPage from '../pages/DashboardPage';
import Layout from '../components/layout/Layout';
import ReportsView from '../components/reports/ReportsView';

// Lazy-loaded components
const ExpenseChart = lazy(() => import('../components/common/ExpenseChart').then(module => ({ default: module.default })));
const TransactionList = lazy(() => import('../components/transactions/TransactionList').then(module => ({ default: module.default })));
const NotFound = lazy(() => import('../pages/NotFound').then(module => ({ default: module.default })));

// Updated AppRoutes
export const AppRoutes: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Redirect root path to login page */}
            <Route path="/" element={<Navigate to="/login" />} />
            
            {/* Authentication Route */}
            <Route path="/login" element={<AuthPage />} />

            {/* Main Dashboard */}
            <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>}>
              <Route path="reports" element={<ReportsView />} />
              <Route path="expenses" element={<ExpenseChart dateRange={{ start: new Date().toISOString().split('T')[0], end: new Date().toISOString().split('T')[0] }} />} />
              <Route path="transactions" element={<TransactionList />} />
            </Route>

            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};
