import ScreenContainer from "@/components/ScreenContainer";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const Home = () => {
  const [interviewType, setInterviewType] = useState("Technical");
  const [selectedAgent, setSelectedAgent] = useState("");
  const [position, setPosition] = useState("");
  const [skills, setSkills] = useState(["JavaScript", "React"]);
  const [duration, setDuration] = useState("30");
  const [jobDescription, setJobDescription] = useState("");

  const interviewTypes = [
    { key: "1", value: "Technical" },
    { key: "2", value: "Behavioral" },
  ];

  const toggleSkill = (skill: string) => {
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="py-6 px-2">
          <Text className="text-lg font-semibold mb-4">Start Interview</Text>

          <Text className="mb-1 text-sm">Interview Type</Text>
          <SelectList
            setSelected={(val) => setInterviewType(val)}
            data={interviewTypes}
            save="value"
            defaultOption={{ key: "1", value: "Technical" }}
            boxStyles={{ backgroundColor: "white" }}
          />

          <Text className="mt-4 mb-1 text-sm">Choose Agent</Text>
          <View className="flex-row gap-4">
            {["Nova", "Mira"].map((agent) => (
              <TouchableOpacity
                key={agent}
                onPress={() => setSelectedAgent(agent)}
                className={`flex-row items-center px-3 py-2 border rounded-full ${
                  selectedAgent === agent
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              >
                <View
                  className={`w-4 h-4 mr-2 rounded-full border ${
                    selectedAgent === agent ? "bg-blue-500" : "border-gray-400"
                  }`}
                />
                <Text>{agent}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text className="mt-4 mb-1 text-sm">Select Position</Text>
          <TextInput
            placeholder="Enter position..."
            value={position}
            onChangeText={setPosition}
            className="border border-gray-300 rounded-md px-3 py-2 bg-white"
          />

          <Text className="mt-4 mb-1 text-sm">Select Skills</Text>
          <View className="flex-row flex-wrap gap-2">
            {["JavaScript", "React", "Node", "TypeScript"].map((skill) => (
              <TouchableOpacity
                key={skill}
                onPress={() => toggleSkill(skill)}
                className={`px-3 py-1 rounded-full border ${
                  skills.includes(skill)
                    ? "bg-blue-100 border-blue-400"
                    : "border-gray-300"
                }`}
              >
                <Text
                  className={`text-sm ${
                    skills.includes(skill) ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {skill}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text className="mt-4 mb-1 text-sm">Interview Duration (min)</Text>
          <TextInput
            keyboardType="numeric"
            maxLength={2}
            value={duration}
            onChangeText={setDuration}
            className="border border-gray-300 rounded-md px-3 py-2 bg-white"
          />

          <Text className="mt-4 mb-1 text-sm">Job Description</Text>
          <View className="border border-dashed border-gray-400 rounded-md p-4 items-center justify-center bg-gray-50">
            <Ionicons name="cloud-upload-outline" size={24} color="gray" />
            <Text className="text-sm text-gray-500 mt-2">
              Upload file (PDF/DOCX max 5MB)
            </Text>
          </View>

          <Text className="text-center my-2 text-sm text-gray-400">OR</Text>

          <TextInput
            multiline
            placeholder="Paste job description here..."
            value={jobDescription}
            onChangeText={setJobDescription}
            className="border border-gray-300 rounded-md px-3 py-2 h-28 bg-white text-sm"
          />

          <TouchableOpacity className="mt-6 bg-green-600 py-3 rounded-full items-center">
            <Text className="text-white font-semibold">Start Interview</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default Home;
