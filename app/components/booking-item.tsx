import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";

interface BookingItemProps {
  // Define any props needed for the BookingItem component
  serviceName: string;
  barbershopeName: string;
  barbershopeImageUrl: string;
  date: Date;
}

const BookingItem = (props: BookingItemProps) => {
  return (
    <Card className=" flex w-full flex-row items-center justify-between p-0 md:w-5xl mx-auto">
      {/* Esquerda */}
      <div className="flex flex-col gap-4 flex-1 p-6">
        <Badge variant="default">Confirmado</Badge>
        <div className="flex flex-col gap-2">
          <p className="font-bold"> {props.serviceName}</p>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={props.barbershopeImageUrl}
                alt={props.barbershopeName}
                width={28}
                height={28}
                className="rounded-full"
              />
            </Avatar>
            <p className="text-muted-foreground text-sm">
              {props.barbershopeName}
            </p>
          </div>
        </div>
      </div>

      {/* Direita */}
      <div className="flex flex-col items-center justify-center p-4 h-full border-l">
        <p className="text-xs capitalize">
          {props.date.toLocaleDateString("pt-br", {
            month: "long",
          })}
        </p>
        <p className="text-xs capitalize">
          {props.date.toLocaleDateString("pt-br", {
            day: "2-digit",
          })}
        </p>
        <p className="text-xs capitalize">
          {props.date.toLocaleTimeString("pt-br", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </Card>
  );
};

export default BookingItem;
