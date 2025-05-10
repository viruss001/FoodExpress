import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const cartItemsCount = 8;
  const cartSubtotal = 999;

  return (
    <div className="navbar bg-base-100 shadow-lg rounded-box px-4 py-3 sticky top-0 z-50">
      {/* Mobile Menu Button */}
      <div className="navbar-start">
        <div className="drawer">
          <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="mobile-drawer" className="btn btn-ghost drawer-button btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="mobile-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li><Link to="/" className="active:bg-primary/20">Home</Link></li>
              <li><Link to="/products" className="active:bg-primary/20">Products</Link></li>
              <li><Link to="/about" className="active:bg-primary/20">About</Link></li>
              <div className="divider"></div>
              <li><Link to="/profile" className="active:bg-primary/20">Profile</Link></li>
              <li><Link to="/orders" className="active:bg-primary/20">My Orders</Link></li>
              <li><Link to="/settings" className="active:bg-primary/20">Settings</Link></li>
              <li><Link to="/logout" className="text-error active:bg-error/20">Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl sm:text-2xl text-primary font-bold hover:bg-primary/10">
          FoodExpress
        </Link>
      </div>

      {/* Right Side Elements */}
      <div className="navbar-end gap-2 sm:gap-4">
        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex">
          <div className="form-control">
            <input 
              type="text" 
              placeholder="Search..." 
              className="input input-bordered w-40 lg:w-56 focus:outline-none focus:border-primary" 
            />
          </div>
        </div>

        {/* Cart Icon with Dropdown */}
        <div className="dropdown dropdown-end ml-2 mx-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-primary/10">
            <div className="indicator mt-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3c-.6.6-.2 1.7.7 1.7H17a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 114 0 2 2 0 01-4 0z" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="badge badge-sm indicator-item bg-primary text-white border-0">
                  {cartItemsCount}
                </span>
              )}
            </div>
          </label>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-72 bg-base-100 shadow-lg border border-base-200">
            <div className="card-body p-4">
              <span className="font-bold text-lg">{cartItemsCount} Items</span>
              <span className="text-primary font-medium">Subtotal: ₹{cartSubtotal}</span>
              <div className="card-actions mt-3">
                <Link to="/cart" className="btn btn-primary btn-block hover:bg-primary/90">
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:bg-primary/10">
            <div className="w-10 rounded-full bg-primary text-white flex items-center justify-center ring-2 ring-primary/30">
              <span className="text-lg font-bold">U</span>
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
            <li><Link to="/profile" className="hover:bg-primary/10 active:bg-primary/20">Profile</Link></li>
            <li><Link to="/orders" className="hover:bg-primary/10 active:bg-primary/20">My Orders</Link></li>
            <li><Link to="/settings" className="hover:bg-primary/10 active:bg-primary/20">Settings</Link></li>
            <li><Link to="/logout" className="hover:bg-primary/10 active:bg-primary/20 text-error">Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;