import { Typography } from "../components/ui/Typography";

export function ProductDetailsPage() {
    return (
        <div className="container-custom py-20">
            <Typography variant="h2">Product Details</Typography>
            {/* Product info will go here */}
            <div className="h-96 flex items-center justify-center border border-dashed border-gray-300 mt-8">
                <Typography variant="caption">Product Info Placeholder</Typography>
            </div>
        </div>
    );
}
