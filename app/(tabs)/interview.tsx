import ScreenContainer from "@/components/ScreenContainer";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker"; // Non-searchable select
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Interview = () => {
  const [interviewType, setInterviewType] = useState("Technical");
  const [selectedAgent, setSelectedAgent] = useState("");
  const [position, setPosition] = useState("");
  const [skills, setSkills] = useState(["JavaScript", "React"]);
  const [duration, setDuration] = useState("30");
  const [jobDescription, setJobDescription] = useState("");

  const interviewTypes = ["Technical", "Behavioral"];

  const toggleSkill = (skill: string) => {
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="py-8 px-2">
          {/* Heading */}
          <Text className="text-3xl font-bold mb-1">Start Interview</Text>
          <Text className="text-base text-gray-600 mb-6">
            Fill in details to begin your mock interview.
          </Text>

          {/* Interview Type */}
          <Text className="mb-2 text-base font-semibold">Interview Type</Text>
          <View className="border border-gray-300 rounded-md bg-white mb-6 px-2" style={{ height: 48, justifyContent: 'center' }}>
            <Picker
              selectedValue={interviewType}
              onValueChange={(itemValue) => setInterviewType(itemValue)}
              style={{
                fontSize: 16,
                paddingVertical: 8, // Add vertical padding inside Picker
                color: "#111827",   // Optional: text color to match TextInput
              }}
              dropdownIconColor="#6B7280" // optional for Android
            >
              {interviewTypes.map((type) => (
                <Picker.Item key={type} label={type} value={type} />
              ))}
            </Picker>
          </View>


          {/* Agent Selection */}
          <Text className="mb-2 text-base font-semibold">Choose Agent</Text>
          <View className="flex-row gap-4 mb-6">
            {["Nova", "Mira"].map((agent) => (
              <TouchableOpacity
                key={agent}
                onPress={() => setSelectedAgent(agent)}
                className={`flex-row items-center px-4 py-2 border rounded-full ${selectedAgent === agent
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                  }`}
              >
                <View
                  className={`w-4 h-4 mr-2 rounded-full border ${selectedAgent === agent ? "bg-blue-500" : "border-gray-400"
                    }`}
                />
                <Text className="text-base">{agent}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Position */}
          <Text className="mb-2 text-base font-semibold">Position</Text>
          <TextInput
            placeholder="Enter position..."
            value={position}
            onChangeText={setPosition}
            className="border border-gray-300 rounded-md px-4 py-3 bg-white mb-6 text-base"
          />

          {/* Skills */}
          <Text className="mb-2 text-base font-semibold">Select Skills</Text>
          <View className="flex-row flex-wrap gap-2 mb-6">
            {["JavaScript", "React", "Node", "TypeScript"].map((skill) => (
              <TouchableOpacity
                key={skill}
                onPress={() => toggleSkill(skill)}
                className={`px-4 py-2 rounded-full border ${skills.includes(skill)
                    ? "bg-blue-100 border-blue-400"
                    : "border-gray-300"
                  }`}
              >
                <Text
                  className={`text-sm ${skills.includes(skill) ? "text-blue-600" : "text-gray-700"
                    }`}
                >
                  {skill}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Duration */}
          <Text className="mb-2 text-base font-semibold">
            Interview Duration (min)
          </Text>
          <TextInput
            keyboardType="numeric"
            maxLength={2}
            value={duration}
            onChangeText={setDuration}
            className="border border-gray-300 rounded-md px-4 py-3 bg-white mb-6 text-base"
          />

          {/* Job Description Upload */}
          <Text className="mb-2 text-base font-semibold">Job Description</Text>
          <View className="border border-dashed border-gray-400 rounded-md p-6 items-center justify-center bg-gray-50 mb-4">
            <Ionicons name="cloud-upload-outline" size={28} color="gray" />
            <Text className="text-sm text-gray-500 mt-2">
              Upload file (PDF/DOCX max 5MB)
            </Text>
          </View>

          {/* OR */}
          <Text className="text-center my-2 text-sm text-gray-400">OR</Text>

          {/* Manual Input */}
          <TextInput
            multiline
            placeholder="Paste job description here..."
            value={jobDescription}
            onChangeText={setJobDescription}
            className="border border-gray-300 rounded-md px-4 py-3 h-32 bg-white text-sm mb-8"
          />

          {/* Submit Button */}
          <TouchableOpacity className="bg-green-600 py-4 rounded-full items-center">
            <Text className="text-white font-semibold text-base">
              Start Interview
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default Interview;
