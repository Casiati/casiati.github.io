const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');
const clearTerminalBtn = document.getElementById('clearTerminalBtn');

const commands = {
  help: () => `
Comandos disponíveis:
  whoami          - Sobre Lucas Robiati
  certifications  - Lista de certificações e formações
  skills          - Stack tecnológica e ferramentas
  projects        - Principais projetos em destaque
  terraform       - Simulação de terraform plan
  docker          - Simulação de containers ativos
  contact         - Links de contato e redes profissionais
  clear           - Limpa a tela do terminal
`,
  whoami: () => `
Lucas Robiati — DevOps / Cloud / Platform Engineer
Graduando em Análise e Desenvolvimento de Sistemas (ADS).
Focado em arquiteturas resilientes na AWS, automação com Terraform,
orquestração de containers com Kubernetes/Docker e esteiras CI/CD DevSecOps.
`,
  certifications: () => `
🏆 Certificações & Formações:
  • AWS Certified Solutions Architect – Associate (SAA)
  • Formação Kubernetes & Docker – DIO (Pods, Services, Deployments, Clusters Nuvem)
  • Formação GitHub Certification & Actions – DIO (CI/CD Pipelines, GitOps)
  • Formação AWS Cloud Practitioner – DIO / AWS
  • Formação ChatGPT for Devs & AI Engineering – DIO
`,
  skills: () => `
🛠️ Tech Stack & Ecossistema:
  • Cloud: AWS (EC2, S3, RDS, VPC, IAM, EKS, CloudWatch), Cloudflare
  • IaC: Terraform, OpenTofu, Ansible
  • Containers: Docker, Docker Compose, Kubernetes, Helm, ArgoCD
  • CI/CD & DevSecOps: GitHub Actions, GitLab CI, Trivy, Gitleaks, SonarQube
  • Observabilidade: Prometheus, Grafana, Datadog
  • Scripting: Bash, Python, Dart/Flutter, SQL
`,
  projects: () => `
📦 Projetos no GitHub:
  1. devsecops-ci-cd-pipeline  → Pipeline com GitHub Actions, Trivy, Gitleaks e Docker
  2. terraform-aws-hands-on    → Infraestrutura modular AWS com Terraform
  3. nubank_clone              → App Flutter modular com testes e clean architecture
  4. RELAT-RIO_IMPLEMENTA-O_AWS→ Case de arquitetura e migração em nuvem AWS

Acesse: https://github.com/Casiati
`,
  terraform: () => `
[terraform plan]
Acquiring state lock...
Refreshing Terraform state in-memory prior to plan...
module.infrastructure.aws_vpc.main: Refreshing state... [id=vpc-0839210ab]
module.infrastructure.aws_eks_cluster.prod: Refreshing state... [id=prod-eks-cluster]

Plan: 0 to add, 0 to change, 0 to destroy.
Your infrastructure matches the configuration. (100% Deterministic)
`,
  docker: () => `
CONTAINER ID   IMAGE                 STATUS         PORTS
a1b2c3d4e5f6   casiati/api:latest    Up 14 hours    0.0.0.0:8080->8080/tcp
f6e5d4c3b2a1   prom/prometheus       Up 14 hours    0.0.0.0:9090->9090/tcp
123456789abc   grafana/grafana       Up 14 hours    0.0.0.0:3000->3000/tcp
`,
  contact: () => `
📬 Contatos & Redes:
  • LinkedIn: https://www.linkedin.com/in/lucas-robiati-129795133/
  • GitHub:   https://github.com/Casiati
  • E-mail:   lucasrobiati@gmail.com
`,
  clear: () => {
    terminalOutput.innerHTML = '';
    return null;
  }
};

function executeCommand(rawCmd) {
  const cmd = rawCmd.trim().toLowerCase();
  
  // Create history line
  const line = document.createElement('div');
  line.className = 'terminal-line';
  line.innerHTML = `<span class="text-emerald-400">lucas@cloud</span>:<span class="text-cyan-400">~</span>$ <span class="text-white">${escapeHtml(rawCmd)}</span>`;
  terminalOutput.appendChild(line);

  if (cmd === '') return;

  if (cmd === 'clear') {
    commands.clear();
    return;
  }

  let responseText = '';
  if (commands[cmd]) {
    responseText = commands[cmd]();
  } else if (cmd.startsWith('terraform')) {
    responseText = commands.terraform();
  } else {
    responseText = `Comando não reconhecido: '${escapeHtml(rawCmd)}'. Digite 'help' para ver os comandos disponíveis.`;
  }

  if (responseText) {
    const res = document.createElement('div');
    res.className = 'terminal-response text-slate-300';
    res.textContent = responseText.trim();
    terminalOutput.appendChild(res);
  }

  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

if (terminalInput) {
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const value = terminalInput.value;
      terminalInput.value = '';
      executeCommand(value);
    }
  });
}

if (clearTerminalBtn) {
  clearTerminalBtn.addEventListener('click', () => {
    commands.clear();
  });
}
