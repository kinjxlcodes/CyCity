import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

export const Services = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#0266CC] to-[#1A8EF4]">
    <section id="services"  className="  mx-auto  max-w-7xl px-4 py-12 text-slate-900">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-7xl">
          Grow faster with our
          <span className="text-slate-200"> variety of solutions.</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#about"
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Learn more
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Toll Management System</CardTitle>

          <Link to="/toll-management">
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-indigo-50">
                Know More
              </span>
            </div>
          </Link>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Road Infrastructure System</CardTitle>
          <Link to="road-infrastructure">
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              Know More
            </span>
          </div>
          </Link>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Parking Management System</CardTitle>
          <Link to="parking-management">
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              Know More
            </span>
          </div>
          </Link>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>GSM based theft monitoring System</CardTitle>
          <Link to="gsm-monitoring">
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              Know More
            </span>
          </div>
          </Link>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>ERP Ecosystem</CardTitle>

          <Link to="/erp-system">
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-indigo-50">
                Know More
              </span>
            </div>
          </Link>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>
          IoT-Based Voltage Monitoring System</CardTitle>
          <Link to="voltage-monitor">
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              Know More
            </span>
          </div>
          </Link>
        </BounceCard>
      </div>
    </section>
    </div>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
