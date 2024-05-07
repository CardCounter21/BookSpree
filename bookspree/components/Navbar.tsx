import React from "react";
import { AddBookButton } from "./AddBookButton";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Nav = () => {
  return (
    <nav className="flex w-full h-[4rem] items-center justify-between px-4 bg-blue-500">
      <div className="text-white text-lg font-bold">
        <p>BookSpree</p>
      </div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
           <AddBookButton />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Book</DialogTitle>
              <DialogDescription>
                Make changes to your inventory here. Click save when you are done. 
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Author
                </Label>
                <Input
                  id="username"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Quantity
                </Label>
                <Input
                  id="username"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Cover Url
                </Label>
                <Input
                  id="username"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Nav;
