//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract consultVerse {

    uint256 public NoOfRequests = 0;
    uint256 public NoOfClientRequests = 0;

    struct Admin {
        address WalletAddress;
        string AdminName;
        string Role;
    }

    struct Experts {
        address ExpertAddress;
        string name;
        string emailId;
        string phoneNumber;
        string expertise;
        uint256 courseFees;
        address[] Clients;
    }

    struct Clients {
        address ClientAddress;
        string name;
        string emailId;
        string phoneNumber;
        string IntersestedConsulation;
        address[] Experts;
    }

    struct Requestes {
        address whoRequested;
        bool requestStatus;
        uint256 ReqIndex;
    }

    struct ClientRequests {
        address whoRequested;
        address whomRequestd;
        bool reqstatus;
        uint256 ReqIndex;
    }

    mapping(address => Experts) public OneExpertMap;
    mapping(address => Clients) public OneClientMap;
    mapping(address => Admin) public OneAdminMap;
    mapping(address => Requestes) public AllRequestes;
    mapping(address => ClientRequests) public AllClientRequestes;

    // These are all Events which will trigger Subgraphs//

    event AddedExpert(
        address ExpertAddress,
        string ExpertName,
        string EmailId,
        string PhoneNumber,
        string Expertise,
        uint256 ExpertFees
    );

    event AddedClient(
        address ClientAddress,
        string ClientName,
        string ClientEmailId,
        string ClientPhoneNumber,
        string IntersestedConsulation
    );

    event ExpertRequested(
        address ExpertAddress,
        uint256 RequestNumber,
        bool RequestStatus,
        string ExpertName,
        string ExpertemailAddress,
        string phoneNumber,
        string expertise,
        uint256 coursefees
    );

    event ClientRequested(
        address ClientAddress,
        bool reqAccepted,
        string ClientEmailAddress,
        string ClientName,
        string phoneNumber,
        uint256 RequestIndex
    );

    event ExpertRequestAccepted(
      address ExpertAddress,
      bool ExpertRequestStatus,
      string ExpertName,
      string Expertise,
      uint256 ExpertFees
    );


 
    // These is the End of the events triggering Subgraphs //

    constructor() {
        Admin storage NewAdmin = OneAdminMap[msg.sender];
        NewAdmin.WalletAddress = msg.sender;
        NewAdmin.AdminName = "yorichi";
        NewAdmin.Role = "Admin";
    }

    modifier OnlyAdmin() {
        require(
            OneAdminMap[msg.sender].WalletAddress == msg.sender,
            "Only Admin Can Modify this Function"
        );
        _;
    }

    modifier OnlyExperts() {
        require(
            OneExpertMap[msg.sender].ExpertAddress == msg.sender,
            "Only Experts Can Modify this Function"
        );
        _;
    }

    modifier OnlyClients() {
        require(
            OneClientMap[msg.sender].ClientAddress == msg.sender,
            "Only Client Can Modify this Function"
        );
        _;
    }

    function FillExpertProfile(
        string memory _ExpertName,
        string memory _EmailId,
        string memory _PhoneNumber,
        string memory _Expertise,
        uint256 _ExpertFees
    ) public {
        Experts storage NewExpert = OneExpertMap[msg.sender];
        NewExpert.ExpertAddress = msg.sender;
        NewExpert.name = _ExpertName;
        NewExpert.emailId = _EmailId;
        NewExpert.phoneNumber = _PhoneNumber;
        NewExpert.expertise = _Expertise;
        NewExpert.courseFees = _ExpertFees;

        emit AddedExpert(
            msg.sender,
            _ExpertName,
            _EmailId,
            _PhoneNumber,
            _Expertise,
            _ExpertFees
        );
    }

    function requestAdmin() public {
        Requestes storage NewRequest = AllRequestes[msg.sender];
        NewRequest.whoRequested = msg.sender;
        NewRequest.requestStatus = false;
        NewRequest.ReqIndex = NoOfRequests;
        NoOfRequests++;
        Experts storage FetchExpert = OneExpertMap[msg.sender];
        emit ExpertRequested(
            msg.sender,
            NewRequest.ReqIndex,
            NewRequest.requestStatus,
            FetchExpert.name,
            FetchExpert.emailId,
            FetchExpert.phoneNumber,
            FetchExpert.expertise,
            FetchExpert.courseFees
        );
    }

    function checkRequestStatus() public view OnlyExperts returns (bool) {
        return AllRequestes[msg.sender].requestStatus;
    }

    function checkClientRequestStatus() public view OnlyClients returns (bool) {
        return AllClientRequestes[msg.sender].reqstatus;
    }

    function GetSmartContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function AcceptParticularExpertRequest(address _ExpertAddress)
        public
        OnlyAdmin
    {
        AllRequestes[_ExpertAddress].requestStatus = true;
        Experts storage SelectedExpert=OneExpertMap[_ExpertAddress];
        emit ExpertRequestAccepted(
            SelectedExpert.ExpertAddress,
            true,
            SelectedExpert.name,
            SelectedExpert.expertise,
            SelectedExpert.courseFees
        );
    }

    function AddClient(
        string memory _ClientName,
        string memory _ClientEmailID,
        string memory _ClientPhone,
        string memory _InterestedConsulation
    ) public {
        Clients storage NewClient = OneClientMap[msg.sender];
        NewClient.ClientAddress = msg.sender;
        NewClient.name = _ClientName;
        NewClient.emailId = _ClientEmailID;
        NewClient.phoneNumber = _ClientPhone;
        NewClient.IntersestedConsulation = _InterestedConsulation;
        emit AddedClient(
            msg.sender,
            _ClientName,
            _ClientEmailID,
            _ClientPhone,
            _InterestedConsulation
        );
    }

    function ApplytoParticularExpert(
        address _ExpertAddress,
        address _ClientAddress
    ) public payable OnlyClients {
        ClientRequests storage NewClientRequest = AllClientRequestes[
            _ClientAddress
        ];
        NewClientRequest.whoRequested = msg.sender;
        NewClientRequest.whomRequestd = _ExpertAddress;
        NewClientRequest.ReqIndex = NoOfClientRequests;
        NewClientRequest.reqstatus = false;
        NoOfClientRequests++;
        Clients storage FetchedClient = OneClientMap[msg.sender];
        payable(address(this)).transfer(msg.value);
        emit ClientRequested(
            FetchedClient.ClientAddress,
            NewClientRequest.reqstatus,
            FetchedClient.emailId,
            FetchedClient.name,
            FetchedClient.phoneNumber,
            NewClientRequest.ReqIndex
        );
    }

    function AcceptParticularClientRequest(address _ClientAddress)
        public
        OnlyExperts
    {
        ClientRequests storage FetechedClient = AllClientRequestes[
            _ClientAddress
        ];
        Clients storage NewClient = OneClientMap[_ClientAddress];
        FetechedClient.reqstatus = true;
        Experts storage ClientToPushExperts = OneExpertMap[msg.sender];
        ClientToPushExperts.Clients.push(_ClientAddress);
        NewClient.Experts.push(ClientToPushExperts.ExpertAddress);
    }

    function sendAllDepositsToExpert(address payable _ExpertAddressToPay)
        public
        payable
    {
        _ExpertAddressToPay.transfer(address(this).balance);
    }

    function sendAllDepoiststoClient(address payable _ClientAddressToPay)
        public
        payable
    {
        _ClientAddressToPay.transfer(address(this).balance);
    }

    function getClientsOfExpert(address _expertAddress)
        external
        view
        returns (address[] memory)
    {
        return OneExpertMap[_expertAddress].Clients;
    }

    function getExpertOfClients(address _clientAddress)
        external
        view
        returns (address[] memory)
    {
        return OneClientMap[_clientAddress].Experts;
    }

    // Make Payments to Smart Contracts Starts
    receive() external payable {}
    // Make Payments to Smart Contracts Ends
}