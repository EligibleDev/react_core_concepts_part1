export default function BazarList({productName, bought}){
    // bought ? return <li>{productName} is is bought successfully</li> : return <li>{productName} is still due</li>
    if(bought){
        return <li>{productName} is is bought successfully</li>
    }else{
        return <li>{productName} is still due</li>
    }
}