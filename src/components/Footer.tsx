import React from 'react';
import { Activity, ShieldCheck } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-teal-500/20 p-1.5 rounded-lg">
                <Activity className="h-6 w-6 text-teal-400" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                MedConsult
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md mb-6">
              Secure, provider-reviewed medical intake system designed for
              modern healthcare practices.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-800/50 p-3 rounded-lg inline-flex border border-slate-700/50">
              <ShieldCheck className="h-5 w-5 text-teal-400" />
              <span>HIPAA-conscious data handling</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  For Patients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  For Providers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Medical Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MedConsult. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Not for medical emergencies. Call 911 if you have an emergency.
          </p>
        </div>
      </div>
    </footer>);

}