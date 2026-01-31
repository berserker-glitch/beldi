import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-300px)] flex items-center justify-center page-pattern px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* 404 Text */}
          <div className="space-y-4">
            <h1 className="text-9xl md:text-[12rem] font-bold text-primary leading-none">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Sorry, we couldn't find the page you're looking for. The page might have been moved,
              deleted, or perhaps the URL was typed incorrectly.
        </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link to="/">
              <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
                <Home size={20} className="mr-2" aria-hidden="true" />
                Back to Home
              </Button>
            </Link>
            <Link to="/search">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
              >
                <Search size={20} className="mr-2" aria-hidden="true" />
                Search Businesses
          </Button>
        </Link>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">You might be interested in:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="text-sm text-primary hover:underline focus:outline-none focus:underline"
              >
                Home
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                to="/search"
                className="text-sm text-primary hover:underline focus:outline-none focus:underline"
              >
                Browse All Businesses
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                to="/cart"
                className="text-sm text-primary hover:underline focus:outline-none focus:underline"
              >
                View Cart
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                to="/profile"
                className="text-sm text-primary hover:underline focus:outline-none focus:underline"
              >
                My Profile
              </Link>
            </div>
          </div>
      </div>
    </div>
    </Layout>
  );
};

export default NotFound;
