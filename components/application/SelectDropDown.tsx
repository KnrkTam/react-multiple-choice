import {
  FormControl,
  FormLabel,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ArrowDownIcon } from "../svg";
import { COURSES_TYPE } from "./type/applicationTypes";

export default function CourseSelectDropDown({
  data,
  name,
  label,
}: {
  data: any;
  name: any;
  label: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { getValues, setValue, watch } = useFormContext();

  const watchCourse = watch(name);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        matchWidth={true}
      >
        <PopoverTrigger>
          {watchCourse && (
            <div className="flex items-center justify-between p-2 w-full border border-gray-500 rounded-lg ">
              {getValues(name)}
              <span className="flex-1"></span>
              <ArrowDownIcon className="w-5 h-5" />
            </div>
          )}
        </PopoverTrigger>
        <PopoverContent w="auto" cursor={"pointer"}>
          <VStack className="border border-gray-300 rounded-lg">
            {data.map((key: any, i: number) => (
              <div
                key={i}
                className={`${
                  getValues(name) ==
                    key &&
                  "bg-gray-300"
                } p-2 hover:bg-gray-300 w-full`}
                onClick={() => {
                  setValue(
                    name,
                    key
                  );
                  onClose();
                }}
              >
                {key}
              </div>
            ))}
          </VStack>
        </PopoverContent>
      </Popover>
    </FormControl>
  );
}
