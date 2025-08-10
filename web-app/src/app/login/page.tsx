import Header from '@/components/Header'
import SocialLogin from '@/components/SocialLogin'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function Login() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 min-h-screen flex items-center">
          <div className="container-width px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-lg flex items-center justify-center">
                    <HeartIcon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">AdyaTribe</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
                <p className="text-gray-600">Sign in to connect with your tribe</p>
              </div>

              {/* Social Login Options */}
              <div className="mb-8">
                <SocialLogin mode="login" />
              </div>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary-400 focus:ring-primary-400 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  
                  <a href="/forgot-password" className="text-sm text-primary-400 hover:text-primary-500">
                    Forgot password?
                  </a>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Sign In
                </button>
                
                <div className="text-center">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-primary-400 hover:text-primary-500 font-medium">
                      Join AdyaTribe
                    </a>
                  </p>
                </div>
              </form>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500">
                  By signing in, you agree to our{' '}
                  <a href="/terms" className="text-primary-400 hover:text-primary-500">Terms of Service</a> and{' '}
                  <a href="/privacy" className="text-primary-400 hover:text-primary-500">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}