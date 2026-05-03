import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Clock,
  FileText,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Stethoscope } from
'lucide-react';
export function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Trust Banner - CRITICAL REQUIREMENT */}
      <div className="bg-teal-50 border-b border-teal-100 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-teal-800 text-sm font-medium text-center">
          <ShieldCheck className="h-5 w-5 flex-shrink-0" />
          <p>
            All submissions are reviewed by a licensed provider before any
            treatment is approved.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5
              }}>
              
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Secure Medical Intake
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                Start Your Medical{' '}
                <span className="text-teal-600">Consultation</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Simple, secure, provider-reviewed medical intake system. Get the
                care you need from the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/intake"
                  className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 hover:-translate-y-0.5">
                  
                  Begin Assessment
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/flow"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-sm hover:shadow">
                  
                  View System Flow
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Enterprise-Grade Security & Care
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Built with modern healthcare standards to ensure your data is safe
              and your care is professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              icon: <Lock className="h-6 w-6 text-teal-600" />,
              title: 'Secure Medical Intake',
              desc: 'HIPAA-conscious data collection with end-to-end encryption.'
            },
            {
              icon: <UserCheck className="h-6 w-6 text-teal-600" />,
              title: 'Licensed Provider Review',
              desc: 'Every request is carefully reviewed by a certified medical professional.'
            },
            {
              icon: <Clock className="h-6 w-6 text-teal-600" />,
              title: 'Fast Consultation Process',
              desc: 'Get decisions and treatment plans within 24-48 hours.'
            },
            {
              icon: <FileText className="h-6 w-6 text-teal-600" />,
              title: 'Encrypted Data Handling',
              desc: 'Your personal and medical information is strictly confidential.'
            }].
            map((feature, idx) =>
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1
              }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              
                <div className="bg-teal-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A streamlined process designed for your convenience and safety.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
              {
                step: '01',
                title: 'Complete Intake',
                desc: 'Answer a few questions about your medical history and current condition.'
              },
              {
                step: '02',
                title: 'Submit Payment',
                desc: 'Pay the consultation fee securely to initiate the review process.'
              },
              {
                step: '03',
                title: 'Doctor Review',
                desc: 'A licensed provider reviews your information within 24-48 hours.'
              },
              {
                step: '04',
                title: 'Get Treatment',
                desc: 'Receive your approved treatment plan or a refund if not eligible.'
              }].
              map((item, idx) =>
              <div
                key={idx}
                className="relative flex flex-col items-center text-center">
                
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-teal-50 flex items-center justify-center text-teal-600 font-bold text-xl mb-6 shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>);

}