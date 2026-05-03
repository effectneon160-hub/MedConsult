import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { IntakeFlow } from './pages/IntakeFlow';
import { PaymentScreen } from './pages/PaymentScreen';
import { SubmissionSuccess } from './pages/SubmissionSuccess';
import { PatientDashboard } from './pages/PatientDashboard';
import { DoctorDashboard } from './pages/DoctorDashboard';
import { SystemFlow } from './pages/SystemFlow';
export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/intake" element={<IntakeFlow />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/success" element={<SubmissionSuccess />} />
            <Route path="/dashboard" element={<PatientDashboard />} />
            <Route path="/doctor" element={<DoctorDashboard />} />
            <Route path="/flow" element={<SystemFlow />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </BrowserRouter>);

}