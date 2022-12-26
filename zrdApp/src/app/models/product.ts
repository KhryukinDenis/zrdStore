export interface Product {
    id: number;
    type: string;
    name: string;
    real_price: number;
    unreal_price: number;
    current_image: string;
    images: string[];
    current_color: string;
    colors: string[];
    current_size: string;
    sizes: string[];
    desc: string[];
}
