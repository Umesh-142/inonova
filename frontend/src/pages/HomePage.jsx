import { Link } from "react-router-dom";
import { CheckCircle, Clock, Tag, BarChart2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Logo size="large" showTagline={true} />
              <h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Smart tasks, <span className="text-green-600">smarter you</span>
              </h1>
              <p className="mt-5 text-xl text-gray-500">
                Organize your work and life with Tick&Tick. The smart task
                manager that helps you stay focused and productive.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Get Started - It's Free
                </Link>
                <Link
                  to="/login"
                  className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Task Management"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Features that make task management a breeze
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to stay organized and productive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Task Management
              </h3>
              <p className="text-gray-600">
                Create, organize, and track your tasks with ease. Mark tasks as
                complete when you're done.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Tag className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Custom Categories
              </h3>
              <p className="text-gray-600">
                Organize tasks with custom categories. Create your own or use
                our default ones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Priority Levels
              </h3>
              <p className="text-gray-600">
                Set priority levels for your tasks to focus on what matters most
                to you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart2 className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Task Analytics
              </h3>
              <p className="text-gray-600">
                Get insights into your productivity with task completion
                statistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to get organized?
            </h2>
            <p className="mt-4 text-xl text-green-100">
              Start using Tick&Tick today and take control of your tasks.
            </p>
            <div className="mt-8">
              <Link
                to="/signup"
                className="inline-block bg-white text-green-600 font-medium px-6 py-3 rounded-md shadow hover:bg-gray-100 transition-colors"
              >
                Sign Up for Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Logo />
              <p className="mt-2 text-sm text-gray-500">
                Smart tasks, smarter you
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-green-600">
                About
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                Features
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                Terms
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Tick&Tick. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
